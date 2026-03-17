import SectionHeader from './SectionHeader';
import { pillars } from './data';

export default function ThreePillarsSection() {
  return (
    <section className="ps ps-dk">
      <div className="container">
        <SectionHeader
          badge="Managed Services Portfolio"
          badgeClassName="badge bw"
          title="Three Pillars. Full Coverage."
          titleStyle={{ color: '#fff' }}
          description="Thynkwise's managed services are organised across three disciplines - infrastructure, applications, and cloud - giving you end-to-end accountability under one SLA."
          descriptionStyle={{ color: 'rgba(255,255,255,0.5)' }}
        />

        <div className="pillars-wrap rv d1">
          {pillars.map((pillar) => (
            <div key={pillar.label} className="pillar">
              <div className="pillar-icon">{pillar.icon}</div>
              <div className="pillar-label">{pillar.label}</div>
              <div className="pillar-title">
                {pillar.titleTop}
                <br />
                {pillar.titleBottom}
              </div>
              <ul className="pillar-list">
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
