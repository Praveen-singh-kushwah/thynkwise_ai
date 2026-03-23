import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { partnerNote, partnerSections } from './data';

const partnerAccents = [
  ['rgba(118,185,0,1)', 'rgba(237,28,36,.9)', 'rgba(0,113,197,.9)'],
  ['rgba(255,90,0,.8)', 'rgba(0,114,198,.9)', 'rgba(0,150,214,.9)', 'rgba(230,0,18,.9)', 'rgba(0,180,120,.8)'],
  ['rgba(118,185,0,.8)', 'rgba(0,100,200,.8)', 'rgba(0,180,160,.8)', 'rgba(200,60,0,.8)'],
];

function getInitials(name) {
  return (name || '')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
}

export default function PartnerEcosystemSection({ section }) {
  const groups = section?.section_1?.length
    ? section.section_1.map((group, index) => ({
        title: group.title || partnerSections[index % partnerSections.length].title,
        cards:
          group.card?.map((card, cardIndex) => ({
            id: card.id,
            title:
              card.title ||
              partnerSections[index % partnerSections.length].cards[
                cardIndex % partnerSections[index % partnerSections.length].cards.length
              ].title,
            description:
              card.description ||
              partnerSections[index % partnerSections.length].cards[
                cardIndex % partnerSections[index % partnerSections.length].cards.length
              ].description,
            iconUrl: getStrapiMediaUrl(card.icon),
          })) || partnerSections[index % partnerSections.length].cards,
      }))
    : partnerSections;

  const note = section?.card_4?.description || partnerNote;

  return (
    <section className="partners" id="partners">
      <div className="container">
        <div className="pt-intro rv">
          <span className="badge bc">Partner Ecosystem</span>
          <h2>{section?.heading?.title || 'Powered by the Best in GPU Infrastructure'}</h2>
          <p>
            {section?.heading?.description ||
              'From chip architects to server OEMs - every piece of hardware Thynkwise deploys comes from world-class partners with production-grade support contracts.'}
          </p>
        </div>

        {groups.map((group, groupIndex) => {
          const gridClassName =
            group.cards.length <= 3 ? 'pt-grid pt-grid-3' : group.cards.length === 4 ? 'pt-grid pt-grid-4' : 'pt-grid';

          return (
            <div key={`${group.title}-${groupIndex}`} className="pt-cat rv">
              <div className="pt-cat-label">{group.title}</div>
              <div className={gridClassName}>
                {group.cards.map((card, cardIndex) => (
                  <div
                    key={card.id || `${group.title}-${card.title}-${cardIndex}`}
                    className="pt-card"
                    style={{ '--pt-a': partnerAccents[groupIndex]?.[cardIndex] || 'var(--gpu-cyan)' }}
                  >
                    <div className="pt-logo-box">
                      {card.iconUrl ? (
                        <CmsImage
                          src={card.iconUrl}
                          alt={card.title}
                          style={{ width: 100, height: 30, objectFit: 'contain' }}
                        />
                      ) : (
                        <span>{getInitials(card.title)}</span>
                      )}
                    </div>
                    <div className="pt-divider" />
                    <div className="pt-name">{card.title}</div>
                    <div className="pt-role">{card.description}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="pt-note rv">
          <span className="pt-note-icon">{'\u{1F527}'}</span>
          <p>{note}</p>
        </div>
      </div>
    </section>
  );
}
