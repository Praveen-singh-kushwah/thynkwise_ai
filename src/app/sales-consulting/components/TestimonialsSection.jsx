const fallbackSection = {
  eyebrow_text: 'Client Voice',
  title: "Clients who've seen it work.",
  testimonial_cards: [],
};

export default function TestimonialsSection({ section }) {
  const data = section?.title ? section : fallbackSection;
  const cards = data?.testimonial_cards || [];

  return (
    <section className="sc-testimonials">
      <div className="container">
        {data?.eyebrow_text ? <div className="sc-label rv">{data.eyebrow_text}</div> : null}
        {data?.title ? <h2 className="sc-testimonials-title rv d1">{data.title}</h2> : null}

        {cards.length ? (
          <div className="sc-testimonial-grid">
            {cards.map((card, index) => (
              <article className={`sc-testimonial-card rv d${index}`} key={`${card?.author_name}-${index}`}>
                {card?.quote ? <p>"{card.quote}"</p> : null}
                <div className="sc-testimonial-author">
                  <div className="sc-testimonial-avatar">{card?.avatar_initials || 'TW'}</div>
                  <div>
                    {card?.author_name ? <div className="sc-testimonial-name">{card.author_name}</div> : null}
                    {card?.author_role ? <div className="sc-testimonial-role">{card.author_role}</div> : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
