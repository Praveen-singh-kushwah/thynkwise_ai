import SectionHeader from './SectionHeader';
import { industries } from './data';

export default function IndustryMigrationsSection() {
  return (
    <section className="ps ps-w">
      <div className="container">
        <SectionHeader
          badge="By Industry"
          badgeClassName="badge bb"
          title="Migration Expertise Across Every Sector"
          description="Every industry has unique compliance requirements, data sensitivity, and uptime constraints. Thynkwise has migrated workloads across 10+ sectors - here's what matters for each."
        />

        <div className="cm-industry-grid rv d1">
          {industries.map((industry) => (
            <div key={industry.name} className="cm-ind-card">
              <div
                className="cm-ind-card-head"
                style={{ background: industry.background }}
              >
                <span className="cm-ind-card-icon">{industry.icon}</span>
                <div>
                  <div className="cm-ind-card-name">{industry.name}</div>
                  <div className="cm-ind-card-sub">{industry.subtitle}</div>
                </div>
                <span className="cm-ind-card-cloud" style={industry.cloudStyle}>
                  {industry.cloud}
                </span>
              </div>

              <div className="cm-ind-card-body">
                <div className="cm-ind-card-comp">
                  <strong>Compliance:</strong> {industry.compliance}
                </div>
                <div className="cm-ind-card-timeline">
                  {'\u23F1'} Typical duration: {industry.timeline}
                </div>
                <div className="cm-ind-card-cap">{industry.capability}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
