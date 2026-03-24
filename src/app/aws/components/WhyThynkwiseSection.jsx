import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';

const defaultSection = {
  heading: {
    title: 'AWS Power. Indian Simplicity.',
    description:
      'Every Indian enterprise that goes direct to AWS eventually hits the same three walls: USD invoices, no FinOps, US-timezone support. Thynkwise eliminates all three.',
  },
  card: [
    {
      title: 'Local Currency Billing',
      description:
        'Eliminate foreign exchange exposure. We support local-currency invoicing in your region, with structured billing cycles, full tax breakdowns, and direct integration with major ERP and accounting platforms.',
      fallbackIcon: '₹',
    },
    {
      title: 'Proactive FinOps Management',
      description:
        'Reserved Instances, Savings Plans, right-sizing, and Spot usage - all managed proactively. Our clients average 28-35% AWS cost reduction in Year 1, even after accounting for our management fee.',
      fallbackIcon: '📉',
    },
    {
      title: '24/7 Follow-the-Sun Support',
      description:
        'AWS Basic support offers no SLA. With Thynkwise, you get engineer-grade incident response, WhatsApp escalation, and a 4-hour SLA - all in your timezone, in your language.',
      fallbackIcon: '📞',
    },
    {
      title: 'Compliant Cloud Services',
      description:
        'Pre-configured security guardrails, audit logging, encryption policies, and data residency controls across AWS Mumbai (ap-south-1) - production-ready from Day 1, not bolted on later.',
      fallbackIcon: '🛡️',
    },
    {
      title: 'Zero-Downtime Billing Migration',
      description:
        'Already on AWS Direct? We take over your existing accounts without touching a single resource. Migration takes 3-5 business days. Your EC2 instances, databases, and configurations stay exactly as they are.',
      fallbackIcon: '🔁',
    },
    {
      title: '150+ AWS Certified Engineers',
      description:
        'Solutions Architect Professionals, DevOps Engineers, Security Specialty, and ML Specialty certifications across our team. AWS audits our Advanced Partner status annually - we maintain it every year.',
      fallbackIcon: '🧠',
    },
  ],
};

export default function WhyThynkwiseSection({ section }) {
  const heading = section?.heading || defaultSection.heading;
  const cards = section?.card?.length
    ? section.card.map((card, index) => ({ ...card, fallbackIcon: defaultSection.card[index % defaultSection.card.length].fallbackIcon }))
    : defaultSection.card;

  return (
    <section className="ps ps-white">
      <div className="container">
        <span className="badge baws sec-eyebrow rv">Why Thynkwise for AWS</span>
        <h2 className="sec-title rv d1">{heading.title}</h2>
        <p className="sec-sub rv d2">{heading.description}</p>
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
