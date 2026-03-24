import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';

const defaultSection = {
  heading: '200+ AWS Services.<br>One Thynkwise Team.',
  description:
    'Certified AWS engineers manage your full infrastructure stack - compute, databases, networking, security, AI/ML, and DevOps pipelines.',
  service_category: [
    {
      title: 'Compute & Containers',
      description:
        'EC2 Auto Scaling Groups, EKS managed Kubernetes, Lambda serverless, ECS container orchestration, Fargate - right-sized and cost-optimised from Day 1.',
      tags: ['EC2', 'EKS', 'Lambda', 'ECS / Fargate'],
      fallbackIcon: '⚡',
    },
    {
      title: 'Databases & Storage',
      description:
        'RDS Multi-AZ, Aurora Serverless v2, DynamoDB, S3 intelligent tiering, ElastiCache - all managed with automated backups, point-in-time recovery, and cross-region DR.',
      tags: ['RDS / Aurora', 'DynamoDB', 'S3', 'ElastiCache'],
      fallbackIcon: '🗄️',
    },
    {
      title: 'Networking & Delivery',
      description:
        'VPC design, Transit Gateway, CloudFront CDN, Route 53 geo-routing, WAF, Shield DDoS protection, and AWS Direct Connect for private dedicated connectivity.',
      tags: ['VPC / TGW', 'CloudFront', 'WAF & Shield', 'Direct Connect'],
      fallbackIcon: '🌐',
    },
    {
      title: 'Security & Compliance',
      description:
        'IAM least-privilege policies, GuardDuty threat detection, Security Hub posture management, CloudTrail immutable audit logs, KMS envelope encryption at rest and in transit.',
      tags: ['IAM / SCPs', 'GuardDuty', 'Security Hub', 'CloudTrail'],
      fallbackIcon: '🛡️',
    },
    {
      title: 'AI / ML & Analytics',
      description:
        'SageMaker model training, deployment and pipelines, Bedrock foundation models, Redshift data warehousing, Athena serverless SQL, Glue ETL - all managed, not just provisioned.',
      tags: ['SageMaker', 'Bedrock', 'Redshift', 'Athena'],
      fallbackIcon: '🧠',
    },
    {
      title: 'DevOps & Infrastructure as Code',
      description:
        'CodePipeline CI/CD, CloudFormation and CDK for IaC, Systems Manager patch management, CloudWatch unified observability - GitOps-driven, reproducible environments.',
      tags: ['CodePipeline', 'CloudFormation', 'CDK', 'CloudWatch'],
      fallbackIcon: '⚙️',
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

export default function AwsServicesSection({ section }) {
  const titleHtml = unwrapRichText(section?.heading || defaultSection.heading, ['h1', 'h2', 'h3', 'p', 'div']);
  const description = section?.description || defaultSection.description;
  const items = section?.service_category?.length
    ? section.service_category.map((item, index) => ({
        ...item,
        fallbackIcon: defaultSection.service_category[index % defaultSection.service_category.length].fallbackIcon,
        tags: item.services?.map((entry) => entry?.services).filter(Boolean),
      }))
    : defaultSection.service_category;

  return (
    <section className="ps ps-dark">
      <div className="container">
        <span className="badge bw sec-eyebrow rv">AWS Services Portfolio</span>
        <h2 className="sec-title sec-title-light rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />
        <p className="sec-sub sec-sub-light rv d2">{description}</p>
        <div className="svc-grid">
          {items.map((item, index) => {
            const iconUrl = getStrapiMediaUrl(item.icon);
            const tags = item.tags?.length ? item.tags : defaultSection.service_category[index % defaultSection.service_category.length].tags;

            return (
              <div key={item.id || `${item.title}-${index}`} className={`svc-item rv d${(index % 4) + 1}`}>
                <div className="svc-icon">
                  {iconUrl ? (
                    <CmsImage
                      src={iconUrl}
                      alt={item.title}
                      className="svc-icon-img"
                      style={{ width: 28, height: 28, objectFit: 'contain' }}
                    />
                  ) : (
                    item.fallbackIcon
                  )}
                </div>
                <div>
                  <div className="svc-name">{item.title}</div>
                  <div className="svc-desc">{item.description}</div>
                  <div className="svc-tags">
                    {tags.map((tag, tagIndex) => (
                      <span key={`${item.title}-${tagIndex}`} className="svc-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
