import SectionHeader from './SectionHeader';
import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { pillars } from './data';

export default function ThreePillarsSection({ section }) {
  const contentPillars = section?.pillar?.length
    ? section.pillar.map((pillar, index) => ({
        ...pillars[index % pillars.length],
        id: pillar.id,
        label: pillar.label || pillars[index % pillars.length].label,
        iconUrl: getStrapiMediaUrl(pillar.icon),
        items: pillar.items?.map((item) => item.items).filter(Boolean) || pillars[index % pillars.length].items,
      }))
    : pillars;

  return (
    <section className="ps ps-dk">
      <div className="container">
        <SectionHeader
          badge="Managed Services Portfolio"
          badgeClassName="badge bw"
          title={section?.heading || 'Three Pillars. Full Coverage.'}
          titleStyle={{ color: '#fff' }}
          description={
            section?.description ||
            "Thynkwise's managed services are organised across three disciplines - infrastructure, applications, and cloud - giving you end-to-end accountability under one SLA."
          }
          descriptionStyle={{ color: 'rgba(255,255,255,0.5)' }}
        />

        <div className="pillars-wrap rv d1">
          {contentPillars.map((pillar, index) => (
            <div key={pillar.id || `${pillar.label}-${index}`} className="pillar">
              <div className="pillar-icon">
                {pillar.iconUrl ? (
                  <CmsImage
                    src={pillar.iconUrl}
                    alt={pillar.label}
                    style={{ width: 32, height: 32, objectFit: 'contain' }}
                  />
                ) : (
                  pillar.icon
                )}
              </div>
              <div className="pillar-label">{pillar.label}</div>
              <div className="pillar-title">
                {pillar.titleTop}
                <br />
                {pillar.titleBottom}
              </div>
              <ul className="pillar-list">
                {pillar.items.map((item, itemIndex) => (
                  <li key={`${pillar.id || pillar.label}-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
