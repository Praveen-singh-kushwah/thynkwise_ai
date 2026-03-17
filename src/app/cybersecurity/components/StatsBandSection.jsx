import { statsBand } from './data';

export default function StatsBandSection() {
  return (
    <section className="cy-stats-sec">
      <div className="container">
        <div className="cy-stat-band rv">
          {statsBand.map((stat) => (
            <div key={stat.value} className="cy-stat-item">
              <div className="cy-stat-number">{stat.value}</div>
              <div className="cy-stat-label">
                {stat.label.split('\n').map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
