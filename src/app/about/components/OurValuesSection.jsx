import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';

const defaultHeading = {
  title: 'How we make decisions when no one is watching.',
  description:
    "These aren't wall posters. They're the criteria we use when the right answer is uncomfortable.",
};

const defaultCards = [
  {
    title: 'Truth over Comfort',
    description:
      "We'll tell you which cloud is wrong for your use case - even if it's one we resell. A client who makes the right decision stays a client. A client who makes the wrong decision calls their lawyer.",
  },
  {
    title: 'Local Expertise. Global Standards.',
    description:
      'World-class cloud architecture delivered with deep understanding of local compliance, data sovereignty, and regulatory requirements - wherever your business operates. Global capability, not generic advice.',
  },
  {
    title: 'Commitments in Writing',
    description:
      "Our SLA isn't a webpage. It's a contract clause with financial penalties if we don't meet it. We document every commitment, track every obligation, and report on every breach - before you notice.",
  },
  {
    title: 'Earn the Renewal',
    description:
      '94% of our managed services clients renew annually - not because of contracts, but because the FinOps savings, reduced incidents, and compliance posture make leaving a bad financial decision.',
  },
];

function getCardNumber(index) {
  return String(index + 1).padStart(2, '0');
}

export default function OurValuesSection({ section }) {
  const heading = section?.heading || defaultHeading;
  const cards = section?.card?.length ? section.card : defaultCards;

  return (
    <section className="ps ps-c">
      <div className="container">
        <div className="values-intro">
          <span className="badge bg rv">Our Values</span>
          <h2 className="rv d1">{heading.title}</h2>
          <p className="rv d2">{heading.description}</p>
        </div>
        <div className="values-grid rv d2">
          {cards.map((card, index) => {
            const iconUrl = getStrapiMediaUrl(card.icon);

            return (
              <div key={card.id || `${card.title}-${index}`} className="value-card" data-n={getCardNumber(index)}>
                <span className="vc-icon">
                  {iconUrl ? (
                    <CmsImage
                      src={iconUrl}
                      alt={card.title}
                      style={{ width: 28, height: 28, objectFit: 'contain' }}
                    />
                  ) : null}
                </span>
                <div className="vc-title">{card.title}</div>
                <p className="vc-body">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
