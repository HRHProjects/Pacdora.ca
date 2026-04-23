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

const countrySelect = document.getElementById('country-select');
const countryRegulationLink = document.getElementById('country-regulation-link');
const countryReportingNote = document.getElementById('country-reporting-note');

const incidentReportingByCountry = {
  eu: {
    label: 'European Union (GDPR)',
    url: 'https://www.edpb.europa.eu/about-edpb/about-edpb/members_en',
  },
  ca: {
    label: 'Canada',
    url: 'https://www.priv.gc.ca/en/report-a-concern/report-a-privacy-breach-at-your-organization/report-a-privacy-breach-at-your-business/',
  },
  uk: {
    label: 'United Kingdom',
    url: 'https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/',
  },
  us: {
    label: 'United States',
    url: 'https://www.ncsl.org/technology-and-communication/security-breach-notification-laws',
  },
  au: {
    label: 'Australia',
    url: 'https://www.oaic.gov.au/privacy/notifiable-data-breaches/report-a-data-breach/',
  },
  nz: {
    label: 'New Zealand',
    url: 'https://www.privacy.org.nz/privacy-act-2020/privacy-breaches/notify-us-about-a-privacy-breach/',
  },
  jp: {
    label: 'Japan',
    url: 'https://www.ppc.go.jp/en/personalinfo/legal/leakAction/',
  },
  ie: {
    label: 'Ireland',
    url: 'https://forms.dataprotection.ie/contact',
  },
  in: {
    label: 'India',
    url: 'https://www.cert-in.org.in/s2cMainServlet?pageid=INFOSEC03',
  },
  cn: {
    label: 'China',
    url: 'https://www.cac.gov.cn/2021-08/20/c_1632441998053314.htm',
  },
  sg: {
    label: 'Singapore',
    url: 'https://www.pdpc.gov.sg/Compliance/Guides/Guide-to-Managing-Data-Breaches-2-0',
  },
};

if (countryRegulationLink && countrySelect) {
  countryRegulationLink.addEventListener('click', () => {
    const selectedCountry = incidentReportingByCountry[countrySelect.value];

    if (!selectedCountry) {
      if (countryReportingNote) {
        countryReportingNote.textContent = 'Please choose a country first.';
      }
      countrySelect.focus();
      return;
    }

    if (countryReportingNote) {
      countryReportingNote.textContent = `Opening the ${selectedCountry.label} incident reporting guidance in a new tab.`;
    }

    window.open(selectedCountry.url, '_blank', 'noopener,noreferrer');
  });
}
