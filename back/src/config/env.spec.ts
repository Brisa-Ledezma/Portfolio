import { loadEnv } from './env.js';

describe('loadEnv', () => {
  it('applies defaults when optional values are missing', () => {
    const env = loadEnv({});

    expect(env.PORT).toBe(3000);
    expect(env.CORS_ORIGIN).toEqual(['http://localhost:5173']);
    expect(env.DATABASE_URL).toBeUndefined();
  });

  it('splits the allowed origins', () => {
    const env = loadEnv({ CORS_ORIGIN: 'https://a.dev, https://b.dev' });

    expect(env.CORS_ORIGIN).toEqual(['https://a.dev', 'https://b.dev']);
  });

  it('fails fast on invalid values without exposing them', () => {
    expect(() => loadEnv({ MAIL_TO: 'secret-but-invalid' })).toThrow('Configuración inválida en: MAIL_TO');
    expect(() => loadEnv({ MAIL_TO: 'secret-but-invalid' })).not.toThrow(/secret-but-invalid/);
  });
});
