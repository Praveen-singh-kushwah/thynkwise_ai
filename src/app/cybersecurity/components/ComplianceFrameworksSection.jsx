import { complianceFrameworks } from './data';

export default function ComplianceFrameworksSection() {
  return (
    <section className="cy-compliance-sec">
      <div className="container">
        <div className="cy-sec-ey rv cy-sec-center">
          <span className="badge bw">Compliance Coverage</span>
        </div>
        <h2 className="cy-sec-title rv cy-sec-center cy-text-white">
          Frameworks We Operate Within
        </h2>
        <p className="cy-sec-sub rv cy-sec-center cy-compliance-copy">
          Thynkwise&apos;s managed security services are built to evidence
          regulatory compliance continuously {'\u2014'} not assembled under audit
          pressure.
        </p>
        <div className="cy-framework-grid">
          {complianceFrameworks.map((framework, index) => (
            <div
              key={framework.name}
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
