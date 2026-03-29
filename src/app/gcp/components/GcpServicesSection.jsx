const defaultSection = {
  eyebrow: 'GCP Services Portfolio',
  title: 'What We Deliver on Google Cloud',
  description:
    'From Vertex AI pipelines to GKE clusters and BigQuery analytics - certified GCP engineers manage your complete Google Cloud stack.',
  service_cards: [
    {
      icon: '🤖',
      title: 'AI / ML - Vertex AI & Gemini',
      description:
        'Vertex AI model training, deployment and pipelines. Gemini Pro and Ultra API integration. Vector Search for semantic retrieval. Model Garden access for foundation model fine-tuning.',
      tags: [
        { label: 'Vertex AI' },
        { label: 'Gemini API' },
        { label: 'Vector Search' },
        { label: 'AutoML' },
      ],
    },
    {
      icon: '📊',
      title: 'Data & Analytics',
      description:
        'BigQuery data warehousing, Dataflow streaming pipelines, Pub/Sub event ingestion, Dataproc managed Spark, Looker Studio dashboards, and Analytics Hub for enterprise data sharing.',
      tags: [
        { label: 'BigQuery' },
        { label: 'Dataflow' },
        { label: 'Pub/Sub' },
        { label: 'Looker' },
      ],
    },
    {
      icon: '⎈',
      title: 'Containers & Serverless',
      description:
        'GKE Autopilot and Standard clusters, Cloud Run for serverless containers, Cloud Functions for event-driven compute, Artifact Registry for container image management and security scanning.',
      tags: [
        { label: 'GKE' },
        { label: 'Cloud Run' },
        { label: 'Cloud Functions' },
        { label: 'Artifact Registry' },
      ],
    },
    {
      icon: '🛡️',
      title: 'Security & Identity',
      description:
        'Cloud IAM, VPC Service Controls for data perimeter enforcement, Security Command Center, Chronicle SIEM, Binary Authorization for supply chain security, and Cloud Armor WAF.',
      tags: [
        { label: 'IAM / SCC' },
        { label: 'VPC SC' },
        { label: 'Cloud Armor' },
        { label: 'Chronicle' },
      ],
    },
    {
      icon: '🌐',
      title: 'Networking',
      description:
        'VPC with Shared VPC for multi-project architectures, Cloud Load Balancing (global and regional), Cloud CDN, Cloud DNS, and Cloud Interconnect for private dedicated GCP connectivity.',
      tags: [
        { label: 'VPC / Shared VPC' },
        { label: 'Cloud LB' },
        { label: 'Cloud CDN' },
        { label: 'Interconnect' },
      ],
    },
    {
      icon: '📧',
      title: 'Google Workspace',
      description:
        'Business Gmail, Drive, Meet, Docs, Sheets, and Vault for legal hold. AppSheet no-code apps, Google Chat integrations, and enterprise DLP policies across the full Workspace estate.',
      tags: [
        { label: 'Gmail / Drive' },
        { label: 'Meet / Chat' },
        { label: 'Vault' },
        { label: 'AppSheet' },
      ],
    },
  ],
};

export default function GcpServicesSection({ section }) {
  const eyebrow = section?.eyebrow || defaultSection.eyebrow;
  const title = section?.title || defaultSection.title;
  const description = section?.description || defaultSection.description;
  const items = section?.service_cards?.length ? section.service_cards : defaultSection.service_cards;

  return (
    <section className="ps ps-gcp">
      <div className="container">
        <span className="badge bw sec-eyebrow rv">{eyebrow}</span>
        <h2 className="sec-title sec-title-light rv d1">{title}</h2>
        <p className="sec-sub sec-sub-light rv d2">{description}</p>
        <div className="svc-grid">
          {items.map((item, index) => {
            const fallback = defaultSection.service_cards[index % defaultSection.service_cards.length];
            const tags = item.tags?.length ? item.tags : fallback.tags;

            return (
              <div key={item.id || `${item.title}-${index}`} className={`svc-item rv d${(index % 4) + 1}`}>
                <div className="svc-icon">{item.icon || fallback.icon}</div>
                <div>
                  <div className="svc-name">{item.title}</div>
                  <div className="svc-desc">{item.description}</div>
                  <div className="svc-tags">
                    {tags.map((tag, tagIndex) => (
                      <span key={`${item.title}-${tag.label || tag}-${tagIndex}`} className="svc-tag">
                        {tag.label || tag}
                      </span>
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
