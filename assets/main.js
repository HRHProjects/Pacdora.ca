// ─── Open source article and guidance data ───────────────────────────────────

const sourceArticles = [
  {
    title: 'NIST Cybersecurity Framework 2.0',
    publisher: 'National Institute of Standards and Technology',
    type: 'Framework',
    url: 'https://www.nist.gov/cyberframework',
    tags: ['govern', 'identify', 'protect', 'detect', 'respond', 'recover'],
    summary: 'A public framework for managing cyber risk across strategy, operations, suppliers, assets, and recovery planning.',
  },
  {
    title: '#StopRansomware Guide',
    publisher: 'CISA, FBI, NSA, and partners',
    type: 'Incident guidance',
    url: 'https://www.cisa.gov/stopransomware/ransomware-guide',
    tags: ['ransomware', 'backups', 'incident-response', 'third-party-risk'],
    summary: 'Practical prevention and response guidance for ransomware, data extortion, logging, backups, and vendor dependencies.',
  },
  {
    title: 'Data Breach Response: A Guide for Business',
    publisher: 'Federal Trade Commission',
    type: 'Breach response',
    url: 'https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business',
    tags: ['notification', 'individuals', 'law-enforcement', 'containment'],
    summary: 'Business-oriented guidance for securing systems, fixing vulnerabilities, notifying affected parties, and communicating responsibly.',
  },
  {
    title: 'Personal information breach reporting',
    publisher: 'Office of the Privacy Commissioner of Canada',
    type: 'Canadian reporting',
    url: 'https://www.priv.gc.ca/en/report-a-concern/report-a-privacy-breach-at-your-organization/report-a-privacy-breach-at-your-business/',
    tags: ['canada', 'pipeda', 'privacy', 'reporting'],
    summary: 'Official Canadian business guidance for reporting breaches of security safeguards involving personal information.',
  },
  {
    title: 'Personal data breach guidance',
    publisher: 'UK Information Commissioner\'s Office',
    type: 'Regulatory guidance',
    url: 'https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/',
    tags: ['uk', 'gdpr', '72-hours', 'risk-assessment'],
    summary: 'Guidance on assessing, documenting, and reporting personal data breaches when people may be at risk.',
  },
  {
    title: 'OWASP Top Ten Web Application Security Risks',
    publisher: 'Open Worldwide Application Security Project',
    type: 'Open project',
    url: 'https://owasp.org/www-project-top-ten/',
    tags: ['application-security', 'access-control', 'misconfiguration', 'software'],
    summary: 'Open awareness material for the most critical web application risks, useful for SaaS vendors and software buyers.',
  },
  {
    title: 'Protecting Sensitive and Personal Information from Ransomware-Caused Data Breaches',
    publisher: 'CISA',
    type: 'Fact sheet',
    url: 'https://www.cisa.gov/stopransomware/fact-sheets-information',
    tags: ['personal-information', 'extortion', 'leak-sites', 'notification'],
    summary: 'Explains how ransomware incidents can become data breaches when attackers steal information and threaten release.',
  },
  {
    title: 'European Data Protection Board members and supervisory authorities',
    publisher: 'European Data Protection Board',
    type: 'Reporting directory',
    url: 'https://www.edpb.europa.eu/about-edpb/about-edpb/members_en',
    tags: ['eu', 'supervisory-authorities', 'gdpr'],
    summary: 'Directory of EU/EEA data protection authorities for organizations and individuals seeking official privacy reporting channels.',
  },
];

