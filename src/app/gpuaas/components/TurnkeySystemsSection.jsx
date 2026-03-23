import { turnkeySystems } from './data';

const badgeStyles = [
  { background: 'rgba(0,229,255,.12)', color: 'var(--gpu-cyan)' },
  { background: 'rgba(255,107,53,.12)', color: 'var(--gpu-orange)' },
  { background: 'rgba(168,85,247,.12)', color: 'var(--gpu-purple)' },
];

export default function TurnkeySystemsSection({ section }) {
  const cards = section?.card?.length
    ? section.card.map((item, index) => ({
        ...turnkeySystems[index % turnkeySystems.length],
        id: item.id,
        title: item.title || turnkeySystems[index % turnkeySystems.length].title,
        subtitle: item.subtitle || turnkeySystems[index % turnkeySystems.length].subtitle,
        badgeText: item.badgeText || turnkeySystems[index % turnkeySystems.length].badgeText,
        description: item.description || turnkeySystems[index % turnkeySystems.length].description,
        stats: item.stat?.map((stat) => ({ value: stat.value, label: stat.label })).filter((stat) => stat.value || stat.label).length
          ? item.stat.map((stat) => ({ value: stat.value, label: stat.label }))
          : turnkeySystems[index % turnkeySystems.length].stats,
        points: item.point?.map((point) => point.point).filter(Boolean).length
          ? item.point.map((point) => point.point).filter(Boolean)
          : turnkeySystems[index % turnkeySystems.length].points,
      }))
    : turnkeySystems;

  return (
    <section className="sec sec-dk">
      <div className="container">
        <div className="sec-ey rv">
          <span className="badge bo">Turnkey Systems</span>
        </div>
        <h2 className="sec-ti rv">
          {section?.heading?.title || 'From Single Node to AI Supercomputer'}
        </h2>
        <p className="sec-su rv">
          {section?.heading?.description ||
            'Thynkwise provisions and manages GPU system tiers from a single DGX node to large AI supercomputing estates.'}
        </p>
        <div className="sys-grid">
          {cards.map((card, index) => (
            <div key={card.id || `${card.title}-${index}`} className={`sys-card rv d${(index % 3) + 1}`}>
              <span className="sys-badge" style={badgeStyles[index % badgeStyles.length]}>
                {card.badgeText}
              </span>
              <div className="sys-tier">{card.subtitle}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="sys-spec-band">
                {(card.stats || []).map((stat, statIndex) => (
                  <div key={`${card.id || card.title}-${statIndex}`} className="sys-spec">
                    <div className="sys-spec-n">{stat.value}</div>
                    <div className="sys-spec-l">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="sys-tags">
                {(card.points || []).map((point, pointIndex) => (
                  <span key={`${card.id || card.title}-${pointIndex}`} className="sys-tag">
                    {point}
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
