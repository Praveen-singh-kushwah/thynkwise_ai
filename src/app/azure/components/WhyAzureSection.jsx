import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';

const defaultSection = {
  heading: {
    title: "Azure's Power. India's Simplicity.",
    description:
      'Going direct to Microsoft means USD billing, no compliance support, and enterprise support plans starting at $15K/year. Thynkwise solves all three - contact us for pricing.',
  },
  card: [
    {
      title: '100% Local Currency Billing',
      description:
        'No USD exposure. No currency conversion anxiety. Fixed local currency rate on the 1st of each month. Full GST breakdown with HSN/SAC codes that integrate with Tally, Zoho Books, and SAP - automatically.',
      fallbackIcon: '₹',
    },
    {
      title: 'BFSI & DPDP Compliance Built In',
      description:
        'Azure India Central and India South data centres meet RBI storage localisation. Thynkwise configures Azure Policy, geo-restrictions, DPDP compliance guardrails, and PCI-DSS environments from Day 1 - not as an afterthought.',
      fallbackIcon: '🏦',
    },
    {
      title: 'Named Account Manager + 24/7 Support',
      description:
        'Direct Microsoft support requires a $15K Enterprise Agreement. With Thynkwise, you get a named Azure-certified account manager, WhatsApp escalation, and a 4-hour incident SLA - all in IST timezone.',
      fallbackIcon: '📞',
    },
    {
      title: 'Azure Hybrid Benefit Optimisation',
      description:
        'If you have existing Windows Server or SQL Server licences, Azure Hybrid Benefit can save 40-80%. Most Indian enterprises do not know they qualify. Thynkwise runs a licence audit and activates these savings within 2 weeks.',
      fallbackIcon: '💰',
    },
    {
      title: 'Microsoft 365 + Azure Integration',
      description:
        'Most Indian enterprises already use Microsoft 365. Thynkwise creates seamless Azure Active Directory SSO integration, Teams-based alerting, and Intune MDM policies that unify your security posture across M365 and Azure.',
      fallbackIcon: '🔄',
    },
    {
      title: 'Azure OpenAI & Copilot for India',
      description:
        'Thynkwise is one of the first Indian partners to deploy Azure OpenAI Service for enterprise use cases - document intelligence, customer service automation, and code generation - with full DPDP-compliant data handling.',
      fallbackIcon: '🤖',
    },
  ],
};

export default function WhyAzureSection({ section }) {
  const heading = section?.heading || defaultSection.heading;
  const cards = section?.card?.length
    ? section.card.map((item, index) => ({
        ...item,
        fallbackIcon: defaultSection.card[index % defaultSection.card.length].fallbackIcon,
      }))
    : defaultSection.card;

  return (
    <section className="ps ps-cream">
      <div className="container">
        <span className="badge bo sec-eyebrow rv">Why Azure via Thynkwise</span>
        <h2 className="sec-title rv">{heading.title}</h2>
        <p className="sec-sub rv">{heading.description}</p>

        <div className="why-grid">
          {cards.map((card, index) => {
            const iconUrl = getStrapiMediaUrl(card.icon);

            return (
              <div key={card.id || `${card.title}-${index}`} className={`why-card rv d${(index % 3) + 1}`}>
                <div className="why-icon">
                  {iconUrl ? (
                    <CmsImage
                      src={iconUrl}
                      alt={card.title}
                      className="why-icon-img"
                      style={{ width: 24, height: 24, objectFit: 'contain' }}
                    />
                  ) : (
                    card.fallbackIcon
                  )}
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
