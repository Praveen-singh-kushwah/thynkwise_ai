import Link from 'next/link';

const fallbackHero = {
  eyebrow_text: 'Technology · Consulting · AI · Cloud',
  title: 'We Inspire<br><em>Sales Experts.</em><br>We Build Systems<br>That Deliver.',
  description:
    'ThynkWISE is a full-spectrum technology and consulting firm. CRM implementation, AI-powered digital humans, cloud infrastructure, and a vetted partner ecosystem - one partner, measurable outcomes.',
  primary_cta: {
    button_text: 'Talk to Us on WhatsApp ->',
    button_link: 'https://wa.me/919763008800',
    variant: 'whatsapp',
  },
  secondary_cta: {
    button_text: 'Explore Our Work',
    button_link: '#verticals',
    variant: 'secondary',
  },
  vertical_cards: [
    {
      order_label: '01',
      title: 'Sales Consulting',
      description: 'CRM · Automation · Fractional CSO · Revenue Systems',
      link_text: 'Explore ->',
      link_url: '/sales-consulting',
    },
    {
      order_label: '02',
      title: 'AI Avatar as a Service',
      description: 'Digital Humans · Arabic · English · 24/7 · Web · Kiosk',
      link_text: 'Explore ->',
      link_url: '/ai-avatar',
    },
    {
      order_label: '03',
      title: 'Partner-Enabled Digital',
      description: 'Web · Software · SEO/AEO via vetted specialist partners',
      link_text: 'Explore ->',
      link_url: '/partner-ecosystem',
    },
    {
      order_label: '04',
      title: 'Cloud & Hardware',
      description: 'AWS · Azure · GCP · ESDS · Managed Services · GPU',
      link_text: 'Explore ->',
      link_url: 'https://beta.thynkwise.ai',
    },
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

function renderLink(link, className) {
  if (!link?.button_text || !link?.button_link) {
    return null;
  }

  const isExternal =
    link.button_link.startsWith('http://') ||
    link.button_link.startsWith('https://') ||
    link.button_link.startsWith('mailto:') ||
    link.button_link.startsWith('tel:');

  if (isExternal) {
    return (
      <a
        href={link.button_link}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {link.button_text}
      </a>
    );
  }

  return (
    <Link href={link.button_link} className={className}>
      {link.button_text}
    </Link>
  );
}

function renderVerticalCard(card) {
  const isExternal =
    card?.link_url?.startsWith('http://') || card?.link_url?.startsWith('https://');

  const content = (
    <>
      <div className="th-home-hero-card-order">{card?.order_label}</div>
      <div className="th-home-hero-card-title">{card?.title}</div>
      <p className="th-home-hero-card-description">{card?.description}</p>
      {card?.link_text ? (
        <div className="th-home-hero-card-link">{card.link_text}</div>
      ) : null}
    </>
  );

  if (!card?.link_url) {
    return <div className="th-home-hero-card">{content}</div>;
  }

  if (isExternal) {
    return (
      <a
        href={card.link_url}
        className="th-home-hero-card"
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={card.link_url} className="th-home-hero-card">
      {content}
    </Link>
  );
}

export default function HeroSection({ hero }) {
  const heroData = hero || fallbackHero;
  const titleHtml = unwrapRichText(heroData?.title, ['h1', 'h2', 'p', 'div']);
  const descriptionHtml = unwrapRichText(heroData?.description, ['p', 'div']);

  return (
    <section className="th-home-hero">
      <div className="th-home-hero-grid" />
      <div className="th-home-hero-glow th-home-hero-glow-one" />
      <div className="th-home-hero-glow th-home-hero-glow-two" />

      <div className="container th-home-hero-shell">
        <div className="th-home-hero-pill rv">
          <span className="th-home-hero-pill-dot" />
          <span>{heroData?.eyebrow_text}</span>
        </div>

        <h1
          className="th-home-hero-title rv d1"
          dangerouslySetInnerHTML={{ __html: titleHtml }}
        />

        <div
          className="th-home-hero-description rv d2"
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />

        <div className="th-home-hero-actions rv d3">
          {renderLink(heroData?.primary_cta, 'btn btn-orange')}
          {renderLink(heroData?.secondary_cta, 'btn btn-ghost-w')}
        </div>

        <div className="th-home-hero-cards rv d4" id="verticals">
          {(heroData?.vertical_cards || []).map((card) => (
            <div key={`${card?.order_label}-${card?.title}`} className="th-home-hero-card-wrap">
              {renderVerticalCard(card)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
