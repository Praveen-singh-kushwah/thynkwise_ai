import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';

const defaultSection = {
  heading: {
    title: 'AWS results that Indian<br>enterprises actually achieved',
    description:
      'Not projected. Not templated. Specific outcomes from Thynkwise AWS deployments across Indian industries.',
  },
  cards: [
    {
      title: 'NBFC · Mumbai',
      subtitle: 'Mid-Size Lending Platform',
      message: '"Our on-premise infrastructure was failing 3-4 times a year. Every outage cost us ₹40-80L in lost loan processing."',
      value: '₹1.8Cr',
      label: 'Annual IT Cost Reduction',
      description:
        'Migrated loan origination system to AWS - Aurora Multi-AZ for the core database, EKS for the application tier. Automated failover reduced unplanned downtime from 4 incidents to zero in Year 1. Compliance documentation produced for next regulatory inspection.',
      fallbackIcon: '🏦',
      toneClass: 'fin',
    },
    {
      title: 'D2C E-Commerce · Bengaluru',
      subtitle: 'Fashion Marketplace',
      message: '"Our servers could not handle simultaneous checkout events. Transaction failures at peak hours were costing us conversion rate."',
      value: '43%',
      label: 'Infrastructure Cost Reduction',
      description:
        'Rebuilt on AWS with EC2 Auto Scaling, CloudFront CDN, and ElastiCache session store. Eliminated idle baseline compute costs by 60% using right-sizing. Page load time dropped from 4.2s to 1.1s across Indian metros. Zero transaction failures during subsequent peak load events.',
      fallbackIcon: '🛒',
      toneClass: 'ecom',
    },
    {
      title: 'B2B SaaS · Hyderabad',
      subtitle: 'HR Tech Platform',
      message: '"We were spending 40% of engineering time on infrastructure. We needed to ship product, not manage servers."',
      value: '0',
      label: 'Infrastructure Incidents in 12 Months',
      description:
        'Full EKS migration with GitOps deployments via ArgoCD. SRE handoff from internal team to Thynkwise NOC - engineers focused entirely on product development. Infrastructure costs reduced 38% through Reserved Instances. 99.99% uptime maintained across the full year.',
      fallbackIcon: '🚀',
      toneClass: 'saas',
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

function normalizeCards(section) {
  if (!section?.card_2) {
    return defaultSection.cards;
  }

  const rawCards = Array.isArray(section.card_2) ? section.card_2 : [section.card_2];

  return rawCards.map((item, index) => ({
    ...item,
    fallbackIcon: defaultSection.cards[index % defaultSection.cards.length].fallbackIcon,
    toneClass: defaultSection.cards[index % defaultSection.cards.length].toneClass,
  }));
}

export default function ClientOutcomesSection({ section }) {
  const heading = section?.heading || defaultSection.heading;
  const titleHtml = unwrapRichText(heading.title || defaultSection.heading.title, ['h1', 'h2', 'h3', 'p', 'div']);
  const cards = normalizeCards(section);

  return (
    <section className="ps ps-cream">
      <div className="container">
        <span className="sec-label rv">Client Outcomes</span>
        <h2 className="sec-title rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />
        <p className="sec-sub rv d2">{heading.description || defaultSection.heading.description}</p>
        <div className="case-grid rv d2">
          {cards.map((card, index) => {
            const fallback = defaultSection.cards[index % defaultSection.cards.length];
            const iconUrl = getStrapiMediaUrl(card.icon);

            return (
              <div key={card.id || `${card.title}-${index}`} className="case-card">
                <div className={`case-header ${card.toneClass || fallback.toneClass}`}>
                  <div className="case-icon">
                    {iconUrl ? (
                      <CmsImage
                        src={iconUrl}
                        alt={card.title}
                        className="case-icon-img"
                        style={{ width: 28, height: 28, objectFit: 'contain' }}
                      />
                    ) : (
                      card.fallbackIcon
                    )}
                  </div>
                  <div>
                    <div className="case-industry">{card.title || fallback.title}</div>
                    <div className="case-org">{card.subtitle || fallback.subtitle}</div>
                  </div>
                </div>
                <div className="case-body">
                  <p className="case-challenge">{card.message || fallback.message}</p>
                  <div className="case-metric">{card.value || fallback.value}</div>
                  <div className="case-result">{card.label || fallback.label}</div>
                  <p>{card.description || fallback.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
