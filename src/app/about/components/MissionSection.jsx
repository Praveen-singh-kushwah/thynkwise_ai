import Link from 'next/link';

const defaultHeading = 'We exist to make enterprise cloud <em>work for your business</em> - not the other way around.';
const defaultDescription = [
  "Every major cloud vendor built their playbook for large Western enterprises: engineering-heavy onboarding, siloed support teams, and billing structures that assume your finance team already speaks cloud-native. Most organisations - regardless of where they are in the world - don't operate that way.",
  "Growing businesses need a partner who translates hyperscaler capability into business outcomes. They need a team that understands compliance obligations across jurisdictions, architects across AWS, Azure, and Google Cloud without commercial bias, and treats every client as a long-term relationship - not a transaction.",
  "Thynkwise was built to fill that gap. Our team has worked at AWS, Microsoft, and Google - we left hyperscaler careers to build the cloud partner that businesses of every size and geography actually deserve.",
];
const defaultQuote = "Cloud is not a destination - it's an operating model. The companies that win are the ones with a partner who understands both the technology and the business it's meant to serve.";
const defaultText = 'Founder, Thynkwise Technologies - 2018';
const defaultStats = [
  { value: '94%', label: 'Client retention rate annually' },
  { value: '4+', label: 'Certified cloud partnerships globally' },
  { value: '8+', label: 'Cities with active presence' },
  { value: '0', label: 'Data breaches across all clients' },
];

function splitRichText(value) {
  if (!value) {
    return [];
  }

  return String(value)
    .split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function unwrapRichText(html, tags) {
  if (!html) {
    return html;
  }

  const trimmed = html.trim();

  for (const tag of tags) {
    const pattern = new RegExp(`^<${tag}\\b[^>]*>([\\s\\S]*)</${tag}>$`, 'i');
    const match = trimmed.match(pattern);

    if (match) {
      return match[1];
    }
  }

  return trimmed;
}

export default function MissionSection({ section }) {
  const left = section?.left;
  const right = section?.right;
  const headingHtml = unwrapRichText(left?.heading || defaultHeading, ['h1', 'h2', 'h3', 'p', 'div']);
  const paragraphs = splitRichText(left?.description).length ? splitRichText(left?.description) : defaultDescription;
  const stats = right?.stat?.length ? right.stat : defaultStats;

  return (
    <section className="ps ps-c">
      <div className="container">
        <div className="mission-grid">
          <div className="mission-text">
            <span className="mis-label rv">Our Mission</span>
            <h2 className="rv d1" dangerouslySetInnerHTML={{ __html: headingHtml }} />
            {paragraphs.map((paragraph, index) => (
              <p key={index} className={`rv d${Math.min(index + 2, 4)}`} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            <div className="mission-actions rv d5">
              <Link href={left?.button_Link || '/get-assessment'} className="btn btn-primary">
                {left?.buttonText || 'Get Started'} {'\u2192'}
              </Link>
            </div>
          </div>
          <div className="rv d2">
            <div className="mv-card-big">
              <div className="mv-quote-mark">&quot;</div>
              <p className="mv-quote">{right?.quote || defaultQuote}</p>
              <div className="mv-attr">{right?.text || defaultText}</div>
              <div className="mv-stat-row">
                {stats.map((item, index) => (
                  <div key={`${item.value}-${index}`} className="mv-stat">
                    <span className="mv-stat-n">{item.value}</span>
                    <div className="mv-stat-l">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
