const defaultStats = [
  { value: '150+', label: 'Active AWS certifications across the team' },
  { value: '28-35%', label: 'Average AWS cost reduction in Year 1' },
  { value: '3-5 days', label: 'Billing migration from AWS Direct - zero downtime' },
  { value: '24/7', label: 'local-timezone NOC and engineering support' },
];

export default function AwsByTheNumbersSection({ section }) {
  const stats = Array.isArray(section) && section.length ? section : defaultStats;

  return (
    <section className="ps ps-dark">
      <div className="container">
        <span className="badge bw sec-eyebrow rv">By the Numbers</span>
        <h2 className="sec-title sec-title-light rv d1">The Thynkwise AWS track record</h2>
        <div className="stat-band rv d2">
          {stats.map((item, index) => (
            <div key={`${item.value}-${index}`} className="stat-item">
              <div className="stat-num">{item.value}</div>
              <div className="stat-lbl">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
