import Link from 'next/link';
import SectionHeader from './SectionHeader';
import { caseStudies } from './data';

export default function CaseStudiesSection() {
  return (
    <section className="ps ps-c">
      <div className="container">
        <SectionHeader
          badge="Migration Case Studies"
          badgeClassName="badge bo"
          title="Real Migrations. Measurable Results. Every Time."
          description="Every engagement is documented from discovery to hypercare. Here are three that tell the full story."
        />

        <div className="cs-grid-cm">
          {caseStudies.map((study) => (
            <div key={study.company} className={`cs-card-cm rv ${study.delay}`}>
              <div
                className="cs-header-cm"
                style={{ background: study.headerBackground }}
              >
                <div className="cs-ind-cm" style={{ color: study.iconColor }}>
                  {study.icon}
                </div>
                <div>
                  <div className="cs-industry-cm">{study.industry}</div>
                  <div className="cs-company-cm">{study.company}</div>
                </div>
              </div>

              <div className="cs-body-cm">
                <p className="cs-challenge">&ldquo;{study.challenge}&rdquo;</p>

                <div className="cs-metrics-pair">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="cs-metric-box"
                      style={{ background: metric.background }}
                    >
                      <div
                        className="cs-metric-val"
                        style={{
                          color: metric.color,
                          fontSize: metric.fontSize,
                        }}
                      >
                        {metric.value}
                      </div>
                      <div className="cs-metric-sub">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <p className="cs-outcome-cm">{study.outcome}</p>

                <div
                  className="cs-key-outcome"
                  style={{
                    background: study.keyOutcome.background,
                    borderLeft: `3px solid ${study.keyOutcome.borderColor}`,
                  }}
                >
                  <div
                    className="cs-key-label"
                    style={{ color: study.keyOutcome.color }}
                  >
                    {study.keyOutcome.label}
                  </div>
                  <div className="cs-key-text">{study.keyOutcome.text}</div>
                </div>
              </div>

              <div className="cs-footer-cm">
                <span className="cs-provider-cm">{study.provider}</span>
                <Link href="/contact" className="cs-link-cm">
                  Discuss your case {'\u2192'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
