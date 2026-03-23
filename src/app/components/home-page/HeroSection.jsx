import Link from 'next/link';

const heroPills = [
  { label: 'AWS / Azure / Google Cloud', dotColor: '#4ade80' },
  { label: 'Managed 24/7', dotColor: 'var(--orange)' },
  { label: 'GPUaaS / Cybersecurity', dotColor: '#818cf8' },
];

const partners = [
  { href: '/aws', label: 'AWS Advanced Partner', dotColor: '#f90' },
  { href: '/azure', label: 'Microsoft Azure', dotColor: '#0078d4' },
  { href: '/gcp', label: 'Google Cloud', dotColor: '#4285f4' },
  { href: '/indian-csps', label: 'Sovereign Cloud', dotColor: '#00968A' },
];

const defaultTitle = `
  Cloud, Security &amp;<br />
  <span class="c-blue">GPU Infrastructure.</span><br />
  <span class="c-orange">Managed.</span>
`;

const defaultSubtitle = `
  Thynkwise is your single technology partner for <strong>cloud migration</strong>,
  <strong>managed services</strong>, <strong>cybersecurity</strong>, and
  <strong>GPU compute</strong> across AWS, Azure, Google Cloud, and sovereign
  cloud providers. One team. One accountability model.
`;

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

export default function HeroSection({ hero }) {
  const titleHtml = unwrapRichText(hero?.title || defaultTitle, ['h1', 'h2', 'p']);
  const subtitleHtml = unwrapRichText(hero?.subtitle || defaultSubtitle, ['p', 'div']);

  return (
    <section className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow">
        <div className="glow1" />
        <div className="glow2" />
      </div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-pills rv">
              {heroPills.map((pill) => (
                <div key={pill.label} className="hp">
                  <div className="hp-dot" style={{ background: pill.dotColor }} />
                  <span className="hp-txt">{pill.label}</span>
                </div>
              ))}
            </div>

            <h1 className="rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />

            <div
              className="hero-sub rv d2"
              dangerouslySetInnerHTML={{ __html: subtitleHtml }}
            />

            <div className="hero-acts rv d3">
              <Link
                href={hero?.primary_cta_link || '/get-assessment'}
                className="btn btn-orange"
              >
                {hero?.primary_cta_text || 'Get Free Cloud Assessment'} {'\u2192'}
              </Link>
              <Link
                href={hero?.secondary_cta_link || '/book-demo'}
                className="btn btn-ghost-w"
              >
                {hero?.secondary_cta_text || 'Talk to a Cloud Expert'}
              </Link>
            </div>

            <div className="hero-partners rv d4">
              <span className="hp-label">Partners</span>
              <div className="partner-strip">
                {partners.map((partner) => (
                  <Link key={partner.label} href={partner.href} className="ps-badge">
                    <div className="ps-dot" style={{ background: partner.dotColor }} />
                    {partner.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
