const defaultSection = {
  badge_text: 'The FinOps Process',
  title: 'From audit to savings in 90 days. No disruption. No downtime.',
  description:
    'Thynkwise FinOps runs alongside your existing operations - read-only access in week 1, recommendations in week 2, and approved optimisation from week 3 onward.',
  steps: [
    {
      step_number: '1',
      title: '7-Day Free Audit',
      description:
        'We analyse 90 days of cloud billing and usage data with read-only access only.',
      time_label: 'Week 1 - Free',
      tone: 'blue',
    },
    {
      step_number: '2',
      title: 'Savings Roadmap',
      description:
        'You receive a prioritised list of actions, INR savings estimates, and implementation effort.',
      time_label: 'Week 2 - Roadmap delivery',
      tone: 'orange',
    },
    {
      step_number: '3',
      title: 'Quick Win Execution',
      description:
        'Approved idle cleanup, storage lifecycle rules, and safe rightsizing changes go live.',
      time_label: 'Weeks 3-4 - Quick wins',
      tone: 'green',
    },
    {
      step_number: '4',
      title: 'Reserved Capacity & Ongoing',
      description:
        'Reserved Instances, Savings Plans, committed-use discounts, alerts, and governance are implemented.',
      time_label: 'Month 2-3 - Full savings achieved',
      tone: 'purple',
    },
  ],
};

export default function FinopsProcessSection({ section }) {
  const data = section || defaultSection;
  const steps = data.steps?.length ? data.steps : defaultSection.steps;

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

        <div className="co-process-steps rv">
          {steps.map((step, index) => (
            <article
              key={`${step.step_number}-${step.title}-${index}`}
              className={`co-process-step co-tone-${step.tone || 'green'}`}
            >
              <div className="co-process-number">{step.step_number || index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {step.time_label ? <span className="co-process-time">{step.time_label}</span> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
