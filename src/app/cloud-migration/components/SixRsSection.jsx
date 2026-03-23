import SectionHeader from './SectionHeader';
import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { sixRs } from './data';

export default function SixRsSection({ section }) {
  const strategies = section?.six_r_strategy?.length
    ? section.six_r_strategy.map((item, index) => ({
        ...sixRs[index % sixRs.length],
        id: item.id || sixRs[index % sixRs.length].id,
        title: item.title || sixRs[index % sixRs.length].title,
        description: item.description || sixRs[index % sixRs.length].description,
        name: sixRs[index % sixRs.length].name,
        timeline: item.timeline,
        number: item.number,
        iconUrl: getStrapiMediaUrl(item.icon),
      }))
    : sixRs;

  return (
    <section className="ps ps-c">
      <div className="container">
        <SectionHeader
          badge="The 6R Migration Framework"
          badgeClassName="badge bo"
          title={section?.heading || 'Which Migration Strategy Is Right for You?'}
          description={
            section?.description ||
            "Not every workload should be treated the same. Thynkwise's discovery process identifies the right strategy for each application - before migration begins, not after. Choosing the wrong strategy creates costly rework that delays your go-live and erodes the business case."
          }
        />

        <div className="sixr-grid">
          {strategies.map((item, index) => (
            <div key={item.id || `${item.title}-${index}`} className={`sixr-card rv ${item.delay}`}>
              <div className="sixr-r">{item.id || `R${item.number}`}</div>
              <span className="sixr-icon">
                {item.iconUrl ? (
                  <CmsImage
                    src={item.iconUrl}
                    alt={item.title}
                    style={{ width: 28, height: 28, objectFit: 'contain' }}
                  />
                ) : (
                  item.icon
                )}
              </span>
              <div className="sixr-name">{item.name}</div>
              <h3 className="sixr-title">{item.title}</h3>
              <p>{item.description}</p>
              <span className="sixr-tag">{item.timeline || item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
