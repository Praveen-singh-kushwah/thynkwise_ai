import Link from 'next/link';

const fallbackSection = {
  eyebrow_text: 'Beyond CRM',
  title: 'The system around the platform.',
  description:
    'CRM is the tool. ThynkWISE builds everything around it - the playbook, process, people capability and leadership layer that makes it compound over time.',
  service_cards: [],
};

const fallbackAcademy = {
  eyebrow_text: 'ThynkWISE Academy',
  title: 'Want your team certified<br>not just trained?',
  description:
    'ThynkWISE Academy delivers structured sales training, CRM certification programmes and sales methodology courses your team can complete on their own schedule, with verified credentials.',
  primary_cta: {
    button_text: 'Visit ThynkWISE Academy ->',
    button_link: 'https://www.thynkwiseacademy.com',
    variant: 'primary',
  },
  secondary_cta: {
    button_text: 'thynkwise.co.in',
    button_link: 'https://www.thynkwise.co.in',
    variant: 'outline',
  },
  academy_stats: [
    { label: 'Sales methodology courses' },
    { label: 'CRM certifications' },
    { label: 'GEMS-based curriculum' },
    { label: 'On-demand · self-paced' },
  ],
};

function isExternalLink(url = '') {
  return /^https?:\/\//.test(url) || url.startsWith('mailto:') || url.startsWith('tel:');
}

function AcademyAction({ action, tone = 'primary' }) {
  if (!action?.button_text || !action?.button_link) {
    return null;
  }

  const className = tone === 'primary' ? 'sc-academy-primary' : 'sc-academy-secondary';

  if (isExternalLink(action.button_link)) {
    return (
      <a href={action.button_link} className={className} target="_blank" rel="noreferrer">
        {action.button_text}
      </a>
    );
  }

  return (
    <Link href={action.button_link} className={className}>
      {action.button_text}
    </Link>
  );
}

export default function BeyondCrmSection({ section, academy }) {
  const data = section?.title ? section : fallbackSection;
  const academyData = academy?.title ? academy : fallbackAcademy;
  const serviceCards = data?.service_cards || [];
  const academyStats = academyData?.academy_stats || [];

  return (
    <section className="sc-section-alt">
      <div className="container">
        {data?.eyebrow_text ? <div className="sc-label rv">{data.eyebrow_text}</div> : null}
        {data?.title ? <h2 className="sc-title rv d1">{data.title}</h2> : null}
        {data?.description ? <p className="sc-subtitle rv d2">{data.description}</p> : null}

        {serviceCards.length ? (
          <div className="sc-service-grid">
            {serviceCards.map((card, index) => (
              <article className={`sc-service-card rv d${index % 3}`} key={`${card?.title}-${index}`}>
                {card?.title ? <h3>{card.title}</h3> : null}
                {card?.description ? <p>{card.description}</p> : null}
              </article>
            ))}
          </div>
        ) : null}

        <div className="sc-academy-banner rv">
          <div className="sc-academy-inner">
            <div>
              {academyData?.eyebrow_text ? (
                <div className="sc-academy-pill">{academyData.eyebrow_text}</div>
              ) : null}
              {academyData?.title ? (
                <h3 dangerouslySetInnerHTML={{ __html: academyData.title }} />
              ) : null}
              {academyData?.description ? <p>{academyData.description}</p> : null}
              <div className="sc-academy-actions">
                <AcademyAction action={academyData?.primary_cta} tone="primary" />
                <AcademyAction action={academyData?.secondary_cta} tone="secondary" />
              </div>
            </div>

            {academyStats.length ? (
              <div className="sc-academy-stats">
                {academyStats.map((item, index) => (
                  <div className="sc-academy-stat" key={`${item?.label}-${index}`}>
                    <span>{index + 1}</span>
                    <p>{item?.label}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
