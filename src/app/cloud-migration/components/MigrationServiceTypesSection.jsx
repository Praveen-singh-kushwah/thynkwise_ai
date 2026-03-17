import SectionHeader from './SectionHeader';
import {
  primaryMigrationTypes,
  secondaryMigrationTypes,
} from './data';

export default function MigrationServiceTypesSection() {
  return (
    <section className="ps ps-c">
      <div className="container">
        <SectionHeader
          badge="Migration Service Portfolio"
          badgeClassName="badge bo"
          title="Every Migration Type. One Expert Partner."
          description="From network-level migrations to full cloud re-architecture - Thynkwise has the tooling, certifications, and playbooks for every workload type, every topology, every risk profile."
        />

        <div className="cm-type-grid-primary">
          {primaryMigrationTypes.map((item) => (
            <div key={item.title} className={`mig-type-card rv ${item.delay}`}>
              <div className="mig-type-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="mig-type-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="cm-type-grid-secondary">
          {secondaryMigrationTypes.map((item) => (
            <div
              key={item.title}
              className={`mig-type-card mig-dark rv ${item.delay}`}
            >
              <div className="mig-type-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="mig-type-tags dark">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
