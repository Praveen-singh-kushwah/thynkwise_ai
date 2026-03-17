import SectionHeader from './SectionHeader';
import { whyItems } from './data';

export default function WhyThynkwiseSection() {
  return (
    <section className="ps ps-w">
      <div className="container">
        <SectionHeader
          badge="Why Thynkwise"
          badgeClassName="badge bb"
          title="What Makes Thynkwise Different"
          description="Any MSP can promise 24/7 support. Here's what we actually deliver that others don't."
        />

        <div className="why-grid-ms">
          {whyItems.map((item) => (
            <div key={item.title} className={`why-card-ms rv ${item.delay}`}>
              <div className="why-icon-ms" style={{ background: item.iconBg }}>
                {item.icon}
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
