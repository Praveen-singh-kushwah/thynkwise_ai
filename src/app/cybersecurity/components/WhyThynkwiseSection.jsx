import SectionHeader from './SectionHeader';
import { whyPoints } from './data';

export default function WhyThynkwiseSection() {
  return (
    <section className="cy-why-sec">
      <div className="container">
        <SectionHeader
          badge="Why Thynkwise"
          badgeClassName="badge br"
          title="Security That Doesn't Just Report - It Responds"
          description={"Most MSSPs monitor and alert. Thynkwise monitors, alerts, investigates, contains, and reports \u2014 under a single SLA with a named analyst accountable for your account."}
        />
        <div className="cy-why-grid">
          {whyPoints.map((point, index) => (
            <div key={point.title} className={`cy-why-card rv d${(index % 3) + 1}`}>
              <div className="cy-why-icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
