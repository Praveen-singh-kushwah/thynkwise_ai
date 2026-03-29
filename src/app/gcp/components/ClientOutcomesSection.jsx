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

const defaultSection = {
  eyebrow: 'Client Outcomes',
  title: 'GCP results that Indian<br>organisations actually achieved',
  description:
    'Real production outcomes from Thynkwise GCP deployments - not benchmarks, not projections.',
  case_study_cards: [
    {
      icon: '🤖',
      industry: 'Fintech SaaS · Bengaluru',
      organization_name: 'Lending Analytics Platform',
      challenge_quote:
        '"Our ML models took 8 hours to retrain. By the time predictions updated, the market data they were trained on was stale."',
      metric_value: '94%',
      metric_label: 'Model Retraining Time Reduction',
      description:
        'Migrated ML pipeline from on-premise Python scripts to Vertex AI Pipelines. Training time dropped from 8 hours to 28 minutes. Model serving via Vertex AI Endpoints - automatic scaling to zero between inference bursts. Credit scoring latency reduced from 4 seconds to 340ms.',
    },
    {
      icon: '📊',
      industry: 'Retail Enterprise · Delhi NCR',
      organization_name: 'Omnichannel Retailer',
      challenge_quote:
        "\"Our BI reports ran overnight on SQL Server. By morning, decisions were made on yesterday's data and last night's reports.\"",
      metric_value: 'Real-time',
      metric_label: 'Analytics from 12-hour Batch Delay',
      description:
        'Built a streaming analytics platform on BigQuery with Dataflow ingestion from 340 POS terminals and 3 e-commerce channels. Business dashboards on Looker Studio refresh every 90 seconds. Total infrastructure cost 52% lower than the SQL Server estate it replaced.',
    },
    {
      icon: '🚀',
      industry: 'B2B SaaS Startup · Pune',
      organization_name: 'HR Automation Platform',
      challenge_quote:
        "\"We couldn't afford AWS at our burn rate. We needed enterprise-grade infrastructure on a seed-stage budget.\"",
      metric_value: '$150K',
      metric_label: 'Google for Startups Credits Activated',
      description:
        'Thynkwise activated $150K in GFS credits for the platform\'s first 18 months. GKE Autopilot for the SaaS backend, Firebase for mobile, and Vertex AI for document processing. Zero infrastructure spend in Year 1 - entire engineering budget directed at product development.',
    },
  ],
};

function getHeaderClass(index) {
  if (index === 1) {
    return ' data';
  }

  if (index === 2) {
    return ' start';
  }

  return ' ai';
}

export default function ClientOutcomesSection({ section }) {
  const eyebrow = section?.eyebrow || defaultSection.eyebrow;
  const titleHtml = unwrapRichText(section?.title || defaultSection.title, ['h1', 'h2', 'h3', 'p', 'div']);
  const description = section?.description || defaultSection.description;
  const cards = section?.case_study_cards?.length ? section.case_study_cards : defaultSection.case_study_cards;

  return (
    <section className="ps ps-cream">
      <div className="container">
        <span className="sec-label rv">{eyebrow}</span>
        <h2 className="sec-title rv d1" dangerouslySetInnerHTML={{ __html: titleHtml }} />
        <p className="sec-sub rv d2">{description}</p>
        <div className="case-grid rv d2">
          {cards.map((card, index) => {
            const fallback = defaultSection.case_study_cards[index % defaultSection.case_study_cards.length];

            return (
              <div key={card.id || `${card.organization_name}-${index}`} className="case-card">
                <div className={`case-header${getHeaderClass(index)}`}>
                  <div className="case-icon">{card.icon || fallback.icon}</div>
                  <div>
                    <div className="case-industry">{card.industry}</div>
                    <div className="case-org">{card.organization_name}</div>
                  </div>
                </div>
                <div className="case-body">
                  <p className="case-challenge">{card.challenge_quote}</p>
                  <div className="case-metric">{card.metric_value}</div>
                  <div className="case-result">{card.metric_label}</div>
                  <p>{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
