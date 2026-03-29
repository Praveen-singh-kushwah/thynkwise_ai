import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';

function getPartnerCardClass(theme) {
  const supported = new Set(['esds', 'yotta', 'ctrls', 'sify', 'e2e', 'ntt']);

  return supported.has(theme) ? `partner-card pc-${theme}` : 'partner-card';
}

function getInitials(name) {
  return (name || '')
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
}

export default function PartnerEcosystemSection({ section }) {
  if (!section) {
    return null;
  }

  const cards = section.partner_cards || [];
  const hasContent =
    section.eyebrow ||
    section.title ||
    section.description ||
    cards.length ||
    section.selection_note_title ||
    section.selection_note_description;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="partners-section" id="partners">
      <div className="container">
        {(section.eyebrow || section.title || section.description) ? (
          <div className="partners-intro rv">
            {section.eyebrow ? <span className="badge bt partners-badge">{section.eyebrow}</span> : null}
            {section.title ? <h2>{section.title}</h2> : null}
            {section.description ? <p>{section.description}</p> : null}
          </div>
        ) : null}

        {cards.length ? (
          <div className="partners-grid">
            {cards.map((card, index) => {
              const logoUrl = getStrapiMediaUrl(card.logo);
              const badges = card.badges || [];

              return (
                <div
                  key={card.id || `${card.partner_name}-${index}`}
                  className={`${getPartnerCardClass(card.brand_theme)} rv d${(index % 3) + 1}`}
                >
                  <div className="partner-logo-wrap">
                    {logoUrl ? (
                      <CmsImage
                        src={logoUrl}
                        alt={card.partner_name}
                        style={{ maxHeight: 48, maxWidth: 160, width: 'auto', objectFit: 'contain' }}
                      />
                    ) : (
                      <div className="partner-logo-fallback">{getInitials(card.partner_name)}</div>
                    )}
                  </div>
                  <div className="partner-divider" />
                  <div className="partner-details">
                    {card.partner_name ? <div className="partner-name">{card.partner_name}</div> : null}
                    {card.tagline ? <div className="partner-tagline">{card.tagline}</div> : null}
                    {badges.length ? (
                      <div className="partner-badges">
                        {badges.map((badge, badgeIndex) => (
                          <span key={badge.id || `${badge.label}-${badgeIndex}`} className="partner-badge">
                            {badge.label}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}

        {(section.selection_note_title || section.selection_note_description) ? (
          <div className="partners-note rv">
            <div className="partners-note-ico">{'\u{1F4A1}'}</div>
            <p>
              {section.selection_note_title ? <strong>{section.selection_note_title}:</strong> : null}{' '}
              {section.selection_note_description}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
