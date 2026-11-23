/*
 * Clean(ish) waitlist. First-party, no cookies, no third-party code.
 *
 * 1. Channel source: a channel link such as cleanish.app/?from=tiktok-fr puts
 *    "tiktok-fr" in the form's hidden "source" field (default "direct").
 *    The code is kept in sessionStorage for this tab only, so it survives a
 *    visit to another page and back; it is never sent anywhere but the form.
 *    The ?from= part is then removed from the address bar, so a copied link
 *    doesn't carry it.
 * 2. Sends the form in the background, so the visitor stays on our site and
 *    lands on our own thanks page. If that fails, or JavaScript is off, the
 *    form posts normally.
 * 3. Bulk sign-ups: a filled-in hidden field or a submit within 1.5 s of the
 *    page loading is treated as a bot: it sees the thanks page, nothing is sent.
 *    Formspree's own spam filtering is the main protection, because the form
 *    endpoint is public.
 */
(function () {
  'use strict';

  var KEY = 'cleanish-from';
  var VALID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  var MIN_MS = 1500;
  var started = Date.now();

  function remember(value) {
    try { window.sessionStorage.setItem(KEY, value); } catch (e) { /* storage off */ }
  }
  function recall() {
    try { return window.sessionStorage.getItem(KEY); } catch (e) { return null; }
  }

  var source = null;
  try {
    var params = new URLSearchParams(window.location.search);
    if (params.has('from')) {
      var raw = (params.get('from') || '').trim().toLowerCase();
      if (raw.length <= 32 && VALID.test(raw)) {
        source = raw;
        remember(raw);
      }
      params.delete('from');
      var rest = params.toString();
      window.history.replaceState(null, '', window.location.pathname + (rest ? '?' + rest : '') + window.location.hash);
    }
  } catch (e) { /* old browser: the form still works, source stays "direct" */ }

  if (!source) {
    var kept = recall();
    if (kept && kept.length <= 32 && VALID.test(kept)) source = kept;
  }

  var form = document.getElementById('waitlist');
  if (!form) return;
  if (source && form.elements.source) form.elements.source.value = source;

  var sending = false;
  form.addEventListener('submit', function (event) {
    if (!window.fetch || !window.FormData) return; // plain post

    event.preventDefault();
    if (sending) return;

    var thanks = form.getAttribute('data-thanks') || '/thanks.html';
    var trap = form.elements._gotcha;
    if ((trap && trap.value) || Date.now() - started < MIN_MS) {
      window.location.href = thanks;
      return;
    }

    sending = true;
    var button = form.querySelector('button[type=submit]');
    if (button) button.disabled = true;

    window.fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    }).then(function (response) {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      window.location.href = thanks;
    }).catch(function () {
      // Fall back to the normal post; Formspree then shows its own page.
      sending = false;
      if (button) button.disabled = false;
      form.submit();
    });
  });
})();
