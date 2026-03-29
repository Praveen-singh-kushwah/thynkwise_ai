function unwrapRichText(html, tags) {
  if (!html) {
    return html;
  }

  const trimmed = html.trim();

  for (const tag of tags) {
    const pattern = new RegExp(`^<${tag}\\b[^>]*>([\\s\\S]*)</${tag}>$`, 'i');
    const match = trimmed.match(pattern);

    if (match) {
      return match[1];
    }
  }

  return trimmed;
}

export default function HeroSection({ hero, progressPercent = 0 }) {
  if (!hero) {
    return null;
  }

  const titleHtml = unwrapRichText(hero.title, ['h1', 'h2', 'p', 'div']);
  const descriptionHtml = unwrapRichText(hero.description, ['p', 'div']);
  const badgeItems = hero.badge_items || [];

  return (
    <section className="ga-hero">
      <div className="container">
        <div className="ga-hero-bar">
          {titleHtml ? <h1 className="rv" dangerouslySetInnerHTML={{ __html: titleHtml }} /> : null}
          {descriptionHtml ? (
            <div className="ga-hero-copy rv d1" dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
          ) : null}
          {badgeItems.length ? (
            <div className="ga-badge-row rv d2">
              {badgeItems.map((item, index) => (
                <div key={item.id || `${item.text}-${index}`} className="ga-badge">
                  {item.icon ? <span className="ga-badge-icon">{item.icon}</span> : null}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          ) : null}
          <div className="ga-progress-wrap rv d3">
            <div className="ga-progress-track">
              <div className="ga-progress-fill" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
