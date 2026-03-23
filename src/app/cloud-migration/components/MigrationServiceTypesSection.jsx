import SectionHeader from './SectionHeader';
import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { primaryMigrationTypes, secondaryMigrationTypes } from './data';

export default function MigrationServiceTypesSection({ section }) {
  const allServices = section?.migration_service?.length
    ? section.migration_service.map((item, index) => ({
        ...(index < 4
          ? primaryMigrationTypes[index % primaryMigrationTypes.length]
          : secondaryMigrationTypes[(index - 4) % secondaryMigrationTypes.length]),
        id: item.id,
        title:
          item.title ||
          (index < 4
            ? primaryMigrationTypes[index % primaryMigrationTypes.length].title
            : secondaryMigrationTypes[(index - 4) % secondaryMigrationTypes.length].title),
        description:
          item.description ||
          (index < 4
            ? primaryMigrationTypes[index % primaryMigrationTypes.length].description
            : secondaryMigrationTypes[(index - 4) % secondaryMigrationTypes.length].description),
        iconUrl: getStrapiMediaUrl(item.icon),
        tags:
          item.tag?.map((tag) => tag.tag).filter(Boolean) ||
          (index < 4
            ? primaryMigrationTypes[index % primaryMigrationTypes.length].tags
            : secondaryMigrationTypes[(index - 4) % secondaryMigrationTypes.length].tags),
      }))
    : [...primaryMigrationTypes, ...secondaryMigrationTypes];

  const primary = allServices.slice(0, 4);
  const secondary = allServices.slice(4);

  return (
    <section className="ps ps-c">
      <div className="container">
        <SectionHeader
          badge="Migration Service Portfolio"
          badgeClassName="badge bo"
          title={section?.heading || 'Every Migration Type. One Expert Partner.'}
          description={
            section?.description ||
            'From network-level migrations to full cloud re-architecture - Thynkwise has the tooling, certifications, and playbooks for every workload type, every topology, every risk profile.'
          }
        />

        <div className="cm-type-grid-primary">
          {primary.map((item, index) => (
            <div key={item.id || `${item.title}-${index}`} className={`mig-type-card rv ${item.delay}`}>
              <div className="mig-type-icon">
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
              <p>{item.description}</p>
              <div className="mig-type-tags">
                {item.tags.map((tag, tagIndex) => (
                  <span key={`${item.id || item.title}-${tagIndex}`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="cm-type-grid-secondary">
          {secondary.map((item, index) => (
            <div
              key={item.id || `${item.title}-${index}`}
              className={`mig-type-card mig-dark rv ${item.delay}`}
            >
              <div className="mig-type-icon">
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
              <p>{item.description}</p>
              <div className="mig-type-tags dark">
                {item.tags.map((tag, tagIndex) => (
                  <span key={`${item.id || item.title}-${tagIndex}`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
