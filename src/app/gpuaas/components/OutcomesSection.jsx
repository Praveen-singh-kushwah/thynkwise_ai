import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { outcomes } from './data';

const outcomeStyles = [
  {
    headerBackground: 'linear-gradient(135deg,#0d1a0d,#133a1a)',
    iconBackground: 'rgba(0,255,136,.1)',
    iconColor: 'var(--gpu-green)',
    kpiColors: ['var(--gpu-cyan)', 'var(--gpu-green)'],
  },
  {
    headerBackground: 'linear-gradient(135deg,#0d1020,#121840)',
    iconBackground: 'rgba(0,229,255,.1)',
    iconColor: 'var(--gpu-cyan)',
    kpiColors: ['var(--gpu-orange)', 'var(--gpu-cyan)'],
  },
  {
    headerBackground: 'linear-gradient(135deg,#1a0a0a,#3a1212)',
    iconBackground: 'rgba(248,113,113,.1)',
    iconColor: 'var(--gpu-red)',
    kpiColors: ['var(--gpu-green)', 'var(--gpu-cyan)'],
  },
];

export default function OutcomesSection({ section }) {
  const cards = section?.card?.length
    ? section.card.map((item, index) => ({
        ...outcomes[index % outcomes.length],
        id: item.id,
        title: item.title || outcomes[index % outcomes.length].title,
        subtitle: item.subtitle || outcomes[index % outcomes.length].subtitle,
        description1: item.description_1 || outcomes[index % outcomes.length].description1,
        description2: item.description_2 || outcomes[index % outcomes.length].description2,
        container1:
          item.container_1?.value || item.container_1?.label
            ? item.container_1
            : outcomes[index % outcomes.length].container1,
        container2:
          item.container_2?.value || item.container_2?.label
            ? item.container_2
            : outcomes[index % outcomes.length].container2,
        points: item.points?.map((point) => point.point).filter(Boolean).length
          ? item.points.map((point) => point.point).filter(Boolean)
          : outcomes[index % outcomes.length].points,
        iconUrl: getStrapiMediaUrl(item.icon),
      }))
    : outcomes;

  return (
    <section className="sec sec-dk">
      <div className="container">
        <div className="sec-ey rv">
          <span className="badge bg-badge">Outcomes</span>
        </div>
        <h2 className="sec-ti rv">{section?.heading || 'What Customers Computed'}</h2>
        <div className="cs-grid">
          {cards.map((card, index) => {
            const theme = outcomeStyles[index % outcomeStyles.length];
            return (
              <div key={card.id || `${card.title}-${index}`} className={`cs-card rv d${(index % 3) + 1}`}>
                <div className="cs-hd" style={{ background: theme.headerBackground }}>
                  <div className="cs-ico" style={{ background: theme.iconBackground, color: theme.iconColor }}>
                    {card.iconUrl ? (
                      <CmsImage
                        src={card.iconUrl}
                        alt={card.title}
                        style={{ width: 22, height: 22, objectFit: 'contain' }}
                      />
                    ) : (
                      '\u26A1'
                    )}
                  </div>
                  <div>
                    <div className="cs-ind">{card.subtitle}</div>
                    <div className="cs-co">{card.title}</div>
                  </div>
                </div>
                <div className="cs-body">
                  <p className="cs-quote">{card.description1}</p>
                  <div className="cs-kpis">
                    {[card.container1, card.container2].map((item, itemIndex) => (
                      <div key={`${card.id || card.title}-${itemIndex}`} className="cs-kpi">
                        <div className="cs-kpi-n" style={{ color: theme.kpiColors[itemIndex] || 'var(--gpu-cyan)' }}>
                          {item?.value}
                        </div>
                        <div className="cs-kpi-l">{item?.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="cs-key">
                    <strong>Stack:</strong> {card.description2}
                  </div>
                </div>
                <div className="cs-foot">
                  <span className="cs-prov">{(card.points || []).join(' · ')}</span>
                  <a href="/contact" className="cs-lnk">
                    Discuss {'\u2192'}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
