import { statsBand } from './data';

export default function StatsBandSection({ section }) {
  const stats = section?.stats?.length
    ? section.stats.map((stat, index) => ({
        id: stat.id,
        value: stat.value || statsBand[index % statsBand.length].value,
        label: stat.label || `${statsBand[index % statsBand.length].line1}\n${statsBand[index % statsBand.length].line2}`,
      }))
    : statsBand.map((stat, index) => ({
        id: index,
        value: stat.value,
        label: `${stat.line1}\n${stat.line2}`,
      }));

  return (
    <section className="ps-navy ps" style={{ padding: '52px 0' }}>
      <div className="container">
        <div className="stat-band-ms rv">
          {stats.map((stat, index) => (
            <div key={stat.id || `${stat.value}-${index}`} className="sb-item-ms">
              <div className="sb-num-ms">{stat.value}</div>
              <div className="sb-lbl-ms" style={{ whiteSpace: 'pre-line' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
