const defaultSection = {
  eyebrow: 'The Honest Comparison',
  title: 'Google Cloud Direct vs GCP via Thynkwise',
  description:
    'GCP is technically powerful but harder to self-manage than AWS. Startup credit applications, Vertex AI cost governance, and Workspace admin - Thynkwise handles the complexity so your team stays focused on building.',
  direct_option: {
    title: 'GCP Direct',
    highlighted: false,
    points: [
      { included: false, text: 'USD billing only - local currency conversion risk every month' },
      { included: false, text: 'No GST invoices for Indian finance and accounting teams' },
      { included: false, text: 'Startup credits require direct application - often rejected or delayed' },
      { included: false, text: 'GCP Sustained Use Discounts unmanaged - missed savings' },
      { included: false, text: 'No data residency configuration included' },
      { included: false, text: 'Vertex AI cost governance is your responsibility' },
      { included: false, text: 'Workspace admin, DLP, and Vault setup requires specialised expertise' },
    ],
  },
  thynkwise_option: {
    title: 'GCP via Thynkwise',
    highlighted: true,
    points: [
      { included: true, text: '100% local-currency billing - GST-compliant invoices every month' },
      { included: true, text: 'Full GST breakdown with HSN/SAC codes - Tally, SAP, Zoho Books ready' },
      { included: true, text: 'Startup credit applications managed and activated within 10-14 days' },
      { included: true, text: 'Committed Use Discounts, right-sizing, and SUDs managed proactively' },
      { included: true, text: 'Data residency configured via Org Policies and VPC Service Controls' },
      { included: true, text: 'Vertex AI budget alerts and model serving cost controls implemented' },
      { included: true, text: 'Full Workspace deployment - Gmail, Drive, Meet, DLP, Vault, AppSheet' },
    ],
  },
};

function normalizePoints(items, fallbackIncluded) {
  return items.map((item) => ({
    included: typeof item?.included === 'boolean' ? item.included : fallbackIncluded,
    text: item?.text || item?.point || '',
  }));
}

export default function ComparisonSection({ section }) {
  const eyebrow = section?.eyebrow || defaultSection.eyebrow;
  const title = section?.title || defaultSection.title;
  const description = section?.description || defaultSection.description;
  const directOption = section?.direct_option || defaultSection.direct_option;
  const thynkwiseOption = section?.thynkwise_option || defaultSection.thynkwise_option;
  const directPoints = directOption.points?.length
    ? normalizePoints(directOption.points, false)
    : defaultSection.direct_option.points;
  const thynkwisePoints = thynkwiseOption.points?.length
    ? normalizePoints(thynkwiseOption.points, true)
    : defaultSection.thynkwise_option.points;

  return (
    <section className="ps ps-cream">
      <div className="container">
        <span className="badge bo sec-eyebrow rv">{eyebrow}</span>
        <h2 className="sec-title rv d1">{title}</h2>
        <p className="sec-sub rv d2">{description}</p>
        <div className="gcp-compare rv d3">
          <div className="gcpc-side">
            <div className="gcpc-title">{directOption.title || defaultSection.direct_option.title}</div>
            <ul className="gcpc-list">
              {directPoints.map((item, index) => (
                <li key={`${item.text}-${index}`} className={!item.included ? 'no' : ''}>
                  <span className={!item.included ? 'x' : 'chk'}>{!item.included ? '—' : '✓'}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className={`gcpc-side${thynkwiseOption.highlighted !== false ? ' tb' : ''}`}>
            <div className="gcpc-title">
              {thynkwiseOption.highlighted !== false ? <span className="star">★</span> : null}
              {thynkwiseOption.title || defaultSection.thynkwise_option.title}
            </div>
            <ul className="gcpc-list">
              {thynkwisePoints.map((item, index) => (
                <li key={`${item.text}-${index}`} className={!item.included ? 'no' : ''}>
                  <span className={!item.included ? 'x' : 'chk'}>{!item.included ? '—' : '✓'}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
