import styles from './HomeSections.module.css';

const fallbackSection = {
  eyebrow_text: 'Client voice',
  title: 'What our clients say.',
  description: '',
  testimonial_cards: [
    {
      quote:
        'Working with the ThynkWISE team on our Apollo.io implementation has been a truly positive experience. Their deep understanding of the platform helped us unlock the full potential of Apollo for our inside sales and demand generation functions - from data structuring and workflow automation to sequence optimisation and reporting setup.',
      avatar_initials: 'SS',
      author_name: 'Sabarinathan Sampath',
      author_role: 'Deputy Vice President · Celebal Technologies',
    },
    {
      quote:
        'Partnering with ThynkWISE was a seamless experience. They did not just implement a tool - they helped us build a stronger foundation for scalable outreach and data-driven growth. ThynkWISE truly operates as an extension of our team, focused on long-term enablement and measurable impact.',
      avatar_initials: 'DS',
      author_name: 'Divyang Sonchhatra',
      author_role: 'Principal · BizTech Consulting & Solutions',
    },
  ],
};

export default function TestimonialsSection({ section }) {
  const data = section?.testimonial_cards?.length ? section : fallbackSection;

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div>
          <div className={`${styles.sectionLabel} rv`} style={{ color: 'var(--orange)' }}>
            {data?.eyebrow_text}
          </div>
          <h2 className={`${styles.sectionTitle} ${styles.testimonialsTitle} rv d1`}>
            {data?.title}
          </h2>
        </div>

        <div className={styles.testimonialGrid}>
          {(data?.testimonial_cards || []).map((item, index) => (
            <article
              key={`${item?.author_name}-${index}`}
              className={`${styles.testimonialCard} rv ${index % 2 === 1 ? 'd1' : ''}`}
            >
              <p className={styles.testimonialQuote}>"{item?.quote}"</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>{item?.avatar_initials}</div>
                <div>
                  <div className={styles.testimonialName}>{item?.author_name}</div>
                  <div className={styles.testimonialRole}>{item?.author_role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
