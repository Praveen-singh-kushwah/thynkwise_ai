import Link from 'next/link';

export default function FinalCtaSection({ cta }) {
  return (
    <section className="final-cta-cm">
      <div className="container">
        <div className="final-cta-inner rv">
          <span
            className="badge bw"
            style={{ marginBottom: '18px', display: 'inline-flex' }}
          >
            {'\u{1F680}'} Trusted Multi-Cloud Migration Partner
          </span>

          <h2>
            {cta?.title ? (
              cta.title
            ) : (
              <>
                Your Migration Starts with a
                <br />
                Free Assessment. No Obligation.
              </>
            )}
          </h2>

          <p>
            {cta?.description ||
              "Tell us about your current infrastructure. We'll map the right cloud, the right strategy, and the right sequence. In writing. Before any commitment."}
          </p>

          <div className="final-acts">
            <Link href={cta?.primary_cta_link || '/get-assessment'} className="btn btn-white-cta">
              {cta?.primary_cta_text || 'Get Free Migration Assessment'} {'\u2192'}
            </Link>
            <Link href={cta?.secondary_cta_link || '/book-demo'} className="btn btn-ghost-w">
              {cta?.secondary_cta_text || 'Talk to Migration Architect'}
            </Link>
          </div>

          <div
            style={{
              marginTop: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.72)' }}>
              {'\u{1F512}'} Transparent scope / local-currency billing / 30-day hypercare included
            </span>
            <span style={{ color: 'rgba(255,255,255,.25)' }}>|</span>
            <a
              href="https://wa.me/919999999999"
              style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.72)' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {'\u{1F4AC}'} WhatsApp: +91 99999 99999
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
