import { trustStats } from './data';

export default function TrustBandSection({ stats }) {
  const items = stats?.length
    ? stats.map((item, index) => ({
        ...trustStats[index % trustStats.length],
        id: item.id,
        value: item.value || trustStats[index % trustStats.length].value,
        label: item.label || trustStats[index % trustStats.length].label,
      }))
    : trustStats;

  return (
    <section className="trust-band">
      <div className="container">
        <div className="trust-inner">
          {items.map((item, index) => (
            <div key={item.id || `${item.label}-${index}`} className={`trust-item rv ${item.delay}`}>
              <span className="trust-num">{item.value}</span>
              <span className="trust-lbl">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
