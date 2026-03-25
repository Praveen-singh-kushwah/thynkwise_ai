import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';

const defaultSection = {
  heading: 'What We Deliver on Azure',
  description: 'From infrastructure to AI - our certified Azure architects handle the full stack.',
  service_category: [
    {
      title: 'Azure Virtual Machines & Compute',
      description:
        'Right-sized VM deployments with Azure Reserved Instances, Spot VMs, and Auto Scaling. VMSS configurations for web-scale workloads.',
      services: [
        { services: 'B-series' },
        { services: 'D-series' },
        { services: 'E-series' },
        { services: 'VMSS' },
        { services: 'Azure Spot' },
      ],
      fallbackIcon: '?',
    },
    {
      title: 'Azure Active Directory & Entra ID',
      description:
        'Enterprise identity management with Conditional Access, MFA, and Privileged Identity Management. Zero-trust architecture for BFSI environments.',
      services: [
        { services: 'Entra ID' },
        { services: 'SSO' },
        { services: 'PIM' },
        { services: 'Conditional Access' },
      ],
      fallbackIcon: '???',
    },
    {
      title: 'Azure DevOps & Pipelines',
      description:
        'End-to-end CI/CD on Azure DevOps with Terraform IaC, AKS deployments, and GitHub Actions integration. Shift-left security with Defender for DevOps.',
      services: [
        { services: 'Azure DevOps' },
        { services: 'AKS' },
        { services: 'Terraform' },
        { services: 'Bicep' },
      ],
      fallbackIcon: '??',
    },
    {
      title: 'Azure AI & Machine Learning',
      description:
        'Azure OpenAI Service, Azure ML Studio, and Cognitive Services deployments with DPDP-compliant data pipelines. LLM fine-tuning for Indian language support.',
      services: [
        { services: 'OpenAI' },
        { services: 'Copilot' },
        { services: 'ML Studio' },
        { services: 'Cognitive' },
      ],
      fallbackIcon: '??',
    },
    {
      title: 'Azure SQL & Cosmos DB',
      description:
        'Fully managed Azure SQL, Cosmos DB, and PostgreSQL Flexible Server. Database migration from Oracle/MySQL/MSSQL with Azure Database Migration Service.',
      services: [
        { services: 'Azure SQL' },
        { services: 'Cosmos DB' },
        { services: 'PostgreSQL' },
        { services: 'DMS' },
      ],
      fallbackIcon: '??',
    },
    {
      title: 'Azure Security & Defender',
      description:
        'Microsoft Defender for Cloud, Sentinel SIEM, Key Vault, and DDoS Protection. DPDP Act and CERT-In compliance posture management with real-time dashboards.',
      services: [
        { services: 'Defender' },
        { services: 'Sentinel' },
        { services: 'Key Vault' },
        { services: 'DDoS' },
      ],
      fallbackIcon: '??',
    },
  ],
};

export default function AzureServicesSection({ section }) {
  const heading = section?.heading || defaultSection.heading;
  const description = section?.description || defaultSection.description;
  const categories = section?.service_category?.length
    ? section.service_category.map((item, index) => ({
        ...item,
        fallbackIcon: defaultSection.service_category[index % defaultSection.service_category.length].fallbackIcon,
      }))
    : defaultSection.service_category;

  return (
    <section className="ps ps-azure">
      <div className="container">
        <span className="badge bw sec-eyebrow rv">Azure Services Portfolio</span>
        <h2 className="sec-title rv" style={{ color: '#fff' }}>{heading}</h2>
        <p className="sec-sub rv" style={{ color: 'rgba(255,255,255,.6)' }}>{description}</p>

        <div className="svc-grid">
          {categories.map((item, index) => {
            const iconUrl = getStrapiMediaUrl(item.icon);
            const tags = item.services?.length ? item.services : [];

            return (
              <div key={item.id || `${item.title}-${index}`} className={`svc-item rv d${(index % 4) + 1}`}>
                <div className="svc-icon">
                  {iconUrl ? (
                    <CmsImage
                      src={iconUrl}
                      alt={item.title}
                      style={{ width: 28, height: 28, objectFit: 'contain' }}
                    />
                  ) : (
                    item.fallbackIcon
                  )}
                </div>
                <div>
                  <div className="svc-name">{item.title}</div>
                  <p className="svc-desc">{item.description}</p>
                  {!!tags.length && (
                    <div className="svc-tags">
                      {tags.map((tag, tagIndex) => (
                        <span key={`${tag.services}-${tagIndex}`} className="svc-tag">
                          {tag.services}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
