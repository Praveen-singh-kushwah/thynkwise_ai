import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { partnerSections } from './data';

export default function TechnologyPartnersSection({ section }) {
  const partnerGroups = section?.partner_category?.length
    ? section.partner_category.map((category, categoryIndex) => {
        const fallbackCategory = partnerSections[categoryIndex % partnerSections.length];

        return {
          label: category.category_name || fallbackCategory.label,
          cards: category.partners?.map((partner, partnerIndex) => {
            const fallbackCard = fallbackCategory.cards[partnerIndex % fallbackCategory.cards.length];

            return {
              ...fallbackCard,
              id: partner.id,
              name: partner.name || fallbackCard.name,
              role: partner.role || fallbackCard.role,
              iconUrl: getStrapiMediaUrl(partner.icon),
            };
          }) || fallbackCategory.cards,
        };
      })
    : partnerSections;

  return (
    <section className="cy-partners-sec" id="partners">
      <div className="container">
        <div className="cy-partners-intro rv">
          <span className="badge bw cy-partners-badge">Technology Partner Ecosystem</span>
          <h2>{section?.heading || "Powered by the World's Best Security Vendors"}</h2>
          <p>
            {section?.description ||
              'Thynkwise partners with global leaders in each security category — every managed service is backed by best-in-class technology, not generic tooling.'}
          </p>
        </div>

        {partnerGroups.map((group, groupIndex) => (
          <div key={`${group.label}-${groupIndex}`} className="cy-partner-section">
            <div className="cy-partner-category rv">{group.label}</div>
            <div className="cy-partner-grid rv">
              {group.cards.map((card, cardIndex) => (
                <div
                  key={card.id || `${group.label}-${card.name}-${cardIndex}`}
                  className="cy-partner-card"
                  style={{ '--cy-pt-accent': card.accent }}
                >
                  <div className="cy-partner-abbr" style={{ background: card.abbrBg }}>
                    {card.iconUrl ? (
                      <CmsImage
                        src={card.iconUrl}
                        alt={card.name}
                        style={{ width: 32, height: 32, objectFit: 'contain' }}
                      />
                    ) : (
                      card.abbr
                    )}
                  </div>
                  <div className="cy-partner-name">{card.name}</div>
                  <div className="cy-partner-role">{card.role}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

