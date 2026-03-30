'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

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
    <nav className={`nav${scrolled ? ' sc' : ''}${mobileOpen ? ' nav-open' : ''}`} id="mainNav">
      <div className="container">
        <div className="nv">
          <Link href="/" className="logo logo-brand" aria-label="Thynkwise home">
            <Image
              src="/logo.png"
              alt="Thynkwise"
              width={176}
              height={44}
              className="logo-image"
              priority
            />
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

          <button
            type="button"
            className={`nav-toggle${mobileOpen ? ' open' : ''}`}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobileNav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-nav${mobileOpen ? ' open' : ''}`} id="mobileNav">
          <ul className="mobile-nav-links">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={pathname === href ? 'active' : ''}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-acts">
            <Link href="/book-demo" className="btn btn-ghost-dark">Book Demo</Link>
            <Link href="/get-assessment" className="btn btn-orange">Free Assessment</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
