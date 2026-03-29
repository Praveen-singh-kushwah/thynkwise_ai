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

const defaultSection = {
  eyebrow: 'Real-World GCP in India',
  title: 'Where Google Cloud genuinely<br>outperforms every alternative',
  description:
    "GCP has a specific profile of workloads where it is technically the best choice - here's where Indian enterprises and startups deploy it.",
  use_case_cards: [
    {
      icon: '🤖',
      title: 'AI Product Features - Gemini API Integration',
      tags: [
        { label: 'Vertex AI' },
        { label: 'Gemini Pro' },
        { label: 'Vector Search' },
        { label: 'Cloud Run' },
      ],
      description:
        'Product teams embed Gemini Pro via Vertex AI endpoints for in-app AI features - document summarisation, semantic search, and recommendation engines. Vector embeddings stored in Vertex AI Vector Search with sub-50ms retrieval at scale. Serving layer on Cloud Run auto-scales to zero between requests, eliminating idle compute costs entirely.',
      result: '→ AI features in production in 4-6 weeks, not 6 months',
    },
    {
      icon: '📊',
      title: 'Enterprise Analytics - BigQuery Data Platform',
      tags: [
        { label: 'BigQuery' },
        { label: 'Dataflow' },
        { label: 'Pub/Sub' },
        { label: 'Looker Studio' },
      ],
      description:
        'Transactional data streamed from operational databases into BigQuery via Dataflow - no ETL servers to manage, just streaming SQL transforms. Pub/Sub decouples producers from consumers with guaranteed delivery. Looker Studio dashboards serve business users directly from BigQuery. Total cost of ownership 40-60% below equivalent on-premise Hadoop or SQL Server estates.',
      result: '→ Analytics pipelines handling 10B+ events/month in production',
    },
    {
      icon: '⎈',
      title: 'SaaS Platforms - Multi-Tenant GKE Architecture',
      tags: [
        { label: 'GKE Autopilot' },
        { label: 'Istio Service Mesh' },
        { label: 'Cloud SQL' },
        { label: 'ArgoCD' },
      ],
      description:
        "Multi-tenant SaaS applications on GKE Autopilot - Google manages node provisioning, security patching, and cluster upgrades. Istio service mesh enforces tenant isolation and mTLS between microservices. GitOps deployments via ArgoCD mean zero-touch production releases. Autopilot's bin packing reduces wasted compute by 30-40% versus self-managed Standard clusters.",
      result: '→ 99.9%+ SLA met without a dedicated platform engineering team',
    },
    {
      icon: '🚀',
      title: 'Startups - Google for Startups Credits Programme',
      tags: [
        { label: 'GFS Credits' },
        { label: 'Firebase' },
        { label: 'Cloud Run' },
        { label: 'Vertex AI' },
      ],
      description:
        'Indian startups at seed and Series A can access up to $200,000 in GCP credits through Google for Startups. Thynkwise manages the application, activation, and credit governance - ensuring credits fund high-value production workloads, not idle resources. Firebase for mobile backends, Cloud Run for API serving, Vertex AI for early AI experimentation.',
      result: '→ Startup credits activated within 10-14 business days',
    },
  ],
};

export default function RealWorldGcpSection({ section }) {
  const eyebrow = section?.eyebrow || defaultSection.eyebrow;
  const titleHtml = unwrapRichText(section?.title || defaultSection.title, ['h1', 'h2', 'h3', 'p', 'div']);
  const description = section?.description || defaultSection.description;
  const cards = section?.use_case_cards?.length ? section.use_case_cards : defaultSection.use_case_cards;

  return (
    <section className="ps ps-white">
      <div className="container">
        <span className="sec-label rv">{eyebrow}</span>
        <h2 className="sec-title rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />
        <p className="sec-sub rv d2">{description}</p>
        <div className="uc-grid">
          {cards.map((card, index) => {
            const fallback = defaultSection.use_case_cards[index % defaultSection.use_case_cards.length];
            const tags = card.tags?.length ? card.tags : fallback.tags;

            return (
              <div key={card.id || `${card.title}-${index}`} className={`uc-card rv d${(index % 2) + 1}`}>
                <div className="uc-icon">{card.icon || fallback.icon}</div>
                <div className="uc-body">
                  <h3 dangerouslySetInnerHTML={{ __html: card.title || fallback.title }} />
                  <div className="uc-tags">
                    {tags.map((tag, tagIndex) => (
                      <span key={`${card.title}-${tag.label || tag}-${tagIndex}`} className="uc-tag">
                        {tag.label || tag}
                      </span>
                    ))}
                  </div>
                  <p>{card.description}</p>
                  <div className="uc-result">{card.result}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
