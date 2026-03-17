import { statsBand } from './data';

export default function StatsBandSection() {
  return (
    <section className="ps-navy ps" style={{ padding: '52px 0' }}>
      <div className="container">
        <div className="stat-band-ms rv">
          {statsBand.map((stat) => (
            <div key={stat.value} className="sb-item-ms">
              <div className="sb-num-ms">{stat.value}</div>
              <div className="sb-lbl-ms">
                {stat.line1}
                <br />
                {stat.line2}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
