import Link from 'next/link';

const defaultHero = {
  eyebrow_text: 'Cloud Cost Optimisation India',
  title:
    'Your cloud bill has a<br><span>Rs. 3-40 lakh</span> leak.<br>We find it in <em>7 days.</em>',
  description:
    'The average Indian company wastes 32% of its cloud spend - idle instances, over-provisioned VMs, missing Reserved Instances, and unused storage silently burning cash every month. Thynkwise FinOps finds it, fixes it, and targets 20-35% savings in 90 days.',
  primary_cta_text: 'Get Free 7-Day Cost Audit',
  primary_cta_link: '/get-assessment',
  secondary_cta_text: 'See How It Works',
  secondary_cta_link: '/book-demo',
  proof_stats: [
    { value: '32%', label: 'Average cloud waste in Indian enterprises', tone: 'green' },
    { value: '20%', label: 'Target minimum savings on managed FinOps plans', tone: 'green' },
    { value: '7 days', label: 'Free audit turnaround time', tone: 'orange' },
    { value: 'Rs. 0', label: 'Cost for initial cloud waste audit', tone: 'green' },
  ],
  waste_meter: {
    title: 'Your Cloud Spend - Waste Estimate',
    status_label: 'Live model',
    spend_label: 'Monthly cloud spend example',
    spend_value: 'Rs. 10,00,000',
    spend_subtext: 'AWS / Azure / GCP combined',
    waste_items: [
      {
        label: 'Idle and unused resources',
        value_label: '~12% - Rs. 1.2L/mo',
        bar_percentage: 38,
        tone: 'waste',
      },
      {
        label: 'Over-provisioned instances',
        value_label: '~9% - Rs. 90K/mo',
        bar_percentage: 28,
        tone: 'waste',
      },
      {
        label: 'Unoptimised storage and snapshots',
        value_label: '~6% - Rs. 60K/mo',
        bar_percentage: 19,
        tone: 'waste',
      },
      {
        label: 'Missing Reserved Instances',
        value_label: '~5% - Rs. 50K/mo',
        bar_percentage: 16,
        tone: 'waste',
      },
    ],
    saving_label: 'Estimated monthly recoverable waste',
    saving_context: 'At typical 32% for Rs. 10L/month',
    saving_value: 'Rs. 3,20,000',
    saving_subtext: 'Rs. 38.4L / year',
  },
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

    const firstBlockPattern = new RegExp(`^<${tag}\\b[^>]*>([\\s\\S]*?)</${tag}>`, 'i');
    const firstBlockMatch = trimmedHtml.match(firstBlockPattern);

    if (firstBlockMatch) {
      return firstBlockMatch[1];
    }
  }

  return trimmedHtml;
}

function getLink(href, className, children) {
  if (!href) {
    return null;
  }

  const isExternal =
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:');

  if (isExternal) {
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

function clampPercentage(value) {
  const numericValue = Number(value);

  if (!Number.isFinite(numericValue)) {
    return 0;
  }

  return Math.max(0, Math.min(100, numericValue));
}

export default function HeroSection({ hero }) {
  const heroData = hero || defaultHero;
  const titleHtml = unwrapRichText(heroData.title || defaultHero.title, ['h1', 'h2', 'p', 'div']);
  const descriptionHtml = unwrapRichText(heroData.description || defaultHero.description, [
    'p',
    'div',
  ]);
  const proofStats = heroData.proof_stats?.length ? heroData.proof_stats : defaultHero.proof_stats;
  const wasteMeter = heroData.waste_meter || defaultHero.waste_meter;
  const wasteItems = wasteMeter.waste_items?.length
    ? wasteMeter.waste_items
    : defaultHero.waste_meter.waste_items;

  return (
    <section className="co-hero">
      <div className="co-hero-grid-bg" />
      <div className="co-hero-accent" />

      <div className="container">
        <div className="co-hero-inner">
          <div className="co-hero-copy">
            <div className="co-hero-eyebrow rv">
              <span className="co-hero-line" />
              <span>{heroData.eyebrow_text || defaultHero.eyebrow_text}</span>
            </div>

            <h1 className="co-hero-title rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />

            <div
              className="co-hero-description rv d2"
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />

            <div className="co-hero-actions rv d3">
              {getLink(
                heroData.primary_cta_link || defaultHero.primary_cta_link,
                'btn co-btn-primary',
                <>
                  {heroData.primary_cta_text || defaultHero.primary_cta_text} {'\u2192'}
                </>,
              )}
              {getLink(
                heroData.secondary_cta_link || defaultHero.secondary_cta_link,
                'btn co-btn-secondary',
                heroData.secondary_cta_text || defaultHero.secondary_cta_text,
              )}
            </div>

            <div className="co-hero-stats rv d4">
              {proofStats.map((stat, index) => (
                <div key={`${stat.value}-${stat.label}-${index}`} className="co-hero-stat">
                  <span className={`co-stat-value ${stat.tone === 'orange' ? 'orange' : 'green'}`}>
                    {stat.value}
                  </span>
                  <span className="co-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="co-meter-wrap rv d2">
            <div className="co-meter">
              <div className="co-meter-head">
                <div className="co-meter-title">
                  {wasteMeter.title || defaultHero.waste_meter.title}
                </div>
                <div className="co-meter-live">
                  <span className="co-meter-live-dot" />
                  {wasteMeter.status_label || defaultHero.waste_meter.status_label}
                </div>
              </div>

              <div className="co-spend-row">
                <span className="co-spend-label">
                  {wasteMeter.spend_label || defaultHero.waste_meter.spend_label}
                </span>
                <span className="co-spend-value">
                  {wasteMeter.spend_value || defaultHero.waste_meter.spend_value}
                </span>
                <span className="co-spend-subtext">
                  {wasteMeter.spend_subtext || defaultHero.waste_meter.spend_subtext}
                </span>
              </div>

              <div className="co-waste-bars">
                {wasteItems.map((item, index) => {
                  const width = `${clampPercentage(item.bar_percentage)}%`;

                  return (
                    <div key={`${item.label}-${index}`} className="co-waste-row">
                      <div className="co-waste-label-row">
                        <span>{item.label}</span>
                        <strong>{item.value_label}</strong>
                      </div>
                      <div className="co-waste-track">
                        <div className="co-waste-fill" style={{ width }} />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="co-saving-box">
                <div>
                  <div className="co-saving-label">
                    {wasteMeter.saving_label || defaultHero.waste_meter.saving_label}
                  </div>
                  <div className="co-saving-context">
                    {wasteMeter.saving_context || defaultHero.waste_meter.saving_context}
                  </div>
                </div>
                <div className="co-saving-value-wrap">
                  <div className="co-saving-value">
                    {wasteMeter.saving_value || defaultHero.waste_meter.saving_value}
                  </div>
                  <div className="co-saving-subtext">
                    {wasteMeter.saving_subtext || defaultHero.waste_meter.saving_subtext}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
