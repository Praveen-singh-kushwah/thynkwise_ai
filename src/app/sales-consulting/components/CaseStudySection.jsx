const fallbackSection = {
  eyebrow_text: 'Client Case Study',
  title: 'From 2 appointments a week to 1 a day. In 90 days.',
  case_label: 'Sales Consulting · India · IT Services · Apollo.io Implementation',
  company_name: 'Clarion Technologies',
  geography: 'B2B IT Services · Pune, India -> Global',
  challenge_label: 'The Challenge',
  challenge_quote:
    'We had a sales team, two CRM tools and a data provider. Nothing was connected. Our advisors were spending more time managing tools than talking to prospects.',
  delivered_label: 'What ThynkWISE delivered',
  delivered_steps: [],
  metrics: [],
  quote:
    "ThynkWISE didn't just implement a tool - they helped us build a scalable outreach infrastructure. Our advisors moved from reactive to proactive selling within 8 weeks.",
  quote_author: 'Sales Leadership · Clarion Technologies',
};

export default function CaseStudySection({ section }) {
  const data = section?.title ? section : fallbackSection;
  const deliveredSteps = data?.delivered_steps || [];
  const metrics = data?.metrics || [];

  return (
    <section className="sc-section" id="case-study">
      <div className="container">
        {data?.eyebrow_text ? <div className="sc-label rv">{data.eyebrow_text}</div> : null}
        {data?.title ? <h2 className="sc-title rv d1">{data.title}</h2> : null}

        <div className="sc-case-card rv d2">
          <div className="sc-case-bg" />
          {data?.case_label ? <div className="sc-case-label">{data.case_label}</div> : null}
          <div className="sc-case-grid">
            <div>
              {data?.company_name ? <h3>{data.company_name}</h3> : null}
              {data?.geography ? <div className="sc-case-geography">{data.geography}</div> : null}
              {data?.challenge_label ? (
                <div className="sc-case-small-label">{data.challenge_label}</div>
              ) : null}
              {data?.challenge_quote ? (
                <blockquote className="sc-case-challenge">"{data.challenge_quote}"</blockquote>
              ) : null}

              {data?.delivered_label ? (
                <div className="sc-case-small-label sc-case-delivered-label">
                  {data.delivered_label}
                </div>
              ) : null}
              {deliveredSteps.length ? (
                <ul className="sc-case-steps">
                  {deliveredSteps.map((item, index) => (
                    <li key={`${item?.text}-${index}`}>
                      <span aria-hidden="true">✓</span>
                      {item?.text}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div>
              {metrics.length ? (
                <div className="sc-case-metrics">
                  {metrics.map((metric, index) => (
                    <div className="sc-case-metric" key={`${metric?.metric_label}-${index}`}>
                      <span>{metric?.metric_value}</span>
                      <p>{metric?.metric_label}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {(data?.quote || data?.quote_author) && (
                <div className="sc-case-quote-box">
                  {data?.quote ? <p>"{data.quote}"</p> : null}
                  {data?.quote_author ? <div>{data.quote_author}</div> : null}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
