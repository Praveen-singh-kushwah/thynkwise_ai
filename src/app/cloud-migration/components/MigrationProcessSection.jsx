import { processSteps, riskGroups } from './data';

export default function MigrationProcessSection({ section, riskSection }) {
  const steps = section?.process_step_detailed?.length
    ? section.process_step_detailed.map((step, index) => ({
        ...processSteps[index % processSteps.length],
        id: step.id,
        week: step.timeline || processSteps[index % processSteps.length].week,
        name: step.title || processSteps[index % processSteps.length].name,
        description: step.description || processSteps[index % processSteps.length].description,
        deliverables:
          step.deliverables?.map((deliverable) => deliverable.text).filter(Boolean) ||
          processSteps[index % processSteps.length].deliverables,
      }))
    : processSteps;

  const risks = riskSection?.risk_item?.map((item) => item.text).filter(Boolean) || riskGroups.risks;
  const mitigations =
    riskSection?.solution_item?.map((item) => item.text).filter(Boolean) || riskGroups.mitigations;

  return (
    <section className="ps ps-w">
      <div className="container">
        <div className="cm-process-grid">
          <div>
            <span className="badge bt rv">Step-by-Step Process</span>
            <h2 className="rv d1" style={{ marginTop: '10px' }}>
              {section?.heading || 'How Thynkwise Migrates 500+ Workloads Without a Single Failure'}
            </h2>
            <p className="rv d2" style={{ marginBottom: '28px' }}>
              {section?.description ||
                'Every migration follows a battle-tested playbook. No improvisation, no heroics - systematic execution that your board can track in weekly dashboards.'}
            </p>

            <div className="process-wrap rv d3">
              <div className="process-line" />
              {steps.map((step, index) => (
                <div key={step.id || `${step.name}-${index}`} className="process-step-cm">
                  <div className="process-dot">
                    <div className="pd-inner" style={{ background: step.dotColor }} />
                  </div>
                  <div className="ps-week">{step.week}</div>
                  <div className="ps-name-cm">{step.name}</div>
                  <p className="ps-desc">{step.description}</p>
                  <div className="ps-delivs">
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <span key={`${step.id || step.name}-${deliverableIndex}`} className="ps-deliv">
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="badge bo rv">Risk Management</span>
            <h2 className="rv d1" style={{ marginTop: '10px', fontSize: '1.6rem' }}>
              {riskSection?.heading || 'The Risks Organisations Fear - And How We Eliminate Them'}
            </h2>
            <p className="rv d2" style={{ marginBottom: '24px' }}>
              {riskSection?.description ||
                "66% of enterprises cite migration as their #1 cloud challenge. Here's what they're afraid of - and what we do about it."}
            </p>

            <div className="risk-grid-cm rv d3" style={{ marginBottom: '24px' }}>
              <div className="risk-card-cm risk">
                <div className="risk-head">
                  <span className="risk-icon">{'\u26A0\uFE0F'}</span>
                  <span className="risk-title">What Goes Wrong</span>
                </div>
                <ul className="risk-list-cm">
                  {risks.map((item, index) => (
                    <li key={`risk-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="risk-card-cm how">
                <div className="risk-head">
                  <span className="risk-icon">{'\u{1F6E1}\uFE0F'}</span>
                  <span className="risk-title">How Thynkwise Eliminates It</span>
                </div>
                <ul className="risk-list-cm">
                  {mitigations.map((item, index) => (
                    <li key={`mitigation-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="rv"
              style={{
                background: 'var(--teal-pale)',
                borderRadius: '14px',
                padding: '20px',
                border: '1px solid rgba(0,201,167,.22)',
              }}
            >
              <p
                style={{
                  fontSize: '.85rem',
                  color: 'var(--dark)',
                  fontStyle: 'italic',
                  marginBottom: '8px',
                }}
              >
                &ldquo;We&apos;d had two failed migration attempts before Thynkwise. They discovered 47 undocumented database dependencies our previous vendors missed entirely. Go-live was 36 minutes of downtime.&rdquo;
              </p>
              <p
                style={{
                  fontSize: '.75rem',
                  color: 'var(--teal-dark)',
                  fontWeight: 600,
                }}
              >
                - VP Technology, E-commerce company, Mumbai / 180 workloads migrated to AWS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
