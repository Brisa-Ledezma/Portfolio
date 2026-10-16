import { RateLimiter } from './rate-limiter.js';

describe('RateLimiter', () => {
  it('allows up to the limit and rejects the next attempt', () => {
    const limiter = new RateLimiter(2, 1000, () => 0);

    expect(limiter.tryConsume('ip')).toBe(true);
    expect(limiter.tryConsume('ip')).toBe(true);
    expect(limiter.tryConsume('ip')).toBe(false);
  });

  it('counts each key separately', () => {
    const limiter = new RateLimiter(1, 1000, () => 0);

    expect(limiter.tryConsume('a')).toBe(true);
    expect(limiter.tryConsume('b')).toBe(true);
    expect(limiter.tryConsume('a')).toBe(false);
  });

  it('allows again once the window has passed', () => {
    let now = 0;
    const limiter = new RateLimiter(1, 1000, () => now);

    expect(limiter.tryConsume('ip')).toBe(true);
    now = 999;
    expect(limiter.tryConsume('ip')).toBe(false);
    now = 1000;
    expect(limiter.tryConsume('ip')).toBe(true);
  });
});
