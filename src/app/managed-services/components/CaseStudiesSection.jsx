import Link from 'next/link';
import SectionHeader from './SectionHeader';
import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { caseStudies } from './data';

export default function CaseStudiesSection({ section }) {
  const studies = section?.case_study?.length
    ? section.case_study.map((study, index) => ({
        ...caseStudies[index % caseStudies.length],
        id: study.id,
        industry: study.industry || caseStudies[index % caseStudies.length].industry,
        company: study.company || caseStudies[index % caseStudies.length].company,
        quote: study.quote || caseStudies[index % caseStudies.length].quote,
        outcome: study.outcome || caseStudies[index % caseStudies.length].outcome,
        keyOutcome: study.key_outcome || caseStudies[index % caseStudies.length].keyOutcome,
        iconUrl: getStrapiMediaUrl(study.icon),
        kpis: [
          {
            ...caseStudies[index % caseStudies.length].kpis[0],
            value: study.kpi_1_value || caseStudies[index % caseStudies.length].kpis[0].value,
            label: study.kpi_1_label || caseStudies[index % caseStudies.length].kpis[0].label,
          },
          {
            ...caseStudies[index % caseStudies.length].kpis[1],
            value: study.kpi_2_value || caseStudies[index % caseStudies.length].kpis[1].value,
            label: study.kpi_2_label || caseStudies[index % caseStudies.length].kpis[1].label,
          },
        ],
      }))
    : caseStudies;

  return (
    <section className="ps ps-c">
      <div className="container">
        <SectionHeader
          badge="Case Studies"
          badgeClassName="badge bo"
          title={section?.heading || 'Managed Services. Real Outcomes.'}
          description={
            section?.description ||
            'Three clients who handed Thynkwise their operations - and what happened next.'
          }
        />

        <div className="cs-grid-ms">
          {studies.map((study, index) => (
            <div key={study.id || `${study.company}-${index}`} className={`cs-card-ms rv ${study.delay}`}>
              <div className="cs-hd-ms" style={{ background: study.headerBackground }}>
                <div className="cs-ico-ms" style={{ color: study.iconColor }}>
                  {study.iconUrl ? (
                    <CmsImage
                      src={study.iconUrl}
                      alt={study.company}
                      style={{ width: 28, height: 28, objectFit: 'contain' }}
                    />
                  ) : (
                    study.icon
                  )}
                </div>
                <div>
                  <div className="cs-ind-ms">{study.industry}</div>
                  <div className="cs-co-ms">{study.company}</div>
                </div>
              </div>

              <div className="cs-body-ms">
                <p className="cs-quote">&ldquo;{study.quote}&rdquo;</p>

                <div className="cs-kpis-ms">
                  {study.kpis.map((kpi, kpiIndex) => (
                    <div
                      key={`${study.id || study.company}-${kpiIndex}`}
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
