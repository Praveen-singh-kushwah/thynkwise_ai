import Link from 'next/link';

const defaultSection = {
  badge_text: 'Free - No Commitment - 7 Days',
  title: "Find out exactly what you're wasting.<br><span>Before the next billing cycle.</span>",
  description:
    'Share read-only billing access. Receive a written cloud cost audit in 7 business days - every waste item identified, every saving quantified in INR, and every action prioritised.',
  primary_cta_text: 'Get Free 7-Day Cost Audit',
  primary_cta_link: '/get-assessment',
  secondary_cta_text: 'Book a FinOps Discussion',
  secondary_cta_link: '/book-demo',
  trust_notes: [
    { text: '20-35% savings target on suitable environments' },
    { text: 'Read-only access only - no changes without approval' },
    { text: 'WhatsApp: +91 97630 08800', link: 'https://wa.me/919763008800' },
  ],
};

function unwrapRichText(html, tags) {
  if (!html) {
    return html;
  }

  const trimmedHtml = html.trim();

  for (const tag of tags) {
    const pattern = new RegExp(`^<${tag}\\b[^>]*>([\\s\\S]*)</${tag}>$`, 'i');
    const match = trimmedHtml.match(pattern);

    if (match) {
      return match[1];
    }
  }

  return trimmedHtml;
}

function ActionLink({ href, className, children }) {
  if (!href) {
    return null;
  }

  if (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  ) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function FinalCtaSection({ section }) {
  const data = section || defaultSection;
  const titleHtml = unwrapRichText(data.title || defaultSection.title, ['h2', 'h3', 'p', 'div']);
  const notes = data.trust_notes?.length ? data.trust_notes : defaultSection.trust_notes;

  return (
    <section className="co-final-cta">
      <div className="container">
        <div className="co-final-cta-inner rv">
          <span className="co-final-badge">{data.badge_text || defaultSection.badge_text}</span>
          <h2 dangerouslySetInnerHTML={{ __html: titleHtml }} />
          <p>{data.description || defaultSection.description}</p>

          <div className="co-final-actions">
            <ActionLink
              href={data.primary_cta_link || defaultSection.primary_cta_link}
              className="btn co-btn-primary"
            >
              {data.primary_cta_text || defaultSection.primary_cta_text} {'\u2192'}
            </ActionLink>
            <ActionLink
              href={data.secondary_cta_link || defaultSection.secondary_cta_link}
              className="btn co-btn-secondary"
            >
              {data.secondary_cta_text || defaultSection.secondary_cta_text}
            </ActionLink>
          </div>

          <div className="co-final-notes">
            {notes.map((note, index) => (
              <ActionLink
                key={`${note.text}-${index}`}
                href={note.link}
                className="co-final-note"
              >
                {'\u2713'} {note.text}
              </ActionLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
