import Link from 'next/link';
import { heroThreats } from './data';

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

function mapSeverity(severity) {
  const value = (severity || '').toLowerCase();

  if (value === 'high') {
    return { label: 'HIGH', className: 'cy-sev-high' };
  }

  if (value === 'medium') {
    return { label: 'MED', className: 'cy-sev-med' };
  }

  return { label: 'CRIT', className: 'cy-sev-crit' };
}

function mapStatus(status) {
  const value = (status || '').toLowerCase();

  if (value.includes('invest') || value.includes('review')) {
    return 'cy-status-investigating';
  }

  return 'cy-status-contained';
}

export default function HeroSection({ hero, events }) {
  const titleHtml = unwrapRichText(
    hero?.title || 'Detect Faster.<br /><em>Respond Smarter.</em><br />Stay Compliant.',
    ['h1', 'h2', 'p'],
  );
  const descriptionHtml = unwrapRichText(
    hero?.description ||
      "Cyber threats don't schedule themselves. Thynkwise delivers end-to-end managed security — SOC operations, XDR, VAPT, IAM, GRC, and cloud security — under a single accountability model with documented SLAs and a named security analyst on your account.",
    ['p', 'div'],
  );

  const trustPoints = hero?.trust_point?.length
    ? hero.trust_point.map((item, index) => ({ trust_point: item.trust_point, id: item.id || index }))
    : [
        { id: 1, trust_point: '24/7 Security Operations' },
        { id: 2, trust_point: 'Contractual SLAs' },
        { id: 3, trust_point: 'Named Analyst' },
        { id: 4, trust_point: 'ISO 27001 Aligned' },
      ];

  const threatItems = events?.length
    ? events.map((event, index) => {
        const severity = mapSeverity(event.severity);
        return {
          id: event.id || index,
          severity: severity.label,
          severityClassName: severity.className,
          type: event.title,
          meta: event.meta_tag?.map((item) => item.tag).filter(Boolean).join(' · '),
          status: event.status_cb,
          statusClassName: mapStatus(event.status_cb),
        };
      })
    : heroThreats;

  return (
    <section className="cy-hero">
      <div className="container">
        <div className="cy-hero-grid">
          <div>
            <div className="cy-hero-eyebrow rv">
              <div className="cy-threat-pulse" />
              <span className="cy-hero-label">Managed Security Operations</span>
            </div>
            <h1 className="cy-hero-title rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />
            <div className="cy-hero-sub rv d2" dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
            <div className="cy-hero-actions rv d3">
              <Link href={hero?.primary_cta_link || '/get-assessment'} className="btn btn-red">
                {hero?.primary_cta_text || 'Get Security Assessment'}
              </Link>
              <Link href={hero?.secondary_cta_link || '/contact'} className="btn btn-ghost-w">
                {hero?.secondary_cta_text || 'Talk to a CISO'} {'\u2192'}
              </Link>
            </div>
            <div className="cy-hero-trusts rv d4">
              {trustPoints.map((item, index) => (
                <div
                  key={item.id || `${item.trust_point}-${index}`}
                  className={`cy-hero-trust-item${index > 0 ? ' cy-hero-trust-shift' : ''}`}
                >
                  <div className="cy-hero-trust-dot" />
                  <span>{item.trust_point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cy-threat-panel rv d2">
            <div className="cy-threat-panel-head">
              <span className="cy-threat-panel-title">Security Event Monitor</span>
              <span className="cy-threat-panel-live">LIVE</span>
            </div>
            {threatItems.map((threat, index) => (
              <div key={threat.id || `${threat.type}-${index}`} className="cy-threat-item">
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
              <span>THYNKWISE SOC · ACTIVE MONITORING</span>
              <span className="cy-threat-panel-online">{'\u25CF'} 12 ANALYSTS ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

