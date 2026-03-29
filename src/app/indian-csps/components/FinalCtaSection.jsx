import Link from 'next/link';

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
  if (!section) {
    return null;
  }

  const hasContent =
    section.badge_text ||
    section.title ||
    section.description ||
    section.primary_cta_text ||
    section.secondary_cta_text ||
    section.support_note ||
    section.whatsapp_text;

  if (!hasContent) {
    return null;
  }

  const titleHtml = unwrapRichText(section.title, ['h1', 'h2', 'h3', 'p', 'div']);
  const descriptionHtml = unwrapRichText(section.description, ['p', 'div']);

  return (
    <section className="final-cta">
      <div className="final-cta-stripe" />
      <div className="container">
        <div className="fci rv">
          {section.badge_text ? <span className="badge bt indian-final-badge">{section.badge_text}</span> : null}
          {titleHtml ? <h2 dangerouslySetInnerHTML={{ __html: titleHtml }} /> : null}
          {descriptionHtml ? <p dangerouslySetInnerHTML={{ __html: descriptionHtml }} /> : null}
          {(section.primary_cta_text || section.secondary_cta_text) ? (
            <div className="fci-acts">
              {section.primary_cta_text ? (
                <Link href={section.primary_cta_link || '#'} className="btn btn-teal">
                  {section.primary_cta_text} {'\u2192'}
                </Link>
              ) : null}
              {section.secondary_cta_text ? (
                <Link href={section.secondary_cta_link || '#'} className="btn btn-ghost-w">
                  {section.secondary_cta_text}
                </Link>
              ) : null}
            </div>
          ) : null}
          {(section.support_note || section.whatsapp_text) ? (
            <div className="indian-final-meta">
              {section.support_note ? <span className="indian-final-meta-text">{section.support_note}</span> : null}
              {section.support_note && section.whatsapp_text ? (
                <span className="indian-final-meta-sep">|</span>
              ) : null}
              {section.whatsapp_text ? (
                <a
                  href={section.whatsapp_link || '#'}
                  className="indian-final-meta-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {section.whatsapp_text}
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
