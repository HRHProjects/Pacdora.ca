// ─── Data ─────────────────────────────────────────────────────────────────────

const noticeRecords = [
  {
    section: '§ 1 Notice', title: 'Notice', status: 'Active', date: '2026-05-03',
    tags: ['public-interest'],
    body: 'This notice is published as a matter of public interest. The operator is committed to accuracy, fairness, and responsible disclosure.',
  },
  {
    section: '§ 2 Purpose', title: 'Purpose', status: 'Active', date: '2026-05-03',
    tags: ['non-commercial'],
    body: 'This site does not exist to harass, defame, or commercially harm any individual or entity.',
  },
  {
    section: '§ 3 Current Status', title: 'Current Status', status: 'Monitoring', date: '2026-05-03',
    tags: ['status'],
    body: 'Ongoing monitoring and documentation activities continue. Updates are published when legally appropriate.',
  },
  {
    section: '§ 4 Timeline', title: 'Timeline', status: 'Open Record', date: '2026-04-30',
    tags: ['history'],
    body: 'Documented activity period: June 2025 through May 2026.',
  },
  {
    section: '§ 5 Evidence and Publication Policy', title: 'Evidence and Publication Policy', status: 'Active', date: '2026-05-03',
    tags: ['legal', 'privacy'],
    body: 'Published material is limited to public-domain information, original commentary, and lawful excerpts for criticism, review, and explanation.',
  },
  {
    section: '§ 6 Editorial Position', title: 'Editorial Position', status: 'Reviewing', date: '2026-05-01',
    tags: ['editorial'],
    body: 'Editorial updates are reviewed for legal proportionality, privacy safeguards, and documentary support before publication.',
  },
];

const incidentReportingByCountry = {
  eu: { label: 'European Union (GDPR)', url: 'https://www.edpb.europa.eu/about-edpb/about-edpb/members_en' },
  ca: { label: 'Canada', url: 'https://www.priv.gc.ca/en/report-a-concern/report-a-privacy-breach-at-your-organization/report-a-privacy-breach-at-your-business/' },
  uk: { label: 'United Kingdom', url: 'https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/' },
  us: { label: 'United States', url: 'https://www.ncsl.org/technology-and-communication/security-breach-notification-laws' },
};

// ─── State ────────────────────────────────────────────────────────────────────

const state = { search: '', compact: false };

// ─── Helpers ──────────────────────────────────────────────────────────────────

