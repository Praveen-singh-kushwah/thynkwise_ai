import Link from 'next/link';

export default function StickyBar({ show }) {
  return (
    <div className={`sticky-bar${show ? ' show' : ''}`}>
      <p>
        {'\u26A1'} Managed Cloud Services {'\u00B7'} 24/7 IST NOC {'\u00B7'} 99.95%
        SLA {'\u00B7'} 30% FinOps Savings
      </p>
      <Link
        href="/get-assessment"
        className="btn btn-primary-ms"
        style={{ padding: '9px 18px', fontSize: '0.8rem' }}
      >
        Get Free Assessment {'\u2192'}
      </Link>
    </div>
  );
}
