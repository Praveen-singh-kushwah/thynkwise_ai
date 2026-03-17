import Link from 'next/link';
import { heroPills, heroStats, liveMetrics, slaBars } from './data';

export default function HeroSection() {
  return (
    <section className="hero-ms">
      <div className="ms-glow ms-glow1" />
      <div className="ms-glow ms-glow2" />
      <div className="container">
        <div className="hero-ms-inner">
          <div className="hero-ms-grid">
            <div>
              <div className="sla-row rv">
                {heroPills.map((pill) => (
                  <div key={pill.label} className="sla-pill">
                    <div className="sla-dot-anim" />
                    <span className="sla-txt">{pill.label}</span>
                  </div>
                ))}
              </div>

              <h1 className="rv d1">
                Your Infrastructure.
                <br />
                <span>Fully Managed.</span>
                <br />
                Zero Surprises.
              </h1>

              <p className="hero-ms-sub rv d2">
                Infrastructure, applications, databases, network, security - all
                managed under one SLA. Thynkwise handles the entire stack across
                AWS, Azure, GCP, and Indian CSPs, locally billed with a named
                account manager for every client.
              </p>

              <div className="hero-ms-acts rv d3">
                <Link href="/get-assessment" className="btn btn-primary-ms">
                  Get Managed Services Assessment {'\u2192'}
                </Link>
                <Link href="/book-demo" className="btn btn-ghost-w">
                  Talk to an Expert
                </Link>
              </div>

              <div className="hero-ms-stats rv d4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="hs-item">
                    <span className="n">{stat.value}</span>
                    <span className="l">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rv d2">
              <div className="hero-panel">
                <div className="hp-head">
                  <div className="hp-title">Thynkwise NOC - Live Metrics</div>
                  <div className="hp-live">
                    <div className="hp-live-dot" />
                    Live
                  </div>
                </div>

                <div className="met-grid">
                  {liveMetrics.slice(0, 2).map((metric) => (
                    <div key={metric.label} className={`met ${metric.className}`}>
                      <span className="met-val">{metric.value}</span>
                      <div className="met-lbl">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="met-grid">
                  {liveMetrics.slice(2).map((metric) => (
                    <div key={metric.label} className={`met ${metric.className}`}>
                      <span className="met-val">{metric.value}</span>
                      <div className="met-lbl">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="sla-bars">
                  {slaBars.map((bar) => (
                    <div key={bar.name} className="sla-bar-row">
                      <div className="sla-bar-top">
                        <span className="sla-bar-name">{bar.name}</span>
                        <span className="sla-bar-pct">{bar.percent}</span>
                      </div>
                      <div className="sla-track">
                        <div className="sla-fill" style={{ width: bar.width }} />
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/get-assessment" className="hp-cta">
                  Get Managed Services Assessment {'\u2192'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
