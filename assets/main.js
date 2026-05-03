const year = document.getElementById('footer-year');
if (year) year.textContent = String(new Date().getFullYear());

const noticeRecords = [
  { section: '§ 1 Notice', title: 'Notice', status: 'Active', date: '2026-05-03', tags: ['public-interest'], body: 'This notice is published as a matter of public interest. The operator is committed to accuracy, fairness, and responsible disclosure.' },
  { section: '§ 2 Purpose', title: 'Purpose', status: 'Active', date: '2026-05-03', tags: ['non-commercial'], body: 'This site does not exist to harass, defame, or commercially harm any individual or entity.' },
  { section: '§ 3 Current Status', title: 'Current Status', status: 'Monitoring', date: '2026-05-03', tags: ['status'], body: 'Ongoing monitoring and documentation activities continue. Updates are published when legally appropriate.' },
  { section: '§ 4 Timeline', title: 'Timeline', status: 'Open Record', date: '2026-04-30', tags: ['history'], body: 'Documented activity period: June 2025 through April 2026, with additional review windows as needed.' },
  { section: '§ 5 Evidence and Publication Policy', title: 'Evidence and Publication Policy', status: 'Active', date: '2026-05-03', tags: ['legal', 'privacy'], body: 'Published material is limited to public-domain information, original commentary, and lawful excerpts for criticism, review, and explanation.' },
  { section: '§ 6 Editorial Position', title: 'Editorial Position', status: 'Reviewing', date: '2026-05-01', tags: ['editorial'], body: 'Editorial updates are reviewed for legal proportionality, privacy safeguards, and documentary support before publication.' },
];

const statusSummary = document.getElementById('status-summary');
const recordsContainer = document.getElementById('records-container');
const sectionFilter = document.getElementById('section-filter');
const sectionSearch = document.getElementById('section-search');
const emptyState = document.getElementById('empty-state');
const toggleView = document.getElementById('toggle-view');

function renderSummary() {
  const grouped = noticeRecords.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});

  statusSummary.innerHTML = Object.entries(grouped)
    .map(([status, count]) => `<article class="status-item"><strong>${status}</strong><div>${count} record(s)</div></article>`)
    .join('');
}

function renderFilterOptions() {
  const uniqueSections = ['All Sections', ...new Set(noticeRecords.map((entry) => entry.section))];
  sectionFilter.innerHTML = uniqueSections.map((name) => `<option value="${name}">${name}</option>`).join('');
}

function renderRecords() {
  const filterValue = sectionFilter.value;
  const searchValue = sectionSearch.value.trim().toLowerCase();

  const visible = noticeRecords.filter((entry) => {
    const matchesSection = filterValue === 'All Sections' || entry.section === filterValue;
    const searchable = `${entry.section} ${entry.title} ${entry.body} ${entry.tags.join(' ')}`.toLowerCase();
    return matchesSection && searchable.includes(searchValue);
  });

  recordsContainer.innerHTML = visible
    .map((entry) => `
      <article class="record-item">
        <h3>${entry.title}</h3>
        <div class="record-meta">${entry.section} • ${entry.date} • ${entry.status}</div>
        <p>${entry.body}</p>
        <div>${entry.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>
      </article>`)
    .join('');

  emptyState.hidden = visible.length !== 0;
}

sectionFilter.addEventListener('change', renderRecords);
sectionSearch.addEventListener('input', renderRecords);

toggleView.addEventListener('click', () => {
  document.body.classList.toggle('compact');
  toggleView.textContent = document.body.classList.contains('compact') ? 'Expanded View' : 'Compact View';
});

renderSummary();
renderFilterOptions();
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

countrySelect.innerHTML = `<option value="">Select a country</option>${Object.entries(incidentReportingByCountry).map(([k,v])=>`<option value="${k}">${v.label}</option>`).join('')}`;

countryRegulationLink.addEventListener('click', () => {
  const selectedCountry = incidentReportingByCountry[countrySelect.value];
  if (!selectedCountry) {
    countryReportingNote.textContent = 'Please choose a country first.';
    return;
  }
  countryReportingNote.textContent = `Opening the ${selectedCountry.label} incident reporting guidance in a new tab.`;
  window.open(selectedCountry.url, '_blank', 'noopener,noreferrer');
});
