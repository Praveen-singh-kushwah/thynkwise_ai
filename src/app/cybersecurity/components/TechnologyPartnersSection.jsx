import { partnerSections } from './data';

export default function TechnologyPartnersSection() {
  return (
    <section className="cy-partners-sec" id="partners">
      <div className="container">
        <div className="cy-partners-intro rv">
          <span className="badge bw cy-partners-badge">
            Technology Partner Ecosystem
          </span>
          <h2>Powered by the World&apos;s Best Security Vendors</h2>
          <p>
            Thynkwise partners with global leaders in each security category
            {'\u2014'} every managed service is backed by best-in-class technology,
            not generic tooling.
          </p>
        </div>

        {partnerSections.map((section) => (
          <div key={section.label} className="cy-partner-section">
            <div className="cy-partner-category rv">{section.label}</div>
            <div className="cy-partner-grid rv">
              {section.cards.map((card) => (
                <div
                  key={`${section.label}-${card.name}`}
                  className="cy-partner-card"
                  style={{ '--cy-pt-accent': card.accent }}
                >
                  <div className="cy-partner-abbr" style={{ background: card.abbrBg }}>
                    {card.abbr}
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
