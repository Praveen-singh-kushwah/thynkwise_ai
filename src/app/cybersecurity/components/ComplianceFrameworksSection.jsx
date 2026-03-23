import SectionHeader from './SectionHeader';
import { complianceFrameworks } from './data';

export default function ComplianceFrameworksSection({ section }) {
  const frameworks = section?.framework?.length
    ? section.framework.map((item, index) => ({
        ...complianceFrameworks[index % complianceFrameworks.length],
        id: item.id,
        name: item.name || complianceFrameworks[index % complianceFrameworks.length].name,
        description:
          item.description || complianceFrameworks[index % complianceFrameworks.length].description,
      }))
    : complianceFrameworks;

  return (
    <section className="cy-compliance-sec">
      <div className="container">
        <SectionHeader
          badge="Compliance Coverage"
          badgeClassName="badge bw"
          title="Frameworks We Operate Within"
          description={
            "Thynkwise's managed security services are built to evidence regulatory compliance continuously — not assembled under audit pressure."
          }
          centered
          titleStyle={{ color: '#fff' }}
          descriptionStyle={{ color: 'rgba(226, 232, 240, 0.8)', maxWidth: 760, margin: '0 auto' }}
        />
        <div className="cy-framework-grid">
          {frameworks.map((framework, index) => (
            <div
              key={framework.id || `${framework.name}-${index}`}
              className={`cy-framework-card rv d${(index % 4) + 1}`}
            >
              <div className="cy-framework-icon">{framework.icon}</div>
              <div className="cy-framework-name">{framework.name}</div>
              <div className="cy-framework-desc">{framework.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

