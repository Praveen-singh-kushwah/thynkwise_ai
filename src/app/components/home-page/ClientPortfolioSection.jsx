import styles from './HomeSections.module.css';

const fallbackSection = {
  eyebrow_text: 'Client portfolio',
  title: 'Clients across India, USA, UK & Middle East.',
  description: 'Results with names attached - not anonymised metrics.',
  client_cards: [
    {
      category_label: 'Sales Consulting',
      client_name: 'Clarion Technologies',
      geography: 'India · Business Consulting',
      description:
        'Apollo.io implementation, sales system revamp, website content strategy. Replaced FreshSales + SalesIntel with a unified platform.',
      metric_value: '5x',
      metric_label: 'appointment growth in 90 days',
    },
    {
      category_label: 'Sales Consulting',
      client_name: 'Celebal Technologies',
      geography: 'India · Data & AI Consulting',
      description:
        'Apollo.io B2B sales implementation, demand generation tech stack, CRM workflow automation for a leading Data & AI consulting firm.',
      metric_value: 'OK',
      metric_label: 'Full demand gen stack delivered',
    },
    {
      category_label: 'Sales Consulting',
      client_name: 'BizTech Consulting',
      geography: 'India · USA · Saudi Arabia · IT Outsourcing',
      description:
        'Apollo.io CRM setup, scalable outreach foundation, and data-driven sales strategy for a fast-growing IT outsourcing consultancy.',
      metric_value: 'OK',
      metric_label: 'Outreach infrastructure live',
    },
    {
      category_label: 'Digital Marketing · Partner-Delivered',
      client_name: 'Barcode Gulf',
      geography: 'Middle East - UAE / KSA · Mobility Solutions',
      description:
        'SEO strategy, GMB optimisation across 5 locations, LinkedIn and Meta campaigns for the UAE and Saudi Arabia market.',
      metric_value: '4x',
      metric_label: 'website traffic in 12 months',
    },
    {
      category_label: 'Digital Marketing · Partner-Delivered',
      client_name: 'DataFortune',
      geography: 'India · USA · Technology Solutions',
      description:
        '360-degree digital marketing - SEO, Google Ads, content strategy, social. 2-year sustained partnership with compounding returns.',
      metric_value: '150%',
      metric_label: 'brand awareness + 40% lead growth',
    },
    {
      category_label: 'Web & Digital · Partner-Delivered',
      client_name: 'SCISPL',
      geography: 'India · Denmark · Product Engineering',
      description:
        'Website revamp, content strategy, social media management, and email marketing for a product engineering firm across India and Europe.',
      metric_value: '150%',
      metric_label: 'brand awareness lift',
    },
  ],
};

export default function ClientPortfolioSection({ section }) {
  const data = section?.client_cards?.length ? section : fallbackSection;

  return (
    <section className={styles.clientPortfolio}>
      <div className="container">
        <div>
          <div className={`${styles.sectionLabel} rv`}>{data?.eyebrow_text}</div>
          <h2 className={`${styles.sectionTitle} rv d1`}>{data?.title}</h2>
          <p className={`${styles.sectionDescription} rv d2`}>{data?.description}</p>
        </div>

        <div className={styles.clientGrid}>
          {(data?.client_cards || []).map((card, index) => (
            <article
              key={`${card?.client_name}-${index}`}
              className={`${styles.clientCard} rv ${index % 3 === 1 ? 'd1' : index % 3 === 2 ? 'd2' : ''}`}
            >
              <div className={styles.clientCategory}>{card?.category_label}</div>
              <div className={styles.clientName}>{card?.client_name}</div>
              <div className={styles.clientGeography}>{card?.geography}</div>
              <p className={styles.clientDescription}>{card?.description}</p>
              <div className={styles.clientMetric}>
                <span className={styles.clientMetricValue}>{card?.metric_value}</span>
                <span className={styles.clientMetricLabel}>{card?.metric_label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
