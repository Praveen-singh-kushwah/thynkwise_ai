const defaultSection = {
  eyebrow: 'Why Thynkwise for GCP',
  title: "Google's Intelligence. India's Simplicity.",
  description:
    'GCP leads for AI/ML, data analytics, and Kubernetes-native workloads. Thynkwise makes these capabilities accessible to Indian enterprises - in local currency, with startup credits, and without the learning curve.',
  benefit_cards: [
    {
      icon: '🤖',
      title: 'Vertex AI & Gemini Access',
      description:
        'Thynkwise certified ML Engineers deploy Vertex AI model training, Gemini Pro API integration, and Vector Search for semantic applications - in production, not just POC, within 4-6 weeks.',
    },
    {
      icon: '📊',
      title: 'BigQuery Data Platform',
      description:
        'Managed BigQuery deployment - schema design, Dataflow streaming pipelines, Pub/Sub event ingestion, and Looker Studio dashboards. Analytics pipelines handling billions of events per month, no ETL servers to manage.',
    },
    {
      icon: '🎓',
      title: 'Startup Credits Up to $200K',
      description:
        'Thynkwise manages the Google for Startups application, eligibility assessment, and credit activation. Qualifying Indian startups receive up to $200,000 in GCP credits - typically activated within 10-14 business days.',
    },
    {
      icon: '₹',
      title: '100% Local Currency Billing',
      description:
        'All GCP and Google Workspace billing through Thynkwise is Local-currency with full GST breakdown, HSN/SAC codes, and PAN details. No USD conversion, no currency risk, no surprises.',
    },
    {
      icon: '⎈',
      title: "GKE - Google's Native Kubernetes",
      description:
        'GKE Autopilot managed clusters - Google handles node provisioning, security patching, and cluster upgrades. Thynkwise handles Istio service mesh, GitOps with ArgoCD, and multi-tenant isolation patterns.',
    },
    {
      icon: '📧',
      title: 'Google Workspace India',
      description:
        'Complete Workspace deployment - Gmail, Drive, Meet, Docs, Vault for legal hold, AppSheet no-code apps, and DLP policies. Migration from Microsoft 365 or legacy email handled end-to-end.',
    },
  ],
};

export default function WhyThynkwiseSection({ section }) {
  const eyebrow = section?.eyebrow || defaultSection.eyebrow;
  const title = section?.title || defaultSection.title;
  const description = section?.description || defaultSection.description;
  const cards = section?.benefit_cards?.length ? section.benefit_cards : defaultSection.benefit_cards;

  return (
    <section className="ps ps-white">
      <div className="container">
        <span className="badge bgcp sec-eyebrow rv">{eyebrow}</span>
        <h2 className="sec-title rv d1">{title}</h2>
        <p className="sec-sub rv d2">{description}</p>
        <div className="why-grid">
          {cards.map((card, index) => (
            <div key={card.id || `${card.title}-${index}`} className={`why-card rv d${(index % 3) + 1}`}>
              <div className="why-icon">{card.icon || defaultSection.benefit_cards[index % defaultSection.benefit_cards.length].icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
