import type { APIRoute } from 'astro';
import { z } from 'zod';
import { verifyTurnstile } from '~/lib/turnstile';
import { sendEmail } from '~/lib/email';

export const prerender = false;

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional().default(''),
  message: z.string().min(1).max(5000),
  consent: z.literal('on'),
  company: z.string().optional().default(''), // honeypot : traité après validation (réponse ok factice)
});

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const form = await request.formData();
  const raw = Object.fromEntries(form.entries());

  const parsed = schema.safeParse(raw);
  if (!parsed.success) return json({ ok: false, error: 'invalid' }, 400);
  const data = parsed.data;

  // Honeypot rempli -> on répond ok sans rien envoyer.
  if (data.company) return json({ ok: true });

  const token = (form.get('cf-turnstile-response') as string) || null;
  const human = await verifyTurnstile(token, clientAddress);
  if (!human) return json({ ok: false, error: 'captcha' }, 400);

  const body = [
    `Nom : ${data.name}`,
    `Email : ${data.email}`,
    `Téléphone : ${data.phone || '—'}`,
    '',
    data.message,
  ].join('\n');

  const sent = await sendEmail(`Contact site — ${data.name}`, body);
  if (!sent) return json({ ok: false, error: 'send' }, 502);

  return json({ ok: true });
};
