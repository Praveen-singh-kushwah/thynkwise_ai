import Link from 'next/link';

const defaultHero = {
  left_container: {
    heading: "India's Certified<br><em>Azure Reseller</em><br>with Local Currency Billing",
    description:
      "Microsoft Azure is the enterprise cloud of choice for BFSI, manufacturing, and hybrid workloads. Thynkwise handles billing in local currency, DPDP and RBI compliance, and your team's entire Azure journey - 24/7 in IST.",
    primary_btn_text: 'Get Free Azure Assessment',
    primary_btn_link: '/get-assessment',
    secondary_btn_text: 'Book Azure Consultation',
    secondary_btn_link: '/book-demo',
    points: [
      { point: '60+ Active Azure Certifications' },
      { point: '150+ Azure Deployments in India' },
      { point: 'BFSI Specialist Partner' },
    ],
  },
  right_container: {
    title: 'Azure India Partnership',
    sub_text: 'CSP TIER 1 · BFSI SPECIALIST',
    list: [
      { key: 'Avg. Azure Cost Saving', value: '34%' },
      { key: 'Azure Certifications', value: '60+' },
      { key: 'BFSI Deployments', value: '45+' },
      { key: 'Billing Currency', value: 'Local-currency' },
    ],
    buttonText: 'Talk to Azure Expert',
    button_Link: '/book-demo',
  },
};

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

export default function HeroSection({ hero }) {
  const left = hero?.left_container || defaultHero.left_container;
  const right = hero?.right_container || defaultHero.right_container;
  const titleHtml = unwrapRichText(left.heading || defaultHero.left_container.heading, ['h1', 'h2', 'p', 'div']);
  const descriptionHtml = unwrapRichText(left.description || defaultHero.left_container.description, ['p', 'div']);
  const trustPoints = left.points?.length ? left.points : defaultHero.left_container.points;
  const stats = right.list?.length ? right.list : defaultHero.right_container.list;

  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="container">
        <div className="hcnt">
          <div className="hgrid">
            <div>
              <div className="h-eyebrow rv">
                <div className="az-cert">
                  <span>{'⬡'}</span>
                  <span>Microsoft Certified Solution Provider (CSP)</span>
                </div>
                <span className="badge bw">{'🇮🇳'} Security-First Partner</span>
              </div>
              <h1 className="rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />
              <div className="hero-lead rv d2" dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
              <div className="hero-acts rv d3">
                <Link href={left.primary_btn_link || defaultHero.left_container.primary_btn_link} className="btn btn-primary">
                  {left.primary_btn_text || defaultHero.left_container.primary_btn_text} {'\u2192'}
                </Link>
                <Link href={left.secondary_btn_link || defaultHero.left_container.secondary_btn_link} className="btn btn-ghost-w">
                  {left.secondary_btn_text || defaultHero.left_container.secondary_btn_text}
                </Link>
              </div>
              <div className="hero-trust rv d4">
                {trustPoints.map((item, index) => (
                  <div key={`${item.point || item.title || item.description}-${index}`} className="ht-item">
                    <div className="ht-dot" />
                    <span>{item.point || item.title || item.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rv d2">
              <div className="hero-card">
                <div className="hc-header">
                  <div className="hc-icon">{'⬡'}</div>
                  <div>
                    <div className="hc-title">{right.title || defaultHero.right_container.title}</div>
                    <div className="hc-sub">{right.sub_text || defaultHero.right_container.sub_text}</div>
                  </div>
                </div>
                {stats.map((item, index) => (
                  <div key={`${item.key || item.title}-${index}`} className="hc-stat">
                    <span className="hc-stat-label">{item.key || item.title}</span>
                    <span className="hc-stat-val">{item.value || item.description}</span>
                  </div>
                ))}
                <Link href={right.button_Link || defaultHero.right_container.button_Link} className="hc-cta">
                  {right.buttonText || defaultHero.right_container.buttonText} {'\u2192'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
