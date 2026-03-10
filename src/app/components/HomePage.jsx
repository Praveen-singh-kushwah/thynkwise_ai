'use client';
import { useState } from 'react';
import Link from 'next/link';
import useScrollReveal from './useScrollReveal';

/* ─── FAQ data ─── */
const faqs = [
  {
    q: 'What is Thynkwise?',
    a: 'Thynkwise is a managed cloud and technology services company that resells and manages AWS, Microsoft Azure, Google Cloud, and Indian sovereign cloud platforms. We provide cloud migration, cybersecurity, GPU-as-a-Service, FinOps, and 24/7 managed infrastructure under one SLA.',
  },
  {
    q: 'Which cloud providers does Thynkwise support?',
    a: 'Thynkwise supports all major cloud platforms — Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and Indian sovereign clouds including ESDS, Yotta, CtrlS, and Sify Technologies.',
  },
  {
    q: 'What makes Thynkwise different from other cloud resellers?',
    a: 'Thynkwise combines multi-cloud expertise with security-first operations and hardware-agnostic GPU infrastructure. Clients get a named account team, contractual SLAs, and consolidated billing across all cloud providers — not just licence reselling.',
  },
  {
    q: 'Does Thynkwise offer GPU cloud computing?',
    a: 'Yes. Thynkwise provides GPU-as-a-Service covering NVIDIA Blackwell, Hopper, Ada Lovelace, AMD Instinct, and Intel Gaudi — delivered via bare metal, VMs, Kubernetes clusters, or on-premise deployment.',
  },
  {
    q: 'Does Thynkwise provide cybersecurity services?',
    a: 'Yes. Thynkwise offers SOC-as-a-Service, Managed XDR, VAPT, IAM/PAM, DLP, GRC, Cloud Security Posture Management, and Dark Web Monitoring — all under contractual response SLAs.',
  },
];

