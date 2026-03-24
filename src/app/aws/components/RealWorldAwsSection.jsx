import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';

const defaultSection = {
  heading: {
    title: 'How Indian businesses run<br>mission-critical workloads on AWS',
    description:
      'Architecture patterns our engineers build, tune, and operate for Indian enterprises every day - technically precise, production-tested.',
  },
  card1: [
    {
      title: 'BFSI - Audit-Ready Core Banking Infrastructure',
      sub_points: [{ point: 'Aurora Multi-AZ' }, { point: 'CloudTrail' }, { point: 'GuardDuty' }, { point: 'KMS' }],
      description:
        'Core banking on EC2 with Aurora Multi-AZ for near-zero RPO failover. CloudTrail logs shipped to S3 with Object Lock for tamper-proof immutable audit trails. GuardDuty monitors for lateral movement and credential anomalies. All workloads deployed exclusively in ap-south-1 (Mumbai) with envelope encryption via KMS - meeting Indian financial sector cloud guidelines without custom configuration overhead.',
      point: '→ 30+ BFSI deployments live on this architecture',
      fallbackIcon: '🏦',
    },
    {
      title: 'High-Concurrency Commerce - Elastic Transaction Architecture',
      sub_points: [{ point: 'Auto Scaling Groups' }, { point: 'CloudFront' }, { point: 'ElastiCache Redis' }, { point: 'ALB Target Tracking' }],
      description:
        'Application tier on EC2 Auto Scaling Groups with ALB target tracking - scales from baseline to peak capacity in under 90 seconds. ElastiCache Redis cluster absorbs product catalogue reads and session data, shielding Aurora from concurrent request bursts. CloudFront with S3 origin serves static assets, reducing origin requests by 70%+. Pre-warmed capacity plans activated 2 hours before scheduled high-traffic events - zero manual intervention required.',
      point: '→ 40x baseline throughput handled with zero pre-provisioning overhead',
      fallbackIcon: '🛒',
    },
    {
      title: 'Healthcare - ABDM Integration & Secure Data Architecture',
      sub_points: [{ point: 'HIPAA-eligible' }, { point: 'ABDM APIs' }, { point: 'API Gateway' }, { point: 'VPC Endpoints' }],
      description:
        'Patient records in S3 with SSE-KMS encryption and intelligent lifecycle policies. API Gateway manages ABDM webhook ingestion and HL7/FHIR transformation via Lambda - no intermediary servers to patch. All compute and storage restricted to ap-south-1 via VPC endpoints and S3 bucket policies. HIPAA-eligible services selected across the full stack with documented control mappings.',
      point: '→ ABDM-live deployments completed in 6-8 weeks',
      fallbackIcon: '🏥',
    },
    {
      title: 'SaaS & Startups - Cloud-Native from Day One',
      sub_points: [{ point: 'EKS' }, { point: 'Terraform IaC' }, { point: 'ArgoCD' }, { point: 'SageMaker' }],
      description:
        'Containerised multi-tenant workloads on EKS with GitOps deployments via ArgoCD - zero-touch production releases. Entire infrastructure defined in Terraform, making dev, staging, and production identical reproducible environments. Reserved Instance commitments introduced progressively as workloads stabilise, not upfront. SageMaker pipelines integrated for AI product features without building ML infrastructure from scratch.',
      point: '→ 85+ startups scaled from seed stage to Series B',
      fallbackIcon: '🚀',
    },
  ],
};

function unwrapRichText(html, tags) {
  if (!html) {
    return html;
  }

  const trimmed = html.trim();

  for (const tag of tags) {
    const pattern = new RegExp(`^<${tag}\\b[^>]*>([\\s\\S]*)</${tag}>$`, 'i');
    const match = trimmed.match(pattern);

    if (match) {
      return match[1];
    }
  }

  return trimmed;
}

export default function RealWorldAwsSection({ section }) {
  const heading = section?.heading || defaultSection.heading;
  const titleHtml = unwrapRichText(heading.title || defaultSection.heading.title, ['h1', 'h2', 'h3', 'p', 'div']);
  const cards = section?.card1?.length
    ? section.card1.map((item, index) => ({
        ...item,
        fallbackIcon: defaultSection.card1[index % defaultSection.card1.length].fallbackIcon,
      }))
    : defaultSection.card1;

  return (
    <section className="ps ps-white">
      <div className="container">
        <span className="sec-label rv">Real-World AWS in India</span>
        <h2 className="sec-title rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />
        <p className="sec-sub rv d2">{heading.description || defaultSection.heading.description}</p>
        <div className="uc-grid">
          {cards.map((card, index) => {
            const iconUrl = getStrapiMediaUrl(card.icon);
            const tags = card.sub_points?.map((item) => item?.point).filter(Boolean) || [];
            const fallback = defaultSection.card1[index % defaultSection.card1.length];

            return (
              <div key={card.id || `${card.title}-${index}`} className={`uc-card rv d${(index % 2) + 1}`}>
                <div className="uc-icon">
                  {iconUrl ? (
                    <CmsImage
                      src={iconUrl}
                      alt={card.title}
                      className="uc-icon-img"
                      style={{ width: 32, height: 32, objectFit: 'contain' }}
                    />
                  ) : (
                    card.fallbackIcon
                  )}
                </div>
                <div className="uc-body">
                  <h3>{card.title}</h3>
                  <div className="uc-tags">
                    {(tags.length ? tags : fallback.sub_points.map((item) => item.point)).map((tag, tagIndex) => (
                      <span key={`${card.title}-${tagIndex}`} className="uc-tag">{tag}</span>
                    ))}
                  </div>
                  <p>{card.description || fallback.description}</p>
                  <div className="uc-result">{card.point || fallback.point}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
