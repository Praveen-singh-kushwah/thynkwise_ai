export default function ServicesSection({ section }) {
  if (!section) {
    return null;
  }

  const serviceCards = section.service_cards || [];
  const credentialCards = section.credential_cards || [];
  const hasMainSection =
    section.eyebrow || section.title || section.description || serviceCards.length;
  const hasCredentials =
    section.credentials_eyebrow || section.credentials_title || credentialCards.length;

  if (!hasMainSection && !hasCredentials) {
    return null;
  }

  return (
    <section className="ps ps-dk">
      <div className="container">
        {hasMainSection ? (
          <>
            {section.eyebrow ? (
              <div className="sec-eyebrow rv">
                <span className="badge bw">{section.eyebrow}</span>
              </div>
            ) : null}
            {section.title ? <h2 className="sec-title sec-title-light rv">{section.title}</h2> : null}
            {section.description ? (
              <p className="sec-sub sec-sub-light rv">{section.description}</p>
            ) : null}
            {serviceCards.length ? (
              <div className="svc-grid">
                {serviceCards.map((card, index) => {
                  const tags = card.tags || [];

                  return (
                    <div key={card.id || `${card.title}-${index}`} className={`svc-item rv d${(index % 3) + 1}`}>
                      {card.icon ? <div className="svc-icon">{card.icon}</div> : null}
                      <div>
                        {card.title ? <div className="svc-name">{card.title}</div> : null}
                        {card.description ? <div className="svc-desc">{card.description}</div> : null}
                        {tags.length ? (
                          <div className="svc-tags">
                            {tags.map((tag, tagIndex) => (
                              <span key={tag.id || `${tag.label}-${tagIndex}`} className="svc-tag">
                                {tag.label}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </>
        ) : null}

        {hasCredentials ? (
          <div className="indian-credentials-block">
            {section.credentials_eyebrow ? (
              <div className="sec-eyebrow rv">
                <span className="badge bo indian-credentials-badge">{section.credentials_eyebrow}</span>
              </div>
            ) : null}
            {section.credentials_title ? (
              <h3 className="indian-credentials-title rv">{section.credentials_title}</h3>
            ) : null}
            {credentialCards.length ? (
              <div className="cert-grid">
                {credentialCards.map((card, index) => (
                  <div
                    key={card.id || `${card.title}-${index}`}
                    className={`cert-card rv d${(index % 3) + 1}`}
                  >
                    {card.icon ? <div className="cert-icon">{card.icon}</div> : null}
                    {card.title ? <div className="cert-name">{card.title}</div> : null}
                    {card.description ? <div className="cert-desc">{card.description}</div> : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
