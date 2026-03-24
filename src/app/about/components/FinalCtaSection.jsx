import Link from 'next/link';

const defaultSection = {
  title: "Ready to work with a cloud partner<br>who's <em>genuinely on your side?</em>",
  description:
    'Multi-cloud expertise. Compliance-grade architecture. A named account manager who knows your environment. This is what every organisation deserves - and exactly what Thynkwise delivers.',
  primary_cta_text: 'Get Your Free Cloud Assessment',
  primary_cta_link: '/get-assessment',
  secondary_cta_text: 'Book a 30-Minute Demo',
  secondary_cta_link: '/book-demo',
  points: [
    { point: 'No commitment required' },
    { point: 'Assessment delivered in 3 business days' },
    { point: 'WhatsApp: +91 99999 99999' },
  ],
};

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

export default function FinalCtaSection({ section }) {
  const merged = {
    ...defaultSection,
    ...section,
    points: section?.points?.length ? section.points : defaultSection.points,
  };

  const titleHtml = unwrapRichText(merged.title, ['h1', 'h2', 'h3', 'p', 'div']);
  const descriptionHtml = unwrapRichText(merged.description, ['p', 'div']);

  return (
    <section className="final-cta">
      <div className="container">
        <div className="final-cta-inner rv">
          <h2 dangerouslySetInnerHTML={{ __html: titleHtml }} />
          <p dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
          <div className="final-acts">
            <Link href={merged.primary_cta_link} className="btn btn-primary" style={{ fontSize: '.9rem' }}>
              {merged.primary_cta_text} {'\u2192'}
            </Link>
            <Link href={merged.secondary_cta_link} className="btn btn-ghost-w">
              {merged.secondary_cta_text}
            </Link>
          </div>
          <div className="final-meta">
            {merged.points.map((item, index) => (
              <div key={`${item.point}-${index}`} className="final-meta-item">
                <span>{item.point}</span>
                {index < merged.points.length - 1 ? <span className="final-meta-sep">|</span> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
