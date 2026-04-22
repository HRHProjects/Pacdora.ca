const year = document.getElementById('footer-year');

if (year) year.textContent = String(new Date().getFullYear());

function initGoogleTranslate() {
  if (!window.google?.translate?.TranslateElement) return;

  new window.google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      autoDisplay: false,
    },
    'google_translate_element'
  );
}

window.initGoogleTranslate = initGoogleTranslate;
