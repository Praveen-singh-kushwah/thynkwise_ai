const defaultSection = {
  badge_text: 'What CTOs Say',
  title: 'The ROI conversations that actually happened.',
  testimonials: [
    {
      rating_label: '5 stars',
      quote:
        'The free audit found Rs. 2.8L/month in idle resources we had not noticed in 14 months. That audit paid for a year of managed services.',
      avatar_initials: 'SM',
      author_name: 'Head of Engineering',
      author_role: 'D2C E-Commerce - Mumbai - AWS',
      tone: 'green',
    },
    {
      rating_label: '5 stars',
      quote:
        'We were on Azure without Azure Hybrid Benefit, paying for Windows Server licences we already owned. Thynkwise fixed the issue and gave budget back to the business.',
      avatar_initials: 'VP',
      author_name: 'VP Technology',
      author_role: 'Insurance Company - Chennai - Azure',
      tone: 'blue',
    },
    {
      rating_label: '5 stars',
      quote:
        'We thought our AWS bill was optimised because our DevOps team had looked at it. The audit found waste in Reserved Instance gaps and over-provisioned RDS instances.',
      avatar_initials: 'CTO',
      author_name: 'CTO',
      author_role: 'SaaS Platform - Bengaluru - AWS',
      tone: 'orange',
    },
  ],
};

function renderStars(label) {
  const value = String(label || '').toLowerCase();
  const match = value.match(/\d+/);
  const count = Math.max(1, Math.min(5, Number(match?.[0]) || 5));

  return '*'.repeat(count);
}

export default function TestimonialsSection({ section }) {
  const data = section || defaultSection;
  const testimonials = data.testimonials?.length
    ? data.testimonials
    : defaultSection.testimonials;

  return (
    <section className="co-section co-section-white">
      <div className="container">
        <div className="co-section-header">
          <span className="co-badge co-badge-green rv">
            {data.badge_text || defaultSection.badge_text}
          </span>
          <h2 className="co-section-title rv">{data.title || defaultSection.title}</h2>
        </div>

        <div className="co-testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.author_name}-${testimonial.author_role}-${index}`}
              className={`co-testimonial-card co-tone-${testimonial.tone || 'green'} rv d${Math.min(index + 1, 4)}`}
            >
              <div className="co-testimonial-stars">{renderStars(testimonial.rating_label)}</div>
              <p className="co-testimonial-quote">"{testimonial.quote}"</p>
              <div className="co-testimonial-author">
                <div className="co-testimonial-avatar">{testimonial.avatar_initials || 'TW'}</div>
                <div>
                  <span className="co-testimonial-name">{testimonial.author_name}</span>
                  <span className="co-testimonial-role">{testimonial.author_role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
