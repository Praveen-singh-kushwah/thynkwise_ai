import SectionHeader from './SectionHeader';
import { onboardingSteps } from './data';

const badgeStyle = {
  background: 'rgba(0,180,160,0.1)',
  color: 'var(--teal-dark)',
  border: '1px solid rgba(0,180,160,0.25)',
};

export default function HowItWorksSection({ section }) {
  const steps = section?.process_step?.length
    ? section.process_step.map((step, index) => ({
        ...onboardingSteps[index % onboardingSteps.length],
        id: step.id,
        number: step.step_number || onboardingSteps[index % onboardingSteps.length].number,
        name: step.title || onboardingSteps[index % onboardingSteps.length].name,
        description: step.description || onboardingSteps[index % onboardingSteps.length].description,
      }))
    : onboardingSteps;

  return (
    <section className="ps ps-c">
      <div className="container">
        <SectionHeader
          badge="How We Onboard You"
          badgeClassName="badge"
          badgeStyle={badgeStyle}
          title={section?.heading || 'From Signed Contract to Fully Managed in 30 Days'}
          description={
            section?.description ||
            "Thynkwise's onboarding methodology ensures zero disruption to your operations - your managed services engagement is fully operational within 30 days of kick-off."
          }
        />

        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={step.id || `${step.number}-${index}`} className={`ps-step rv ${step.delay}`}>
              <div className="ps-num">{step.number}</div>
              <div className="ps-step-name">{step.name}</div>
              <div className="ps-step-desc">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
