import Link from 'next/link';

export default function StickyBar({ show }) {
  return (
    <div className={`cy-sticky-cta${show ? ' show' : ''}`}>
      <p className="cy-sticky-copy">
        {'\u{1F512}'} SOC-as-a-Service {'\u00B7'} Managed XDR {'\u00B7'} VAPT {'\u00B7'}
        GRC {'\u00B7'} 24/7 Coverage
      </p>
      <Link
        href="/get-assessment"
        className="btn btn-orange"
        style={{ padding: '8px 18px', fontSize: '0.78rem', flexShrink: 0 }}
      >
        Free Assessment {'\u2192'}
      </Link>
    </div>
  );
}
