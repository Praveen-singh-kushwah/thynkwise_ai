const defaultStats = [
  { value: '4+', label: 'Certified hyperscale partnerships globally' },
  { value: '120+', label: 'Cloud-certified team members' },
  { value: '8+', label: 'Cities with active delivery presence' },
  { value: '0', label: 'Data breaches across all managed clients' },
  { value: '$0', label: 'Compliance fines across BFSI clients' },
];

export default function StatsBandSection({ section }) {
  const stats = section?.stat?.length ? section.stat : defaultStats;

  return (
    <section className="trust-band">
      <div className="container">
        <div className="trust-inner">
          {stats.map((item, index) => (
            <div key={`${item.value}-${index}`} className={`trust-item rv d${Math.min(index + 1, 5)}`}>
              <span className="trust-num">{item.value}</span>
              <span className="trust-lbl">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
