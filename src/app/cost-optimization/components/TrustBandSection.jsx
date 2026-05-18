const defaultSection = {
  stats: [
    { value: '32%', label: 'Average cloud waste in Indian mid-market', tone: 'green' },
    { value: '20%', label: 'Target minimum saving on managed FinOps plans', tone: 'green' },
    { value: '7 days', label: 'Free audit delivery turnaround', tone: 'orange' },
    { value: 'Rs. 0', label: 'Cost for initial audit', tone: 'green' },
    {
      value: 'Rs. 38L',
      label: 'Annual saving opportunity per Rs. 10L/month spend',
      tone: 'green',
    },
  ],
};

export default function TrustBandSection({ section }) {
  const data = section || defaultSection;
  const stats = data.stats?.length ? data.stats : defaultSection.stats;

  return (
    <section className="co-trust-band">
      <div className="container">
        <div className="co-trust-inner">
          {stats.map((stat, index) => (
            <div key={`${stat.value}-${stat.label}-${index}`} className={`co-trust-item rv d${Math.min(index + 1, 5)}`}>
              <span className={stat.tone === 'orange' ? 'orange' : ''}>{stat.value}</span>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