const impactTabs = [
  {
    id: 'individuals',
    label: 'Individuals',
    kicker: 'Real people carry the longest tail of harm.',
    title: 'When personal data leaks, the damage can follow someone for years.',
    image: 'identity',
    bullets: [
      'Identity theft, new-account fraud, SIM swapping, and account takeover can begin with exposed identifiers, emails, phone numbers, passwords, or security questions.',
      'Sensitive employment, health, location, financial, or family information can create emotional distress, stalking risk, discrimination, or reputational harm.',
      'People lose time disputing charges, replacing documents, freezing credit, changing passwords, monitoring accounts, and proving that fraud was not their fault.',
    ],
  },
  {
    id: 'companies',
    label: 'Companies',
    kicker: 'A vendor failure can become a board-level crisis.',
    title: 'Companies can lose operations, customers, contracts, and market trust.',
    image: 'company',
    bullets: [
      'A breach can interrupt revenue operations, onboarding, customer support, payroll, fulfillment, and partner integrations.',
      'Direct costs may include incident response, legal review, customer notification, monitoring services, forensic work, contract penalties, insurance deductibles, and system rebuilds.',
      'Indirect costs can be larger: damaged confidence, churn, sales delays, tougher procurement reviews, regulatory scrutiny, and executive distraction.',
    ],
  },
  {
    id: 'btb',
    label: 'B2B Vendors',
    kicker: 'B2B means one weak service can expose many downstream organizations.',
    title: 'Vendors must be extra careful because they inherit customer trust.',
    image: 'network',
    bullets: [
      'B2B vendors often hold aggregated data from many customers, making them high-value targets and a force multiplier for attackers.',
      'Customers rely on vendors for access controls, logging, encryption, patching, backups, least privilege, secure APIs, and honest breach communication.',
      'Poor vendor security can trigger cascading notification duties, procurement freezes, loss of enterprise deals, and removal from approved supplier lists.',
    ],
  },
  {
    id: 'response',
    label: 'Response',
    kicker: 'Preparation decides whether an incident becomes chaos.',
    title: 'Security must include response, recovery, and transparent notification.',
    image: 'response',
    bullets: [
      'Keep an incident response plan, escalation contacts, asset inventory, retention-safe logs, offline backups, and tested restoration procedures.',
      'Preserve forensic evidence, isolate affected systems, rotate credentials, close exploited paths, and communicate in plain language with affected customers.',
      'Document decisions, notify regulators or customers when required, and publish remediation steps that show the organization learned from the event.',
    ],
  },
];

const securityPrinciples = [
  ['Govern', 'Assign accountable owners for data, vendors, legal duties, and executive risk decisions.'],
  ['Map data', 'Know what personal and customer data is collected, where it flows, who can access it, and how long it is kept.'],
  ['Minimize', 'Collect less, retain less, and delete what is no longer needed so a breach has less fuel.'],
  ['Protect', 'Use MFA, encryption, least privilege, secure development, hardened cloud settings, secrets management, and endpoint protection.'],
  ['Monitor', 'Log meaningful events, watch for impossible travel, suspicious exports, privilege changes, and unusual API usage.'],
  ['Test', 'Run vulnerability scans, tabletop exercises, backup restores, access reviews, and third-party assurance checks.'],
  ['Respond', 'Prepare evidence preservation, breach triage, customer messaging, regulator reporting, and post-incident remediation.'],
  ['Recover', 'Restore clean systems, validate integrity, rotate credentials, and measure lessons learned after the incident.'],
];

const vendorChecklist = [
  'Does the vendor support MFA and role-based access control for every customer admin?',
  'Can the vendor explain where customer data is hosted, backed up, logged, and sub-processed?',
  'Are encryption, secure key management, and secrets rotation documented?',
  'Does the vendor patch critical vulnerabilities quickly and track open remediation work?',
  'Are audit logs available to customers and retained long enough for investigations?',
  'Does the contract require timely breach notice, cooperation, and clear points of contact?',
  'Has the vendor tested incident response, ransomware recovery, and backup restoration?',
  'Can the vendor delete or export customer data safely at contract end?',
];

const incidentReportingByCountry = {
  ca: { label: 'Canada — OPC breach reporting', url: 'https://www.priv.gc.ca/en/report-a-concern/report-a-privacy-breach-at-your-organization/report-a-privacy-breach-at-your-business/' },
  us: { label: 'United States — state breach notification laws', url: 'https://www.ncsl.org/technology-and-communication/security-breach-notification-laws' },
  eu: { label: 'European Union — EDPB authority directory', url: 'https://www.edpb.europa.eu/about-edpb/about-edpb/members_en' },
  uk: { label: 'United Kingdom — ICO report a breach', url: 'https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/' },
};


