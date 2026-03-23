import Link from 'next/link';
import { heroPills, heroStats, liveMetrics, slaBars } from './data';

function unwrapRichText(html, tags) {
  if (!html) {
    return html;
  }

  const trimmedHtml = html.trim();

  for (const tag of tags) {
    const pattern = new RegExp(`^<${tag}\\b[^>]*>([\\s\\S]*)</${tag}>$`, 'i');
    const match = trimmedHtml.match(pattern);

    if (match) {
      return match[1];
    }
  }

  return trimmedHtml;
}

const defaultTitle = `
  Your Infrastructure.<br />
  <span>Fully Managed.</span><br />
  Zero Surprises.
`;

const defaultDescription = `
  Infrastructure, applications, databases, network, security - all managed under one SLA.
  Thynkwise handles the entire stack across AWS, Azure, GCP, and Indian CSPs, locally billed
  with a named account manager for every client.
`;

export default function HeroSection({ hero }) {
  const pills = [hero?.badge_1, hero?.badge_2, hero?.badge_3]
    .filter(Boolean)
    .map((label) => ({ label }));
  const titleHtml = unwrapRichText(hero?.title || defaultTitle, ['h1', 'h2', 'p']);
  const descriptionHtml = unwrapRichText(hero?.description || defaultDescription, ['p', 'div']);

  return (
    <section className="hero-ms">
      <div className="ms-glow ms-glow1" />
      <div className="ms-glow ms-glow2" />
      <div className="container">
        <div className="hero-ms-inner">
          <div className="hero-ms-grid">
            <div>
              <div className="sla-row rv">
                {(pills.length ? pills : heroPills).map((pill, index) => (
                  <div key={`${pill.label}-${index}`} className="sla-pill">
                    <div className="sla-dot-anim" />
                    <span className="sla-txt">{pill.label}</span>
                  </div>
                ))}
              </div>

              <h1 className="rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />

              <div
                className="hero-ms-sub rv d2"
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              />

              <div className="hero-ms-acts rv d3">
                <Link
                  href={hero?.cta_primary_link || '/get-assessment'}
                  className="btn btn-primary-ms"
                >
                  {hero?.cta_primary_text || 'Get Managed Services Assessment'} {'\u2192'}
                </Link>
                <Link
                  href={hero?.cta_secondary_link || '/book-demo'}
                  className="btn btn-ghost-w"
                >
                  {hero?.cta_secondary_text || 'Talk to an Expert'}
                </Link>
              </div>

              <div className="hero-ms-stats rv d4">
                {heroStats.map((stat, index) => (
                  <div key={`${stat.label}-${index}`} className="hs-item">
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
                  {liveMetrics.slice(0, 2).map((metric, index) => (
                    <div key={`${metric.label}-${index}`} className={`met ${metric.className}`}>
                      <span className="met-val">{metric.value}</span>
                      <div className="met-lbl">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="met-grid">
                  {liveMetrics.slice(2).map((metric, index) => (
                    <div key={`${metric.label}-${index}`} className={`met ${metric.className}`}>
                      <span className="met-val">{metric.value}</span>
                      <div className="met-lbl">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="sla-bars">
                  {slaBars.map((bar, index) => (
                    <div key={`${bar.name}-${index}`} className="sla-bar-row">
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

                <Link href={hero?.cta_primary_link || '/get-assessment'} className="hp-cta">
                  {hero?.cta_primary_text || 'Get Managed Services Assessment'} {'\u2192'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
