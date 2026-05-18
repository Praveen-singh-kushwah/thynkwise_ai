import Link from 'next/link';

const defaultSection = {
  badge_text: 'The Thynkwise FinOps Promise',
  title: '20-35% savings in 90 days.<br>With the action plan to prove it.',
  description:
    'Thynkwise turns cloud billing noise into a concrete cost reduction programme. We baseline your spend, identify every waste category, quantify the INR value, and help execute approved changes without risking application performance.',
  primary_cta_text: 'Start Free Audit',
  primary_cta_link: '/get-assessment',
  secondary_cta_text: 'Book a Demo',
  secondary_cta_link: '/book-demo',
};

function unwrapRichText(html, tags) {
  if (!html) {
    return html;
  }

  const trimmedHtml = html.trim();

  for (const tag of tags) {
    const fullWrapperPattern = new RegExp(`^<${tag}\\b[^>]*>([\\s\\S]*)</${tag}>$`, 'i');
    const fullWrapperMatch = trimmedHtml.match(fullWrapperPattern);

    if (fullWrapperMatch) {
      return fullWrapperMatch[1];
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

export default function GuaranteeSection({ section }) {
  const data = section || defaultSection;
  const titleHtml = unwrapRichText(data.title || defaultSection.title, ['h2', 'h3', 'p', 'div']);

  return (
    <section className="co-section co-section-cream">
      <div className="container">
        <div className="co-guarantee-box rv">
          <div>
            <div className="co-guarantee-badge">{data.badge_text || defaultSection.badge_text}</div>
            <h2 dangerouslySetInnerHTML={{ __html: titleHtml }} />
            <p>{data.description || defaultSection.description}</p>
          </div>

          <div className="co-guarantee-actions">
            <ActionLink
              href={data.primary_cta_link || defaultSection.primary_cta_link}
              className="btn co-btn-white"
            >
              {data.primary_cta_text || defaultSection.primary_cta_text} {'\u2192'}
            </ActionLink>
            <ActionLink
              href={data.secondary_cta_link || defaultSection.secondary_cta_link}
              className="btn co-btn-outline-white"
            >
              {data.secondary_cta_text || defaultSection.secondary_cta_text}
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
