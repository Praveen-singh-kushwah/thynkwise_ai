const defaultSection = {
  badge_text: 'What Thynkwise FinOps Covers',
  title: 'Every lever of cloud cost reduction - across AWS, Azure, and GCP.',
  description:
    'FinOps is not one action. It is a systematic programme across compute, storage, commitments, licensing, tagging, and governance.',
  cards: [
    {
      icon: 'analysis',
      title: 'Instance Rightsizing',
      description:
        'CPU, memory, network, and disk usage are compared against actual workload baselines before recommendations are made.',
      impact_label: '8-15% saving',
      tone: 'blue',
    },
    {
      icon: 'ticket',
      title: 'Reserved Instances & Savings Plans',
      description:
        'Predictable workloads are modelled across one-year and three-year commitment scenarios before finance approval.',
      impact_label: '5-12% saving',
      tone: 'orange',
    },
    {
      icon: 'delete',
      title: 'Idle Resource Cleanup',
      description:
        'Unused infrastructure is tagged, quarantined, and removed only after approval so no production dependency is broken.',
      impact_label: '5-10% saving',
      tone: 'red',
    },
    {
      icon: 'storage',
      title: 'Storage Optimisation',
      description:
        'Lifecycle policies, archival tiers, snapshot cleanup, and log retention rules reduce storage sprawl.',
      impact_label: '3-7% saving',
      tone: 'green',
    },
    {
      icon: 'windows',
      title: 'Azure Hybrid Benefit',
      description:
        'Eligible Microsoft licensing is mapped to Azure savings through Hybrid Benefit and reserved capacity planning.',
      impact_label: 'Rs. 1-4L absolute',
      tone: 'pink',
    },
    {
      icon: 'dashboard',
      title: 'Cost Attribution & Governance',
      description:
        'Tagging, budgets, alerts, anomaly detection, and monthly reviews prevent the same waste from returning.',
      impact_label: 'Prevents future waste',
      tone: 'purple',
    },
  ],
};

const iconMap = {
  analysis: 'AN',
  ticket: '%',
  delete: 'X',
  storage: 'DB',
  windows: 'WIN',
  dashboard: 'BI',
};

export default function OptimizationLayersSection({ section }) {
  const data = section || defaultSection;
  const cards = data.cards?.length ? data.cards : defaultSection.cards;

  return (
    <section className="co-section co-section-white">
      <div className="container">
        <div className="co-section-header">
          <span className="co-badge co-badge-green rv">
            {data.badge_text || defaultSection.badge_text}
          </span>
          <h2 className="co-section-title rv">{data.title || defaultSection.title}</h2>
          <p className="co-section-subtitle rv">{data.description || defaultSection.description}</p>
        </div>

        <div className="co-optimization-grid">
          {cards.map((card, index) => (
            <article
              key={`${card.title}-${index}`}
              className={`co-optimization-card co-tone-${card.tone || 'green'} rv d${Math.min((index % 5) + 1, 5)}`}
            >
              <div className="co-optimization-icon">{iconMap[card.icon] || card.icon || 'FN'}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {card.impact_label ? (
                <span className="co-optimization-impact">{card.impact_label}</span>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
