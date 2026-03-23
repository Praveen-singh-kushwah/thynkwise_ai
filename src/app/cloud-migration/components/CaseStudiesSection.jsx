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
        challenge: study.quote || caseStudies[index % caseStudies.length].challenge,
        outcome: study.outcome || caseStudies[index % caseStudies.length].outcome,
        iconUrl: getStrapiMediaUrl(study.icon),
        metrics: [
          {
            ...caseStudies[index % caseStudies.length].metrics[0],
            value: study.kpi_1_value || caseStudies[index % caseStudies.length].metrics[0].value,
            label: study.kpi_1_label || caseStudies[index % caseStudies.length].metrics[0].label,
          },
          {
            ...caseStudies[index % caseStudies.length].metrics[1],
            value: study.kpi_2_value || caseStudies[index % caseStudies.length].metrics[1].value,
            label: study.kpi_2_label || caseStudies[index % caseStudies.length].metrics[1].label,
          },
        ],
        keyOutcome: {
          ...caseStudies[index % caseStudies.length].keyOutcome,
          text: study.key_outcome || caseStudies[index % caseStudies.length].keyOutcome.text,
        },
        provider:
          study.points?.map((point) => point.point).filter(Boolean).join(' / ') ||
          caseStudies[index % caseStudies.length].provider,
      }))
    : caseStudies;

  return (
    <section className="ps ps-c">
      <div className="container">
        <SectionHeader
          badge="Migration Case Studies"
          badgeClassName="badge bo"
          title={section?.heading || 'Real Migrations. Measurable Results. Every Time.'}
          description={
            section?.description ||
            'Every engagement is documented from discovery to hypercare. Here are three that tell the full story.'
          }
        />

        <div className="cs-grid-cm">
          {studies.map((study, index) => (
            <div key={study.id || `${study.company}-${index}`} className={`cs-card-cm rv ${study.delay}`}>
              <div className="cs-header-cm" style={{ background: study.headerBackground }}>
                <div className="cs-ind-cm" style={{ color: study.iconColor }}>
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
                  <div className="cs-industry-cm">{study.industry}</div>
                  <div className="cs-company-cm">{study.company}</div>
                </div>
              </div>

              <div className="cs-body-cm">
                <p className="cs-challenge">&ldquo;{study.challenge}&rdquo;</p>

                <div className="cs-metrics-pair">
                  {study.metrics.map((metric, metricIndex) => (
                    <div
                      key={`${study.id || study.company}-${metricIndex}`}
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
                  <div className="cs-key-label" style={{ color: study.keyOutcome.color }}>
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
