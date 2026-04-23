const year = document.getElementById('footer-year');

if (year) year.textContent = String(new Date().getFullYear());

const sections = document.querySelectorAll('.section');
const supportsMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (sections.length && supportsMotion) {
  document.body.classList.add('js-enhanced');

  const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      root: null,
      threshold: 0.16,
      rootMargin: '0px 0px -10% 0px',
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
} else {
  sections.forEach((section) => section.classList.add('is-visible'));
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
