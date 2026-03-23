import SectionHeader from './SectionHeader';
import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { domainCards } from './data';

export default function ThreeDomainsSection({ section }) {
  const cards = section?.migration_service?.length
    ? section.migration_service.slice(0, 3).map((card, index) => {
        const fallback = domainCards[index % domainCards.length];
        const cmsTags = card.tag?.map((item) => item.tag).filter(Boolean);

        return {
          ...fallback,
          id: card.id,
          title: card.title || fallback.title,
          description: card.description || fallback.description,
          items: cmsTags?.length ? cmsTags : fallback.items,
          iconUrl: getStrapiMediaUrl(card.icon),
        };
      })
    : domainCards;

  return (
    <section className="cy-domains-sec">
      <div className="container">
        <SectionHeader
          badge="Security Model"
          badgeClassName="badge br"
          title="Three Domains. One Partner. Total Coverage."
          description={"Security is not a single product — it's a practice. Thynkwise organises all services across three interlocking security domains so nothing falls through the cracks."}
        />
        <div className="cy-domain-grid">
          {cards.map((card, index) => (
            <div
              key={card.id || `${card.title}-${index}`}
              className={`cy-domain-card ${card.variant} rv d${index + 1}`}
            >
              <div className="cy-domain-number">{card.number}</div>
              <div className="cy-domain-icon">
                {card.iconUrl ? (
                  <CmsImage
                    src={card.iconUrl}
                    alt={card.title}
                    style={{ width: 28, height: 28, objectFit: 'contain' }}
                  />
                ) : (
                  card.icon
                )}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <ul className="cy-domain-list">
                {(card.items || []).map((item, itemIndex) => (
                  <li key={`${card.id || card.title}-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
