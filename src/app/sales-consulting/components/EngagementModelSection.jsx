const fallbackSection = {
  eyebrow_text: 'Engagement Model',
  title: 'From discovery to live in 30-60 days.',
  description: 'Defined deliverables at each phase. No 6-month implementations. No scope creep.',
  process_steps: [],
};

export default function EngagementModelSection({ section }) {
  const data = section?.title ? section : fallbackSection;
  const steps = data?.process_steps || [];

  return (
    <section className="sc-section-alt">
      <div className="container sc-centered">
        {data?.eyebrow_text ? <div className="sc-label rv">{data.eyebrow_text}</div> : null}
        {data?.title ? <h2 className="sc-title rv d1">{data.title}</h2> : null}
        {data?.description ? <p className="sc-subtitle sc-subtitle-centered rv d2">{data.description}</p> : null}

        {steps.length ? (
          <div className="sc-process-row">
            {steps.map((step, index) => (
              <article className={`sc-process-step rv d${index % 4}`} key={`${step?.title}-${index}`}>
                <div className="sc-process-number">{step?.step_number}</div>
                <h3>{step?.title}</h3>
                <p>{step?.description}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
