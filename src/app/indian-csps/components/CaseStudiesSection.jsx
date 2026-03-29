import Link from 'next/link';

const HEADER_THEME_STYLES = {
  navy: {
    headerBackground: 'linear-gradient(135deg,#0b1f3a,#1a3560)',
    iconBackground: 'rgba(255,255,255,.12)',
    iconColor: '#93c5fd',
    industryColor: 'rgba(255,255,255,.5)',
    companyColor: '#fff',
  },
  green: {
    headerBackground: 'linear-gradient(135deg,#1a3a0a,#2a5c14)',
    iconBackground: 'rgba(255,255,255,.12)',
    iconColor: '#86efac',
    industryColor: 'rgba(255,255,255,.5)',
    companyColor: '#fff',
  },
  purple: {
    headerBackground: 'linear-gradient(135deg,#2a1060,#4a1d96)',
    iconBackground: 'rgba(255,255,255,.12)',
    iconColor: '#c4b5fd',
    industryColor: 'rgba(255,255,255,.5)',
    companyColor: '#fff',
  },
};

const METRIC_BACKGROUND_STYLES = {
  teal: '#e8faf8',
  orange: '#fff4e6',
  green: '#f0fdf4',
  blue: '#eef2ff',
  purple: '#faf5ff',
};

const METRIC_VALUE_STYLES = {
  teal: '#008c7a',
  orange: '#d96c00',
  green: '#15803d',
  blue: '#3a59a8',
  purple: '#7c3aed',
};

function getHeaderTheme(theme) {
  return HEADER_THEME_STYLES[theme] || HEADER_THEME_STYLES.navy;
}

function getMetricStyle(metric) {
  return {
    background: METRIC_BACKGROUND_STYLES[metric?.background_tone] || METRIC_BACKGROUND_STYLES.teal,
    color: METRIC_VALUE_STYLES[metric?.value_tone] || METRIC_VALUE_STYLES.teal,
  };
}

export default function CaseStudiesSection({ section }) {
  if (!section) {
    return null;
  }

  const cards = section.case_study_cards || [];
  const hasContent = section.eyebrow || section.title || section.description || cards.length;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="ps ps-w">
      <div className="container">
        {section.eyebrow ? (
          <div className="sec-eyebrow rv">
            <span className="badge bt">{section.eyebrow}</span>
          </div>
        ) : null}
        {section.title ? <h2 className="sec-title rv">{section.title}</h2> : null}
        {section.description ? <p className="sec-sub rv">{section.description}</p> : null}
        {cards.length ? (
          <div className="cs-grid">
            {cards.map((card, index) => {
              const metrics = card.metrics || [];
              const theme = getHeaderTheme(card.header_theme);

              return (
                <div key={card.id || `${card.company}-${index}`} className={`cs-card rv d${(index % 3) + 1}`}>
                  <div className="cs-hd" style={{ background: theme.headerBackground }}>
                    {card.icon ? (
                      <div
                        className="cs-ico"
                        style={{ background: theme.iconBackground, color: theme.iconColor }}
                      >
                        {card.icon}
                      </div>
                    ) : null}
                    <div>
                      {card.industry ? (
                        <div className="cs-industry" style={{ color: theme.industryColor }}>
                          {card.industry}
                        </div>
                      ) : null}
                      {card.company ? (
                        <div className="cs-company" style={{ color: theme.companyColor }}>
                          {card.company}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="cs-body">
                    {card.challenge ? <p className="cs-challenge">"{card.challenge}"</p> : null}
                    {metrics.length ? (
                      <div className="cs-kpis">
                        {metrics.map((metric, metricIndex) => {
                          const metricStyle = getMetricStyle(metric);

                          return (
                            <div
                              key={metric.id || `${metric.value}-${metricIndex}`}
                              className="cs-kpi"
                              style={{ background: metricStyle.background }}
                            >
                              {metric.value ? (
                                <div className="cs-kpi-num" style={{ color: metricStyle.color }}>
                                  {metric.value}
                                </div>
                              ) : null}
                              {metric.label ? <div className="cs-kpi-lbl">{metric.label}</div> : null}
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                    {card.outcome ? <p className="cs-outcome">{card.outcome}</p> : null}
                    {card.key_outcome ? (
                      <div className="cs-key">
                        <strong>Key outcome:</strong> {card.key_outcome}
                      </div>
                    ) : null}
                  </div>
                  {(card.provider_text || card.cta_text) ? (
                    <div className="cs-foot">
                      {card.provider_text ? <span className="cs-prov">{card.provider_text}</span> : <span />}
                      {card.cta_text ? (
                        <Link href={card.cta_link || '#'} className="cs-lnk">
                          {card.cta_text}
                        </Link>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
