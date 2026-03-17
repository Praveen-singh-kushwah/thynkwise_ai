import Link from 'next/link';
import SectionHeader from './SectionHeader';
import { caseStudies } from './data';

export default function CaseStudiesSection() {
  return (
    <section className="cy-cases-sec">
      <div className="container">
        <SectionHeader
          badge="Client Outcomes"
          badgeClassName="badge br"
          title="When Threats Hit. What Happened Next."
          description={"Three real-world scenarios from Thynkwise-managed security clients \u2014 ransomware containment, compliance recovery, and enterprise SOC build."}
        />
        <div className="cy-case-grid">
          {caseStudies.map((study, index) => (
            <div key={study.company} className={`cy-case-card rv d${index + 1}`}>
              <div className="cy-case-head" style={study.headerStyle}>
                <div className="cy-case-icon">{study.icon}</div>
                <div>
                  <div className="cy-case-industry">{study.industry}</div>
                  <div className="cy-case-company">{study.company}</div>
                </div>
              </div>
              <div className="cy-case-body">
                <p className="cy-case-quote">{study.quote}</p>
                <div className="cy-case-kpis">
                  {study.kpis.map((kpi) => (
                    <div key={kpi.label} className="cy-case-kpi" style={kpi.style}>
                      <div className="cy-case-kpi-number" style={kpi.valueStyle}>
                        {kpi.value}
                      </div>
                      <div className="cy-case-kpi-label">{kpi.label}</div>
                    </div>
                  ))}
                </div>
                <p className="cy-case-outcome">{study.outcome}</p>
                <div className="cy-case-key">
                  <strong>Outcome:</strong> {study.keyOutcome}
                </div>
              </div>
              <div className="cy-case-foot">
                <span className="cy-case-provider">{study.provider}</span>
                <Link href="/contact" className="cy-case-link">
                  Discuss {'\u2192'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
