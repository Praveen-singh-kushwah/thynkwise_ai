export default function WhyPartnerSection({ section }) {
  if (!section) {
    return null;
  }

  const cards = section.benefit_cards || [];
  const hasContent = section.eyebrow || section.title || section.description || cards.length;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="ps ps-c">
      <div className="container">
        {section.eyebrow ? (
          <div className="sec-eyebrow rv">
            <span className="badge bt">{section.eyebrow}</span>
          </div>
        ) : null}
        {section.title ? <h2 className="sec-title rv">{section.title}</h2> : null}
        {section.description ? <p className="sec-sub rv">{section.description}</p> : null}
        {cards.length ? (
          <div className="why-grid">
            {cards.map((card, index) => (
              <div key={card.id || `${card.title}-${index}`} className={`why-card rv d${(index % 3) + 1}`}>
                {card.icon ? <div className="why-icon">{card.icon}</div> : null}
                {card.title ? <h3>{card.title}</h3> : null}
                {card.description ? <p>{card.description}</p> : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
