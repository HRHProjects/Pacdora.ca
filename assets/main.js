const year = document.getElementById('footer-year');
if (year) year.textContent = String(new Date().getFullYear());

const noticeRecords = [
  { section: '§ 1 Notice', title: 'Notice', status: 'Active', date: '2026-05-03', tags: ['public-interest'], body: 'This notice is published as a matter of public interest. The operator is committed to accuracy, fairness, and responsible disclosure.' },
  { section: '§ 2 Purpose', title: 'Purpose', status: 'Active', date: '2026-05-03', tags: ['non-commercial'], body: 'This site does not exist to harass, defame, or commercially harm any individual or entity.' },
  { section: '§ 3 Current Status', title: 'Current Status', status: 'Monitoring', date: '2026-05-03', tags: ['status'], body: 'Ongoing monitoring and documentation activities continue. Updates are published when legally appropriate.' },
  { section: '§ 4 Timeline', title: 'Timeline', status: 'Open Record', date: '2026-04-30', tags: ['history'], body: 'Documented activity period: June 2026 through May 2026.' },
  { section: '§ 5 Evidence and Publication Policy', title: 'Evidence and Publication Policy', status: 'Active', date: '2026-05-03', tags: ['legal', 'privacy'], body: 'Published material is limited to public-domain information, original commentary, and lawful excerpts for criticism, review, and explanation.' },
  { section: '§ 6 Editorial Position', title: 'Editorial Position', status: 'Reviewing', date: '2026-05-01', tags: ['editorial'], body: 'Editorial updates are reviewed for legal proportionality, privacy safeguards, and documentary support before publication.' },
];

const statusSummary = document.getElementById('status-summary');
const recordsContainer = document.getElementById('records-container');
const sectionSearch = document.getElementById('section-search');
const emptyState = document.getElementById('empty-state');
const toggleView = document.getElementById('toggle-view');
const activeFilters = document.getElementById('active-filters');

function renderSummary() {
  const grouped = noticeRecords.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});

  statusSummary.innerHTML = Object.entries(grouped)
    .map(([status, count]) => `<article class="status-item"><strong>${status}</strong><div>${count} record(s)</div></article>`)
    .join('');
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlightMatch(text, searchValue) {
  if (!searchValue) return text;
  const pattern = new RegExp(`(${escapeRegExp(searchValue)})`, 'ig');
  return text.replace(pattern, '<mark>$1</mark>');
}

function renderRecords() {
  const searchValue = sectionSearch.value.trim().toLowerCase();

  const visible = noticeRecords.filter((entry) => {
    const searchable = `${entry.section} ${entry.title} ${entry.body} ${entry.tags.join(' ')}`.toLowerCase();
    return searchable.includes(searchValue);
  });

  recordsContainer.innerHTML = visible
    .map((entry) => `
      <article class="record-item" tabindex="0">
        <h3>${highlightMatch(entry.title, searchValue)}</h3>
        <div class="record-meta">${entry.section} • ${entry.date} • ${entry.status}</div>
        <p>${highlightMatch(entry.body, searchValue)}</p>
        <div>${entry.tags.map((tag) => `<span class="tag">${highlightMatch(tag, searchValue)}</span>`).join('')}</div>
      </article>`)
    .join('');

  const hasResults = visible.length !== 0;
  emptyState.hidden = hasResults;
  activeFilters.textContent = hasResults
    ? `Showing ${visible.length} of ${noticeRecords.length} record(s).`
    : `No results for search "${sectionSearch.value.trim()}".`;
}

sectionSearch.addEventListener('input', renderRecords);
sectionSearch.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    sectionSearch.value = '';
    renderRecords();
  }
});

toggleView.addEventListener('click', () => {
  document.body.classList.toggle('compact');
  toggleView.textContent = document.body.classList.contains('compact') ? 'Expanded View' : 'Compact View';
});

renderSummary();
renderRecords();

const countrySelect = document.getElementById('country-select');
const countryRegulationLink = document.getElementById('country-regulation-link');
const countryReportingNote = document.getElementById('country-reporting-note');

const incidentReportingByCountry = {
  eu: { label: 'European Union (GDPR)', url: 'https://www.edpb.europa.eu/about-edpb/about-edpb/members_en' },
  ca: { label: 'Canada', url: 'https://www.priv.gc.ca/en/report-a-concern/report-a-privacy-breach-at-your-organization/report-a-privacy-breach-at-your-business/' },
  uk: { label: 'United Kingdom', url: 'https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/' },
  us: { label: 'United States', url: 'https://www.ncsl.org/technology-and-communication/security-breach-notification-laws' },
};

countrySelect.innerHTML = `<option value="">Select a country</option>${Object.entries(incidentReportingByCountry).map(([k, v]) => `<option value="${k}">${v.label}</option>`).join('')}`;

countrySelect.addEventListener('change', () => {
  const selectedCountry = incidentReportingByCountry[countrySelect.value];

  if (!selectedCountry) {
    countryRegulationLink.href = '#';
    countryRegulationLink.classList.add('disabled');
    countryRegulationLink.setAttribute('aria-disabled', 'true');
    countryReportingNote.textContent = 'Choose a country and use the link to open official guidance.';
    return;
  }

  countryRegulationLink.href = selectedCountry.url;
  countryRegulationLink.classList.remove('disabled');
  countryRegulationLink.setAttribute('aria-disabled', 'false');
  countryReportingNote.textContent = `${selectedCountry.label} guidance is ready to open in a new tab.`;
});

countryRegulationLink.addEventListener('click', (event) => {
  if (countryRegulationLink.classList.contains('disabled')) {
    event.preventDefault();
    countryReportingNote.textContent = 'Please choose a country first.';
  }
});
