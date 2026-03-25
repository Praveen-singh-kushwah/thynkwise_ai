import Link from 'next/link';
import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';

const defaultSection = {
  heading: '60+ Active Azure Certifications',
  description:
    "Real credentials. Real expertise. Every Thynkwise Azure architect is certified and actively maintains annual Microsoft renewals.",
  card: [
    { title: 'Solutions Architect Expert', value: '12', label: 'Active certifications', fallbackIcon: 'SA' },
    { title: 'Security Engineer Associate', value: '10', label: 'Active certifications', fallbackIcon: 'SE' },
    { title: 'DevOps Engineer Expert', value: '9', label: 'Active certifications', fallbackIcon: 'DO' },
    { title: 'AI Engineer Associate', value: '8', label: 'Active certifications', fallbackIcon: 'AI' },
  ],
  sub_text:
    'Plus: Azure Data Engineer, Azure Administrator, Azure Network Engineer, Power Platform, and Azure Virtual Desktop specialists',
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

export default function TeamCredentialsSection({ section }) {
  const titleHtml = unwrapRichText(section?.heading || defaultSection.heading, ['h1', 'h2', 'h3', 'p', 'div']);
  const description = section?.description || defaultSection.description;
  const cards = section?.card?.length
    ? section.card.map((item, index) => ({
        ...item,
        fallbackIcon: defaultSection.card[index % defaultSection.card.length].fallbackIcon,
      }))
    : defaultSection.card;
  const subText = section?.sub_text || defaultSection.sub_text;

  return (
    <section className="ps ps-cream">
      <div className="container">
        <span className="badge bo sec-eyebrow rv">Team Credentials</span>
        <h2 className="sec-title rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />
        <p className="sec-sub rv d2">{description}</p>

        <div className="cert-grid">
          {cards.map((card, index) => {
            const iconUrl = getStrapiMediaUrl(card.icon);

            return (
              <div key={card.id || `${card.title}-${index}`} className={`cert-card rv d${(index % 4) + 1}`}>
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

        <div className="cert-foot rv">
          <p className="cert-foot-note">{subText}</p>
          <Link href="/book-demo" className="btn btn-outline">
            View Full Team Credentials {'\u2192'}
          </Link>
        </div>
      </div>
    </section>
  );
}
