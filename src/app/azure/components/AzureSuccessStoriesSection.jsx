import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';

const defaultSection = {
  heading: {
    title: 'Indian Enterprises Winning on Azure',
    description: 'Real results, real clients, real numbers. Azure migrations delivered by Thynkwise across BFSI, government, and manufacturing.',
  },
  cards: [
    {
      title: 'BFSI - Private Bank',
      subtitle: 'Mid-Tier Bank, Mumbai',
      message:
        '"We had 48 hours to demonstrate RBI compliance or face a regulatory audit. Our Azure environment had zero governance controls."',
      value: '6 weeks',
      label: 'RBI Compliance Achieved',
      description:
        'Thynkwise deployed Azure Policy guardrails, geo-restrictions, and Microsoft Defender for Cloud in 6 weeks. Audit passed with zero findings. 34% cost saving on top.',
      fallbackIcon: 'BF',
      toneClass: 'bfsi',
    },
    {
      title: 'Government - State PSU',
      subtitle: 'State Infrastructure Corp, Delhi',
      message:
        '"Migrating 200+ legacy on-premise servers to cloud while maintaining government compliance requirements seemed impossible on our timeline."',
      value: 'INR 2.8Cr',
      label: 'Annual IT Cost Reduction',
      description:
        '200-server migration to Azure India in 4 months using Azure Migrate. All data sovereignty requirements met. INR 2.8Cr annual IT capex eliminated, replaced with INR 90L opex.',
      fallbackIcon: 'GV',
      toneClass: 'gov',
    },
    {
      title: 'Manufacturing - Enterprise',
      subtitle: 'Auto Components MFG, Pune',
      message:
        '"Our SAP landscape was on-premise since 2008. The business wanted analytics and AI capabilities that on-premise could not support."',
      value: '40%',
      label: 'Faster Business Reporting',
      description:
        'SAP on Azure migration with Azure Synapse Analytics integration. Real-time production dashboards replaced nightly batch reports. Azure OpenAI powers predictive maintenance alerts.',
      fallbackIcon: 'MF',
      toneClass: 'mfg',
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

export default function AzureSuccessStoriesSection({ section }) {
  const heading = section?.heading || defaultSection.heading;
  const titleHtml = unwrapRichText(heading.title || defaultSection.heading.title, ['h1', 'h2', 'h3', 'p', 'div']);
  const description = heading.description || defaultSection.heading.description;
  const cards = normalizeCards(section);

  return (
    <section className="ps ps-white">
      <div className="container">
        <span className="badge baz sec-eyebrow rv">Azure Success Stories</span>
        <h2 className="sec-title rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />
        <p className="sec-sub rv d2">{description}</p>

        <div className="case-grid">
          {cards.map((card, index) => {
            const fallback = defaultSection.cards[index % defaultSection.cards.length];
            const iconUrl = getStrapiMediaUrl(card.icon);
            const toneClass = card.toneClass || fallback.toneClass;

            return (
              <div key={card.id || `${card.title}-${index}`} className={`case-card rv d${(index % 3) + 1}`}>
                <div className={`case-header ${toneClass}`}>
                  <div className="case-icon">
                    {iconUrl ? (
                      <CmsImage
                        src={iconUrl}
                        alt={card.title || fallback.title}
                        className="case-icon-img"
                        style={{ width: 26, height: 26, objectFit: 'contain' }}
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
