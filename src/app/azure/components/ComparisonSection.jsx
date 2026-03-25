import Link from 'next/link';

const defaultSection = {
  heading: 'Why 150+ Indian Companies Chose Us Over Going Direct to Microsoft',
  description: "This is not about Azure being better or worse - it is about how you access it. Here is the honest comparison.",
  direct: {
    points: [
      { included: true, point: 'Full access to all Azure services' },
      { included: true, point: 'SLA backed by Microsoft' },
      { included: false, point: 'USD billing (currency risk)' },
      { included: false, point: 'No GST-compliant invoicing' },
      { included: false, point: 'No 24/7 managed support (standard)' },
      { included: false, point: 'Enterprise support: $15K+/year' },
      { included: false, point: 'No DPDP/RBI compliance setup' },
      { included: false, point: 'No FinOps management' },
      { included: false, point: 'No Azure Hybrid Benefit audit' },
      { included: false, point: 'You manage everything yourself' },
    ],
  },
  via_thynkwise: {
    points: [
      { included: true, point: 'Full access to all Azure services' },
      { included: true, point: 'SLA backed by Microsoft + Thynkwise' },
      { included: true, point: '100% local-currency billing, zero USD exposure' },
      { included: true, point: 'Full GST invoices with HSN/SAC codes' },
      { included: true, point: '24/7 follow-the-sun support (all plans)' },
      { included: true, point: 'Named account manager (IST timezone)' },
      { included: true, point: 'DPDP + RBI compliance setup included' },
      { included: true, point: 'Monthly FinOps reviews (28-40% savings)' },
      { included: true, point: 'Azure Hybrid Benefit activation' },
      { included: true, point: 'Your dedicated Azure team' },
    ],
  },
};

function normalizePoints(items, fallbackIncluded) {
  return items.map((item) => ({
    included: typeof item?.included === 'boolean' ? item.included : fallbackIncluded,
    point: item?.point || '',
  }));
}

export default function ComparisonSection({ section }) {
  const heading = section?.heading || defaultSection.heading;
  const description = section?.description || defaultSection.description;
  const directPoints = section?.direct?.points?.length
    ? normalizePoints(section.direct.points, false)
    : defaultSection.direct.points;
  const viaPoints = section?.via_thynkwise?.points?.length
    ? normalizePoints(section.via_thynkwise.points, true)
    : defaultSection.via_thynkwise.points;

  return (
    <section className="ps ps-cream">
      <div className="container">
        <span className="badge bo sec-eyebrow rv">Thynkwise vs Microsoft Direct</span>
        <h2 className="sec-title rv d1">{heading}</h2>
        <p className="sec-sub rv d2">{description}</p>

        <div className="az-compare">
          <div className="azc-side rv d1">
            <div className="azc-title">Azure Direct (Microsoft)</div>
            <ul className="azc-list">
              {directPoints.map((item, index) => (
                <li key={`${item.point}-${index}`} className={!item.included ? 'no' : ''}>
                  <span className={!item.included ? 'x' : 'chk'}>{item.included ? '\u2713' : '\u2014'}</span>
                  {item.point}
                </li>
              ))}
            </ul>
          </div>

          <div className="azc-side tb rv d2">
            <div className="azc-title">
              <span className="star">{'\u2605'}</span> Azure via Thynkwise
            </div>
            <ul className="azc-list">
              {viaPoints.map((item, index) => (
                <li key={`${item.point}-${index}`} className={!item.included ? 'no' : ''}>
                  <span className={!item.included ? 'x' : 'chk'}>{item.included ? '\u2713' : '\u2014'}</span>
                  {item.point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="compare-cta rv">
          <Link href="/get-assessment" className="btn btn-outline">
            Get Free Azure Health Check
          </Link>
        </div>
      </div>
    </section>
  );
}
