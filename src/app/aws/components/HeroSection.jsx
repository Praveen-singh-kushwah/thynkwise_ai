import Link from 'next/link';
import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';

const defaultHero = {
  left_container: {
    heading: 'Amazon Web Services.<br>Managed by <em>Thynkwise.</em>',
    description:
      'AWS Advanced Consulting Partner - EC2, EKS, RDS, Lambda, SageMaker and 200+ services fully managed. Multi-region delivery, certified FinOps, and 24/7 support built in from Day 1.',
    primary_btn_text: 'Get Free AWS Assessment',
    primary_btn_link: '/get-assessment',
    secondary_btn_text: 'Book AWS Consultation',
    secondary_btn_link: '/book-demo',
    points: [
      { point: 'Flexible billing options' },
      { point: '24/7 Support' },
      { point: '200+ active clients' },
      { point: 'Compliant cloud services' },
    ],
  },
  right_container: {
    title: 'AWS Partner Dashboard',
    sub_text: 'THYNKWISE · ADVANCED TIER',
    list: [
      { key: 'Partner Tier', value: 'Advanced Consulting' },
      { key: 'Active Certifications', value: '150+' },
      { key: 'Avg. Cost Reduction', value: '28–35%' },
      { key: 'Active AWS Accounts', value: '200+' },
      { key: 'Billing Options', value: 'Multi-currency' },
    ],
    buttonText: 'Talk to AWS Expert',
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

function getValueToneClass(index, value) {
  if (index === 1 || index === 3) {
    return ' wh';
  }

  if (index === 2 || /%/.test(value || '')) {
    return ' gr';
  }

  return '';
}

export default function HeroSection({ hero }) {
  const left = hero?.left_container || defaultHero.left_container;
  const right = hero?.right_container || defaultHero.right_container;
  const titleHtml = unwrapRichText(left.heading || defaultHero.left_container.heading, ['h1', 'h2', 'p', 'div']);
  const descriptionHtml = unwrapRichText(left.description || defaultHero.left_container.description, ['p', 'div']);
  const points = left.points?.length ? left.points : defaultHero.left_container.points;
  const stats = right.list?.length ? right.list : defaultHero.right_container.list;
  const certValue = stats.find((item) => /cert/i.test(item.key || ''))?.value || '150+';
  const iconAsset = Array.isArray(right.icon) ? right.icon[0] : right.icon;
  const iconUrl = getStrapiMediaUrl(iconAsset);

  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="container">
        <div className="hcnt">
          <div className="hgrid">
            <div>
              <div className="h-eyebrow rv">
                <div className="aws-cert">
                  <span>{'☁'}</span>
                  <span>AWS Advanced Consulting Partner</span>
                </div>
                <span className="badge bw">{'🇮🇳'} {certValue} Certifications</span>
              </div>
              <h1 className="rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />
              <div className="hero-lead rv d2" dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
              <div className="hero-acts rv d3">
                <Link href={left.primary_btn_link || defaultHero.left_container.primary_btn_link} className="btn btn-aws">
                  {left.primary_btn_text || defaultHero.left_container.primary_btn_text} {'\u2192'}
                </Link>
                <Link href={left.secondary_btn_link || defaultHero.left_container.secondary_btn_link} className="btn btn-ghost-w">
                  {left.secondary_btn_text || defaultHero.left_container.secondary_btn_text}
                </Link>
              </div>
              <div className="hero-trust rv d4">
                {points.map((item, index) => (
                  <div key={`${item.point}-${index}`} className="ht-item">
                    <div className="ht-dot" />
                    <span>{item.point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rv d2">
              <div className="hero-card">
                <div className="hc-header">
                  <div className="hc-icon">
                    {iconUrl ? (
                      <CmsImage
                        src={iconUrl}
                        alt={right.title || defaultHero.right_container.title}
                        className="hc-icon-img"
                        style={{ width: 24, height: 24, objectFit: 'contain' }}
                      />
                    ) : (
                      '☁'
                    )}
                  </div>
                  <div>
                    <div className="hc-title">{right.title || defaultHero.right_container.title}</div>
                    <div className="hc-sub">{right.sub_text || defaultHero.right_container.sub_text}</div>
                  </div>
                </div>
                {stats.map((item, index) => {
                  const value = item.value || defaultHero.right_container.list[index]?.value || '';

                  return (
                    <div key={`${item.key}-${index}`} className="hc-stat">
                      <span className="hc-stat-label">{item.key}</span>
                      <span className={`hc-stat-val${getValueToneClass(index, value)}`}>{value}</span>
                    </div>
                  );
                })}
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