function escapeRegExp(v) {
  return v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlight(text, q) {
  if (!q) return text;
  return text.replace(new RegExp(`(${escapeRegExp(q)})`, 'ig'), '<mark>$1</mark>');
}

const STATUS_CLASS = {
  'Active': 'status-active',
  'Monitoring': 'status-monitoring',
  'Open Record': 'status-open',
  'Reviewing': 'status-reviewing',
};

// ─── Builders (skeleton HTML) ─────────────────────────────────────────────────

function buildTopBar() {
  return `
  <div id="top-bar">
    <span class="site-id">Independent Public Information Notice</span>
    <div class="top-actions">
      <div class="search-wrapper">
        <svg class="search-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" stroke-width="1.5"/>
          <path d="M13 13l3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <input id="section-search" type="search" placeholder="Search sections…" aria-label="Search sections" />
      </div>
      <button id="toggle-view" type="button">Compact</button>
    </div>
  </div>`;
}

function buildHeader() {
  return `
  <header id="site-header">
    <p class="header-eyebrow">Independent Public-Interest Resource</p>
    <h1>Public Information Notice<br /><span class="gradient-text">Independent Site</span></h1>
    <p class="header-subtitle">A factual, non-commercial information resource managed by a registered Canadian corporation. Not affiliated with any company discussed herein.</p>
  </header>`;
}

function buildDisclaimer() {
  return `
  <div id="disclaimer-banner" role="note">
    <span class="disclaimer-icon">⚠</span>
    <span><strong>Non-Affiliation &amp; Independence Notice</strong> — This website is <strong>not affiliated with, endorsed by, sponsored by, or operated by Pacdora, Baoxiaohe, Packify, or any related company, founder, investor, employee, or representative.</strong></span>
  </div>`;
}

function buildMain() {
  return `
  <main id="main-content" role="main">
    <section class="section animate-in" aria-labelledby="h-dashboard">
      <h2 id="h-dashboard"><span class="section-num">01</span> Case Dashboard</h2>
      <div id="status-summary" class="status-grid" aria-live="polite"></div>
      <p class="muted small">Last updated: <time datetime="2026-05-03">May 3, 2026</time></p>
    </section>

    <section class="section animate-in" aria-labelledby="h-records" style="--delay:60ms">
      <h2 id="h-records"><span class="section-num">02</span> Notice Records</h2>
      <p id="active-filters" class="muted small" aria-live="polite"></p>
      <div id="records-container"></div>
      <p id="empty-state" class="muted" hidden>No records match your search.</p>
    </section>

    <section class="section animate-in" aria-labelledby="h-incident-reporting" style="--delay:120ms">
      <h2 id="h-incident-reporting"><span class="section-num">03</span> Report a Data Incident</h2>
      <p class="muted small">Select your country to access official incident reporting guidance.</p>
      <div class="country-reporting-controls">
        <div class="select-wrapper">
          <select id="country-select" name="country"></select>
          <svg class="select-arrow" viewBox="0 0 12 8" fill="none" aria-hidden="true">
            <path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <a id="country-regulation-link" class="btn btn-primary disabled" href="#" target="_blank" rel="noopener noreferrer" aria-disabled="true">Open reporting resource ↗</a>
      </div>
      <p id="country-reporting-note" class="muted small" aria-live="polite">Choose a country and use the link to open official guidance.</p>
    </section>

    <section class="section animate-in" aria-labelledby="h-contact" style="--delay:180ms">
      <h2 id="h-contact"><span class="section-num">04</span> Contact</h2>
      <p class="muted">Inquiries, correction requests, and media contact may be directed to the site operator below.</p>
      <div class="contact-card">
        <p class="org">Harmony Resource Hub Alberta Inc.</p>
        <div class="contact-row"><span class="contact-label">Email</span><a href="mailto:Admin@Harmonyresourcehub.ca">Admin@Harmonyresourcehub.ca</a></div>
        <div class="contact-row"><span class="contact-label">Jurisdiction</span><span>Alberta, Canada</span></div>
      </div>
    </section>
  </main>`;
}

function buildFooter() {
  return `
  <footer id="site-footer">
    <p>&copy; ${new Date().getFullYear()} Harmony Resource Hub Alberta Inc. — Public-interest publication.</p>
  </footer>`;
}

// ─── Renderers (populate data into DOM) ───────────────────────────────────────

function renderSummary() {
  const grouped = noticeRecords.reduce((acc, r) => {
    acc[r.status] = (acc[r.status] || 0) + 1;
    return acc;
  }, {});

  document.getElementById('status-summary').innerHTML = Object.entries(grouped)
    .map(([status, count]) => `
      <article class="status-item">
        <span class="status-badge ${STATUS_CLASS[status] || ''}">${status}</span>
        <div class="status-count">${count}</div>
        <div class="status-label">record${count !== 1 ? 's' : ''}</div>
      </article>`)
    .join('');
}

function renderRecords() {
  const q = state.search;
  const visible = noticeRecords.filter(({ section, title, body, tags }) =>
    `${section} ${title} ${body} ${tags.join(' ')}`.toLowerCase().includes(q)
  );

  document.getElementById('records-container').innerHTML = visible
    .map((r, i) => `
      <article class="record-item animate-in" tabindex="0" style="--delay:${i * 50}ms">
        <div class="record-header">
          <h3>${highlight(r.title, q)}</h3>
          <span class="status-badge ${STATUS_CLASS[r.status] || ''}">${r.status}</span>
        </div>
        <div class="record-meta">${r.section} &nbsp;·&nbsp; <time>${r.date}</time></div>
        <p>${highlight(r.body, q)}</p>
        <div class="tags">${r.tags.map(t => `<span class="tag">${highlight(t, q)}</span>`).join('')}</div>
      </article>`)
    .join('');

  document.getElementById('empty-state').hidden = visible.length > 0;
  document.getElementById('active-filters').textContent = visible.length > 0
    ? `Showing ${visible.length} of ${noticeRecords.length} records.`
    : `No results for "${state.search}".`;
}

function renderCountryOptions() {
  document.getElementById('country-select').innerHTML =
    `<option value="">Select a country / region</option>` +
    Object.entries(incidentReportingByCountry)
      .map(([k, v]) => `<option value="${k}">${v.label}</option>`)
      .join('');
}

// ─── Events ───────────────────────────────────────────────────────────────────

function bindEvents() {
  const search = document.getElementById('section-search');
  const toggleBtn = document.getElementById('toggle-view');
  const countrySelect = document.getElementById('country-select');
  const regLink = document.getElementById('country-regulation-link');
  const reportNote = document.getElementById('country-reporting-note');

  search.addEventListener('input', () => {
    state.search = search.value.trim().toLowerCase();
    renderRecords();
  });

  search.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      search.value = '';
      state.search = '';
      renderRecords();
    }
  });

  toggleBtn.addEventListener('click', () => {
    state.compact = !state.compact;
    document.body.classList.toggle('compact', state.compact);
    toggleBtn.textContent = state.compact ? 'Expanded' : 'Compact';
  });

  countrySelect.addEventListener('change', () => {
    const selected = incidentReportingByCountry[countrySelect.value];
    if (!selected) {
      regLink.href = '#';
      regLink.classList.add('disabled');
      regLink.setAttribute('aria-disabled', 'true');
      reportNote.textContent = 'Choose a country and use the link to open official guidance.';
    } else {
      regLink.href = selected.url;
      regLink.classList.remove('disabled');
      regLink.removeAttribute('aria-disabled');
      reportNote.textContent = `${selected.label} guidance is ready to open in a new tab.`;
    }
  });

  regLink.addEventListener('click', (e) => {
    if (regLink.classList.contains('disabled')) {
      e.preventDefault();
      reportNote.textContent = 'Please choose a country first.';
    }
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────

function init() {
  document.getElementById('app').innerHTML =
    buildTopBar() + buildHeader() + buildDisclaimer() + buildMain() + buildFooter();
  bindEvents();
  renderSummary();
  renderRecords();
  renderCountryOptions();
}

init();

