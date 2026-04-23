const year = document.getElementById('footer-year');

if (year) year.textContent = String(new Date().getFullYear());

const sections = document.querySelectorAll('.section');
const supportsMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (sections.length && supportsMotion) {
  document.body.classList.add('js-enhanced');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    },
    {
      root: null,
      threshold: 0.2,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
} else {
  sections.forEach((section) => section.classList.add('is-visible'));
}

const independenceNotice = document.getElementById('independence-notice');
const acknowledgeBtn = document.getElementById('acknowledge-notice');

if (independenceNotice) {
  independenceNotice.hidden = false;
  document.body.classList.add('notice-open');
}

if (acknowledgeBtn && independenceNotice) {
  acknowledgeBtn.addEventListener('click', () => {
    independenceNotice.hidden = true;
    document.body.classList.remove('notice-open');
  });

  acknowledgeBtn.focus();
}

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
