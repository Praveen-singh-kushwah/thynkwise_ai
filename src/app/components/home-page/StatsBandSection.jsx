import styles from './HomeSections.module.css';

const fallbackStats = [
  { metric_value: '50+', metric_label: 'Clients globally' },
  { metric_value: '5x', metric_label: 'Appointment growth' },
  { metric_value: '150%', metric_label: 'Brand awareness lift' },
  { metric_value: '4+', metric_label: 'Years delivering' },
  { metric_value: '7', metric_label: 'Countries served' },
  { metric_value: '100%', metric_label: 'Outcome focused' },
];

export default function StatsBandSection({ section }) {
  const stats = section?.stats?.length ? section.stats : fallbackStats;

  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.statsRow}>
          {stats.map((stat, index) => (
            <div
              key={`${stat?.metric_value}-${stat?.metric_label}-${index}`}
              className={`${styles.statItem} rv`}
            >
              <div className={styles.statValue}>{stat?.metric_value}</div>
              <div className={styles.statLabel}>{stat?.metric_label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
