import Link from 'next/link';

const fallbackHero = {
  breadcrumb_label: 'Sales Consulting',
  eyebrow_text: 'Salesforce · Dynamics 365 · Apollo.io · HubSpot · Fractional CSO',
  title: "Your Sales Team Is Working.<br>It's Your <em>System</em><br>That's Failing Them.",
  description:
    "Most sales teams don't have a motivation problem. They have a CRM nobody uses, outreach that doesn't land, and no pipeline visibility. ThynkWISE builds the system underneath, so your team closes at a different level.",
  primary_cta: {
    button_text: 'Talk to a Sales Consultant ->',
    button_link: 'https://wa.me/919763008800',
    variant: 'whatsapp',
  },
  secondary_cta: {
    button_text: 'See Client Result',
    button_link: '#case-study',
    variant: 'outline',
  },
  proof_stats: [
    { metric_value: '5x', metric_label: 'appointment growth in 90 days' },
    { metric_value: '4', metric_label: 'CRM platforms, one delivery team' },
    { metric_value: '90', metric_label: 'days avg to measurable ROI' },
    { metric_value: '6+', metric_label: 'countries served' },
  ],
};

function isExternalLink(url = '') {
  return /^https?:\/\//.test(url) || url.startsWith('mailto:') || url.startsWith('tel:');
}

function getButtonClass(variant) {
  if (variant === 'whatsapp' || variant === 'primary') {
    return 'sc-btn sc-btn-orange';
  }

  return 'sc-btn sc-btn-white';
}

function ActionButton({ action }) {
  if (!action?.button_text || !action?.button_link) {
    return null;
  }

  const className = getButtonClass(action.variant);

  if (isExternalLink(action.button_link)) {
    return (
      <a href={action.button_link} className={className} target="_blank" rel="noreferrer">
        {action.button_text}
      </a>
    );
  }

  return (
    <Link href={action.button_link} className={className}>
      {action.button_text}
    </Link>
  );
}

export default function HeroSection({ hero }) {
  const data = hero?.title ? hero : fallbackHero;
  const proofStats = data?.proof_stats || [];

  return (
    <section className="sc-hero">
      <div className="sc-hero-bg" />
      <div className="sc-hero-glow" />
      <div className="container sc-hero-inner">
        <div className="sc-crumb rv">
          <Link href="/">Home</Link> / {data?.breadcrumb_label || 'Sales Consulting'}
        </div>
        {data?.eyebrow_text ? (
          <div className="sc-hero-pill rv">
            <span>{data.eyebrow_text}</span>
          </div>
        ) : null}
        {data?.title ? (
          <h1
            className="rv d1"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
        ) : null}
        {data?.description ? (
          <div
            className="sc-hero-copy rv d2"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        ) : null}
        <div className="sc-hero-actions rv d3">
          <ActionButton action={data?.primary_cta} />
          <ActionButton action={data?.secondary_cta} />
        </div>
        {proofStats.length ? (
          <div className="sc-proof-row rv">
            {proofStats.map((stat, index) => (
              <div className="sc-proof-item" key={`${stat?.metric_label}-${index}`}>
                <div className="sc-proof-number">{stat?.metric_value}</div>
                <div className="sc-proof-label">{stat?.metric_label}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
