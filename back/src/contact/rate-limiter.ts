// Límite de envíos por clave (la IP de quien envía) en una ventana de tiempo.
// Vive en memoria: alcanza para una sola instancia de la API.
export class RateLimiter {
  private readonly hits = new Map<string, number[]>();

  constructor(
    private readonly limit: number,
    private readonly windowMs: number,
    private readonly now: () => number = Date.now,
  ) {}

  /** Registra un intento y devuelve si está permitido. */
  tryConsume(key: string): boolean {
    const now = this.now();
    const recent = (this.hits.get(key) ?? []).filter((time) => now - time < this.windowMs);

    if (recent.length >= this.limit) {
      this.hits.set(key, recent);
      return false;
    }

    recent.push(now);
    this.hits.set(key, recent);
    return true;
  }
}
