import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { frameworkStack } from './data';

const iconBackgrounds = [
  'rgba(0,229,255,.12)',
  'rgba(0,255,136,.1)',
  'rgba(255,107,53,.12)',
  'rgba(168,85,247,.12)',
];

export default function FrameworkStackSection({ section }) {
  const cards = section?.card?.length
    ? section.card.map((item, index) => ({
        ...frameworkStack[index % frameworkStack.length],
        id: item.id,
        title: item.title || frameworkStack[index % frameworkStack.length].title,
        points: item.point?.map((point) => point.point).filter(Boolean).length
          ? item.point.map((point) => point.point).filter(Boolean)
          : frameworkStack[index % frameworkStack.length].points,
        iconUrl: getStrapiMediaUrl(item.icon),
      }))
    : frameworkStack;

  return (
    <section className="sec">
      <div className="container">
        <div className="sec-ey rv">
          <span className="badge bc">Framework & Stack</span>
        </div>
        <h2 className="sec-ti rv">
          {section?.heading?.title || 'The Full Software Ecosystem'}
        </h2>
        <p className="sec-su rv">
          {section?.heading?.description ||
            'Thynkwise provisions the hardware and configures the entire software stack so your team can start writing code instead of debugging drivers.'}
        </p>
        <div className="stack-grid">
          {cards.map((card, index) => (
            <div key={card.id || `${card.title}-${index}`} className={`stack-cat rv d${(index % 4) + 1}`}>
              <div className="stack-head">
                <div className="stack-icon" style={{ background: iconBackgrounds[index % iconBackgrounds.length] }}>
                  {card.iconUrl ? (
                    <CmsImage
                      src={card.iconUrl}
                      alt={card.title}
                      style={{ width: 22, height: 22, objectFit: 'contain' }}
                    />
                  ) : (
                    card.icon
                  )}
                </div>
                <h3>{card.title}</h3>
              </div>
              <ul className="stack-list">
                {(card.points || []).map((point, pointIndex) => (
                  <li key={`${card.id || card.title}-${pointIndex}`}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
