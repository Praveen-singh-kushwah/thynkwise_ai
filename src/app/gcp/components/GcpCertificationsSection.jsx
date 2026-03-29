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

const defaultSection = {
  eyebrow: 'GCP Expertise',
  title: '40+ active GCP certifications.<br>From data engineering to ML.',
  description:
    'Google Cloud certifications require annual recertification - our team maintains active credentials across every GCP discipline, renewed every year.',
  certification_cards: [
    { icon: '🏗️', name: 'Cloud Architect', count: '12+', level: 'Professional Level' },
    { icon: '📊', name: 'Data Engineer', count: '10+', level: 'Professional Specialty' },
    { icon: '🤖', name: 'ML Engineer', count: '8+', level: 'Professional Specialty' },
    { icon: '⎈', name: 'DevOps Engineer', count: '10+', level: 'Professional Specialty' },
  ],
};

export default function GcpCertificationsSection({ section }) {
  const eyebrow = section?.eyebrow || defaultSection.eyebrow;
  const titleHtml = unwrapRichText(section?.title || defaultSection.title, ['h1', 'h2', 'h3', 'p', 'div']);
  const description = section?.description || defaultSection.description;
  const cards = section?.certification_cards?.length
    ? section.certification_cards
    : defaultSection.certification_cards;

  return (
    <section className="ps ps-pale">
      <div className="container">
        <span className="sec-label rv">{eyebrow}</span>
        <h2 className="sec-title rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />
        <p className="sec-sub rv d2">{description}</p>
        <div className="cert-grid rv d3">
          {cards.map((card, index) => {
            const fallback = defaultSection.certification_cards[index % defaultSection.certification_cards.length];

            return (
              <div key={card.id || `${card.name}-${index}`} className="cert-card">
                <div className="cert-icon">{card.icon || fallback.icon}</div>
                <div className="cert-name">{card.name}</div>
                <span className="cert-count">{card.count}</span>
                <div className="cert-type">{card.level}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