const openPhotoSources = [
  {
    title: 'Palletised boxes ready for delivery',
    context: 'Packaging and logistics photo for the public-information theme.',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/American_boxes_palletised.jpg?width=900',
    page: 'https://commons.wikimedia.org/wiki/File:American_boxes_palletised.jpg',
    credit: 'SimónK / Wikimedia Commons',
    license: 'CC BY-SA 4.0',
  },
  {
    title: 'Server racks at NERSC',
    context: 'Real infrastructure photo showing where digital services may depend on safeguards.',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Front_of_server_racks_at_NERSC.jpg?width=900',
    page: 'https://commons.wikimedia.org/wiki/File:Front_of_server_racks_at_NERSC.jpg',
    credit: 'Derrick Coetzee / Wikimedia Commons',
    license: 'CC0 1.0',
  },
  {
    title: 'Operations center workstations',
    context: 'Public-domain photo of people monitoring networked systems.',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/210303-F-ZY709-1002_616th_Operations_Center.jpg?width=900',
    page: 'https://commons.wikimedia.org/wiki/File:210303-F-ZY709-1002_616th_Operations_Center.jpg',
    credit: 'U.S. Air Force photo by Vincent Childress',
    license: 'Public domain',
  },
  {
    title: 'Laptop planning during cyber exercise',
    context: 'Public-domain photo representing shared responsibility and coordination.',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Neurons_connect_at_US_Army%27s_CyberCenter_of_Excellence_140610-Z-PA893-053.jpg?width=900',
    page: 'https://commons.wikimedia.org/wiki/File:Neurons_connect_at_US_Army%27s_CyberCenter_of_Excellence_140610-Z-PA893-053.jpg',
    credit: 'Staff Sgt. Tracy Smith / Georgia National Guard',
    license: 'Public domain',
  },
];

const state = { search: '', activeTab: 'individuals', activePhoto: 0, checkedItems: new Set() };

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlight(text, q) {
  if (!q) return text;
  return text.replace(new RegExp(`(${escapeRegExp(q)})`, 'ig'), '<mark>$1</mark>');
}

function iconSvg(name) {
  const icons = {
    identity: '<path d="M44 72c0-20 16-36 36-36s36 16 36 36-16 36-36 36-36-16-36-36Zm-20 112c8-38 30-60 56-60s48 22 56 60"/><path d="M150 56h54v54h-54zM150 134h54v54h-54z"/>',
    company: '<path d="M48 190V56h86v134M134 92h74v98"/><path d="M72 84h16M104 84h16M72 118h16M104 118h16M72 152h16M104 152h16M158 122h26M158 154h26"/>',
    network: '<circle cx="64" cy="72" r="28"/><circle cx="184" cy="72" r="28"/><circle cx="124" cy="176" r="28"/><path d="M91 84l66 76M157 84l-66 76M96 72h60"/>',
    response: '<path d="M124 42l74 34v52c0 48-28 82-74 104-46-22-74-56-74-104V76l74-34Z"/><path d="M91 134l25 25 50-62"/>',
  };
  return `<svg class="mini-graphic" viewBox="0 0 248 248" fill="none" aria-hidden="true"><g stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</g></svg>`;
}

function buildTopBar() {
  return `
  <nav id="top-bar" aria-label="Main navigation">
    <a class="site-id" href="#app">Pacdora.ca Public Notice</a>
    <div class="top-actions">
      <a href="#articles">Open Articles</a>
      <a href="#vendor-checklist">Vendor Checklist</a>
      <a href="#open-photos">Open Photos</a>
      <a href="#reporting">Report</a>
      <div class="search-wrapper">
        <span class="search-icon" aria-hidden="true">⌕</span>
        <input id="section-search" type="search" placeholder="Search source library…" aria-label="Search source library" />
      </div>
    </div>
  </nav>`;
}

function buildHeader() {
  return `
  <header id="site-header">
    <div class="hero-copy animate-in">
      <p class="header-eyebrow">Pacdora.ca public information notice — independent site</p>
      <h1>Plain Pacdora public notice with data security context.</h1>
      <p class="header-subtitle">This independent site is not affiliated with Pacdora, Baoxiaohe, or Packify. It is not a security resource or official support channel; it is a public-information notice that includes plain-language information about data security, privacy, vendor care, and reporting links.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#independent-notice">Read the notice</a>
        <a class="btn btn-secondary" href="#open-photos">View open photos</a>
      </div>
    </div>
    <div class="hero-visual animate-in" style="--delay:90ms" aria-label="Moving open-source photo carousel">
      <div class="hero-photo-stage">
        ${openPhotoSources.map((photo, i) => `<figure class="hero-photo ${i === 0 ? 'is-active' : ''}" data-hero-photo="${i}">
          <img src="${photo.src}" alt="${photo.title}" loading="${i === 0 ? 'eager' : 'lazy'}" />
          <figcaption><strong>${photo.title}</strong><span>${photo.license} · ${photo.credit}</span></figcaption>
        </figure>`).join('')}
      </div>
      <div class="hero-photo-controls" aria-label="Hero photo controls">
        <button type="button" data-photo-direction="-1" aria-label="Show previous photo">‹</button>
        <div class="hero-dots">${openPhotoSources.map((_, i) => `<button type="button" class="${i === 0 ? 'is-active' : ''}" data-photo-dot="${i}" aria-label="Show photo ${i + 1}"></button>`).join('')}</div>
        <button type="button" data-photo-direction="1" aria-label="Show next photo">›</button>
      </div>
      <p class="hero-photo-note">Real freely licensed or public-domain photos from Wikimedia Commons; credits and links appear below.</p>
    </div>
  </header>`;
}

