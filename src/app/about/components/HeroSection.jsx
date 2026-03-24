import Link from 'next/link';

const defaultTitle = 'Your cloud. Any cloud.<br><em>Anywhere in the world.</em>';

const defaultDescription =
  "Thynkwise is a global multi-cloud partner - bridging the gap between hyperscaler complexity and the outcomes businesses actually need. We bring AWS, Azure, Google Cloud, and sovereign cloud platforms under one roof, with one team, one invoice, and zero finger-pointing.";

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

export default function HeroSection({ hero }) {
  const titleHtml = unwrapRichText(hero?.heading || defaultTitle, ['h1', 'h2', 'p', 'div']);
  const descriptionHtml = unwrapRichText(hero?.description || defaultDescription, ['p', 'div']);

  return (
    <section className="hero">
      <div className="hero-bg-pattern" />
      <div className="hero-ink" aria-hidden="true">
        <svg viewBox="0 0 600 800" fill="none">
          <text x="50" y="300" fontSize="320" fontWeight="900" fill="white" fontFamily="serif">
            TB
          </text>
        </svg>
      </div>
      <div className="hero-stripe" />
      <div className="container">
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow rv">
              <div className="hero-eyebrow-line" />
              <span>About Thynkwise</span>
              <div className="hero-eyebrow-line" />
            </div>
            <h1 className="rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />
            <div className="hero-sub rv d2" dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
            <div className="hero-acts rv d3">
              <Link href={hero?.primary_cta_link || '/get-assessment'} className="btn btn-primary">
                {hero?.primary_cta_text || 'Work With Us'} {'\u2192'}
              </Link>
              <Link href={hero?.secondary_cta_link || '/book-demo'} className="btn btn-ghost-w">
                {hero?.secondary_cta_text || 'Meet the Team'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
