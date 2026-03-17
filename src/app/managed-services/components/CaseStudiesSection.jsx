import Link from 'next/link';
import SectionHeader from './SectionHeader';
import { caseStudies } from './data';

export default function CaseStudiesSection() {
  return (
    <section className="ps ps-c">
      <div className="container">
        <SectionHeader
          badge="Case Studies"
          badgeClassName="badge bo"
          title="Managed Services. Real Outcomes."
          description="Three clients who handed Thynkwise their operations - and what happened next."
        />

        <div className="cs-grid-ms">
          {caseStudies.map((study) => (
            <div key={study.company} className={`cs-card-ms rv ${study.delay}`}>
              <div className="cs-hd-ms" style={{ background: study.headerBackground }}>
                <div className="cs-ico-ms" style={{ color: study.iconColor }}>
                  {study.icon}
                </div>
                <div>
                  <div className="cs-ind-ms">{study.industry}</div>
                  <div className="cs-co-ms">{study.company}</div>
                </div>
              </div>

              <div className="cs-body-ms">
                <p className="cs-quote">&ldquo;{study.quote}&rdquo;</p>

                <div className="cs-kpis-ms">
                  {study.kpis.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="cs-kpi-ms"
                      style={{ background: kpi.background }}
                    >
                      <div className="cs-kpi-n" style={{ color: kpi.color }}>
                        {kpi.value}
                      </div>
                      <div className="cs-kpi-l">{kpi.label}</div>
                    </div>
                  ))}
                </div>

                <p className="cs-out">{study.outcome}</p>
                <div className="cs-key">
                  <strong>Key outcome:</strong> {study.keyOutcome}
                </div>
              </div>

              <div className="cs-foot-ms">
                <span className="cs-prov">{study.footer}</span>
                <Link href="/contact" className="cs-lnk">
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
