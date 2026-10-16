import { io } from 'socket.io-client'

const API_URL = import.meta.env.VITE_API_URL as string | undefined

// Mismas reglas que la API: el front valida para responder rápido,
// la API vuelve a validar porque es la que manda.
export const CONTACT_LIMITS = { name: [2, 80], message: [10, 2000], email: 254 } as const

export interface ContactInput {
  name: string
  email: string
  message: string
  // Campo trampa para bots: siempre vacío cuando lo completa una persona.
  website: string
}

export type ContactErrorCode = 'invalid' | 'rate_limited' | 'unavailable' | 'network'

export class ContactError extends Error {
  constructor(readonly code: ContactErrorCode) {
    super(code)
    this.name = 'ContactError'
  }
}

type ContactAck = { ok: true } | { ok: false; error: Exclude<ContactErrorCode, 'network'> }

// La API gratuita puede tardar en despertar: se espera hasta un minuto.
const ACK_TIMEOUT_MS = 60_000

// Envía el mensaje por WebSocket y espera la confirmación de la API en el
// acknowledgement del mismo evento. La conexión se abre solo para este envío.
export async function sendContactMessage(input: ContactInput): Promise<void> {
  if (!API_URL) throw new ContactError('unavailable')

  const socket = io(API_URL, { transports: ['websocket'], reconnection: false, timeout: ACK_TIMEOUT_MS })
  try {
    const ack = (await socket.timeout(ACK_TIMEOUT_MS).emitWithAck('contact:send', input)) as ContactAck
    if (!ack.ok) throw new ContactError(ack.error)
  } catch (error) {
    if (error instanceof ContactError) throw error
    throw new ContactError('network')
  } finally {
    socket.disconnect()
  }
}
