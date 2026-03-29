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

function getDashboardToneClass(valueTone) {
  switch (valueTone) {
    case 'white':
      return ' wh';
    case 'saffron':
      return ' sf';
    case 'green':
      return ' gr';
    default:
      return '';
  }
}

export default function HeroSection({ hero }) {
  if (!hero) {
    return null;
  }

  const titleHtml = unwrapRichText(hero.title, ['h1', 'h2', 'p', 'div']);
  const descriptionHtml = unwrapRichText(hero.description, ['p', 'div']);
  const trustStats = hero.trust_stats || [];
  const dashboardCard = hero.dashboard_card;
  const dashboardRows = dashboardCard?.rows || [];

  return (
    <section className="hero">
      <div className="h-orb h-orb1" />
      <div className="h-orb h-orb2" />
      <div className="h-orb h-orb3" />
      <div className="hero-stripe" />
      <div className="container">
        <div className="hcnt">
          <div className="hgrid">
            <div>
              <div className="h-eyebrow rv">
                {hero.sovereign_badge_text ? (
                  <div className="sov-pill">
                    <div className="sov-dot" />
                    <span>{hero.sovereign_badge_text}</span>
                  </div>
                ) : null}
                {hero.compliance_badge_text ? (
                  <span className="badge bg-saffron">{hero.compliance_badge_text}</span>
                ) : null}
              </div>
              {titleHtml ? <h1 className="rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} /> : null}
              {descriptionHtml ? (
                <div className="hero-lead rv d2" dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
              ) : null}
              {(hero.primary_cta_text || hero.secondary_cta_text) ? (
                <div className="hero-acts rv d3">
                  {hero.primary_cta_text ? (
                    <Link href={hero.primary_cta_link || '#'} className="btn btn-teal">
                      {hero.primary_cta_text} {'\u2192'}
                    </Link>
                  ) : null}
                  {hero.secondary_cta_text ? (
                    <Link href={hero.secondary_cta_link || '#'} className="btn btn-ghost-w">
                      {hero.secondary_cta_text}
                    </Link>
                  ) : null}
                </div>
              ) : null}
              {trustStats.length ? (
                <div className="hero-trust rv d4">
                  {trustStats.map((item, index) => (
                    <div key={item.id || `${item.value}-${index}`} className="ht-item">
                      <span className="n">{item.value}</span>
                      <span className="l">{item.label}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            {dashboardCard ? (
              <div className="rv d2">
                <div className="hero-card">
                  <div className="hc-header">
                    {dashboardCard.icon ? <div className="hc-icon">{dashboardCard.icon}</div> : null}
                    <div>
                      {dashboardCard.title ? <div className="hc-title">{dashboardCard.title}</div> : null}
                      {dashboardCard.subtitle ? <div className="hc-sub">{dashboardCard.subtitle}</div> : null}
                    </div>
                  </div>
                  {dashboardRows.map((item, index) => (
                    <div key={item.id || `${item.label}-${index}`} className="hc-row">
                      <span className="hc-lbl">{item.label}</span>
                      <span className={`hc-val${getDashboardToneClass(item.value_tone)}`}>{item.value}</span>
                    </div>
                  ))}
                  {dashboardCard.cta_text ? (
                    <Link href={dashboardCard.cta_link || '#'} className="hc-cta">
                      {dashboardCard.cta_text} {'\u2192'}
                    </Link>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
