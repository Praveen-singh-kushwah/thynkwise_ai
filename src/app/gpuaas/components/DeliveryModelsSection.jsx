import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { deliveryModels } from './data';

const accentStyles = [
  {
    accent: 'var(--gpu-cyan)',
    iconBackground: 'rgba(0,229,255,.12)',
  },
  {
    accent: 'var(--gpu-green)',
    iconBackground: 'rgba(0,255,136,.1)',
  },
  {
    accent: 'var(--gpu-purple)',
    iconBackground: 'rgba(168,85,247,.12)',
  },
  {
    accent: 'var(--gpu-orange)',
    iconBackground: 'rgba(255,107,53,.12)',
  },
  {
    accent: 'var(--gpu-amber)',
    iconBackground: 'rgba(251,191,36,.1)',
  },
  {
    accent: 'var(--gpu-red)',
    iconBackground: 'rgba(248,113,113,.1)',
  },
];

export default function DeliveryModelsSection({ section }) {
  const cards = section?.card?.length
    ? section.card.map((item, index) => ({
        ...deliveryModels[index % deliveryModels.length],
        id: item.id,
        title: item.title || deliveryModels[index % deliveryModels.length].title,
        description: item.description || deliveryModels[index % deliveryModels.length].description,
        tags: item.points?.map((point) => point.point).filter(Boolean).length
          ? item.points.map((point) => point.point).filter(Boolean)
          : deliveryModels[index % deliveryModels.length].tags,
        iconUrl: getStrapiMediaUrl(item.icon),
      }))
    : deliveryModels;

  return (
    <section className="sec sec-dk">
      <div className="container">
        <div className="sec-ey rv">
          <span className="badge bc">Delivery Architecture</span>
        </div>
        <h2 className="sec-ti rv">{section?.heading?.title || 'Six Ways to Deploy GPU Compute'}</h2>
        <p className="sec-su rv">
          {section?.heading?.description ||
            'You are not locked to VMs. Every workload has the right delivery model - from single-node bare metal to rack-scale supercomputers to on-premise hardware you own. Thynkwise provisions and manages all of them.'}
        </p>

        <div className="del-grid rv d1">
          {cards.map((card, index) => (
            <div
              key={card.id || `${card.title}-${index}`}
              className="del-card"
              style={{ '--del-accent': accentStyles[index % accentStyles.length].accent }}
            >
              <div className="del-bar" />
              <span className="del-num">{card.number}</span>
              <div
                className="del-icon"
                style={{ background: accentStyles[index % accentStyles.length].iconBackground }}
              >
                {card.iconUrl ? (
                  <CmsImage
                    src={card.iconUrl}
                    alt={card.title}
                    style={{ width: 24, height: 24, objectFit: 'contain' }}
                  />
                ) : (
                  card.icon
                )}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="del-tags">
                {card.tags.map((tag, tagIndex) => (
                  <span key={`${card.id || card.title}-${tagIndex}`} className="del-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
