/** Envoi d'email via Resend (fonction serverless). */
export async function sendEmail(subject: string, text: string): Promise<boolean> {
  const key = import.meta.env.RESEND_API_KEY;
  // Adresse de réception : uniquement via variable d'env (jamais en dur dans le dépôt).
  const to = import.meta.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    // Clé ou destinataire absents : on signale l'échec d'envoi sans exposer d'erreur.
    return false;
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'La Petite Maison Sous Les Pins <site@lapetitemaisonsouslespins.fr>',
        to: [to],
        subject,
        text,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
