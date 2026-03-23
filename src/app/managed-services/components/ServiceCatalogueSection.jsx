import SectionHeader from './SectionHeader';
import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { serviceCatalogue } from './data';

export default function ServiceCatalogueSection({ section }) {
  const categories = section?.service_category?.length
    ? section.service_category.map((category, index) => ({
        ...serviceCatalogue[index % serviceCatalogue.length],
        id: category.id,
        title: category.title || serviceCatalogue[index % serviceCatalogue.length].title,
        description:
          category.description || serviceCatalogue[index % serviceCatalogue.length].description,
        iconUrl: getStrapiMediaUrl(category.icon),
        items:
          category.services?.map((item) => item.services).filter(Boolean) ||
          serviceCatalogue[index % serviceCatalogue.length].items,
      }))
    : serviceCatalogue;

  return (
    <section className="ps ps-c">
      <div className="container">
        <SectionHeader
          badge="Service Catalogue"
          badgeClassName="badge bo"
          title={section?.heading || 'Everything We Manage. In Detail.'}
          description={
            section?.description ||
            'From datacenter infrastructure to Microsoft 365 - Thynkwise manages the full technology stack so your team stays focused on business outcomes, not uptime.'
          }
        />

        <div className="cat-grid">
          {categories.map((category, index) => (
            <div
              key={category.id || `${category.title}-${index}`}
              className={`cat-card rv ${category.delay}`}
              style={{ '--card-accent': category.accent }}
            >
              <div className="cat-head">
                <div className="cat-icon" style={{ background: category.iconBg }}>
                  {category.iconUrl ? (
                    <CmsImage
                      src={category.iconUrl}
                      alt={category.title}
                      style={{ width: 28, height: 28, objectFit: 'contain' }}
                    />
                  ) : (
                    category.icon
                  )}
                </div>
                <div className="cat-title">{category.title}</div>
              </div>
              <ul className="cat-list">
                {category.items.map((item, itemIndex) => (
                  <li key={`${category.id || category.title}-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
