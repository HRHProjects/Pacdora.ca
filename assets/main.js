const supportedLang = {
  en: {
    notice:
      'English is the primary language of record for this site. Translations are provided for convenience and may lag behind updates in the English version.',
  },
  fr: {
    notice:
      'Le français est proposé à titre informatif. En cas de divergence, la version anglaise prévaut jusqu\'à validation complète de la traduction.',
  },
  zh: {
    notice:
      '中文内容为便民参考译文。如与英文版本存在差异，在正式更新前以英文版本为准。',
  },
};

const buttons = [...document.querySelectorAll('#lang-switcher button')];
const notice = document.getElementById('lang-notice');
const year = document.getElementById('footer-year');

if (year) year.textContent = String(new Date().getFullYear());

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });

    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');

    const lang = button.dataset.lang;
    if (lang === 'en') {
      notice.hidden = true;
      notice.textContent = '';
      return;
    }

    notice.hidden = false;
    notice.textContent = supportedLang[lang]?.notice ?? supportedLang.en.notice;
  });
});
