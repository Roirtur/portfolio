"use server";

import { Resend } from 'resend';
import { EmailTemplate } from "./EmailTemplate";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendEmail(name: string, email: string, message: string) {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'arthurmac33@gmail.com',
    subject: `New message from ${name}`,
    react: <EmailTemplate name={name} email={email} message={message} />
  });
}
