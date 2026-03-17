import Link from 'next/link';
import { heroSteps } from './data';

export default function HeroSection() {
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
                <span className="kicker-text">500+ SUCCESSFUL MIGRATIONS</span>
              </div>

              <h1 className="rv d1">Migration Portfolio.</h1>

              <p className="hero-cm-sub rv d2">
                Migration shouldn&apos;t feel like stepping off a cliff.
                Thynkwise delivers zero-downtime migrations to AWS, Azure, GCP,
                and Indian CSPs - locally billed with full compliance. You get
                certainty, not surprises.
              </p>

              <div className="hero-cm-acts rv d3">
                <Link href="/get-assessment" className="btn btn-primary-ms">
                  Get Free Migration Assessment {'\u2192'}
                </Link>
                <Link href="/book-demo" className="btn btn-ghost-w">
                  Talk to Migration Expert
                </Link>
              </div>

              <div className="hero-proof rv d4">
                <div className="hp">
                  <span className="hp-num">500+</span>
                  <span className="hp-lbl">Migrations delivered</span>
                </div>
                <div className="hp">
                  <span className="hp-num">0</span>
                  <span className="hp-lbl">Failed migrations</span>
                </div>
                <div className="hp">
                  <span className="hp-num">30%</span>
                  <span className="hp-lbl">Avg cost saving after migration</span>
                </div>
              </div>
            </div>

            <div className="rv d2">
              <div className="hero-card-cm">
                <div className="hc-title">Thynkwise Migration Process</div>

                {heroSteps.map((step) => (
                  <div key={step.number} className="hc-step">
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
                    <strong>Migration Guarantee:</strong> If we miss your
                    go-live date, we refund one month of managed services. No
                    excuses.
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
