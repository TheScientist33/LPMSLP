/**
 * Soumission AJAX des formulaires `.js-form` (contact, demande au mois).
 * États : loading (bouton désactivé) / succès / erreur, sans rechargement.
 */
export function bindAjaxForms(): void {
  document.querySelectorAll<HTMLFormElement>('form.js-form').forEach((form) => {
    if (form.dataset.bound) return;
    form.dataset.bound = 'true';

    const submit = form.querySelector<HTMLButtonElement>('.js-submit');
    const success = form.querySelector<HTMLElement>('.js-success');
    const error = form.querySelector<HTMLElement>('.js-error');
    const endpoint = form.dataset.endpoint ?? '';
    const original = submit?.textContent ?? '';

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      success?.classList.add('hidden');
      error?.classList.add('hidden');
      if (submit) {
        submit.disabled = true;
        submit.textContent = '…';
      }
      try {
        const res = await fetch(endpoint, { method: 'POST', body: new FormData(form) });
        const json = await res.json().catch(() => ({ ok: false }));
        if (res.ok && json.ok) {
          form.reset();
          success?.classList.remove('hidden');
        } else {
          error?.classList.remove('hidden');
        }
      } catch {
        error?.classList.remove('hidden');
      } finally {
        if (submit) {
          submit.disabled = false;
          submit.textContent = original;
        }
      }
    });
  });
}
