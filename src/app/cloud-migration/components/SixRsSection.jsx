import SectionHeader from './SectionHeader';
import { sixRs } from './data';

export default function SixRsSection() {
  return (
    <section className="ps ps-c">
      <div className="container">
        <SectionHeader
          badge="The 6R Migration Framework"
          badgeClassName="badge bo"
          title="Which Migration Strategy Is Right for You?"
          description="Not every workload should be treated the same. Thynkwise's discovery process identifies the right strategy for each application - before migration begins, not after. Choosing the wrong strategy creates costly rework that delays your go-live and erodes the business case."
        />

        <div className="sixr-grid">
          {sixRs.map((item) => (
            <div key={item.id} className={`sixr-card rv ${item.delay}`}>
              <div className="sixr-r">{item.id}</div>
              <span className="sixr-icon">{item.icon}</span>
              <div className="sixr-name">{item.name}</div>
              <h3 className="sixr-title">{item.title}</h3>
              <p>{item.description}</p>
              <span className="sixr-tag">{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
