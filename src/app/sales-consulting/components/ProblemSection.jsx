const fallbackSection = {
  eyebrow_text: 'The Problem',
  title: 'Most CRM implementations fail before they start.',
  description:
    'The tool gets bought. The licence gets paid. Nobody uses it. Deals stay in spreadsheets. Outreach is manual. Leadership has no pipeline visibility.',
  pain_points: [
    { text: 'CRM configured by IT, not by sales - nobody uses it' },
    { text: 'Outreach sequences written once, never tested, declining reply rates' },
    { text: 'No real-time pipeline visibility - forecast is still a gut feeling' },
    { text: 'New reps take 4-6 months to ramp - no documented playbook' },
    { text: 'Founder still closing because no scalable sales motion exists' },
  ],
  cost_box_label: 'Cost of inaction - every month',
  cost_metrics: [
    { metric_value: 'Rs. 8L+', metric_label: 'Sales team cost, no system ROI' },
    { metric_value: '40%', metric_label: 'Pipeline leakage from poor follow-up' },
    { metric_value: '3-6M', metric_label: 'Months to ROI from wrong implementation' },
  ],
  difference_label: 'The ThynkWISE difference',
  difference_description:
    "We don't implement CRM tools. We build revenue systems. Every engagement starts with understanding how your team actually sells, then we architect the platform, playbook and process that fits how they work.",
};

export default function ProblemSection({ section }) {
  const data = section?.title ? section : fallbackSection;
  const painPoints = data?.pain_points || [];
  const costMetrics = data?.cost_metrics || [];

  return (
    <section className="sc-problem">
      <div className="container">
        <div className="sc-problem-grid">
          <div className="rv">
            {data?.eyebrow_text ? <div className="sc-dark-label">{data.eyebrow_text}</div> : null}
            {data?.title ? <h2>{data.title}</h2> : null}
            {data?.description ? <p className="sc-problem-copy">{data.description}</p> : null}
            {painPoints.length ? (
              <ul className="sc-pain-list">
                {painPoints.map((item, index) => (
                  <li key={`${item?.text}-${index}`}>
                    <span aria-hidden="true">x</span>
                    {item?.text}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="rv d1">
            <div className="sc-cost-box">
              {data?.cost_box_label ? (
                <div className="sc-cost-label">{data.cost_box_label}</div>
              ) : null}
              <div className="sc-cost-row">
                {costMetrics.map((metric, index) => (
                  <div className="sc-cost-item" key={`${metric?.metric_label}-${index}`}>
                    <div className="sc-cost-number">{metric?.metric_value}</div>
                    <div className="sc-cost-sub">{metric?.metric_label}</div>
                  </div>
                ))}
              </div>
            </div>

            {(data?.difference_label || data?.difference_description) && (
              <div className="sc-difference-box">
                {data?.difference_label ? (
                  <div className="sc-difference-label">{data.difference_label}</div>
                ) : null}
                {data?.difference_description ? <p>{data.difference_description}</p> : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
