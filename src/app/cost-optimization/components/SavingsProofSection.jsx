const defaultSection = {
  badge_text: 'Real Client Results',
  title: 'Actual savings delivered. Actual numbers.',
  description:
    'Representative Thynkwise FinOps outcomes, anonymised by sector. Every number is structured like a client billing report, not a vague projection.',
  rows: [
    {
      company: 'SaaS Platform - Bengaluru',
      company_detail: '180 employees',
      cloud_provider: 'AWS',
      before_cost: 'Rs. 12.4L',
      after_cost: 'Rs. 8.1L',
      monthly_saving: 'Rs. 4.3L',
      method: 'Rightsizing 48 instances, RI purchase, and idle dev environment cleanup',
      time_to_save: '61 days',
    },
    {
      company: 'NBFC - Mumbai',
      company_detail: 'Rs. 500Cr AUM',
      cloud_provider: 'Azure',
      before_cost: 'Rs. 8.8L',
      after_cost: 'Rs. 5.2L',
      monthly_saving: 'Rs. 3.6L',
      method: 'Azure Hybrid Benefit, Reserved VMs, and storage lifecycle rules',
      time_to_save: '74 days',
    },
    {
      company: 'E-Commerce D2C - Delhi',
      company_detail: 'Rs. 120Cr GMV',
      cloud_provider: 'AWS',
      before_cost: 'Rs. 22.0L',
      after_cost: 'Rs. 14.8L',
      monthly_saving: 'Rs. 7.2L',
      method: 'Savings Plans, auto-scaling policies, CloudFront, and S3 intelligent tiering',
      time_to_save: '88 days',
    },
  ],
  footnote:
    'Figures are representative of client billing report formats. Full case studies can be discussed with enterprise prospects.',
};

function getProviderClass(provider) {
  const value = String(provider || '').toLowerCase();

  if (value.includes('azure')) return 'azure';
  if (value.includes('gcp') || value.includes('google')) return 'gcp';
  return 'aws';
}

export default function SavingsProofSection({ section }) {
  const data = section || defaultSection;
  const rows = data.rows?.length ? data.rows : defaultSection.rows;

  return (
    <section className="co-section co-section-cream">
      <div className="container">
        <div className="co-section-header">
          <span className="co-badge co-badge-green rv">
            {data.badge_text || defaultSection.badge_text}
          </span>
          <h2 className="co-section-title rv">{data.title || defaultSection.title}</h2>
          <p className="co-section-subtitle rv">{data.description || defaultSection.description}</p>
        </div>

        <div className="co-proof-table-wrap rv">
          <table className="co-proof-table">
            <thead>
              <tr>
                <th>Client Type</th>
                <th>Cloud</th>
                <th>Before (per month)</th>
                <th>After (per month)</th>
                <th>Monthly Saving</th>
                <th>Primary Method</th>
                <th>Time to Result</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={`${row.company}-${row.cloud_provider}-${index}`}>
                  <td>
                    <span className="co-proof-company">{row.company}</span>
                    {row.company_detail ? (
                      <span className="co-proof-detail">{row.company_detail}</span>
                    ) : null}
                  </td>
                  <td>
                    <span className={`co-proof-cloud ${getProviderClass(row.cloud_provider)}`}>
                      {row.cloud_provider}
                    </span>
                  </td>
                  <td className="co-proof-before">{row.before_cost}</td>
                  <td className="co-proof-after">{row.after_cost}</td>
                  <td className="co-proof-saving">{row.monthly_saving}</td>
                  <td className="co-proof-method">{row.method}</td>
                  <td className="co-proof-time">{row.time_to_save}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {data.footnote ? <p className="co-proof-footnote rv">{data.footnote}</p> : null}
      </div>
    </section>
  );
}
