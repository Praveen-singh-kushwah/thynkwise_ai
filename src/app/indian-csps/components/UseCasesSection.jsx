export default function UseCasesSection({ section }) {
  if (!section) {
    return null;
  }

  const cards = section.use_case_cards || [];
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
          <div className="uc-grid">
            {cards.map((card, index) => {
              const tags = card.tags || [];

              return (
                <div key={card.id || `${card.title}-${index}`} className={`uc-card rv d${(index % 2) + 1}`}>
                  {card.icon ? <div className="uc-icon">{card.icon}</div> : null}
                  <div className="uc-body">
                    {card.title ? <h3>{card.title}</h3> : null}
                    {card.description ? <p>{card.description}</p> : null}
                    {tags.length ? (
                      <div className="uc-tags">
                        {tags.map((tag, tagIndex) => (
                          <span key={tag.id || `${tag.label}-${tagIndex}`} className="uc-tag">
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {card.result_text ? <span className="uc-result">{card.result_text}</span> : null}
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
