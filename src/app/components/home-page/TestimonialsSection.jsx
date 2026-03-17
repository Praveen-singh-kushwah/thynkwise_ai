import SectionHeader from './SectionHeader';

const testimonials = [
  {
    text: 'Thynkwise did not just migrate our workloads - they rebuilt our cloud architecture from scratch before touching anything. That 6-week discovery phase saved us from carrying years of technical debt into the cloud.',
    initials: 'VK',
    name: 'V. Kumar',
    role: 'CTO / Fintech Company',
    avatarBg: 'rgba(58,89,168,0.3)',
    avatarColor: '#7b9ff5',
    delay: 'd1',
  },
  {
    text: 'We had a managed services contract with a large SI before. The difference is: with Thynkwise we have a named architect who knows our AWS environment cold. Not a shared helpdesk that reads from tickets.',
    initials: 'AR',
    name: 'A. Rathi',
    role: 'Head of IT / Auto Parts Manufacturer',
    avatarBg: 'rgba(246,136,31,0.2)',
    avatarColor: 'var(--orange)',
    delay: 'd2',
  },
  {
    text: 'The cybersecurity team caught a credential stuffing attempt against our API gateway before it became a breach. Having a SOC that understands both cloud architecture and security posture together is genuinely rare.',
    initials: 'PS',
    name: 'P. Shah',
    role: 'CISO / Insurance Technology',
    avatarBg: 'rgba(22,163,74,0.2)',
    avatarColor: '#4ade80',
    delay: 'd3',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="sec sec-dk">
      <div className="container">
        <SectionHeader
          badge="Client Feedback"
          badgeClassName="badge badge-orange"
          title="What Our Clients Say"
          titleStyle={{ color: '#fff' }}
        />

        <div className="test-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className={`test-card rv ${testimonial.delay}`}>
              <p className="test-text">{testimonial.text}</p>
              <div className="test-author">
                <div
                  className="test-av"
                  style={{
                    background: testimonial.avatarBg,
                    color: testimonial.avatarColor,
                  }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="test-name">{testimonial.name}</div>
                  <div className="test-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
