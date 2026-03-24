import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';

const defaultHeading = {
  title: 'Global Reach. Local Presence.',
  description:
    'Strategically placed delivery teams - not just where headquarters is, but where our clients actually operate. On-site anywhere in 24 hours, operational support 24/7.',
};

const defaultCards = [
  {
    icon: '🏙️',
    title: 'Mumbai',
    cityType: 'Global HQ · BFSI Hub',
    description: '150+ BFSI clients. Corporate headquarters. Financial services Centre of Excellence.',
  },
  {
    icon: '🌆',
    title: 'Bengaluru',
    cityType: 'Tech Hub · SRE Centre',
    description: 'Primary SRE operations. 24/7 NOC. Engineering talent hub.',
  },
  {
    icon: '🏛️',
    title: 'Delhi NCR',
    cityType: 'Enterprise · Government',
    description: 'PSU and government cloud projects. Sovereign cloud deployments. Policy & compliance advisory.',
  },
  {
    icon: '🔵',
    title: 'Hyderabad',
    cityType: 'Azure Centre of Excellence',
    description: 'Microsoft partnership hub. Pharma and manufacturing clients. Azure Hybrid deployments.',
  },
  {
    icon: '🌊',
    title: 'Chennai',
    cityType: 'AWS Region · DR Hub',
    description: 'AWS ap-south-1 proximity. DR configurations. South Asia delivery centre.',
  },
  {
    icon: '🏢',
    title: 'Pune',
    cityType: 'Engineering · FinOps',
    description: 'FinOps Centre of Excellence. DevOps and Terraform engineering teams.',
  },
  {
    icon: '⚙️',
    title: 'Ahmedabad',
    cityType: 'SMB Growth Market',
    description: '35+ clients across manufacturing, textiles, and logistics sectors.',
  },
  {
    icon: '🌴',
    title: 'Kochi',
    cityType: 'GCP · Startup Focus',
    description: 'Google Cloud partner hub. Startup ecosystem and IT park relationships.',
  },
];

function getHeading(section) {
  if (Array.isArray(section?.heading) && section.heading.length) {
    return section.heading[0];
  }

  return section?.heading || defaultHeading;
}

function getCityType(card, fallback) {
  const points = card?.points?.map((item) => item?.point).filter(Boolean) || [];

  if (points.length) {
    return points.join(' · ');
  }

  return fallback;
}

export default function WhereWeAreSection({ section }) {
  const heading = getHeading(section);
  const cards = section?.card?.length ? section.card : defaultCards;

  return (
    <section className="ps ps-w">
      <div className="container">
        <span className="badge bg sec-ey rv">Where We Are</span>
        <h2 className="sec-ti rv">{heading.title}</h2>
        <p className="sec-su rv">{heading.description}</p>
        <div className="cities-grid">
          {cards.map((card, index) => {
            const fallbackCard = defaultCards[index % defaultCards.length];
            const imageUrl = getStrapiMediaUrl(card.icon);
            const cityType = getCityType(card, fallbackCard.cityType);

            return (
              <div key={card.id || `${card.title}-${index}`} className={`city-card rv d${(index % 4) + 1}`}>
                {imageUrl ? (
                  <span className="city-flag">
                    <CmsImage
                      src={imageUrl}
                      alt={card.title || fallbackCard.title}
                      className="city-flag-img"
                      style={{ width: 28, height: 28, objectFit: 'contain' }}
                    />
                  </span>
                ) : (
                  <span className="city-flag">{fallbackCard.icon}</span>
                )}
                <div className="city-name">{card.title || fallbackCard.title}</div>
                <div className="city-type">{cityType}</div>
                <div className="city-info">{card.description || fallbackCard.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
