import Link from 'next/link';

const defaultSection = {
  badge_text: 'The 4 Cost Leaks',
  title: 'Where Indian companies are bleeding cloud cash - and why no one notices.',
  description:
    'Cloud billing is designed to be complex. These four categories account for most recoverable waste in Indian mid-market cloud environments.',
  cards: [
    {
      icon: 'money',
      percentage: '12%',
      title: 'Idle & Zombie Resources',
      description:
        'Stopped instances, unattached disks, forgotten dev clusters, old snapshots, and unused IPs continue charging month after month.',
      example: 'Example: Rs. 1.2L/month on Rs. 10L spend',
      tone: 'red',
    },
    {
      icon: 'box',
      percentage: '9%',
      title: 'Over-Provisioned Instances',
      description:
        'VMs and databases sized for peak load run oversized all month even when utilisation stays low.',
      example: 'Example: Rs. 90K/month on Rs. 10L spend',
      tone: 'yellow',
    },
    {
      icon: 'storage',
      percentage: '6%',
      title: 'Storage & Snapshot Bloat',
      description:
        'Old backups, expensive storage tiers, stale logs, and missing lifecycle policies quietly expand cloud bills.',
      example: 'Example: Rs. 60K/month on Rs. 10L spend',
      tone: 'blue',
    },
    {
      icon: 'ticket',
      percentage: '5%',
      title: 'No Committed Use Discounts',
      description:
        'Predictable workloads keep running on on-demand pricing because reserved capacity was never modelled.',
      example: 'Example: Rs. 50K/month on Rs. 10L spend',
      tone: 'orange',
    },
  ],
  cta_text: 'Find My Waste',
  cta_link: '/get-assessment',
};

const iconMap = {
  money: '$',
  box: '[]',
  storage: 'DB',
  ticket: '%',
};

export default function CostLeaksSection({ section }) {
  const data = section || defaultSection;
  const cards = data.cards?.length ? data.cards : defaultSection.cards;

  return (
    <section className="co-section co-section-cream">
      <div className="container">
        <div className="co-section-header">
          <span className="co-badge co-badge-red rv">{data.badge_text || defaultSection.badge_text}</span>
          <h2 className="co-section-title rv">{data.title || defaultSection.title}</h2>
          <p className="co-section-subtitle rv">{data.description || defaultSection.description}</p>
        </div>

        <div className="co-leak-grid">
          {cards.map((card, index) => (
            <article
              key={`${card.title}-${index}`}
              className={`co-leak-card co-tone-${card.tone || 'green'} rv d${Math.min(index + 1, 4)}`}
            >
              <span className="co-leak-icon">{iconMap[card.icon] || card.icon || '$'}</span>
              <div className="co-leak-percent">{card.percentage}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {card.example ? <span className="co-leak-example">{card.example}</span> : null}
            </article>
          ))}
        </div>

        {data.cta_text && data.cta_link ? (
          <div className="co-section-cta rv">
            <p>
              These leak types often account for recoverable waste without changing application
              code.
            </p>
            <Link href={data.cta_link} className="btn co-btn-primary">
              {data.cta_text} {'\u2192'}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
