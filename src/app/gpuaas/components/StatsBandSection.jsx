import { statsBand } from './data';

export default function StatsBandSection() {
  return (
    <section className="gpu-stat-wrap">
      <div className="container">
        <div className="stat-band rv">
          {statsBand.map((stat, index) => (
            <div key={`${stat.value}-${index}`} className="sb-item">
              <div className="sb-num">{stat.value}</div>
              <div className="sb-lbl" style={{ whiteSpace: 'pre-line' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
