import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          {/* Brand */}
          <div className="foot-brand">
            <Link href="/" className="logo logo-brand" style={{ marginBottom: '12px', display: 'inline-flex' }} aria-label="Thynkwise home">
              <Image
                src="/logo.png"
                alt="Thynkwise"
                width={188}
                height={47}
                className="logo-image"
              />
            </Link>
            <p>Cloud. Security. GPU. Managed. Your single technology partner for the full infrastructure stack.</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a href="#" className="foot-social">in</a>
              <a href="#" className="foot-social">tw</a>
              <a href="#" className="foot-social">yt</a>
            </div>
          </div>

          {/* Cloud Platforms */}
          <div className="foot-col">
            <h4>Cloud Platforms</h4>
            <ul>
              <li><Link href="/aws">Amazon Web Services</Link></li>
              <li><Link href="/azure">Microsoft Azure</Link></li>
              <li><Link href="/gcp">Google Cloud</Link></li>
              <li><Link href="/indian-csps">Indian Sovereign Cloud</Link></li>
              <li><Link href="/compare">Compare Clouds</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="foot-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/sales-consulting">Sales Consulting</Link></li>
              <li><Link href="/managed-services">Managed Services</Link></li>
              <li><Link href="/cloud-migration">Cloud Migration</Link></li>
              <li><Link href="/cybersecurity">Cybersecurity</Link></li>
              <li><Link href="/gpuaas">GPU as a Service</Link></li>
              <li><Link href="/cost-optimization">Cost Optimisation</Link></li>
              <li><Link href="/bfsi-cloud">BFSI Cloud</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="foot-col">
            <h4>Solutions</h4>
            <ul>
              <li><Link href="/end-to-end-solutions">End-to-End Solutions</Link></li>
              <li><Link href="/bfsi-cloud">BFSI &amp; Compliance</Link></li>
              <li><Link href="/cost-optimization">FinOps &amp; Cost Control</Link></li>
              <li><Link href="/cloud-migration">Data Centre Exit</Link></li>
              <li><Link href="/gpuaas">AI &amp; ML Infrastructure</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Thynkwise</Link></li>
              <li><Link href="/get-assessment">Free Assessment</Link></li>
              <li><Link href="/book-demo">Book a Demo</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginTop: '40px' }}>
          <p style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.25)' }}>© 2025 Thynkwise Technologies Pvt. Ltd. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '7px' }}>
            {['AWS Partner', 'Azure CSP', 'GCP Partner', 'ISO 27001'].map(cert => (
              <span key={cert} className="foot-cert">{cert}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
