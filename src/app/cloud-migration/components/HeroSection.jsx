import Link from 'next/link';
import { heroSteps } from './data';

export default function HeroSection({ hero }) {
  const steps = hero?.process_step?.length
    ? hero.process_step.map((step, index) => ({
        ...heroSteps[index % heroSteps.length],
        id: step.id,
        number: step.step_number || heroSteps[index % heroSteps.length].number,
        name: step.title || heroSteps[index % heroSteps.length].name,
        subtitle: step.description || heroSteps[index % heroSteps.length].subtitle,
      }))
    : heroSteps;

  const stats = hero?.stats?.length
    ? hero.stats.map((stat, index) => ({
        id: stat.id,
        value: stat.value,
        label: stat.label,
      }))
    : [
        { id: 1, value: '500+', label: 'Migrations delivered' },
        { id: 2, value: '0', label: 'Failed migrations' },
        { id: 3, value: '30%', label: 'Avg cost saving after migration' },
      ];

  return (
    <section className="hero-cm">
      <div className="cm-orb cm-orb1" />
      <div className="cm-orb cm-orb2" />
      <div className="container">
        <div className="hero-cm-inner">
          <div className="hero-cm-grid">
            <div>
              <div className="hero-kicker rv">
                <div className="kicker-dot" />
                <span className="kicker-text">{hero?.kicker_text || '500+ SUCCESSFUL MIGRATIONS'}</span>
              </div>

              <h1 className="rv d1">{hero?.title || 'Migration Portfolio.'}</h1>

              <p className="hero-cm-sub rv d2">
                {hero?.description ||
                  "Migration shouldn't feel like stepping off a cliff. Thynkwise delivers zero-downtime migrations to AWS, Azure, GCP, and Indian CSPs - locally billed with full compliance. You get certainty, not surprises."}
              </p>

              <div className="hero-cm-acts rv d3">
                <Link href={hero?.primary_cta_link || '/get-assessment'} className="btn btn-primary-ms">
                  {hero?.primary_cta_text || 'Get Free Migration Assessment'} {'\u2192'}
                </Link>
                <Link href={hero?.secondary_cta_link || '/book-demo'} className="btn btn-ghost-w">
                  {hero?.secondary_cta_text || 'Talk to Migration Expert'}
                </Link>
              </div>

              <div className="hero-proof rv d4">
                {stats.map((stat, index) => (
                  <div key={stat.id || `${stat.label}-${index}`} className="hp">
                    <span className="hp-num">{stat.value}</span>
                    <span className="hp-lbl">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rv d2">
              <div className="hero-card-cm">
                <div className="hc-title">Thynkwise Migration Process</div>

                {steps.map((step, index) => (
                  <div key={step.id || `${step.number}-${index}`} className="hc-step">
                    <div className="step-num-cm">{step.number}</div>
                    <div>
                      <span className="step-name">{step.name}</span>
                      <span className="step-sub">{step.subtitle}</span>
                    </div>
                  </div>
                ))}

                <div className="hc-guarantee">
                  <span style={{ fontSize: '1.2rem' }}>{'\u{1F6E1}\uFE0F'}</span>
                  <span>
                    <strong>Migration Guarantee:</strong> If we miss your go-live date, we refund one month of managed services. No excuses.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
