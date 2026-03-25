import Link from 'next/link';

const defaultSection = {
  title: 'Start Your Azure Journey<br>the Right Way',
  description:
    'Free Azure Assessment in 8 minutes. Get your cost health score, compliance gap analysis, and Azure Hybrid Benefit estimate - all in local currency.',
  primary_cta_text: 'Get Free Azure Assessment',
  primary_cta_link: '/get-assessment',
  secondary_cta_text: 'Book Azure Consultation',
  secondary_cta_link: '/book-demo',
  points: [
    { point: 'No commitment | local currency pricing | DPDP compliance included' },
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
          <span className="badge bw azure-final-badge">{'\u2b21'} Microsoft Certified Solution Provider</span>
          <h2 dangerouslySetInnerHTML={{ __html: titleHtml }} />
          <p dangerouslySetInnerHTML={{ __html: descriptionHtml }} />

          <div className="final-cta-acts">
            <Link href={merged.primary_cta_link || defaultSection.primary_cta_link} className="btn btn-primary">
              {merged.primary_cta_text || defaultSection.primary_cta_text} {'\u2192'}
            </Link>
            <Link href={merged.secondary_cta_link || defaultSection.secondary_cta_link} className="btn btn-ghost-w">
              {merged.secondary_cta_text || defaultSection.secondary_cta_text}
            </Link>
          </div>

          <div className="azure-final-meta">
            {merged.points.map((item, index) => (
              <div key={`${item.point}-${index}`} className="azure-final-meta-item">
                {index > 0 ? <span className="azure-final-meta-sep">|</span> : null}
                <span>{item.point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
