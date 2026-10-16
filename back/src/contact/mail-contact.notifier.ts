import { Inject, Injectable } from '@nestjs/common';
import nodemailer, { type Transporter } from 'nodemailer';
import { ENV, type Env } from '../config/env.js';
import type { ContactMessage, ContactNotifier } from './contact.ports.js';

// Avisa cada mensaje nuevo por mail. El "Responder" del mail va directo a quien
// escribió (Reply-To), así se contesta desde la casilla sin copiar direcciones.
// El cuerpo es texto plano: el contenido nunca se interpreta como HTML.
@Injectable()
export class MailContactNotifier implements ContactNotifier {
  private readonly transporter: Transporter | null;
  private readonly from: string;
  private readonly to: string;

  constructor(@Inject(ENV) env: Env) {
    const configured = Boolean(env.SMTP_USER && env.SMTP_PASS && env.MAIL_TO);
    this.from = env.SMTP_USER ?? '';
    this.to = env.MAIL_TO ?? '';
    this.transporter = configured
      ? nodemailer.createTransport({
          host: env.SMTP_HOST,
          port: env.SMTP_PORT,
          secure: env.SMTP_PORT === 465,
          auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
          connectionTimeout: 10_000,
          socketTimeout: 15_000,
        })
      : null;
  }

  get enabled(): boolean {
    return this.transporter !== null;
  }

  async notify(message: ContactMessage): Promise<void> {
    if (!this.transporter) throw new Error('Mail no configurado');
    await this.transporter.sendMail({
      from: { name: 'Portfolio', address: this.from },
      to: this.to,
      replyTo: { name: message.name, address: message.email },
      subject: `Nuevo mensaje de ${oneLine(message.name)} desde el portfolio`,
      text: `${message.name} <${message.email}> escribió:\n\n${message.message}\n`,
    });
  }
}

// Evita que un salto de línea en el nombre agregue encabezados al mail.
function oneLine(value: string): string {
  return value.replace(/[\r\n]+/g, ' ');
}
