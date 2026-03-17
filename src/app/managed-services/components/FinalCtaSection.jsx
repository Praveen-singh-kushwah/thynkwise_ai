import Link from 'next/link';

const trustItems = [
  { label: '\u2713 No commitment required' },
  { label: '\u2713 Transparent billing / SLA-backed' },
];

export default function FinalCtaSection() {
  return (
    <section className="final-cta-ms">
      <div className="container">
        <div className="fci rv">
          <span
            className="badge bw"
            style={{ marginBottom: '18px', display: 'inline-flex' }}
          >
            {'\u26A1'} Thynkwise Managed Services
          </span>

          <h2>
            Stop managing infrastructure.
            <br />
            Start building your business.
          </h2>

          <p>
            Tell us what you&apos;re running. We&apos;ll tell you how we&apos;d
            manage it - with a scoped proposal, SLA commitments in writing, and
            a FinOps savings estimate before you sign anything.
          </p>

          <div className="fci-acts">
            <Link href="/get-assessment" className="btn btn-primary-ms">
              Get Free Assessment {'\u2192'}
            </Link>
            <Link href="/book-demo" className="btn btn-ghost-w">
              Talk to an Expert
            </Link>
          </div>

          <div
            style={{
              marginTop: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              flexWrap: 'wrap',
            }}
          >
            {trustItems.map((item) => (
              <span
                key={item.label}
                style={{ fontSize: '0.77rem', color: 'rgba(255,255,255,0.45)' }}
              >
                {item.label}
              </span>
            ))}
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.77rem', color: 'rgba(255,255,255,0.45)' }}
            >
              {'\u{1F4AC}'} WhatsApp: +91 99999 99999
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
