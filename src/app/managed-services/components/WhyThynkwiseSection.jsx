import SectionHeader from './SectionHeader';
import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { whyItems } from './data';

export default function WhyThynkwiseSection({ section }) {
  const cards = section?.card?.length
    ? section.card.map((item, index) => ({
        ...whyItems[index % whyItems.length],
        id: item.id,
        title: item.title || whyItems[index % whyItems.length].title,
        text: item.description || whyItems[index % whyItems.length].text,
        iconUrl: getStrapiMediaUrl(item.icon),
      }))
    : whyItems;

  return (
    <section className="ps ps-w">
      <div className="container">
        <SectionHeader
          badge="Why Thynkwise"
          badgeClassName="badge bb"
          title={section?.heading?.title || 'What Makes Thynkwise Different'}
          description={
            section?.heading?.description ||
            "Any MSP can promise 24/7 support. Here's what we actually deliver that others don't."
          }
        />

        <div className="why-grid-ms">
          {cards.map((item, index) => (
            <div key={item.id || `${item.title}-${index}`} className={`why-card-ms rv ${item.delay}`}>
              <div className="why-icon-ms" style={{ background: item.iconBg }}>
                {item.iconUrl ? (
                  <CmsImage
                    src={item.iconUrl}
                    alt={item.title}
                    style={{ width: 28, height: 28, objectFit: 'contain' }}
                  />
                ) : (
                  item.icon
                )}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
