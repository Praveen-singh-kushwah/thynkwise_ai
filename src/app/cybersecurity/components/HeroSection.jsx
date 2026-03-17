import Link from 'next/link';
import { heroThreats } from './data';

export default function HeroSection() {
  return (
    <section className="cy-hero">
      <div className="container">
        <div className="cy-hero-grid">
          <div>
            <div className="cy-hero-eyebrow rv">
              <div className="cy-threat-pulse" />
              <span className="cy-hero-label">Managed Security Operations</span>
            </div>
            <h1 className="cy-hero-title rv d1">
              Detect Faster.
              <br />
              <em>Respond Smarter.</em>
              <br />
              Stay Compliant.
            </h1>
            <p className="cy-hero-sub rv d2">
              Cyber threats don&apos;t schedule themselves. Thynkwise delivers
              end-to-end managed security {'\u2014'} SOC operations, XDR, VAPT,
              IAM, GRC, and cloud security {'\u2014'} under a single accountability
              model with documented SLAs and a named security analyst on your
              account.
            </p>
            <div className="cy-hero-actions rv d3">
              <Link href="/get-assessment" className="btn btn-red">
                Get Security Assessment
              </Link>
              <Link href="/contact" className="btn btn-ghost-w">
                Talk to a CISO {'\u2192'}
              </Link>
            </div>
            <div className="cy-hero-trusts rv d4">
              <div className="cy-hero-trust-item">
                <div className="cy-hero-trust-dot" />
                <span>24/7 Security Operations</span>
              </div>
              <div className="cy-hero-trust-item cy-hero-trust-shift">
                <div className="cy-hero-trust-dot" />
                <span>Contractual SLAs</span>
              </div>
              <div className="cy-hero-trust-item cy-hero-trust-shift">
                <div className="cy-hero-trust-dot" />
                <span>Named Analyst</span>
              </div>
              <div className="cy-hero-trust-item cy-hero-trust-shift">
                <div className="cy-hero-trust-dot" />
                <span>ISO 27001 Aligned</span>
              </div>
            </div>
          </div>

          <div className="cy-threat-panel rv d2">
            <div className="cy-threat-panel-head">
              <span className="cy-threat-panel-title">Security Event Monitor</span>
              <span className="cy-threat-panel-live">LIVE</span>
            </div>
            {heroThreats.map((threat) => (
              <div key={`${threat.severity}-${threat.type}`} className="cy-threat-item">
                <span className={`cy-threat-severity ${threat.severityClassName}`}>
                  {threat.severity}
                </span>
                <div className="cy-threat-body">
                  <div className="cy-threat-type">{threat.type}</div>
                  <div className="cy-threat-meta">{threat.meta}</div>
                </div>
                <span className={`cy-threat-status ${threat.statusClassName}`}>
                  {threat.status}
                </span>
              </div>
            ))}
            <div className="cy-threat-panel-footer">
              <span>THYNKWISE SOC {'\u00B7'} ACTIVE MONITORING</span>
              <span className="cy-threat-panel-online">
                {'\u25CF'} 12 ANALYSTS ONLINE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
