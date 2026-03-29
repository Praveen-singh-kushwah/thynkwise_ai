const defaultSection = {
  eyebrow: 'By the Numbers',
  title: 'The Thynkwise GCP advantage',
  stats: [
    { value: '40+', label: 'Active GCP certifications across the team' },
    { value: '$200K', label: 'Max Google for Startups credits available' },
    { value: '25-35%', label: 'Average GCP cost reduction in Year 1' },
    { value: '24/7', label: 'local-timezone NOC and engineering support' },
  ],
};

export default function ByTheNumbersSection({ section }) {
  const eyebrow = section?.eyebrow || defaultSection.eyebrow;
  const title = section?.title || defaultSection.title;
  const stats = section?.stats?.length ? section.stats : defaultSection.stats;

  return (
    <section className="ps ps-dark">
      <div className="container">
        <span className="badge bw sec-eyebrow rv">{eyebrow}</span>
        <h2 className="sec-title sec-title-light rv d1">{title}</h2>
        <div className="stat-band rv d2">
          {stats.map((stat, index) => (
            <div key={`${stat.value}-${index}`} className="stat-item">
              <div className="stat-num">{stat.value}</div>
              <div className="stat-lbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
