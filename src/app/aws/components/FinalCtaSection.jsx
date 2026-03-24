import Link from 'next/link';

const defaultSection = {
  title: 'Start Your AWS Journey<br>the Right Way.',
  description: 'Free AWS Assessment - 8 minutes. Cloud health score, FinOps savings estimate, and architecture review. No obligation.',
  primary_cta_text: 'Get Free AWS Assessment',
  primary_cta_link: '/get-assessment',
  secondary_cta_text: 'Book AWS Consultation',
  secondary_cta_link: '/book-demo',
  points: [
    { point: 'No commitment · local-currency billing · Compliant cloud services' },
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
    <section className="final-cta ps-hero">
      <div className="final-cta-inner rv">
        <span className="badge baws aws-final-badge">☁ AWS Advanced Consulting Partner</span>
        <h2 dangerouslySetInnerHTML={{ __html: titleHtml }} />
        <p dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
        <div className="final-cta-acts">
          <Link href={merged.primary_cta_link} className="btn btn-aws">
            {merged.primary_cta_text} {'\u2192'}
          </Link>
          <Link href={merged.secondary_cta_link} className="btn btn-ghost-w">
            {merged.secondary_cta_text}
          </Link>
        </div>
        <div className="aws-final-meta">
          {merged.points.map((item, index) => (
            <div key={`${item.point}-${index}`} className="aws-final-meta-item">
              {index > 0 ? <span className="aws-final-meta-sep">|</span> : null}
              <span>{item.point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
