import SectionHeader from './SectionHeader';
import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { whyPoints } from './data';

export default function WhyThynkwiseSection({ section }) {
  const cards = section?.card?.length
    ? section.card.map((item, index) => ({
        ...whyPoints[index % whyPoints.length],
        id: item.id,
        title: item.title || whyPoints[index % whyPoints.length].title,
        description: item.description || whyPoints[index % whyPoints.length].description,
        iconUrl: getStrapiMediaUrl(item.icon),
      }))
    : whyPoints;

  return (
    <section className="cy-why-sec">
      <div className="container">
        <SectionHeader
          badge="Why Thynkwise"
          badgeClassName="badge br"
          title={section?.heading?.title || "Security That Doesn't Just Report - It Responds"}
          description={
            section?.heading?.description ||
            'Most MSSPs monitor and alert. Thynkwise monitors, alerts, investigates, contains, and reports — under a single SLA with a named analyst accountable for your account.'
          }
        />
        <div className="cy-why-grid">
          {cards.map((point, index) => (
            <div key={point.id || `${point.title}-${index}`} className={`cy-why-card rv d${(index % 3) + 1}`}>
              <div className="cy-why-icon">
                {point.iconUrl ? (
                  <CmsImage
                    src={point.iconUrl}
                    alt={point.title}
                    style={{ width: 28, height: 28, objectFit: 'contain' }}
                  />
                ) : (
                  point.icon
                )}
              </div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