function buildStats() {
  return `
  <section class="section stats-panel animate-in" aria-label="Why this matters" style="--delay:130ms">
    <article><strong>1 vendor</strong><span>can connect to many customers, users, APIs, files, and workflows.</span></article>
    <article><strong>1 exposed secret</strong><span>can unlock cloud data, admin panels, code repositories, or payment systems.</span></article>
    <article><strong>1 late notice</strong><span>can prevent people and companies from protecting themselves in time.</span></article>
  </section>`;
}

function buildMain() {
  return `
  <main id="main-content" role="main">
    <section id="independent-notice" class="section notice-panel animate-in" aria-labelledby="notice-heading" style="--delay:110ms">
      <div class="section-heading compact-heading"><span class="section-num">!</span><div><h2 id="notice-heading">Independent public information notice</h2><p class="muted">Pacdora.ca is a plain public-information notice site.</p></div></div>
      <div class="notice-grid">
        <article><strong>No affiliation</strong><span>This website is not affiliated with, endorsed by, sponsored by, or operated by Pacdora, Baoxiaohe, or Packify.</span></article>
        <article><strong>Not a security resource</strong><span>The site includes information about data security, but it is not a security resource, audit service, legal advice, or official incident-response channel.</span></article>
        <article><strong>Public notice only</strong><span>Use official company, regulator, law-enforcement, or professional channels for support, legal duties, security incidents, or breach reporting.</span></article>
      </div>
    </section>

    ${buildStats()}

    <section id="impact-tabs" class="section feature-section animate-in" aria-labelledby="impact-heading" style="--delay:170ms">
      <div class="section-heading">
        <span class="section-num">01</span>
        <div><h2 id="impact-heading">The damage when data security is not taken seriously</h2><p class="muted">Use the tabs to see how the same incident harms different groups.</p></div>
      </div>
      <div class="tabs" role="tablist" aria-label="Impact categories"></div>
      <div id="tab-panel" class="tab-panel"></div>
    </section>

    <section class="section animate-in" aria-labelledby="principles-heading" style="--delay:210ms">
      <div class="section-heading">
        <span class="section-num">02</span>
        <div><h2 id="principles-heading">A practical security operating model</h2><p class="muted">Aligned with open guidance such as NIST CSF, CISA ransomware guidance, OWASP application security, and privacy regulator expectations.</p></div>
      </div>
      <div class="principle-grid">${securityPrinciples.map(([title, body]) => `<article><span>${title}</span><p>${body}</p></article>`).join('')}</div>
    </section>

    <section id="vendor-checklist" class="section split-section animate-in" aria-labelledby="vendor-heading" style="--delay:250ms">
      <div>
        <div class="section-heading compact-heading"><span class="section-num">03</span><div><h2 id="vendor-heading">Why B2B vendors should be most careful</h2></div></div>
        <p>B2B vendors are trusted bridges. They may receive privileged access, customer files, employee records, tokens, logs, invoices, support tickets, and confidential business information. That concentration means a vendor incident can become a multi-company incident.</p>
        <p>Carelessness is not only a technical problem. It can become a privacy problem, a contract problem, a procurement problem, a regulatory problem, and a human problem.</p>
      </div>
      <div class="checklist-card">
        <h3>Vendor due-diligence questions</h3>
        <div class="checklist-progress" aria-live="polite"><span id="checklist-progress-bar"></span></div>
        <p id="checklist-progress-text" class="muted small">0 of 8 items marked for review.</p>
        <ul>${vendorChecklist.map((item, i) => `<li><label><input type="checkbox" data-checklist-item="${i}" /> <span>${item}</span></label></li>`).join('')}</ul>
      </div>
    </section>

    <section id="articles" class="section animate-in" aria-labelledby="articles-heading" style="--delay:290ms">
      <div class="section-heading">
        <span class="section-num">04</span>
        <div><h2 id="articles-heading">Open-source article and guidance library</h2><p id="active-filters" class="muted" aria-live="polite"></p></div>
      </div>
      <div id="articles-container" class="article-grid"></div>
      <p id="empty-state" class="muted" hidden>No open-source references match your search.</p>
    </section>

    <section id="open-photos" class="section gallery-section animate-in" aria-labelledby="graphics-heading" style="--delay:330ms">
      <div class="section-heading"><span class="section-num">05</span><div><h2 id="graphics-heading">Real open-source photos and visual context</h2><p class="muted">Actual freely licensed or public-domain photos are paired with lightweight graphics. Select a photo to update the featured image.</p></div></div>
      <div class="photo-gallery">
        <figure id="featured-photo" class="featured-photo"></figure>
        <div class="photo-thumbs" role="list">${openPhotoSources.map((photo, i) => `<button type="button" role="listitem" data-gallery-photo="${i}" class="${i === 0 ? 'is-active' : ''}"><img src="${photo.src}" alt="" loading="lazy" /><span>${photo.title}</span></button>`).join('')}</div>
      </div>
      <div class="graphic-grid">
        ${impactTabs.map(tab => `<figure>${iconSvg(tab.image)}<figcaption>${tab.label}: ${tab.kicker}</figcaption></figure>`).join('')}
      </div>
    </section>

    <section id="reporting" class="section animate-in" aria-labelledby="reporting-heading" style="--delay:370ms">
      <div class="section-heading"><span class="section-num">06</span><div><h2 id="reporting-heading">Report or research a data incident</h2><p class="muted">Select a jurisdiction to open official reporting guidance. Requirements vary by law, facts, sector, and affected people.</p></div></div>
      <div class="country-reporting-controls">
        <div class="select-wrapper"><select id="country-select" name="country"></select><span class="select-arrow" aria-hidden="true">⌄</span></div>
        <a id="country-regulation-link" class="btn btn-primary disabled" href="#" target="_blank" rel="noopener noreferrer" aria-disabled="true">Open official resource ↗</a>
      </div>
      <p id="country-reporting-note" class="muted small" aria-live="polite">Choose a country or region to open official guidance.</p>
    </section>
  </main>`;
}

