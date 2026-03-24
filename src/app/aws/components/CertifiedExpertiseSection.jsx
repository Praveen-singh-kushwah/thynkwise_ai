import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';

const defaultSection = {
  heading: '150+ active AWS certifications.<br>Audited annually by Amazon.',
  description:
    "AWS audits our Advanced Consulting Partner status every year. We don't just claim expertise - we prove it with active certifications across every AWS discipline.",
  card: [
    {
      title: 'Solutions Architect',
      value: '28+',
      label: 'Associate & Professional',
      fallbackIcon: '🏗️',
    },
    {
      title: 'DevOps Engineer',
      value: '22+',
      label: 'Professional Specialty',
      fallbackIcon: '⚙️',
    },
    {
      title: 'Security Specialty',
      value: '18+',
      label: 'AWS Security Engineer',
      fallbackIcon: '🛡️',
    },
    {
      title: 'ML Specialty',
      value: '12+',
      label: 'SageMaker & AI/ML',
      fallbackIcon: '🧠',
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

export default function CertifiedExpertiseSection({ section }) {
  const titleHtml = unwrapRichText(section?.heading || defaultSection.heading, ['h1', 'h2', 'h3', 'p', 'div']);
  const description = section?.description || defaultSection.description;
  const cards = section?.card?.length
    ? section.card.map((item, index) => ({
        ...item,
        fallbackIcon: defaultSection.card[index % defaultSection.card.length].fallbackIcon,
      }))
    : defaultSection.card;

  return (
    <section className="ps ps-pale">
      <div className="container">
        <span className="sec-label rv">Certified Expertise</span>
        <h2 className="sec-title rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />
        <p className="sec-sub rv d2">{description}</p>
        <div className="cert-grid rv d3">
          {cards.map((card, index) => {
            const iconUrl = getStrapiMediaUrl(card.icon);

            return (
              <div key={card.id || `${card.title}-${index}`} className="cert-card">
                <div className="cert-icon">
                  {iconUrl ? (
                    <CmsImage
                      src={iconUrl}
                      alt={card.title}
                      className="cert-icon-img"
                      style={{ width: 32, height: 32, objectFit: 'contain' }}
                    />
                  ) : (
                    card.fallbackIcon
                  )}
                </div>
                <div className="cert-name">{card.title}</div>
                <span className="cert-count">{card.value}</span>
                <div className="cert-type">{card.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
