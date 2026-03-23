import Link from 'next/link';
import { heroAvailability } from './data';

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

function getArchStyle(item, index) {
  const name = (item?.name || '').toLowerCase();
  const arch = item?.arch;

  if (arch === 'B200') {
    return {
      chipStyle: {
        background: 'rgba(255,107,53,.12)',
        color: 'var(--gpu-orange)',
        border: '1px solid rgba(255,107,53,.2)',
      },
      badgeClassName: 'hot',
    };
  }

  if (arch === 'H200') {
    return {
      chipStyle: {
        background: 'rgba(0,229,255,.1)',
        color: 'var(--gpu-cyan)',
        border: '1px solid rgba(0,229,255,.2)',
      },
      badgeClassName: 'avail',
    };
  }

  if (arch === 'H100') {
    return {
      chipStyle: {
        background: 'rgba(0,255,136,.1)',
        color: 'var(--gpu-green)',
        border: '1px solid rgba(0,255,136,.2)',
      },
      badgeClassName: 'avail',
    };
  }

  if (name.includes('mi300')) {
    return {
      chipStyle: {
        background: 'rgba(251,191,36,.1)',
        color: 'var(--gpu-amber)',
        border: '1px solid rgba(251,191,36,.2)',
      },
      badgeClassName: 'avail',
    };
  }

  if (arch === 'MI3') {
    return {
      chipStyle: {
        background: 'rgba(168,85,247,.12)',
        color: 'var(--gpu-purple)',
        border: '1px solid rgba(168,85,247,.2)',
      },
      badgeClassName: 'avail',
    };
  }

  if (arch === 'G3') {
    return {
      chipStyle: {
        background: 'rgba(0,229,255,.06)',
        color: 'var(--gpu-copy-dim)',
        border: '1px solid rgba(255,255,255,.06)',
      },
      badgeClassName: 'avail',
    };
  }

  return {
    chipStyle: {
      background: 'rgba(255,255,255,.06)',
      color: 'var(--gpu-copy)',
      border: '1px solid rgba(255,255,255,.08)',
    },
    badgeClassName: index === 0 ? 'hot' : 'avail',
  };
}

export default function HeroSection({ section }) {
  const hero = section?.text;
  const titleHtml = unwrapRichText(
    hero?.title || 'Any <span class="c">GPU.</span><br />Any Delivery<br /><span class="g">Model.</span> No Cap.',
    ['h1', 'h2', 'p'],
  );
  const descriptionHtml = unwrapRichText(
    hero?.description ||
      'From a single <strong>NVIDIA B200</strong> bare metal instance to a <strong>GB300 NVL72 rack-scale supercomputer</strong> - from virtual machines and Kubernetes clusters to on-premise hardware deployment. Thynkwise gives you access to every GPU architecture across every delivery model, managed end-to-end.',
    ['p', 'div'],
  );
  const stats = hero?.stat?.length
    ? hero.stat
    : [
        { id: 1, value: '15+', label: 'GPU models available' },
        { id: 2, value: '6', label: 'Delivery models' },
        { id: 3, value: '3', label: 'Chip architectures' },
        { id: 4, value: '24/7', label: 'Managed operations' },
      ];
  const availability = section?.gpu_availability?.length ? section.gpu_availability : heroAvailability;

  return (
    <section className="hero">
      <div className="hero-orbs">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
      </div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-grid">
            <div>
              <div className="gpu-ticker rv">
                {availability.slice(0, 4).map((item, index) => (
                  <div key={item.id || `${item.arch}-${index}`} className="gpu-pill">
                    <div className="gpu-dot" />
                    <span className="gpu-txt">{[item.arch, item.name].filter(Boolean).join(' · ')}</span>
                  </div>
                ))}
              </div>
              <h1 className="rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />
              <div className="hero-sub rv d2" dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
              <div className="hero-acts rv d3">
                <Link href={hero?.primary_cta_link || '/get-assessment'} className="btn btn-cyan">
                  {hero?.primary_cta_text || 'Get GPU Architecture Assessment'} {'\u2192'}
                </Link>
                <Link href={hero?.secondary_cta_link || '/book-demo'} className="btn btn-ghost">
                  {hero?.secondary_cta_text || 'Talk to GPU Engineer'}
                </Link>
              </div>
              <div className="hero-stats rv d4">
                {stats.map((stat, index) => (
                  <div key={stat.id || `${stat.value}-${index}`}>
                    <span className="hs-n">{stat.value}</span>
                    <span className="hs-l">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rv d2">
              <div className="gpu-panel">
                <div className="gp-head">
                  <div className="gp-title">Live GPU Availability</div>
                  <div className="gp-live">
                    <div className="gp-dot" />
                    Thynkwise Catalogue
                  </div>
                </div>
                <div className="gpu-rows">
                  {availability.map((item, index) => {
                    const style = getArchStyle(item, index);
                    const spec = item.specs?.map((entry) => entry.spec || entry).filter(Boolean).join(' · ');

                    return (
                      <div key={item.id || `${item.arch}-${index}`} className="gpu-row">
                        <div className="gr-arch" style={style.chipStyle}>{item.arch}</div>
                        <div className="gr-info">
                          <span className="gr-name">{item.name}</span>
                          <span className="gr-spec">{spec}</span>
                        </div>
                        <span className={`gr-badge ${style.badgeClassName}`}>{item.gpu_status || item.status}</span>
                      </div>
                    );
                  })}
                </div>
                <Link href="/get-assessment" className="gp-cta">
                  See Full Catalogue + Match Your Workload {'\u2192'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
