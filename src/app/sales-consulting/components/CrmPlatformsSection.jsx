const fallbackSection = {
  eyebrow_text: 'CRM Platforms',
  title: 'Every major CRM. One expert team.',
  description:
    'Platform-certified across the four CRMs that dominate B2B sales, with delivery partnerships that give clients enterprise-grade implementation at competitive speed.',
  platform_cards: [],
};

export default function CrmPlatformsSection({ section }) {
  const data = section?.title ? section : fallbackSection;
  const cards = data?.platform_cards || [];

  return (
    <section className="sc-section">
      <div className="container">
        {data?.eyebrow_text ? <div className="sc-label rv">{data.eyebrow_text}</div> : null}
        {data?.title ? <h2 className="sc-title rv d1">{data.title}</h2> : null}
        {data?.description ? <p className="sc-subtitle rv d2">{data.description}</p> : null}

        {cards.length ? (
          <div className="sc-crm-grid">
            {cards.map((card, index) => (
              <article className={`sc-crm-card rv d${index % 2}`} key={`${card?.title}-${index}`}>
                <div
                  className="sc-crm-top"
                  style={{ backgroundColor: card?.accent_color || '#3a59a8' }}
                />
                {card?.platform_label ? (
                  <div className="sc-crm-platform">{card.platform_label}</div>
                ) : null}
                {card?.title ? <h3>{card.title}</h3> : null}
                {card?.description ? <p className="sc-crm-copy">{card.description}</p> : null}

                {card?.bullet_items?.length ? (
                  <ul className="sc-arrow-list">
                    {card.bullet_items.map((item, itemIndex) => (
                      <li key={`${item?.text}-${itemIndex}`}>{item?.text}</li>
                    ))}
                  </ul>
                ) : null}

                {card?.badge_text ? <div className="sc-crm-badge">{card.badge_text}</div> : null}
                {card?.result_text ? <div className="sc-crm-result">{card.result_text}</div> : null}
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
