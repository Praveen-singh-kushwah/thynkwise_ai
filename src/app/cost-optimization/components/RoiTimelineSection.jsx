import Link from 'next/link';

const defaultSection = {
  badge_text: 'ROI Timeline',
  title: 'The money arrives before the second invoice does.',
  description:
    'Unlike consulting engagements that deliver a report and disappear, Thynkwise FinOps delivers measurable cost reduction at every stage.',
  phases: [
    {
      time_label: 'Week 1-2',
      title: 'Audit & Quick Wins',
      items: [
        { text: 'Billing API analysis - 90 days usage' },
        { text: 'Idle resource identification' },
        { text: 'Immediate cleanup candidates' },
        { text: 'Written report delivered' },
      ],
      saving_label: 'Rs. 50K-2L immediate',
      tone: 'orange',
    },
    {
      time_label: 'Week 3-4',
      title: 'Rightsizing & Cleanup',
      items: [
        { text: 'Instance rightsizing approved list' },
        { text: 'Idle resource quarantine' },
        { text: 'Storage lifecycle rules deployed' },
        { text: 'Azure Hybrid Benefit activated' },
      ],
      saving_label: '10-15% reduction live',
      tone: 'yellow',
    },
    {
      time_label: 'Month 2',
      title: 'Reserved Capacity',
      items: [
        { text: 'RI modelling - one-year vs three-year scenarios' },
        { text: 'Savings Plans recommendations' },
        { text: 'GCP Committed Use Discounts' },
        { text: 'Finance sign-off on commitments' },
      ],
      saving_label: '+5-12% additional',
      tone: 'green',
    },
    {
      time_label: 'Month 3+',
      title: 'Governance & Ongoing',
      items: [
        { text: 'Cost tagging and allocation dashboards' },
        { text: 'Budget alerts and anomaly detection' },
        { text: 'Monthly FinOps review reports' },
        { text: 'Quarterly new opportunity scan' },
      ],
      saving_label: '20-35% total sustained',
      tone: 'blue',
    },
  ],
  guarantee_title: 'The guarantee in writing: targeted savings in 90 days.',
  guarantee_description:
    'Savings targets, assumptions, and action plans are documented before implementation starts.',
  cta_text: 'Start with Free Audit',
  cta_link: '/get-assessment',
};

export default function RoiTimelineSection({ section }) {
  const data = section || defaultSection;
  const phases = data.phases?.length ? data.phases : defaultSection.phases;

  return (
    <section className="co-section co-section-dark">
      <div className="container">
        <div className="co-section-header">
          <span className="co-badge co-badge-green rv">
            {data.badge_text || defaultSection.badge_text}
          </span>
          <h2 className="co-section-title co-section-title-light rv">
            {data.title || defaultSection.title}
          </h2>
          <p className="co-section-subtitle co-section-subtitle-light rv">
            {data.description || defaultSection.description}
          </p>
        </div>

        <div className="co-roi-timeline">
          {phases.map((phase, index) => (
            <article
              key={`${phase.time_label}-${phase.title}-${index}`}
              className={`co-roi-phase co-tone-${phase.tone || 'green'} rv d${Math.min(index + 1, 4)}`}
            >
              <span className="co-roi-week">{phase.time_label}</span>
              <h3>{phase.title}</h3>
              <ul>
                {(phase.items || []).map((item, itemIndex) => (
                  <li key={`${item.text}-${itemIndex}`}>{item.text}</li>
                ))}
              </ul>
              {phase.saving_label ? <div className="co-roi-saving">{phase.saving_label}</div> : null}
            </article>
          ))}
        </div>

        <div className="co-roi-guarantee rv">
          <div>
            <h3>{data.guarantee_title || defaultSection.guarantee_title}</h3>
            <p>{data.guarantee_description || defaultSection.guarantee_description}</p>
          </div>
          {data.cta_link && data.cta_text ? (
            <Link href={data.cta_link} className="btn co-btn-primary">
              {data.cta_text} {'\u2192'}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
