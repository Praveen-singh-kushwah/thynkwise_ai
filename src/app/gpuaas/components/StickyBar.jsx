import Link from 'next/link';
import { stickyCopy } from './data';

export default function StickyBar({ show }) {
  return (
    <div className={`gpu-sticky-bar${show ? ' show' : ''}`}>
      <p>{stickyCopy}</p>
      <Link href="/get-assessment" className="btn btn-cyan gpu-sticky-btn">
        Get Assessment {'\u2192'}
      </Link>
    </div>
  );
}