function buildFooter() {
  return `
  <footer id="site-footer">
    <p>&copy; ${new Date().getFullYear()} Harmony Resource Hub Alberta Inc. — Independent Pacdora public-information notice. Not affiliated with Pacdora, Baoxiaohe, or Packify.</p>
    <p>Contact: <a href="mailto:Admin@Harmonyresourcehub.ca">Admin@Harmonyresourcehub.ca</a></p>
  </footer>`;
}

function renderHeroPhotos() {
  document.querySelectorAll('[data-hero-photo]').forEach((photo, i) => {
    photo.classList.toggle('is-active', i === state.activePhoto);
  });
  document.querySelectorAll('[data-photo-dot]').forEach((dot, i) => {
    dot.classList.toggle('is-active', i === state.activePhoto);
    dot.setAttribute('aria-current', i === state.activePhoto ? 'true' : 'false');
  });
}

function setActivePhoto(index) {
  state.activePhoto = (index + openPhotoSources.length) % openPhotoSources.length;
  renderHeroPhotos();
  renderFeaturedPhoto();
}

function renderFeaturedPhoto() {
  const photo = openPhotoSources[state.activePhoto];
  const featured = document.getElementById('featured-photo');
  if (!featured) return;
  featured.innerHTML = `
    <img src="${photo.src}" alt="${photo.title}" loading="lazy" />
    <figcaption>
      <strong>${photo.title}</strong>
      <span>${photo.context}</span>
      <a href="${photo.page}" target="_blank" rel="noopener noreferrer">${photo.credit} · ${photo.license} ↗</a>
    </figcaption>`;
  document.querySelectorAll('[data-gallery-photo]').forEach((button, i) => {
    button.classList.toggle('is-active', i === state.activePhoto);
  });
}

function renderChecklistProgress() {
  const total = vendorChecklist.length;
  const done = state.checkedItems.size;
  const bar = document.getElementById('checklist-progress-bar');
  const text = document.getElementById('checklist-progress-text');
  if (!bar || !text) return;
  bar.style.width = `${Math.round((done / total) * 100)}%`;
  text.textContent = `${done} of ${total} items marked for review.`;
}

function renderTabs() {
  const tabs = document.querySelector('.tabs');
  tabs.innerHTML = impactTabs.map(tab => `<button type="button" role="tab" aria-selected="${tab.id === state.activeTab}" aria-controls="panel-${tab.id}" data-tab="${tab.id}">${tab.label}</button>`).join('');

  const tab = impactTabs.find(item => item.id === state.activeTab) || impactTabs[0];
  document.getElementById('tab-panel').innerHTML = `
    <div class="tab-art">${iconSvg(tab.image)}</div>
    <div id="panel-${tab.id}" role="tabpanel">
      <p class="panel-kicker">${tab.kicker}</p>
      <h3>${tab.title}</h3>
      <ul>${tab.bullets.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>`;
}