export default function HomePage() {
  useScrollReveal();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow">
          <div className="glow1" />
          <div className="glow2" />
        </div>
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              {/* Pills */}
              <div className="hero-pills rv">
                <div className="hp"><div className="hp-dot" style={{ background: '#4ade80' }} /><span className="hp-txt">AWS · Azure · Google Cloud</span></div>
                <div className="hp"><div className="hp-dot" style={{ background: 'var(--orange)' }} /><span className="hp-txt">Managed 24/7</span></div>
                <div className="hp"><div className="hp-dot" style={{ background: '#818cf8' }} /><span className="hp-txt">GPUaaS · Cybersecurity</span></div>
              </div>

              <h1 className="rv d1">
                Cloud, Security &amp;<br />
                <span className="c-blue">GPU Infrastructure.</span><br />
                <span className="c-orange">Managed.</span>
              </h1>

              <p className="hero-sub rv d2">
                Thynkwise is your single technology partner for <strong>cloud migration</strong>, <strong>managed services</strong>, <strong>cybersecurity</strong>, and <strong>GPU compute</strong> — across AWS, Azure, Google Cloud, and sovereign cloud providers. One team. One accountability model.
              </p>

              <div className="hero-acts rv d3">
                <Link href="/get-assessment" className="btn btn-orange">Get Free Cloud Assessment →</Link>
                <Link href="/book-demo" className="btn btn-ghost-w">Talk to a Cloud Expert</Link>
              </div>

              {/* Partner strip */}
              <div className="hero-partners rv d4">
                <span className="hp-label">Partners</span>
                <div className="partner-strip">
                  <Link href="/aws" className="ps-badge"><div className="ps-dot" style={{ background: '#f90' }} />AWS Advanced Partner</Link>
                  <Link href="/azure" className="ps-badge"><div className="ps-dot" style={{ background: '#0078d4' }} />Microsoft Azure</Link>
                  <Link href="/gcp" className="ps-badge"><div className="ps-dot" style={{ background: '#4285f4' }} />Google Cloud</Link>
                  <Link href="/indian-csps" className="ps-badge"><div className="ps-dot" style={{ background: '#00968A' }} />Sovereign Cloud</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VALUE STRIP ═══ */}
      <div className="val-strip">
        <div className="container" style={{ padding: 0 }}>
          <div className="val-grid">
            <div className="val-item">
              <div className="val-ico" style={{ background: 'rgba(58,89,168,0.08)' }}>🔀</div>
              <div><h3>Multi-Cloud, No Lock-In</h3><p>Architect across AWS, Azure, GCP, and sovereign cloud. Right tool, right workload.</p></div>
            </div>
            <div className="val-item">
              <div className="val-ico" style={{ background: 'rgba(246,136,31,0.08)' }}>🛡️</div>
              <div><h3>Security Built In</h3><p>Managed SOC, VAPT, GRC, and IAM — not bolted on after a breach.</p></div>
            </div>
            <div className="val-item">
              <div className="val-ico" style={{ background: 'rgba(22,163,74,0.08)' }}>⚙️</div>
              <div><h3>Fully Managed Operations</h3><p>24/7 infrastructure monitoring, patching, incident response, and optimisation.</p></div>
            </div>
            <div className="val-item">
              <div className="val-ico" style={{ background: 'rgba(168,85,247,0.08)' }}>🤝</div>
              <div><h3>Named Account Ownership</h3><p>A dedicated cloud architect and account manager — not a ticket queue.</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SERVICES ═══ */}
      <section className="sec sec-lt">
        <div className="container">
          <div className="sec-ey rv"><span className="badge badge-blue">Core Services</span></div>
          <h2 className="sec-ti rv">Everything You Need. One Partner.</h2>
          <p className="sec-sub rv">From first cloud migration to GPU-accelerated AI workloads — Thynkwise covers the complete technology stack with managed services at every layer.</p>
          <div className="svc-grid">

            <div className="svc-card rv d1" style={{ '--svc-accent': 'var(--blue)' }}>
              <div className="svc-ico" style={{ background: 'rgba(58,89,168,0.08)' }}>☁️</div>
              <span className="svc-tag" style={{ color: 'var(--blue)' }}>Foundation</span>
              <h3>Managed Cloud Services</h3>
              <p>24/7 management of your AWS, Azure, and GCP environments — monitoring, patching, cost optimisation, and incident response under a single SLA.</p>
              <ul className="svc-list">
                <li>Infrastructure monitoring &amp; alerting</li>
                <li>Patch management &amp; hardening</li>
                <li>Reserved Instance &amp; Savings Plans</li>
                <li>FinOps dashboards &amp; reporting</li>
              </ul>
              <Link href="/managed-services" className="svc-link">Explore Managed Services →</Link>
            </div>

            <div className="svc-card rv d2" style={{ '--svc-accent': '#f97316' }}>
              <div className="svc-ico" style={{ background: 'rgba(249,115,22,0.08)' }}>🚀</div>
              <span className="svc-tag" style={{ color: '#f97316' }}>Migration</span>
              <h3>Cloud Migration</h3>
              <p>End-to-end migration from on-premise, co-location, or competing cloud — with zero-downtime strategies and a documented rollback plan for every workload.</p>
              <ul className="svc-list">
                <li>Discovery &amp; portfolio assessment</li>
                <li>Lift-and-shift or re-architecture</li>
                <li>Database migration (Oracle, SQL Server)</li>
                <li>SAP, ERP, and line-of-business apps</li>
              </ul>
              <Link href="/cloud-migration" className="svc-link">Explore Cloud Migration →</Link>
            </div>

            <div className="svc-card rv d3" style={{ '--svc-accent': '#dc2626' }}>
              <div className="svc-ico" style={{ background: 'rgba(220,38,38,0.07)' }}>🔐</div>
              <span className="svc-tag" style={{ color: '#dc2626' }}>Security</span>
              <h3>Managed Cybersecurity</h3>
              <p>SOC as a Service, VAPT, Managed EDR, IAM, GRC, and dark web monitoring — with contractual SLAs and a named security analyst on your account.</p>
              <ul className="svc-list">
                <li>24/7 SOC operations &amp; SIEM management</li>
                <li>VAPT &amp; red team exercises</li>
                <li>ISO 27001 / SOC 2 / DPDP readiness</li>
                <li>DC build &amp; NOC consulting</li>
              </ul>
              <Link href="/cybersecurity" className="svc-link">Explore Cybersecurity →</Link>
            </div>

            <div className="svc-card rv d1" style={{ '--svc-accent': '#7c3aed' }}>
              <div className="svc-ico" style={{ background: 'rgba(124,58,237,0.08)' }}>⚡</div>
              <span className="svc-tag" style={{ color: '#7c3aed' }}>AI Infrastructure</span>
              <h3>GPU as a Service</h3>
              <p>Access NVIDIA Blackwell B200, H200, H100, AMD MI325X, and Intel Gaudi 3 — via bare metal, VMs, Kubernetes clusters, DGX systems, or on-premise deployment.</p>
              <ul className="svc-list">
                <li>All GPU architectures — NVIDIA, AMD, Intel</li>
                <li>Bare metal, VM, container, cluster</li>
                <li>DGX &amp; HGX turnkey systems</li>
                <li>On-premise hardware deployment</li>
              </ul>
              <Link href="/gpuaas" className="svc-link">Explore GPUaaS →</Link>
            </div>

            <div className="svc-card rv d2" style={{ '--svc-accent': '#059669' }}>
              <div className="svc-ico" style={{ background: 'rgba(5,150,105,0.08)' }}>💰</div>
              <span className="svc-tag" style={{ color: '#059669' }}>FinOps</span>
              <h3>Cloud Cost Optimisation</h3>
              <p>Identify overspend, right-size workloads, and implement Reserved Instances and Savings Plans — with a documented cost reduction target before work begins.</p>
              <ul className="svc-list">
                <li>Cloud spend audit &amp; waste identification</li>
                <li>Rightsizing &amp; auto-scaling policies</li>
                <li>RI / Savings Plans management</li>
                <li>Continuous FinOps reporting</li>
              </ul>
              <Link href="/cost-optimization" className="svc-link">Explore Cost Optimisation →</Link>
            </div>

            <div className="svc-card rv d3" style={{ '--svc-accent': '#0891b2' }}>
              <div className="svc-ico" style={{ background: 'rgba(8,145,178,0.08)' }}>🏦</div>
              <span className="svc-tag" style={{ color: '#0891b2' }}>Industry</span>
              <h3>BFSI Cloud &amp; Compliance</h3>
              <p>Cloud architecture and managed services purpose-built for banks, NBFCs, insurance companies, and capital markets — with regulatory compliance embedded from day one.</p>
              <ul className="svc-list">
                <li>RBI IT Framework compliance architecture</li>
                <li>Core banking &amp; payment system migration</li>
                <li>Data localisation &amp; sovereignty</li>
                <li>SEBI / IRDAI cloud frameworks</li>
              </ul>
              <Link href="/bfsi-cloud" className="svc-link">Explore BFSI Cloud →</Link>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ CLOUD PROVIDERS ═══ */}
      <section className="sec sec-cream">
        <div className="container">
          <div className="sec-ey rv"><span className="badge badge-orange">Partner Ecosystem</span></div>
          <h2 className="sec-ti rv">Every Major Cloud Platform. One Expert Team.</h2>
          <p className="sec-sub rv">Thynkwise is an authorised reseller and managed services partner across all major cloud providers. We architect without bias — the right cloud for the right workload, every time.</p>
          <div className="cloud-grid">

            <div className="cloud-card rv d1" style={{ '--cc-border': '#f90', '--cc-shadow': 'rgba(255,153,0,0.12)', '--cc-accent': '#f90' }}>
              <div className="cc-logo">
                <svg viewBox="0 0 80 32" fill="none">
                  <text x="0" y="24" fontFamily="Arial Black" fontSize="16" fontWeight="900" fill="#232F3E">aws</text>
                  <rect x="36" y="8" width="44" height="16" rx="8" fill="#f90" opacity=".9" />
                  <text x="40" y="20" fontFamily="Arial" fontSize="8" fill="#fff" fontWeight="700">PARTNER</text>
                </svg>
              </div>
              <div className="cc-name">Amazon Web Services</div>
              <div className="cc-tier" style={{ color: '#f90' }}>Advanced Reseller Partner</div>
              <div className="cc-divider" />
              <ul className="cc-services" style={{ '--cc-accent': '#f90' }}>
                <li>EC2, RDS, S3, Lambda</li>
                <li>EKS, ECS, Fargate</li>
                <li>SageMaker AI/ML</li>
                <li>AWS Security Hub</li>
              </ul>
              <Link href="/aws" className="cc-link" style={{ color: '#f90' }}>Explore AWS Services →</Link>
            </div>

            <div className="cloud-card rv d2" style={{ '--cc-border': '#0078d4', '--cc-shadow': 'rgba(0,120,212,0.12)', '--cc-accent': '#0078d4' }}>
              <div className="cc-logo">
                <svg viewBox="0 0 80 32" fill="none">
                  <text x="0" y="24" fontFamily="Arial Black" fontSize="13" fontWeight="900" fill="#0078d4">Azure</text>
                </svg>
              </div>
              <div className="cc-name">Microsoft Azure</div>
              <div className="cc-tier" style={{ color: '#0078d4' }}>Cloud Solution Provider</div>
              <div className="cc-divider" />
              <ul className="cc-services" style={{ '--cc-accent': '#0078d4' }}>
                <li>Virtual Machines, AKS</li>
                <li>Azure AD &amp; Sentinel SIEM</li>
                <li>Azure OpenAI Service</li>
                <li>M365 &amp; Teams licensing</li>
              </ul>
              <Link href="/azure" className="cc-link" style={{ color: '#0078d4' }}>Explore Azure Services →</Link>
            </div>

            <div className="cloud-card rv d3" style={{ '--cc-border': '#4285f4', '--cc-shadow': 'rgba(66,133,244,0.12)', '--cc-accent': '#4285f4' }}>
              <div className="cc-logo">
                <svg viewBox="0 0 80 32" fill="none">
                  <text x="0" y="22" fontFamily="Arial Black" fontSize="10" fontWeight="900" fill="#4285f4">Google</text>
                  <text x="44" y="22" fontFamily="Arial" fontSize="10" fontWeight="600" fill="#5f6368">Cloud</text>
                </svg>
              </div>
              <div className="cc-name">Google Cloud Platform</div>
              <div className="cc-tier" style={{ color: '#4285f4' }}>GCP Reseller Partner</div>
              <div className="cc-divider" />
              <ul className="cc-services" style={{ '--cc-accent': '#4285f4' }}>
                <li>GKE, Compute Engine</li>
                <li>BigQuery &amp; Dataflow</li>
                <li>Vertex AI &amp; Gemini</li>
                <li>Cloud Armor WAF</li>
              </ul>
              <Link href="/gcp" className="cc-link" style={{ color: '#4285f4' }}>Explore GCP Services →</Link>
            </div>

            <div className="cloud-card rv d4" style={{ '--cc-border': '#00968A', '--cc-shadow': 'rgba(0,150,138,0.12)', '--cc-accent': '#00968A' }}>
              <div className="cc-logo">
                <svg viewBox="0 0 80 32" fill="none">
                  <rect x="0" y="6" width="80" height="20" rx="6" fill="rgba(0,150,138,0.08)" />
                  <text x="8" y="21" fontFamily="Arial" fontSize="10" fontWeight="700" fill="#00968A">Sovereign Cloud</text>
                </svg>
              </div>
              <div className="cc-name">Indian Sovereign Cloud</div>
              <div className="cc-tier" style={{ color: '#00968A' }}>Multi-Provider Partner</div>
              <div className="cc-divider" />
              <ul className="cc-services" style={{ '--cc-accent': '#00968A' }}>
                <li>MeitY-empanelled platforms</li>
                <li>ESDS, Yotta, CtrlS, Sify</li>
                <li>Data residency &amp; sovereignty</li>
                <li>RBI / DPDP compliance</li>
              </ul>
              <Link href="/indian-csps" className="cc-link" style={{ color: '#00968A' }}>Explore Sovereign Cloud →</Link>
            </div>

          </div>
          <p style={{ textAlign: 'center', marginTop: '22px', fontSize: '0.82rem' }}>
            <Link href="/compare" style={{ color: 'var(--blue)', fontWeight: 600 }}>Not sure which cloud? Compare AWS vs Azure vs GCP →</Link>
          </p>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section style={{ padding: '60px 0', background: 'var(--dark2)' }}>
        <div className="container">
          <div className="stat-band rv">
            <div className="sb-item"><div className="sb-num">200+</div><div className="sb-lbl">Organisations managed<br />across all cloud platforms</div></div>
            <div className="sb-item"><div className="sb-num">4 CSPs</div><div className="sb-lbl">Major cloud providers<br />under one managed contract</div></div>
            <div className="sb-item"><div className="sb-num">40%+</div><div className="sb-lbl">Average cloud cost reduction<br />delivered to FinOps clients</div></div>
            <div className="sb-item"><div className="sb-num">99.9%</div><div className="sb-lbl">Infrastructure uptime SLA<br />committed in writing</div></div>
          </div>
        </div>
      </section>

      {/* ═══ WHY THYNKWISE ═══ */}
      <section className="sec sec-dk">
        <div className="container">
          <div className="sec-ey rv"><span className="badge badge-orange">Why Thynkwise</span></div>
          <h2 className="sec-ti rv" style={{ color: '#fff' }}>The Difference a Managed Partner Makes</h2>
          <p className="sec-sub rv">Cloud providers give you infrastructure. Thynkwise gives you infrastructure, operations, security, and a team that treats your cloud like they own it.</p>
          <div className="why-grid">
            {[
              { ico: '🏗️', title: 'Architecture-First', text: 'Every engagement starts with a workload-level architecture review. We design before we deploy — no lift-and-shift that creates bigger problems in the cloud.', d: 'd1' },
              { ico: '👤', title: 'Named Account Team', text: 'A dedicated cloud architect and account manager — not a shared pool or rotating helpdesk. You speak to the person who built your infrastructure.', d: 'd2' },
              { ico: '📊', title: 'Transparent FinOps', text: 'Monthly cost reporting, rightsizing recommendations, and a documented spend reduction plan — not vague "savings" claims with no mechanism behind them.', d: 'd3' },
              { ico: '🔐', title: 'Security Integrated, Not Add-On', text: 'Managed SOC, endpoint protection, and compliance frameworks woven into cloud operations from day one — not sold separately after a security incident.', d: 'd1' },
              { ico: '⚖️', title: 'Vendor-Agnostic Advice', text: 'Thynkwise is certified across AWS, Azure, GCP, and sovereign cloud. We recommend the platform that fits your workload — not the one with the best margin for us.', d: 'd2' },
              { ico: '📋', title: 'Compliance as a Workflow', text: 'RBI, SEBI, DPDP, ISO 27001, SOC 2 — compliance frameworks built into architecture and operations, not retrofitted at audit time under pressure.', d: 'd3' },
            ].map((w) => (
              <div key={w.title} className={`why-card rv ${w.d}`}>
                <span className="why-ico">{w.ico}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="sec sec-lt">
        <div className="container">
          <div className="sec-ey rv"><span className="badge badge-blue">Industries We Serve</span></div>
          <h2 className="sec-ti rv">Built for Complex, Regulated Environments</h2>
          <p className="sec-sub rv">Cloud deployments in regulated industries are not the same as general IT projects. Thynkwise brings sector-specific experience to every engagement.</p>
          <div className="ind-grid">
            {[
              { href: '/bfsi-cloud', ico: '🏦', bg: 'rgba(5,150,105,0.08)', title: 'BFSI', sub: 'RBI, SEBI, IRDAI compliant cloud', d: 'd1' },
              { href: null, ico: '🏥', bg: 'rgba(220,38,38,0.07)', title: 'Healthcare', sub: 'HIPAA, ABDM, HL7 FHIR ready', d: 'd2' },
              { href: null, ico: '🏭', bg: 'rgba(124,58,237,0.08)', title: 'Manufacturing', sub: 'OT-IT convergence, IIoT, ERP cloud', d: 'd3' },
              { href: null, ico: '🛒', bg: 'rgba(8,145,178,0.08)', title: 'E-Commerce', sub: 'High-scale, seasonal burst, CDN', d: 'd4' },
              { href: null, ico: '🏛️', bg: 'rgba(58,89,168,0.08)', title: 'Government & PSU', sub: 'MeitY empanelled, GFR compliant', d: 'd1' },
              { href: null, ico: '🎓', bg: 'rgba(246,136,31,0.08)', title: 'Education', sub: 'LMS, student data, EdTech scale', d: 'd2' },
              { href: null, ico: '📡', bg: 'rgba(22,163,74,0.08)', title: 'Telecom', sub: '5G NF, BSNL/private cloud, RAN', d: 'd3' },
              { href: '/gpuaas', ico: '🤖', bg: 'rgba(168,85,247,0.08)', title: 'AI & Research', sub: 'GPU clusters, LLM training, HPC', d: 'd4' },
            ].map((ind) => {
              const inner = (
                <>
                  <div className="ind-ico" style={{ background: ind.bg }}>{ind.ico}</div>
                  <div><h3>{ind.title}</h3><p>{ind.sub}</p></div>
                </>
              );
              return ind.href
                ? <Link key={ind.title} href={ind.href} className={`ind-card rv ${ind.d}`}>{inner}</Link>
                : <div key={ind.title} className={`ind-card rv ${ind.d}`}>{inner}</div>;
            })}
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDIES ═══ */}
      <section className="sec sec-cream">
        <div className="container">
          <div className="sec-ey rv"><span className="badge badge-blue">Client Outcomes</span></div>
          <h2 className="sec-ti rv">Results That Matter</h2>
          <p className="sec-sub rv">Not anecdotes — documented outcomes with specific numbers, from real client engagements across industries.</p>
          <div className="cs-grid">

            <div className="cs-card rv d1">
              <div className="cs-hd">
                <div className="cs-ico" style={{ background: 'rgba(5,150,105,0.1)' }}>🏦</div>
                <div><div className="cs-ind">BFSI — NBFC</div><div className="cs-co">Mid-Market Lending Platform</div></div>
              </div>
              <div className="cs-body">
                <p className="cs-challenge">"We needed to migrate our core lending system to cloud without a compliance gap. RBI audit was 90 days away."</p>
                <div className="cs-kpis">
                  <div className="cs-kpi"><div className="cs-kpi-n">0</div><div className="cs-kpi-l">RBI audit observations</div></div>
                  <div className="cs-kpi"><div className="cs-kpi-n">34%</div><div className="cs-kpi-l">Infrastructure cost saved</div></div>
                </div>
                <div className="cs-service">AWS Migration · RBI Compliance Architecture</div>
              </div>
            </div>

            <div className="cs-card rv d2">
              <div className="cs-hd">
                <div className="cs-ico" style={{ background: 'rgba(58,89,168,0.08)' }}>🏭</div>
                <div><div className="cs-ind">Manufacturing — Auto Components</div><div className="cs-co">Mid-Size OEM Supplier</div></div>
              </div>
              <div className="cs-body">
                <p className="cs-challenge">"Our Azure spend had grown 3× in 18 months with no visibility. We needed FinOps discipline, not just a bigger budget."</p>
                <div className="cs-kpis">
                  <div className="cs-kpi"><div className="cs-kpi-n">41%</div><div className="cs-kpi-l">Azure spend reduction</div></div>
                  <div className="cs-kpi"><div className="cs-kpi-n">6 wks</div><div className="cs-kpi-l">To full FinOps coverage</div></div>
                </div>
                <div className="cs-service">Azure Managed Services · FinOps · Reserved Instances</div>
              </div>
            </div>

            <div className="cs-card rv d3">
              <div className="cs-hd">
                <div className="cs-ico" style={{ background: 'rgba(124,58,237,0.1)' }}>🤖</div>
                <div><div className="cs-ind">Technology — AI Startup</div><div className="cs-co">Series B SaaS Company</div></div>
              </div>
              <div className="cs-body">
                <p className="cs-challenge">"We needed H100 GPU clusters for LLM training but couldn't justify hyperscaler GPU prices for a 12-month training runway."</p>
                <div className="cs-kpis">
                  <div className="cs-kpi"><div className="cs-kpi-n">52%</div><div className="cs-kpi-l">GPU cost vs hyperscaler</div></div>
                  <div className="cs-kpi"><div className="cs-kpi-n">8 days</div><div className="cs-kpi-l">From PO to first GPU job</div></div>
                </div>
                <div className="cs-service">GPUaaS · H100 Cluster · Managed ML Platform</div>
              </div>
            </div>

          </div>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link href="/about" className="btn btn-ghost">View All Case Studies</Link>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="sec sec-dk">
        <div className="container">
          <div className="sec-ey rv"><span className="badge badge-orange">Client Feedback</span></div>
          <h2 className="sec-ti rv" style={{ color: '#fff' }}>What Our Clients Say</h2>
          <div className="test-grid">
            {[
              { text: "Thynkwise didn't just migrate our workloads — they rebuilt our cloud architecture from scratch before touching anything. That 6-week discovery phase saved us from carrying years of technical debt into the cloud.", initials: 'VK', name: 'V. Kumar', role: 'CTO · Fintech Company', avBg: 'rgba(58,89,168,0.3)', avColor: '#7b9ff5', d: 'd1' },
              { text: "We had a managed services contract with a large SI before. The difference is: with Thynkwise we have a named architect who knows our AWS environment cold. Not a shared helpdesk that reads from tickets.", initials: 'AR', name: 'A. Rathi', role: 'Head of IT · Auto Parts Manufacturer', avBg: 'rgba(246,136,31,0.2)', avColor: 'var(--orange)', d: 'd2' },
              { text: "The cybersecurity team caught a credential stuffing attempt against our API gateway before it became a breach. Having a SOC that understands both cloud architecture and security posture together is genuinely rare.", initials: 'PS', name: 'P. Shah', role: 'CISO · Insurance Technology', avBg: 'rgba(22,163,74,0.2)', avColor: '#4ade80', d: 'd3' },
            ].map((t) => (
              <div key={t.name} className={`test-card rv ${t.d}`}>
                <p className="test-text">{t.text}</p>
                <div className="test-author">
                  <div className="test-av" style={{ background: t.avBg, color: t.avColor }}>{t.initials}</div>
                  <div><div className="test-name">{t.name}</div><div className="test-role">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner rv">
            <span className="badge badge-orange" style={{ marginBottom: '18px', display: 'inline-flex' }}>Let&apos;s Talk →</span>
            <h2>Your cloud should work harder than you do.</h2>
            <p>Book a free cloud assessment. We&apos;ll review your current architecture, identify the top 5 gaps, and give you a written optimisation plan — no commitment required.</p>
            <div className="cta-acts">
              <Link href="/get-assessment" className="btn btn-orange">Get Free Assessment →</Link>
              <Link href="/book-demo" className="btn btn-ghost-w">Schedule a Demo</Link>
            </div>
            <div className="cta-trust">
              <span className="cta-trust-item">AWS · Azure · GCP · Sovereign Cloud</span>
              <span className="cta-trust-item">Managed 24/7</span>
              <span className="cta-trust-item">No lock-in commitment</span>
              <span className="cta-trust-item">Named account team</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="faq-section" aria-label="Frequently Asked Questions">
        <div className="container">
          <div className="section-label">KNOWLEDGE BASE</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">Everything you need to know — answered clearly.</p>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <svg className="faq-arrow" viewBox="0 0 24 24" width="20" height="20">
                    <path fill="none" stroke="currentColor" strokeWidth="2.5" d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                <div className="faq-a"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}