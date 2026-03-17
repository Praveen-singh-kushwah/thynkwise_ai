const stats = [
  {
    value: '200+',
    label: (
      <>
        Organisations managed
        <br />
        across all cloud platforms
      </>
    ),
  },
  {
    value: '4 CSPs',
    label: (
      <>
        Major cloud providers
        <br />
        under one managed contract
      </>
    ),
  },
  {
    value: '40%+',
    label: (
      <>
        Average cloud cost reduction
        <br />
        delivered to FinOps clients
      </>
    ),
  },
  {
    value: '99.9%',
    label: (
      <>
        Infrastructure uptime SLA
        <br />
        committed in writing
      </>
    ),
  },
];

export default function StatsSection() {
  return (
    <section style={{ padding: '60px 0', background: 'var(--dark2)' }}>
      <div className="container">
        <div className="stat-band rv">
          {stats.map((stat) => (
            <div key={stat.value} className="sb-item">
              <div className="sb-num">{stat.value}</div>
              <div className="sb-lbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