function renderArticles() {
  const q = state.search;
  const visible = sourceArticles.filter(({ title, publisher, type, summary, tags }) =>
    `${title} ${publisher} ${type} ${summary} ${tags.join(' ')}`.toLowerCase().includes(q)
  );

  document.getElementById('articles-container').innerHTML = visible.map((article, i) => `
    <article class="article-card animate-in" style="--delay:${i * 35}ms">
      <div class="article-topline"><span>${highlight(article.type, q)}</span><span>${highlight(article.publisher, q)}</span></div>
      <h3>${highlight(article.title, q)}</h3>
      <p>${highlight(article.summary, q)}</p>
      <div class="tags">${article.tags.map(t => `<span class="tag">${highlight(t, q)}</span>`).join('')}</div>
      <a class="source-link" href="${article.url}" target="_blank" rel="noopener noreferrer">Open source ↗</a>
    </article>`).join('');

  document.getElementById('empty-state').hidden = visible.length > 0;
  document.getElementById('active-filters').textContent = visible.length > 0
    ? `Showing ${visible.length} of ${sourceArticles.length} open references.`
    : `No results for "${state.search}".`;
}

function renderCountryOptions() {
  document.getElementById('country-select').innerHTML =
    '<option value="">Select official reporting guidance</option>' +
    Object.entries(incidentReportingByCountry).map(([key, value]) => `<option value="${key}">${value.label}</option>`).join('');
}

function bindEvents() {
  const search = document.getElementById('section-search');
  const countrySelect = document.getElementById('country-select');
  const regLink = document.getElementById('country-regulation-link');
  const reportNote = document.getElementById('country-reporting-note');

  search.addEventListener('input', () => {
    state.search = search.value.trim().toLowerCase();
    renderArticles();
  });

  search.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      search.value = '';
      state.search = '';
      renderArticles();
    }
  });

  document.querySelector('.tabs').addEventListener('click', (event) => {
    const button = event.target.closest('[data-tab]');
    if (!button) return;
    state.activeTab = button.dataset.tab;
    renderTabs();
  });

  document.querySelector('.hero-photo-controls').addEventListener('click', (event) => {
    const direction = event.target.closest('[data-photo-direction]');
    const dot = event.target.closest('[data-photo-dot]');
    if (direction) setActivePhoto(state.activePhoto + Number(direction.dataset.photoDirection));
    if (dot) setActivePhoto(Number(dot.dataset.photoDot));
  });

  document.querySelector('.photo-thumbs').addEventListener('click', (event) => {
    const button = event.target.closest('[data-gallery-photo]');
    if (!button) return;
    setActivePhoto(Number(button.dataset.galleryPhoto));
  });

  document.querySelector('.checklist-card').addEventListener('change', (event) => {
    const input = event.target.closest('[data-checklist-item]');
    if (!input) return;
    const index = Number(input.dataset.checklistItem);
    if (input.checked) state.checkedItems.add(index);
    else state.checkedItems.delete(index);
    renderChecklistProgress();
  });

  window.setInterval(() => setActivePhoto(state.activePhoto + 1), 5200);

  countrySelect.addEventListener('change', () => {
    const selected = incidentReportingByCountry[countrySelect.value];
    if (!selected) {
      regLink.href = '#';
      regLink.classList.add('disabled');
      regLink.setAttribute('aria-disabled', 'true');
      reportNote.textContent = 'Choose a country or region to open official guidance.';
      return;
    }
    regLink.href = selected.url;
    regLink.classList.remove('disabled');
    regLink.removeAttribute('aria-disabled');
    reportNote.textContent = `${selected.label} is ready to open in a new tab.`;
  });

  regLink.addEventListener('click', (event) => {
    if (regLink.classList.contains('disabled')) {
      event.preventDefault();
      reportNote.textContent = 'Please choose a country or region first.';
    }
  });
}

function init() {
  document.getElementById('app').innerHTML = buildTopBar() + buildHeader() + buildMain() + buildFooter();
  renderTabs();
  renderArticles();
  renderCountryOptions();
  renderFeaturedPhoto();
  renderChecklistProgress();
  bindEvents();
}

init();
