/** Vérifie le token Cloudflare Turnstile côté serveur. */
export async function verifyTurnstile(token: string | null, ip?: string | null): Promise<boolean> {
  const secret = import.meta.env.TURNSTILE_SECRET_KEY;
  // Si aucune clé configurée (dev / non provisionné), on ne bloque pas.
  if (!secret) return true;
  if (!token) return false;

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.set('remoteip', ip);
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
    });
    const json = (await res.json()) as { success: boolean };
    return json.success === true;
  } catch {
    return false;
  }
}
