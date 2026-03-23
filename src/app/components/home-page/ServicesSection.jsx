import Link from 'next/link';
import SectionHeader from './SectionHeader';
import CmsImage from '../CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';

const services = [
  {
    accent: 'var(--blue)',
    iconBg: 'rgba(58,89,168,0.08)',
    icon: '\u2601\uFE0F',
    tag: 'Foundation',
    title: 'Managed Cloud Services',
    description:
      '24/7 management of your AWS, Azure, and GCP environments - monitoring, patching, cost optimisation, and incident response under a single SLA.',
    items: [
      'Infrastructure monitoring & alerting',
      'Patch management & hardening',
      'Reserved Instance & Savings Plans',
      'FinOps dashboards & reporting',
    ],
    href: '/managed-services',
    cta: 'Explore Managed Services',
    delay: 'd1',
  },
  {
    accent: '#f97316',
    iconBg: 'rgba(249,115,22,0.08)',
    icon: '\u{1F680}',
    tag: 'Migration',
    title: 'Cloud Migration',
    description:
      'End-to-end migration from on-premise, co-location, or competing cloud - with zero-downtime strategies and a documented rollback plan for every workload.',
    items: [
      'Discovery & portfolio assessment',
      'Lift-and-shift or re-architecture',
      'Database migration (Oracle, SQL Server)',
      'SAP, ERP, and line-of-business apps',
    ],
    href: '/cloud-migration',
    cta: 'Explore Cloud Migration',
    delay: 'd2',
  },
  {
    accent: '#dc2626',
    iconBg: 'rgba(220,38,38,0.07)',
    icon: '\u{1F510}',
    tag: 'Security',
    title: 'Managed Cybersecurity',
    description:
      'SOC as a Service, VAPT, Managed EDR, IAM, GRC, and dark web monitoring - with contractual SLAs and a named security analyst on your account.',
    items: [
      '24/7 SOC operations & SIEM management',
      'VAPT & red team exercises',
      'ISO 27001 / SOC 2 / DPDP readiness',
      'DC build & NOC consulting',
    ],
    href: '/cybersecurity',
    cta: 'Explore Cybersecurity',
    delay: 'd3',
  },
  {
    accent: '#7c3aed',
    iconBg: 'rgba(124,58,237,0.08)',
    icon: '\u26A1',
    tag: 'AI Infrastructure',
    title: 'GPU as a Service',
    description:
      'Access NVIDIA Blackwell B200, H200, H100, AMD MI325X, and Intel Gaudi 3 - via bare metal, VMs, Kubernetes clusters, DGX systems, or on-premise deployment.',
    items: [
      'All GPU architectures - NVIDIA, AMD, Intel',
      'Bare metal, VM, container, cluster',
      'DGX & HGX turnkey systems',
      'On-premise hardware deployment',
    ],
    href: '/gpuaas',
    cta: 'Explore GPUaaS',
    delay: 'd1',
  },
  {
    accent: '#059669',
    iconBg: 'rgba(5,150,105,0.08)',
    icon: '\u{1F4B0}',
    tag: 'FinOps',
    title: 'Cloud Cost Optimisation',
    description:
      'Identify overspend, right-size workloads, and implement Reserved Instances and Savings Plans - with a documented cost reduction target before work begins.',
    items: [
      'Cloud spend audit & waste identification',
      'Rightsizing & auto-scaling policies',
      'RI / Savings Plans management',
      'Continuous FinOps reporting',
    ],
    href: '/cost-optimization',
    cta: 'Explore Cost Optimisation',
    delay: 'd2',
  },
  {
    accent: '#0891b2',
    iconBg: 'rgba(8,145,178,0.08)',
    icon: '\u{1F3E6}',
    tag: 'Industry',
    title: 'BFSI Cloud & Compliance',
    description:
      'Cloud architecture and managed services purpose-built for banks, NBFCs, insurance companies, and capital markets - with regulatory compliance embedded from day one.',
    items: [
      'RBI IT Framework compliance architecture',
      'Core banking & payment system migration',
      'Data localisation & sovereignty',
      'SEBI / IRDAI cloud frameworks',
    ],
    href: '/bfsi-cloud',
    cta: 'Explore BFSI Cloud',
    delay: 'd3',
  },
];

export default function ServicesSection({ section }) {
  const serviceCards = section?.serviceCard?.length
    ? section.serviceCard.map((card, index) => ({
        ...services[index % services.length],
        id: card.id,
        title: card.title || services[index % services.length].title,
        description: card.description || services[index % services.length].description,
        tag: card.tag || services[index % services.length].tag,
        href: card.link || services[index % services.length].href,
        cta: card.link_text || services[index % services.length].cta,
        iconUrl: getStrapiMediaUrl(card.icon),
        items: card.points?.length
          ? card.points.map((point) => point.point).filter(Boolean)
          : services[index % services.length].items,
      }))
    : services;

  return (
    <section className="sec sec-lt">
      <div className="container">
        <SectionHeader
          badge="Core Services"
          badgeClassName="badge badge-blue"
          title={section?.heading || 'Everything You Need. One Partner.'}
          subtitle={
            section?.description ||
            'From first cloud migration to GPU-accelerated AI workloads - Thynkwise covers the complete technology stack with managed services at every layer.'
          }
        />

        <div className="svc-grid">
          {serviceCards.map((service, serviceIndex) => (
            <div
              key={service.id || `${service.title}-${serviceIndex}`}
              className={`svc-card rv ${service.delay}`}
              style={{ '--svc-accent': service.accent }}
            >
              <div className="svc-ico" style={{ background: service.iconBg }}>
                {service.iconUrl ? (
                  <CmsImage
                    src={service.iconUrl}
                    alt={service.title}
                    style={{ width: 28, height: 28, objectFit: 'contain' }}
                  />
                ) : (
                  service.icon
                )}
              </div>
              <span className="svc-tag" style={{ color: service.accent }}>
                {service.tag}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="svc-list">
                {service.items.map((item, itemIndex) => (
                  <li key={`${service.id || service.title}-${itemIndex}`}>{item}</li>
                ))}
              </ul>
              <Link href={service.href || '#'} className="svc-link">
                {service.cta} {'\u2192'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
