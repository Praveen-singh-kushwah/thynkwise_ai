import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { whyThynkwise } from './data';

export default function WhyThynkwiseSection({ section }) {
  const cards = section?.card?.length
    ? section.card.map((item, index) => ({
        ...whyThynkwise[index % whyThynkwise.length],
        id: item.id,
        title: item.title || whyThynkwise[index % whyThynkwise.length].title,
        description: item.description || whyThynkwise[index % whyThynkwise.length].description,
        iconUrl: getStrapiMediaUrl(item.icon),
      }))
    : whyThynkwise;

  return (
    <section className="sec">
      <div className="container">
        <div className="sec-ey rv">
          <span className="badge bc">Why Thynkwise</span>
        </div>
        <h2 className="sec-ti rv">
          {section?.heading?.title || 'GPU Cloud Without the Ceiling'}
        </h2>
        <p className="sec-su rv">
          {section?.heading?.description ||
            'Most providers give you one GPU type on one delivery model. Thynkwise gives you the entire GPU ecosystem - hardware-agnostic, delivery-model-agnostic, managed end-to-end.'}
        </p>
        <div className="why-grid">
          {cards.map((card, index) => (
            <div key={card.id || `${card.title}-${index}`} className={`why-card rv d${(index % 3) + 1}`}>
              <span className="why-ico">
                {card.iconUrl ? (
                  <CmsImage
                    src={card.iconUrl}
                    alt={card.title}
                    style={{ width: 24, height: 24, objectFit: 'contain' }}
                  />
                ) : (
                  card.icon
                )}
              </span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
