import CmsImage from '../CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';

const valueItems = [
  {
    icon: '\u{1F501}',
    iconBg: 'rgba(58,89,168,0.08)',
    title: 'Multi-Cloud, No Lock-In',
    description:
      'Architect across AWS, Azure, GCP, and sovereign cloud. Right tool, right workload.',
  },
  {
    icon: '\u{1F6E1}\uFE0F',
    iconBg: 'rgba(246,136,31,0.08)',
    title: 'Security Built In',
    description:
      'Managed SOC, VAPT, GRC, and IAM - not bolted on after a breach.',
  },
  {
    icon: '\u2699\uFE0F',
    iconBg: 'rgba(22,163,74,0.08)',
    title: 'Fully Managed Operations',
    description:
      '24/7 infrastructure monitoring, patching, incident response, and optimisation.',
  },
  {
    icon: '\u{1F91D}',
    iconBg: 'rgba(168,85,247,0.08)',
    title: 'Named Account Ownership',
    description:
      'A dedicated cloud architect and account manager - not a ticket queue.',
  },
];

export default function ValueStrip({ items }) {
  const contentItems = items?.length
    ? items.map((item, index) => ({
        ...valueItems[index % valueItems.length],
        id: item.id,
        title: item.title || valueItems[index % valueItems.length].title,
        description: item.description || valueItems[index % valueItems.length].description,
        imageUrl: getStrapiMediaUrl(item.image),
      }))
    : valueItems;

  return (
    <div className="val-strip">
      <div className="container" style={{ padding: 0 }}>
        <div className="val-grid">
          {contentItems.map((item, index) => (
            <div key={item.id || `${item.title}-${index}`} className="val-item">
              <div className="val-ico" style={{ background: item.iconBg }}>
                {item.imageUrl ? (
                  <CmsImage
                    src={item.imageUrl}
                    alt={item.title}
                    style={{ width: 28, height: 28, objectFit: 'contain' }}
                  />
                ) : (
                  item.icon
                )}
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
