import Link from 'next/link';

const defaultSection = {
  title: 'Start Your Google Cloud Journey.<br>In your chosen currency. With Startup Credits.',
  description:
    'Free GCP Assessment - 8 minutes. Startup credit eligibility, AI/ML readiness score, and cost estimate. No commitment required.',
  primary_cta_text: 'Get Free GCP Assessment',
  primary_cta_link: '/get-assessment',
  secondary_cta_text: 'Talk to AI/ML Expert',
  secondary_cta_link: '/book-demo',
  support_note: 'No commitment | local currency pricing | Startup credits checked free',
  whatsapp_text: 'WhatsApp: +91 99999 99999',
  whatsapp_link: 'https://wa.me/919999999999',
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
  };

  const titleHtml = unwrapRichText(merged.title, ['h1', 'h2', 'h3', 'p', 'div']);
  const descriptionHtml = unwrapRichText(merged.description, ['p', 'div']);

  return (
    <section className="final-cta ps-gcp">
      <div className="container">
        <div className="final-cta-inner rv">
          <div className="g-dots gcp-final-dots">
            <span className="g-dot blue gcp-final-dot" />
            <span className="g-dot red gcp-final-dot" />
            <span className="g-dot yellow gcp-final-dot" />
            <span className="g-dot green gcp-final-dot" />
          </div>
          <h2 dangerouslySetInnerHTML={{ __html: titleHtml }} />
          <p dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
          <div className="final-cta-acts">
            <Link href={merged.primary_cta_link} className="btn btn-primary">
              {merged.primary_cta_text} {'\u2192'}
            </Link>
            <Link href={merged.secondary_cta_link} className="btn btn-ghost-w">
              {merged.secondary_cta_text}
            </Link>
          </div>
          {(merged.support_note || merged.whatsapp_text) ? (
            <div className="gcp-final-meta">
              {merged.support_note ? <span className="gcp-final-meta-text">{merged.support_note}</span> : null}
              {merged.support_note && merged.whatsapp_text ? <span className="gcp-final-meta-sep">|</span> : null}
              {merged.whatsapp_text ? (
                <a href={merged.whatsapp_link} className="gcp-final-meta-link" target="_blank" rel="noreferrer">
                  {merged.whatsapp_text}
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
