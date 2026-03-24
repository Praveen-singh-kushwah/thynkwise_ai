const defaultSection = {
  heading: 'AWS Direct vs AWS via Thynkwise',
  description:
    'Going direct to AWS gives you infrastructure. Going via Thynkwise gives you infrastructure plus the expertise, billing simplicity, and 24/7 Indian support that actually makes it usable at scale.',
  direct: {
    points: [
      { included: false, point: 'USD-only billing, currency risk every month' },
      { included: false, point: 'No GST-compliant invoices for Indian accounting' },
      { included: false, point: 'Basic support: email, no response SLA' },
      { included: false, point: 'No FinOps guidance - Reserved Instances unmanaged' },
      { included: false, point: 'No data residency configuration included' },
      { included: false, point: 'Enterprise account manager only at high spend thresholds' },
      { included: false, point: 'Security posture configuration is your responsibility' },
    ],
  },
  via_thynkwise: {
    points: [
      { included: true, point: 'Flexible billing - local currency invoicing, multi-region support' },
      { included: true, point: 'Full GST breakdown with HSN/SAC codes - Tally, SAP, Zoho Books' },
      { included: true, point: '4-hour incident SLA with local-timezone engineer response' },
      { included: true, point: 'Proactive FinOps - RIs, Savings Plans, right-sizing managed for you' },
      { included: true, point: 'Data residency enforcement via VPC endpoints, SCPs, bucket policies' },
      { included: true, point: 'Dedicated account manager for every client, from Day 1' },
      { included: true, point: 'Pre-configured security guardrails - GuardDuty, SecurityHub, CloudTrail' },
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
        <span className="badge bo sec-eyebrow rv">The Honest Comparison</span>
        <h2 className="sec-title rv d1">{heading}</h2>
        <p className="sec-sub rv d2">{description}</p>
        <div className="aws-compare rv d3">
          <div className="awsc-side">
            <div className="awsc-title">AWS Direct</div>
            <ul className="awsc-list">
              {directPoints.map((item, index) => (
                <li key={`${item.point}-${index}`} className={!item.included ? 'no' : ''}>
                  <span className={!item.included ? 'x' : 'chk'}>{!item.included ? '—' : '✓'}</span>
                  {item.point}
                </li>
              ))}
            </ul>
          </div>
          <div className="awsc-side tb">
            <div className="awsc-title"><span className="star">★</span> AWS via Thynkwise</div>
            <ul className="awsc-list">
              {viaPoints.map((item, index) => (
                <li key={`${item.point}-${index}`} className={!item.included ? 'no' : ''}>
                  <span className={!item.included ? 'x' : 'chk'}>{!item.included ? '—' : '✓'}</span>
                  {item.point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
