'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

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
        </div>
      </div>
    </nav>
  );
}
