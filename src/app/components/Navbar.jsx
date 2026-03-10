'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/managed-services', label: 'Managed Services' },
    { href: '/cloud-migration', label: 'Cloud Migration' },
    { href: '/cybersecurity', label: 'Cybersecurity' },
    { href: '/gpuaas', label: 'GPUaaS' },
    { href: '/bfsi-cloud', label: 'BFSI' },
    { href: '/cost-optimization', label: 'Cost Optimisation' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className={`nav${scrolled ? ' sc' : ''}`} id="mainNav">
      <div className="container">
        <div className="nv">
          <Link href="/" className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 16 16">
                <path d="M8 1L1 5v6l7 4 7-4V5L8 1zm0 1.5l5.5 3.15v5.7L8 14.5l-5.5-3.15V5.65L8 2.5z" opacity=".7" fill="#fff" />
                <path d="M8 4L3.5 6.5v3L8 12l4.5-2.5v-3L8 4z" fill="#fff" />
              </svg>
            </div>
            Thynk<span className="or">wise</span>
          </Link>

          <ul className="navlinks">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={pathname === href ? 'active' : ''}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-acts">
            <Link href="/book-demo" className="btn btn-ghost-dark">Book Demo</Link>
            <Link href="/get-assessment" className="btn btn-orange">Free Assessment</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}