import SectionHeader from './SectionHeader';
import { serviceCatalogue } from './data';

export default function ServiceCatalogueSection() {
  return (
    <section className="ps ps-c">
      <div className="container">
        <SectionHeader
          badge="Service Catalogue"
          badgeClassName="badge bo"
          title="Everything We Manage. In Detail."
          description="From datacenter infrastructure to Microsoft 365 - Thynkwise manages the full technology stack so your team stays focused on business outcomes, not uptime."
        />

        <div className="cat-grid">
          {serviceCatalogue.map((category) => (
            <div
              key={category.title}
              className={`cat-card rv ${category.delay}`}
              style={{ '--card-accent': category.accent }}
            >
              <div className="cat-head">
                <div className="cat-icon" style={{ background: category.iconBg }}>
                  {category.icon}
                </div>
                <div className="cat-title">{category.title}</div>
              </div>
              <ul className="cat-list">
                {category.items.map((item) => (
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
