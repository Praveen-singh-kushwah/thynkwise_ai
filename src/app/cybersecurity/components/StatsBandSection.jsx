import { statsBand } from './data';

export default function StatsBandSection({ section }) {
  const stats = section?.stats?.length
    ? section.stats.map((stat, index) => ({
        id: stat.id,
        value: stat.value || statsBand[index % statsBand.length].value,
        label: stat.label || statsBand[index % statsBand.length].label,
      }))
    : statsBand;

  return (
    <section className="cy-stats-sec">
      <div className="container">
        <div className="cy-stat-band rv">
          {stats.map((stat, index) => (
            <div key={stat.id || `${stat.value}-${index}`} className="cy-stat-item">
              <div className="cy-stat-number">{stat.value}</div>
              <div className="cy-stat-label" style={{ whiteSpace: 'pre-line' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

