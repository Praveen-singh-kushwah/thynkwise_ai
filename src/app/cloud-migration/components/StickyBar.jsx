import Link from 'next/link';

export default function StickyBar({ show }) {
  return (
    <div className={`sticky-bar${show ? ' show' : ''}`}>
      <p>
        {'\u{1F680}'} Expert Migration Services {'\u00B7'} Zero Downtime{' '}
        {'\u00B7'} 500+ Migrations Delivered
      </p>
      <Link
        href="/get-assessment"
        className="btn btn-primary-ms"
        style={{ padding: '9px 18px', fontSize: '.8rem' }}
      >
        Get Free Migration Assessment {'\u2192'}
      </Link>
    </div>
  );
}
