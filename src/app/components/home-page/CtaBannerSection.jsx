import Link from 'next/link';

export default function CtaBannerSection() {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-inner rv">
          <span
            className="badge badge-orange"
            style={{ marginBottom: '18px', display: 'inline-flex' }}
          >
            Let&apos;s Talk {'\u2192'}
          </span>
          <h2>Your cloud should work harder than you do.</h2>
          <p>
            Book a free cloud assessment. We&apos;ll review your current
            architecture, identify the top 5 gaps, and give you a written
            optimisation plan - no commitment required.
          </p>
          <div className="cta-acts">
            <Link href="/get-assessment" className="btn btn-orange">
              Get Free Assessment {'\u2192'}
            </Link>
            <Link href="/book-demo" className="btn btn-ghost-w">
              Schedule a Demo
            </Link>
          </div>
          <div className="cta-trust">
            <span className="cta-trust-item">AWS / Azure / GCP / Sovereign Cloud</span>
            <span className="cta-trust-item">Managed 24/7</span>
            <span className="cta-trust-item">No lock-in commitment</span>
            <span className="cta-trust-item">Named account team</span>
          </div>
        </div>
      </div>
    </section>
  );
}
