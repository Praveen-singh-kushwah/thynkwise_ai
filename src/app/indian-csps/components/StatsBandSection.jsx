export default function StatsBandSection({ section }) {
  if (!section) {
    return null;
  }

  const stats = section.stats || [];

  if (!stats.length) {
    return null;
  }

  return (
    <section className="ps ps-navy indian-stats-band">
      <div className="container">
        <div className="stat-band rv">
          {stats.map((stat, index) => (
            <div key={stat.id || `${stat.value}-${index}`} className="sb-item">
              {stat.value ? <div className="sb-num">{stat.value}</div> : null}
              {stat.label ? <div className="sb-lbl" dangerouslySetInnerHTML={{ __html: stat.label.replace(/\n/g, '<br />') }} /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
