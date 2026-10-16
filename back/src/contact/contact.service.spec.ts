import type { ContactMessage, ContactNotifier, ContactRepository } from './contact.ports.js';
import { ContactService } from './contact.service.js';
import { RateLimiter } from './rate-limiter.js';

class FakeRepository implements ContactRepository {
  saved: ContactMessage[] = [];
  constructor(
    public enabled = true,
    private readonly fail = false,
  ) {}
  save(message: ContactMessage): Promise<void> {
    if (this.fail) return Promise.reject(new Error('db down'));
    this.saved.push(message);
    return Promise.resolve();
  }
}

class FakeNotifier implements ContactNotifier {
  sent: ContactMessage[] = [];
  constructor(
    public enabled = true,
    private readonly fail = false,
  ) {}
  notify(message: ContactMessage): Promise<void> {
    if (this.fail) return Promise.reject(new Error('smtp down'));
    this.sent.push(message);
    return Promise.resolve();
  }
}

const valid = { name: 'Ana Pérez', email: 'ana@example.com', message: 'Hola, quería consultarte por un puesto.' };
const limiter = () => new RateLimiter(100, 60_000);

describe('ContactService', () => {
  it('saves and notifies a valid message', async () => {
    const repository = new FakeRepository();
    const notifier = new FakeNotifier();
    const service = new ContactService(repository, notifier, limiter());

    await expect(service.send(valid, 'ip')).resolves.toEqual({ ok: true });
    expect(repository.saved).toEqual([valid]);
    expect(notifier.sent).toEqual([valid]);
  });

  it('rejects invalid data without saving it', async () => {
    const repository = new FakeRepository();
    const service = new ContactService(repository, new FakeNotifier(), limiter());

    await expect(service.send({ ...valid, email: 'no-es-un-mail' }, 'ip')).resolves.toEqual({
      ok: false,
      error: 'invalid',
    });
    await expect(service.send({ ...valid, message: 'corto' }, 'ip')).resolves.toMatchObject({ ok: false });
    expect(repository.saved).toHaveLength(0);
  });

  it('pretends success but drops messages that fill the honeypot', async () => {
    const repository = new FakeRepository();
    const notifier = new FakeNotifier();
    const service = new ContactService(repository, notifier, limiter());

    await expect(service.send({ ...valid, website: 'http://spam' }, 'ip')).resolves.toEqual({ ok: true });
    expect(repository.saved).toHaveLength(0);
    expect(notifier.sent).toHaveLength(0);
  });

  it('applies the rate limit per client', async () => {
    const service = new ContactService(new FakeRepository(), new FakeNotifier(), new RateLimiter(1, 60_000));

    await expect(service.send(valid, 'ip')).resolves.toEqual({ ok: true });
    await expect(service.send(valid, 'ip')).resolves.toEqual({ ok: false, error: 'rate_limited' });
    await expect(service.send(valid, 'other-ip')).resolves.toEqual({ ok: true });
  });

  it('succeeds when one destination fails but the other works', async () => {
    const notifier = new FakeNotifier();
    const service = new ContactService(new FakeRepository(true, true), notifier, limiter());

    await expect(service.send(valid, 'ip')).resolves.toEqual({ ok: true });
    expect(notifier.sent).toHaveLength(1);
  });

  it('reports unavailable when every destination fails', async () => {
    const service = new ContactService(new FakeRepository(true, true), new FakeNotifier(true, true), limiter());

    await expect(service.send(valid, 'ip')).resolves.toEqual({ ok: false, error: 'unavailable' });
  });

  it('reports unavailable when nothing is configured', async () => {
    const service = new ContactService(new FakeRepository(false), new FakeNotifier(false), limiter());

    await expect(service.send(valid, 'ip')).resolves.toEqual({ ok: false, error: 'unavailable' });
  });
});
