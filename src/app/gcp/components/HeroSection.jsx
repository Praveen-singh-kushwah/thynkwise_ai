import Link from 'next/link';

const defaultHero = {
  partner_badge_text: 'Authorised Google Cloud Partner',
  certification_badge_text: '🇮🇳 40+ GCP Certifications',
  title: 'Google Cloud.<br>Managed by <em>Thynkwise.</em>',
  description:
    'Authorised Google Cloud partner for Vertex AI, BigQuery, GKE, and Google Workspace - fully managed with startup credits activation, certified FinOps, and 24/7 support across all regions.',
  primary_cta_text: 'Get Free GCP Assessment',
  primary_cta_link: '/get-assessment',
  secondary_cta_text: 'Talk to AI/ML Expert',
  secondary_cta_link: '/book-demo',
  trust_points: [
    { text: 'Flexible billing options' },
    { text: 'Startup credits up to $200K' },
    { text: '24/7 Support' },
  ],
  partner_dashboard_card: {
    icon: '◉',
    title: 'GCP Partner Dashboard',
    subtitle: 'THYNKWISE · AUTHORISED PARTNER',
    stats: [
      { label: 'Partner Status', value: 'Authorised Reseller', tone: 'default' },
      { label: 'Active Certifications', value: '40+', tone: 'white' },
      { label: 'Startup Credits Available', value: '$200K', tone: 'yellow' },
      { label: 'Avg. Cost Reduction', value: '25-35%', tone: 'green' },
      { label: 'Billing Currency', value: 'Multi-currency', tone: 'default' },
    ],
    button_text: 'Talk to GCP Expert',
    button_link: '/book-demo',
  },
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

function getToneClass(tone) {
  switch (tone) {
    case 'white':
      return ' wh';
    case 'yellow':
      return ' ye';
    case 'green':
      return ' gr';
    default:
      return '';
  }
}

function getTrustDotClass(index) {
  if (index === 1) {
    return ' green';
  }

  if (index === 2) {
    return ' yellow';
  }

  return ' blue';
}

export default function HeroSection({ hero }) {
  const section = hero || defaultHero;
  const card = section.partner_dashboard_card || defaultHero.partner_dashboard_card;
  const trustPoints = section.trust_points?.length ? section.trust_points : defaultHero.trust_points;
  const stats = card.stats?.length ? card.stats : defaultHero.partner_dashboard_card.stats;
  const titleHtml = unwrapRichText(section.title || defaultHero.title, ['h1', 'h2', 'p', 'div']);
  const descriptionHtml = unwrapRichText(section.description || defaultHero.description, ['p', 'div']);

  return (
    <section className="hero">
      <div className="orb orb-b" />
      <div className="orb orb-r" />
      <div className="orb orb-y" />
      <div className="orb orb-g" />
      <div className="container">
        <div className="hcnt">
          <div className="hgrid">
            <div>
              <div className="h-eyebrow rv">
                <div className="g-cert">
                  <div className="g-dots">
                    <span className="g-dot blue" />
                    <span className="g-dot red" />
                    <span className="g-dot yellow" />
                    <span className="g-dot green" />
                  </div>
                  <span>{section.partner_badge_text || defaultHero.partner_badge_text}</span>
                </div>
                <span className="badge bw">
                  {section.certification_badge_text || defaultHero.certification_badge_text}
                </span>
              </div>
              <h1 className="rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />
              <div className="hero-lead rv d2" dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
              <div className="hero-acts rv d3">
                <Link href={section.primary_cta_link || defaultHero.primary_cta_link} className="btn btn-primary">
                  {section.primary_cta_text || defaultHero.primary_cta_text} {'\u2192'}
                </Link>
                <Link href={section.secondary_cta_link || defaultHero.secondary_cta_link} className="btn btn-ghost-w">
                  {section.secondary_cta_text || defaultHero.secondary_cta_text}
                </Link>
              </div>
              <div className="hero-trust rv d4">
                {trustPoints.map((item, index) => (
                  <div key={`${item.text || item.point || item.title}-${index}`} className="ht-item">
                    <div className={`ht-dot${getTrustDotClass(index)}`} />
                    <span>{item.text || item.point || item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rv d2">
              <div className="hero-card">
                <div className="hc-header">
                  <div className="hc-icon">{card.icon || defaultHero.partner_dashboard_card.icon}</div>
                  <div>
                    <div className="hc-title">{card.title || defaultHero.partner_dashboard_card.title}</div>
                    <div className="hc-sub">{card.subtitle || defaultHero.partner_dashboard_card.subtitle}</div>
                  </div>
                </div>
                {stats.map((item, index) => (
                  <div key={`${item.label || item.key}-${index}`} className="hc-stat">
                    <span className="hc-stat-label">{item.label || item.key}</span>
                    <span className={`hc-stat-val${getToneClass(item.tone)}`}>{item.value}</span>
                  </div>
                ))}
                <Link href={card.button_link || defaultHero.partner_dashboard_card.button_link} className="hc-cta">
                  {card.button_text || defaultHero.partner_dashboard_card.button_text} {'\u2192'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
