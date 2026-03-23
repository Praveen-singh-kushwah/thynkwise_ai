import Link from 'next/link';

export default function FinalCtaSection({ cta }) {
  return (
    <section className="cy-final-cta">
      <div className="container">
        <div className="rv" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <span className="badge bw">No Obligation Assessment</span>
        </div>
        <h2 className="cy-final-title rv">
          {cta?.title ? (
            cta.title
          ) : (
            <>
              Know Where You&apos;re Exposed.
              <br />
              Before the Attackers Do.
            </>
          )}
        </h2>
        <p className="cy-final-copy rv">
          {cta?.description ||
            'Get a free security posture assessment — current threat exposure, top three remediation priorities, and a clear path to managed protection. Delivered in a 45-minute session.'}
        </p>
        <div className="cy-cta-buttons rv">
          <Link href={cta?.primary_cta_link || '/get-assessment'} className="btn btn-red">
            {cta?.primary_cta_text || 'Get Free Security Assessment'}
          </Link>
          <Link href={cta?.secondary_cta_link || '/contact'} className="btn btn-ghost-w">
            {cta?.secondary_cta_text || 'Talk to a Security Specialist'}
          </Link>
        </div>
        <p className="cy-cta-note rv">
          No commitment required {'\u00B7'} Results in 2 business days {'\u00B7'} All findings kept confidential
        </p>
      </div>
    </section>
  );
}

