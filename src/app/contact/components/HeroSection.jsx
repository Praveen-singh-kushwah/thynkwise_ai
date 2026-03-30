import Link from 'next/link';

const defaultHero = {
  eyebrow: 'Get in Touch',
  title: 'Talk to the team<br>that <span>actually answers.</span>',
  description:
    '<p>No ticket queue. No round-robin call centre. A cloud specialist who knows your sector - BFSI, SaaS, manufacturing, D2C - responds within 4 business hours. In IST. Always.</p>',
  response_channels: [
    {
      icon: 'chat',
      channel_title: 'WhatsApp - Sales & Support',
      subtitle: '+91 99999 99999 - Avg response: 8 minutes',
      badge_text: 'LIVE',
      badge_tone: 'green',
      dot_tone: 'green',
      link: 'https://wa.me/919999999999',
    },
    {
      icon: 'email',
      channel_title: 'Email - contact@thynkwise.ai',
      subtitle: 'Detailed enquiries - Response within 4hrs IST',
      badge_text: '4HR SLA',
      badge_tone: 'orange',
      dot_tone: 'orange',
      link: 'mailto:contact@thynkwise.ai',
    },
    {
      icon: 'calendar',
      channel_title: 'Book a 30-min Demo',
      subtitle: 'Live AWS - Azure - GCP platform walk-through',
      badge_text: 'CALENDAR',
      badge_tone: 'blue',
      dot_tone: 'blue',
      link: '/book-demo',
    },
    {
      icon: 'phone',
      channel_title: 'Call - +91 99999 99988',
      subtitle: 'Mon-Sat - 9AM-8PM IST - Direct to solutions team',
      badge_text: 'DIRECT',
      badge_tone: 'green',
      dot_tone: 'green',
      link: 'tel:+919999999988',
    },
  ],
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

function getEmoji(icon) {
  const normalized = String(icon || '')
    .trim()
    .toLowerCase();

  if (normalized.includes('chat') || normalized.includes('whatsapp')) {
    return '💬';
  }

  if (normalized.includes('mail') || normalized.includes('email')) {
    return '✉️';
  }

  if (normalized.includes('calendar') || normalized.includes('demo')) {
    return '📅';
  }

  if (normalized.includes('phone') || normalized.includes('call')) {
    return '📞';
  }

  if (icon && icon.length <= 3) {
    return icon;
  }

  return '';
}

function isExternalLink(href) {
  return (
    href?.startsWith('http://') ||
    href?.startsWith('https://') ||
    href?.startsWith('mailto:') ||
    href?.startsWith('tel:')
  );
}

function ResponseChannelLink({ href, className, children }) {
  if (!href) {
    return <div className={className}>{children}</div>;
  }

  if (isExternalLink(href)) {
    return (
      <a
        href={href}
        className={className}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
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

export default function HeroSection({ hero }) {
  const section = hero || defaultHero;
  const titleHtml = unwrapRichText(section.title || defaultHero.title, ['h1', 'h2', 'p', 'div']);
  const descriptionHtml = unwrapRichText(section.description || defaultHero.description, ['p', 'div']);
  const responseChannels = section.response_channels?.length
    ? section.response_channels
    : defaultHero.response_channels;

  return (
    <section className="hero">
      <div className="hero-glow hg1" />
      <div className="hero-glow hg2" />
      <div className="hero-bottom-stripe" />
      <div className="container">
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow rv">
              <div className="hero-eline" />
              <span>{section.eyebrow || defaultHero.eyebrow}</span>
            </div>
            <h1 className="rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />
            <div className="hero-sub rv d2" dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
          </div>
          <div className="resp-stack rv d2">
            {responseChannels.map((item, index) => (
              <ResponseChannelLink
                key={item.id || `${item.channel_title}-${index}`}
                href={item.link}
                className="resp-item"
              >
                <div className={`resp-dot ${item.dot_tone || 'green'}`} />
                <div>
                  <span className="resp-channel">
                    {getEmoji(item.icon) ? `${getEmoji(item.icon)} ` : ''}
                    {item.channel_title}
                  </span>
                  {item.subtitle ? <div className="resp-time">{item.subtitle}</div> : null}
                </div>
                {item.badge_text ? (
                  <span className={`resp-badge rb-${item.badge_tone || 'green'}`}>{item.badge_text}</span>
                ) : null}
              </ResponseChannelLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
