import Link from 'next/link';

const defaultSection = {
  badge_text: 'Quick answer',
  title: 'How much cloud cost can Thynkwise help reduce?',
  description:
    'Most mid-market cloud environments waste 20-35% of monthly spend through oversized compute, idle resources, old storage, weak tagging, and missing committed-use discounts. Thynkwise starts with a read-only billing audit, then gives you a prioritised action plan with estimated INR savings for every recommendation.',
  primary_cta_text: 'Get Free 7-Day Cost Audit',
  primary_cta_link: '/get-assessment',
  secondary_cta_text: 'Calculate My Savings',
  secondary_cta_link: '#calculator',
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

export default function AnswerBoxSection({ section }) {
  const data = section || defaultSection;
  const titleHtml = unwrapRichText(data.title || defaultSection.title, ['h2', 'h3', 'p', 'div']);
  const descriptionHtml = unwrapRichText(data.description || defaultSection.description, [
    'p',
    'div',
  ]);

  return (
    <section className="co-section co-section-white">
      <div className="container">
        <div className="co-answer-box rv">
          <div className="co-answer-kicker">
            <span className="co-answer-icon" aria-hidden="true">
              {'\u2315'}
            </span>
            <span>{data.badge_text || defaultSection.badge_text}</span>
          </div>

          {titleHtml ? (
            <h2 className="co-answer-title" dangerouslySetInnerHTML={{ __html: titleHtml }} />
          ) : null}

          {descriptionHtml ? (
            <div
              className="co-answer-description"
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
          ) : null}

          <div className="co-answer-actions">
            <ActionLink
              href={data.primary_cta_link || defaultSection.primary_cta_link}
              className="btn co-btn-primary co-answer-btn"
            >
              {data.primary_cta_text || defaultSection.primary_cta_text} {'\u2192'}
            </ActionLink>
            <ActionLink
              href={data.secondary_cta_link || defaultSection.secondary_cta_link}
              className="btn co-answer-outline co-answer-btn"
            >
              {data.secondary_cta_text || defaultSection.secondary_cta_text}
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
