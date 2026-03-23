import Link from 'next/link';
import SectionHeader from './SectionHeader';
import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { caseStudies } from './data';

export default function CaseStudiesSection({ section }) {
  const studies = section?.case_study?.length
    ? section.case_study.map((study, index) => {
        const fallback = caseStudies[index % caseStudies.length];
        const footer = study.points?.map((item) => item.point).filter(Boolean).join(' · ');

        return {
          ...fallback,
          id: study.id,
          industry: study.industry || fallback.industry,
          company: study.company || fallback.company,
          quote: study.quote || fallback.quote,
          outcome: study.outcome || fallback.outcome,
          keyOutcome: study.key_outcome || fallback.keyOutcome,
          footer: footer || fallback.provider,
          iconUrl: getStrapiMediaUrl(study.icon),
          kpis: [
            {
              ...fallback.kpis[0],
              value: study.kpi_1_value || fallback.kpis[0].value,
              label: study.kpi_1_label || fallback.kpis[0].label,
            },
            {
              ...fallback.kpis[1],
              value: study.kpi_2_value || fallback.kpis[1].value,
              label: study.kpi_2_label || fallback.kpis[1].label,
            },
          ],
        };
      })
    : caseStudies.map((study) => ({
        ...study,
        footer: study.provider,
      }));

  return (
    <section className="cy-cases-sec">
      <div className="container">
        <SectionHeader
          badge="Client Outcomes"
          badgeClassName="badge br"
          title={section?.heading || 'When Threats Hit. What Happened Next.'}
          description={
            section?.description ||
            'Three real-world scenarios from Thynkwise-managed security clients — ransomware containment, compliance recovery, and enterprise SOC build.'
          }
        />
        <div className="cy-case-grid">
          {studies.map((study, index) => (
            <div key={study.id || `${study.company}-${index}`} className={`cy-case-card rv d${index + 1}`}>
              <div className="cy-case-head" style={study.headerStyle}>
                <div className="cy-case-icon">
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
                  <div className="cy-case-industry">{study.industry}</div>
                  <div className="cy-case-company">{study.company}</div>
                </div>
              </div>
              <div className="cy-case-body">
                <p className="cy-case-quote">{study.quote}</p>
                <div className="cy-case-kpis">
                  {study.kpis.map((kpi, kpiIndex) => (
                    <div
                      key={`${study.id || study.company}-${kpiIndex}`}
                      className="cy-case-kpi"
                      style={kpi.style}
                    >
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
                <span className="cy-case-provider">{study.footer}</span>
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

