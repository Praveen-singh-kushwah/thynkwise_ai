import SectionHeader from './SectionHeader';
import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { industries } from './data';

export default function IndustryMigrationsSection({ section }) {
  const cards = section?.industry_card?.length
    ? section.industry_card.map((industry, index) => ({
        ...industries[index % industries.length],
        id: industry.id,
        name: industry.industry || industries[index % industries.length].name,
        subtitle: industry.subtitle || industries[index % industries.length].subtitle,
        cloud: industry.primary_cloud || industries[index % industries.length].cloud,
        compliance: industry.compliance || industries[index % industries.length].compliance,
        timeline: industry.timeline || industries[index % industries.length].timeline,
        capability: industry.description || industries[index % industries.length].capability,
        iconUrl: getStrapiMediaUrl(industry.icon),
      }))
    : industries;

  return (
    <section className="ps ps-w">
      <div className="container">
        <SectionHeader
          badge="By Industry"
          badgeClassName="badge bb"
          title={section?.heading || 'Migration Expertise Across Every Sector'}
          description={
            section?.description ||
            "Every industry has unique compliance requirements, data sensitivity, and uptime constraints. Thynkwise has migrated workloads across 10+ sectors - here's what matters for each."
          }
        />

        <div className="cm-industry-grid rv d1">
          {cards.map((industry, index) => (
            <div key={industry.id || `${industry.name}-${index}`} className="cm-ind-card">
              <div
                className="cm-ind-card-head"
                style={{ background: industry.background }}
              >
                <span className="cm-ind-card-icon">
                  {industry.iconUrl ? (
                    <CmsImage
                      src={industry.iconUrl}
                      alt={industry.name}
                      style={{ width: 28, height: 28, objectFit: 'contain' }}
                    />
                  ) : (
                    industry.icon
                  )}
                </span>
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
