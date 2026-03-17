import SectionHeader from './SectionHeader';
import { domainCards } from './data';

export default function ThreeDomainsSection() {
  return (
    <section className="cy-domains-sec">
      <div className="container">
        <SectionHeader
          badge="Security Model"
          badgeClassName="badge br"
          title="Three Domains. One Partner. Total Coverage."
          description={"Security is not a single product \u2014 it's a practice. Thynkwise organises all services across three interlocking security domains so nothing falls through the cracks."}
        />
        <div className="cy-domain-grid">
          {domainCards.map((card, index) => (
            <div
              key={card.title}
              className={`cy-domain-card ${card.variant} rv d${index + 1}`}
            >
              <div className="cy-domain-number">{card.number}</div>
              <div className="cy-domain-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <ul className="cy-domain-list">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
