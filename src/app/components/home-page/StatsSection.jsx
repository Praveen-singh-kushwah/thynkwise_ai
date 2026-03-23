const stats = [
  {
    value: '200+',
    label: 'Organisations managed\nacross all cloud platforms',
  },
  {
    value: '4 CSPs',
    label: 'Major cloud providers\nunder one managed contract',
  },
  {
    value: '40%+',
    label: 'Average cloud cost reduction\ndelivered to FinOps clients',
  },
  {
    value: '99.9%',
    label: 'Infrastructure uptime SLA\ncommitted in writing',
  },
];

export default function StatsSection({ stats: cmsStats }) {
  const contentStats = cmsStats?.length
    ? cmsStats.map((stat, index) => ({
        value: stat.number || stats[index % stats.length].value,
        label: stat.label || stats[index % stats.length].label,
      }))
    : stats;

  return (
    <section style={{ padding: '60px 0', background: 'var(--dark2)' }}>
      <div className="container">
        <div className="stat-band rv">
          {contentStats.map((stat) => (
            <div key={stat.value} className="sb-item">
              <div className="sb-num">{stat.value}</div>
              <div className="sb-lbl" style={{ whiteSpace: 'pre-line' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
