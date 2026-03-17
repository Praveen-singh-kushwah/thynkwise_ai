import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section className="cy-final-cta">
      <div className="container">
        <span className="badge bw rv cy-final-badge">No Obligation Assessment</span>
        <h2 className="cy-final-title rv">
          Know Where You&apos;re Exposed.
          <br />
          Before the Attackers Do.
        </h2>
        <p className="cy-final-copy rv">
          Get a free security posture assessment {'\u2014'} current threat exposure,
          top three remediation priorities, and a clear path to managed
          protection. Delivered in a 45-minute session.
        </p>
        <div className="cy-cta-buttons rv">
          <Link href="/get-assessment" className="btn btn-red">
            Get Free Security Assessment
          </Link>
          <Link href="/contact" className="btn btn-ghost-w">
            Talk to a Security Specialist
          </Link>
        </div>
        <p className="cy-cta-note rv">
          No commitment required {'\u00B7'} Results in 2 business days {'\u00B7'} All
          findings kept confidential
        </p>
      </div>
    </section>
  );
}
