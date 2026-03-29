function getFindingToneClass(tone) {
  switch (tone) {
    case 'high':
      return ' sev-high';
    case 'medium':
      return ' sev-med';
    case 'low':
      return ' sev-low';
    default:
      return '';
  }
}

export default function ResultsSection({ section }) {
  if (!section) {
    return null;
  }

  const scoreCard = section.score_card;
  const findings = section.findings || [];
  const recommendationCards = section.recommendation_cards || [];
  const deliveryBox = section.delivery_box;
  const hasContent =
    scoreCard ||
    section.findings_heading ||
    findings.length ||
    section.recommendations_heading ||
    recommendationCards.length ||
    deliveryBox;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="ga-quiz">
      <div className="quiz-wrap">
        <div className="results-wrap show">
          {scoreCard ? (
            <div className="score-card">
              {scoreCard.label ? <div className="score-label">{scoreCard.label}</div> : null}
              <div className="score-number show">
                {scoreCard.score_value}
                {scoreCard.score_suffix ? <span>{scoreCard.score_suffix}</span> : null}
              </div>
              {scoreCard.grade_text ? <div className="score-grade">{scoreCard.grade_text}</div> : null}
              {scoreCard.description ? <div className="score-desc">{scoreCard.description}</div> : null}
            </div>
          ) : null}

          {findings.length ? (
            <div className="findings-grid">
              {findings.map((item, index) => (
                <div key={item.id || `${item.title}-${index}`} className="finding-card">
                  <div className="finding-header">
                    {item.icon ? <div className="finding-icon">{item.icon}</div> : null}
                    {item.severity_label ? (
                      <div className={`finding-severity${getFindingToneClass(item.severity_tone)}`}>
                        {item.severity_label}
                      </div>
                    ) : null}
                  </div>
                  {item.title ? <h4>{item.title}</h4> : null}
                  {item.description ? <p>{item.description}</p> : null}
                </div>
              ))}
            </div>
          ) : null}

          {(section.recommendations_heading || recommendationCards.length) ? (
            <div className="ga-results-block">
              {section.recommendations_heading ? (
                <h3 className="ga-results-heading">{section.recommendations_heading}</h3>
              ) : null}
              {recommendationCards.map((item, index) => (
                <div key={item.id || `${item.title}-${index}`} className="cta-result">
                  {item.icon ? <div className="cta-result-icon">{item.icon}</div> : null}
                  <div>
                    {item.title ? <h3>{item.title}</h3> : null}
                    {item.description ? <p>{item.description}</p> : null}
                    {item.cta_text ? (
                      <a href={item.cta_link || '#'} className="btn-cta-result">
                        {item.cta_text}
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {deliveryBox ? (
            <div className="ga-delivery-box">
              <div>
                {deliveryBox.title ? <h3>{deliveryBox.title}</h3> : null}
                {deliveryBox.description ? <p>{deliveryBox.description}</p> : null}
              </div>
              <div className="ga-delivery-actions">
                {deliveryBox.primary_cta_text ? (
                  <a href={deliveryBox.primary_cta_link || '#'} className="ga-delivery-primary">
                    {deliveryBox.primary_cta_text}
                  </a>
                ) : null}
                {deliveryBox.secondary_cta_text ? (
                  <a
                    href={deliveryBox.secondary_cta_link || '#'}
                    className="ga-delivery-secondary"
                    target={deliveryBox.secondary_cta_link?.startsWith('http') ? '_blank' : undefined}
                    rel={deliveryBox.secondary_cta_link?.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {deliveryBox.secondary_cta_text}
                  </a>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
