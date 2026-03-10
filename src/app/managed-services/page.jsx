'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import useScrollReveal from '../components/useScrollReveal';

/* ─── FAQ data ─── */
const mainFaqs = [
  {
    q: "What exactly does \"fully managed\" mean — what does Thynkwise actually do day-to-day?",
    a: "Thynkwise's 24/7 NOC monitors your entire environment continuously. Day-to-day: we handle all infrastructure alerts, patch deployments, backup verification, performance tuning, database health checks, security event triage, and capacity planning. Monthly: a named account manager conducts a formal review with your team covering uptime, incidents, FinOps savings, and next 30-day plans. You receive a monthly report with every incident documented, every saving quantified, and every recommendation prioritised.",
  },
  {
    q: "What is the typical onboarding timeline? Will there be disruption?",
    a: "Thynkwise's onboarding is structured across 30 days in 5 phases: environment discovery (Week 1), runbook development (Week 1–2), monitoring tool deployment (Week 2–3), FinOps baseline (Week 3), and full go-live with review cadence (Day 30). During onboarding, your existing team continues operating normally — Thynkwise mirrors operations in parallel before taking full ownership. Zero disruption is the goal and the result for every client to date.",
  },
  {
    q: "Can Thynkwise manage multi-cloud environments — AWS + Azure + ESDS simultaneously?",
    a: "Yes — multi-cloud is Thynkwise's core differentiator. We have certified engineers across AWS, Azure, GCP, and all major Indian CSPs (ESDS, Yotta, CtrlS, Sify, E2E, NTT). Most of our clients run 2–3 cloud environments simultaneously. You receive one SLA covering all of them, one unified monthly invoice, and one escalation path. No inter-cloud blame routing — we own the outcome regardless of which platform has the issue.",
  },
  {
    q: "How does the FinOps optimisation work and how much can we realistically save?",
    a: "Thynkwise FinOps runs continuously — not as a one-time exercise. Our tools identify right-sizing opportunities (oversized instances), idle resources (stopped instances still incurring storage costs), reserved instance opportunities (committing to predictable workloads at 40–60% discount), and savings plan optimisation. The typical client saves 25–35% of their cloud bill within 60 days — often more than covering the managed service fee. Savings are documented in monthly reports with before/after comparisons and full cost attribution.",
  },
  {
    q: "What compliance frameworks does Thynkwise support for managed environments?",
    a: "Thynkwise configures and maintains compliance for: DPDP Act 2023 (data processing governance), RBI data localisation (BFSI entities), SEBI CSCRF (capital markets), IRDAI cloud guidelines (insurers), CERT-In mandates (incident reporting, VPN logging), MeITY empanelment standards (government entities), ISO 27001 (information security management), PCI-DSS (payment card environments), and SOC 2 Type II readiness. Compliance is built into the managed architecture — not audited retrospectively.",
  },
];

const aeoFaqs = [
  {
    q: "What are managed cloud services?",
    a: "Managed cloud services are ongoing operations where a provider like Thynkwise monitors, maintains, and optimises your cloud infrastructure on your behalf — covering 24/7 alerting, patch management, backup, disaster recovery, cost optimisation, and security compliance.",
  },
  {
    q: "What does Thynkwise include in managed services?",
    a: "Thynkwise managed services cover infrastructure management (servers, networking, storage), application management (performance, deployment, CI/CD), cloud operations (cost, scaling, compliance), 24/7 monitoring, backup and DR, patch management, and a named account team.",
  },
  {
    q: "What SLA does Thynkwise offer for managed services?",
    a: "Thynkwise provides contractual SLAs with 99.9% uptime guarantee, defined response times (P1 critical: under 15 minutes), and named account ownership — not generic shared support queues.",
  },
  {
    q: "Does Thynkwise provide on-premise managed services?",
    a: "Yes. Thynkwise manages on-premise and hybrid infrastructure alongside cloud — covering VMware, Hyper-V, bare metal, and private cloud environments integrated into a unified monitoring and operations platform.",
  },
];

/* WhatsApp SVG path */
const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

export default function ManagedServicesPage() {
  useScrollReveal();
  const [openMain, setOpenMain] = useState(null);
  const [openAeo, setOpenAeo] = useState(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero-ms">
        <div className="ms-glow ms-glow1" />
        <div className="ms-glow ms-glow2" />
        <div className="container">
          <div className="hero-ms-inner">
            <div className="hero-ms-grid">

              {/* LEFT */}
              <div>
                <div className="sla-row rv">
                  <div className="sla-pill"><div className="sla-dot-anim" /><span className="sla-txt">99.95% UPTIME SLA</span></div>
                  <div className="sla-pill"><div className="sla-dot-anim" /><span className="sla-txt">24/7 IST NOC</span></div>
                  <div className="sla-pill"><div className="sla-dot-anim" /><span className="sla-txt">FINOPS INCLUDED</span></div>
                </div>
                <h1 className="rv d1">Your Infrastructure.<br /><span>Fully Managed.</span><br />Zero Surprises.</h1>
                <p className="hero-ms-sub rv d2">Infrastructure, applications, databases, network, security — all managed under one SLA. Thynkwise handles the entire stack across AWS, Azure, GCP, and Indian CSPs, locally billed with a named account manager for every client.</p>
                <div className="hero-ms-acts rv d3">
                  <Link href="/get-assessment" className="btn btn-primary-ms">Get Managed Services Assessment →</Link>
                  <Link href="/book-demo" className="btn btn-ghost-w">Talk to an Expert</Link>
                </div>
                <div className="hero-ms-stats rv d4">
                  <div className="hs-item"><span className="n">200+</span><span className="l">Organisations managed</span></div>
                  <div className="hs-item"><span className="n">99.95%</span><span className="l">Avg uptime delivered</span></div>
                  <div className="hs-item"><span className="n">24/7</span><span className="l">24/7 support, all plans</span></div>
                  <div className="hs-item"><span className="n">30%</span><span className="l">Avg FinOps savings</span></div>
                </div>
              </div>

              {/* RIGHT — NOC Panel */}
              <div className="rv d2">
                <div className="hero-panel">
                  <div className="hp-head">
                    <div className="hp-title">Thynkwise NOC — Live Metrics</div>
                    <div className="hp-live"><div className="hp-live-dot" />Live</div>
                  </div>
                  <div className="met-grid">
                    <div className="met g"><span className="met-val">99.97%</span><div className="met-lbl">Platform uptime (30d)</div></div>
                    <div className="met o"><span className="met-val">4.2 min</span><div className="met-lbl">Avg P1 response today</div></div>
                  </div>
                  <div className="met-grid">
                    <div className="met b"><span className="met-val">847</span><div className="met-lbl">Alerts resolved this week</div></div>
                    <div className="met p"><span className="met-val">30%</span><div className="met-lbl">Avg FinOps savings</div></div>
                  </div>
                  <div className="sla-bars">
                    {[
                      { name: 'AWS environments', pct: '99.98%', w: '99.98%' },
                      { name: 'Azure environments', pct: '99.96%', w: '99.96%' },
                      { name: 'GCP environments', pct: '99.95%', w: '99.95%' },
                    ].map(b => (
                      <div key={b.name} className="sla-bar-row">
                        <div className="sla-bar-top"><span className="sla-bar-name">{b.name}</span><span className="sla-bar-pct">{b.pct}</span></div>
                        <div className="sla-track"><div className="sla-fill" style={{ width: b.w }} /></div>
                      </div>
                    ))}
                  </div>
                  <Link href="/get-assessment" className="hp-cta">Get Managed Services Assessment →</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══ THREE PILLARS ═══ */}
      <section className="ps ps-dk">
        <div className="container">
          <div className="sec-ey rv"><span className="badge bw">Managed Services Portfolio</span></div>
          <h2 className="sec-ti rv" style={{ color: '#fff' }}>Three Pillars. Full Coverage.</h2>
          <p className="sec-su rv" style={{ color: 'rgba(255,255,255,0.5)' }}>Thynkwise&apos;s managed services are organised across three disciplines — infrastructure, applications, and cloud — giving you end-to-end accountability under one SLA.</p>
          <div className="pillars-wrap rv d1">
            <div className="pillar">
              <div className="pillar-icon">🏗️</div>
              <div className="pillar-label">Pillar 01</div>
              <div className="pillar-title">Infrastructure<br />Managed Services</div>
              <ul className="pillar-list">
                <li>Server &amp; Storage Management</li>
                <li>Network Management</li>
                <li>Database Administration (DBA)</li>
                <li>Backup &amp; Disaster Recovery</li>
                <li>Capacity Planning &amp; Quality Assurance</li>
                <li>Data Centre Operations</li>
                <li>Hardware Lifecycle Management</li>
              </ul>
            </div>
            <div className="pillar">
              <div className="pillar-icon">⚡</div>
              <div className="pillar-label">Pillar 02</div>
              <div className="pillar-title">Application<br />Managed Services</div>
              <ul className="pillar-list">
                <li>Application Performance Management (APM)</li>
                <li>Incident Management</li>
                <li>Problem &amp; Root Cause Management</li>
                <li>Release &amp; Change Management</li>
                <li>Versioning, Upgrades &amp; Patching</li>
                <li>DevOps Support</li>
                <li>Application Integration &amp; API Management</li>
                <li>Functional &amp; Technical Application Support</li>
              </ul>
            </div>
            <div className="pillar">
              <div className="pillar-icon">☁️</div>
              <div className="pillar-label">Pillar 03</div>
              <div className="pillar-title">Cloud<br />Managed Services</div>
              <ul className="pillar-list">
                <li>Cloud Infrastructure Management</li>
                <li>Cloud Security &amp; Compliance</li>
                <li>Cost Optimisation &amp; Governance (FinOps)</li>
                <li>Cloud Monitoring &amp; Alerting</li>
                <li>Backup &amp; Disaster Recovery</li>
                <li>Cloud Automation &amp; DevOps</li>
                <li>Cloud Migration Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICE CATALOGUE ═══ */}
      <section className="ps ps-c">
        <div className="container">
          <div className="sec-ey rv"><span className="badge bo">Service Catalogue</span></div>
          <h2 className="sec-ti rv">Everything We Manage. In Detail.</h2>
          <p className="sec-su rv">From datacenter infrastructure to Microsoft 365 — Thynkwise manages the full technology stack so your team stays focused on business outcomes, not uptime.</p>
          <div className="cat-grid">
            {[
              { accent: 'var(--blue)', iconBg: 'var(--blue-pale)', icon: '⚙️', title: 'Infrastructure', items: ['Datacenter with Power & Cooling', 'Physical Servers', 'SAN Storage', 'Switches (except L2)', 'Structured Cabling'], d: 'd1' },
              { accent: 'var(--orange)', iconBg: 'var(--orange-pale)', icon: '🗄️', title: 'Database', items: ['Microsoft SQL with Always On', 'Oracle', 'MySQL', 'PostgreSQL', 'MongoDB'], d: 'd2' },
              { accent: 'var(--teal)', iconBg: 'var(--teal-pale)', icon: '🔄', title: 'Migration', items: ['Servers & Service Migrations', 'On-Premise to Cloud', 'Cloud to Cloud', 'Cloud to On-Premise'], d: 'd3' },
              { accent: 'var(--purple)', iconBg: 'var(--purple-pale)', icon: '🌐', title: 'Network', items: ['Network Management for WAN / LAN', 'ISP Link Monitoring', 'SD-WAN Configuration & Support', 'Network Performance Reporting'], d: 'd1' },
              { accent: '#dc2626', iconBg: '#fff1f1', icon: '🔒', title: 'Security', items: ['Endpoint Security', 'Network Security', 'Application Security', 'VAPT & Vulnerability Scanning', 'SIEM & SOC-as-a-Service'], d: 'd2' },
              { accent: '#0078d4', iconBg: '#e6f2ff', icon: '📧', title: 'Microsoft 365', items: ['O365 Product Suite Management', 'Email Management', 'Teams & SharePoint Administration', 'Licence Management & Renewals', 'Security & Compliance Centre'], d: 'd3' },
            ].map(c => (
              <div key={c.title} className={`cat-card rv ${c.d}`} style={{ '--card-accent': c.accent }}>
                <div className="cat-head">
                  <div className="cat-icon" style={{ background: c.iconBg }}>{c.icon}</div>
                  <div className="cat-title">{c.title}</div>
                </div>
                <ul className="cat-list">
                  {c.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY THYNKWISE ═══ */}
      <section className="ps ps-w">
        <div className="container">
          <div className="sec-ey rv"><span className="badge bb">Why Thynkwise</span></div>
          <h2 className="sec-ti rv">What Makes Thynkwise Different</h2>
          <p className="sec-su rv">Any MSP can promise 24/7 support. Here&apos;s what we actually deliver that others don&apos;t.</p>
          <div className="why-grid-ms">
            {[
              { icon: '👤', iconBg: 'var(--orange-pale)', title: 'Named Account Manager', text: "Every client gets a named account manager — not a ticket queue. One person who knows your architecture, your team, and your compliance requirements. Escalation path is a phone call, not a JIRA ticket.", d: 'd1' },
              { icon: '💰', iconBg: 'var(--green-pale)', title: 'FinOps That Pays for Itself', text: "Thynkwise FinOps identifies right-sizing opportunities, reserved instance optimisation, and idle resource elimination. Most clients achieve 25–35% cloud spend reduction within 60 days — often exceeding the managed service fee.", d: 'd2' },
              { icon: '🛡️', iconBg: 'var(--blue-pale)', title: 'Compliance Built In', text: "DPDP Act 2023, RBI data localisation, CERT-In, and ISO 27001 compliance are configured at architecture level — not audited retrospectively. Managed clients pass compliance audits. Not patched after findings.", d: 'd3' },
              { icon: '🔀', iconBg: 'var(--teal-pale)', title: 'Multi-Cloud. One SLA.', text: "AWS, Azure, GCP, ESDS, Yotta, CtrlS — managed together under one SLA, one invoice, one point of contact. No juggling multiple vendor relationships. No inter-cloud blame games when things go wrong.", d: 'd1' },
              { icon: '⚡', iconBg: 'var(--purple-pale)', title: 'SLA-Backed Response Times', text: "P1 Critical: 15-minute response, 4-hour resolution. P2 High: 30-minute response, 8-hour resolution. P3 Medium: 2-hour response, 24-hour resolution. SLAs in writing, penalties for breach, no exceptions.", d: 'd2' },
              { icon: '🇮🇳', iconBg: 'var(--orange-pale)', title: '100% IST-Based Operations', text: "Your NOC is in India. Your engineers speak your language and work your time zone. No routing tickets to an offshore NOC that comes online 5 hours after your P1 alert fires at 2am IST.", d: 'd3' },
            ].map(w => (
              <div key={w.title} className={`why-card-ms rv ${w.d}`}>
                <div className="why-icon-ms" style={{ background: w.iconBg }}>{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="ps ps-c">
        <div className="container">
          <div className="sec-ey rv">
            <span className="badge" style={{ background: 'rgba(0,180,160,0.1)', color: 'var(--teal-dark)', border: '1px solid rgba(0,180,160,0.25)' }}>How We Onboard You</span>
          </div>
          <h2 className="sec-ti rv">From Signed Contract to Fully Managed in 30 Days</h2>
          <p className="sec-su rv">Thynkwise&apos;s onboarding methodology ensures zero disruption to your operations — your managed services engagement is fully operational within 30 days of kick-off.</p>
          <div className="process-steps">
            {[
              { n: '1', name: 'Discovery & Audit', desc: 'Full environment inventory, access provisioning, dependency mapping and baseline performance benchmarks', d: 'd1' },
              { n: '2', name: 'Runbook Development', desc: 'Custom runbooks for every workload. Escalation paths defined. On-call rotation established. SLA thresholds configured', d: 'd2' },
              { n: '3', name: 'Monitoring Setup', desc: 'NOC tooling deployed across all environments. Alert thresholds tuned. Dashboards activated. 24/7 coverage begins', d: 'd3' },
              { n: '4', name: 'FinOps Baseline', desc: 'First cost analysis run. Right-sizing recommendations issued. Reserved instance opportunities identified within 14 days', d: 'd4' },
              { n: '5', name: 'Go Live + Review', desc: 'Full managed services active. Monthly review cadence established with your named account manager and leadership team', d: 'd5' },
            ].map(s => (
              <div key={s.n} className={`ps-step rv ${s.d}`}>
                <div className="ps-num">{s.n}</div>
                <div className="ps-step-name">{s.name}</div>
                <div className="ps-step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ USE CASES BY INDUSTRY ═══ */}
      <section className="ps ps-w">
        <div className="container">
          <div className="sec-ey rv"><span className="badge bo">By Industry</span></div>
          <h2 className="sec-ti rv">Managed Services Across Every Sector</h2>
          <p className="sec-su rv">Each industry has different compliance, uptime, and security requirements. Thynkwise tailors managed services to the specific demands of your sector.</p>
          <div className="uc-grid">
            {[
              { icon: '🏦', title: 'BFSI — Banks, NBFCs & Insurers', text: 'RBI data localisation, SEBI CSCRF, IRDAI mandates — Thynkwise builds compliance into the managed architecture from day one. 24/7 NOC with core banking availability targets. CERT-In reporting automated.', tags: ['RBI Localisation', 'SEBI CSCRF', 'CERT-In', 'CBS Availability'], d: 'd1' },
              { icon: '🏛️', title: 'Government & PSUs', text: 'MeITY-empanelled cloud management, GFR-compliant operations, NIC-standard security posture. Smart city deployments, ministry portals, and citizen service platforms managed with sovereign data guarantees.', tags: ['MeITY', 'GFR Compliant', 'Sovereign Cloud', 'NIC Standards'], d: 'd2' },
              { icon: '🏭', title: 'Manufacturing & SAP', text: 'SAP HANA managed services on Azure, AWS, or ESDS. Production line uptime is non-negotiable — Thynkwise delivers 99.99% availability SLAs for ERP and MES environments with change freeze windows.', tags: ['SAP HANA', 'Azure for SAP', 'MES Availability', 'ERP Support'], d: 'd1' },
              { icon: '🛍️', title: 'E-Commerce & D2C', text: 'Auto-scaling management for peak event traffic. CloudFront and CDN optimisation. Payment gateway uptime monitoring. PCI-DSS compliant managed environment with real-time traffic dashboards.', tags: ['Auto Scaling', 'PCI-DSS', 'CDN Management', 'Peak Events'], d: 'd2' },
            ].map(u => (
              <div key={u.title} className={`uc-card rv ${u.d}`}>
                <div className="uc-icon">{u.icon}</div>
                <div className="uc-body">
                  <h3>{u.title}</h3>
                  <p>{u.text}</p>
                  <div className="uc-tags">{u.tags.map(t => <span key={t} className="uc-tag">{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STAT BAND ═══ */}
      <section className="ps-navy ps" style={{ padding: '52px 0' }}>
        <div className="container">
          <div className="stat-band-ms rv">
            <div className="sb-item-ms"><div className="sb-num-ms">200+</div><div className="sb-lbl-ms">Organisations under<br />Thynkwise management</div></div>
            <div className="sb-item-ms"><div className="sb-num-ms">99.95%</div><div className="sb-lbl-ms">Average uptime delivered<br />across all managed clients</div></div>
            <div className="sb-item-ms"><div className="sb-num-ms">30%</div><div className="sb-lbl-ms">Average FinOps savings<br />within 60 days of go-live</div></div>
            <div className="sb-item-ms"><div className="sb-num-ms">15 min</div><div className="sb-lbl-ms">P1 critical response SLA<br />24/7 IST NOC</div></div>
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDIES ═══ */}
      <section className="ps ps-c">
        <div className="container">
          <div className="sec-ey rv"><span className="badge bo">Case Studies</span></div>
          <h2 className="sec-ti rv">Managed Services. Real Outcomes.</h2>
          <p className="sec-su rv">Three clients who handed Thynkwise their operations — and what happened next.</p>
          <div className="cs-grid-ms">

            <div className="cs-card-ms rv d1">
              <div className="cs-hd-ms" style={{ background: 'linear-gradient(135deg,#0b1f3a,#1a3560)' }}>
                <div className="cs-ico-ms" style={{ color: '#93c5fd' }}>🏦</div>
                <div><div className="cs-ind-ms">BFSI — NBFC</div><div className="cs-co-ms">Pune · 280 Cr AUM</div></div>
              </div>
              <div className="cs-body-ms">
                <p className="cs-quote">&ldquo;We had a 3-person IT team managing 40 servers. Every RBI audit flagged gaps. We needed managed services, not more headcount.&rdquo;</p>
                <div className="cs-kpis-ms">
                  <div className="cs-kpi-ms" style={{ background: 'var(--blue-pale)' }}><div className="cs-kpi-n" style={{ color: 'var(--blue)' }}>99.97%</div><div className="cs-kpi-l">Uptime post-handover</div></div>
                  <div className="cs-kpi-ms" style={{ background: 'var(--orange-pale)' }}><div className="cs-kpi-n" style={{ color: 'var(--orange-dark)' }}>0</div><div className="cs-kpi-l">RBI audit findings</div></div>
                </div>
                <p className="cs-out">38 workloads taken under full management on Azure. RBI data localisation configured in Month 1. IT team redeployed to product development. First clean compliance audit in 3 years.</p>
                <div className="cs-key"><strong>Key outcome:</strong> 41% reduction in IT operational cost. Zero compliance findings in annual RBI audit.</div>
              </div>
              <div className="cs-foot-ms"><span className="cs-prov">Azure · 38 workloads · Full MS</span><Link href="/contact" className="cs-lnk">Discuss →</Link></div>
            </div>

            <div className="cs-card-ms rv d2">
              <div className="cs-hd-ms" style={{ background: 'linear-gradient(135deg,#1a2a0a,#2e4a14)' }}>
                <div className="cs-ico-ms" style={{ color: '#86efac' }}>🛍️</div>
                <div><div className="cs-ind-ms">E-Commerce — D2C</div><div className="cs-co-ms">Bengaluru · 3M orders/month</div></div>
              </div>
              <div className="cs-body-ms">
                <p className="cs-quote">&ldquo;Our in-house team spent 60% of their time firefighting infrastructure incidents. We needed to stop managing servers and start building product.&rdquo;</p>
                <div className="cs-kpis-ms">
                  <div className="cs-kpi-ms" style={{ background: 'var(--green-pale)' }}><div className="cs-kpi-n" style={{ color: 'var(--green)' }}>34%</div><div className="cs-kpi-l">Cloud cost reduction via FinOps</div></div>
                  <div className="cs-kpi-ms" style={{ background: 'var(--orange-pale)' }}><div className="cs-kpi-n" style={{ color: 'var(--orange-dark)' }}>0</div><div className="cs-kpi-l">Sale-event outages in 12 months</div></div>
                </div>
                <p className="cs-out">45 AWS workloads moved to full managed services. Auto-scaling policies tuned for peak traffic events. FinOps delivered 34% cost reduction in Month 2.</p>
                <div className="cs-key"><strong>Key outcome:</strong> 34% AWS spend reduction. Engineering velocity up 2.3x after ops handover to Thynkwise.</div>
              </div>
              <div className="cs-foot-ms"><span className="cs-prov">AWS · 45 workloads · FinOps + MS</span><Link href="/contact" className="cs-lnk">Discuss →</Link></div>
            </div>

            <div className="cs-card-ms rv d3">
              <div className="cs-hd-ms" style={{ background: 'linear-gradient(135deg,#2a1a0a,#5c3a10)' }}>
                <div className="cs-ico-ms" style={{ color: '#fcd34d' }}>🏭</div>
                <div><div className="cs-ind-ms">Manufacturing — Auto OEM</div><div className="cs-co-ms">Pune · SAP Environment</div></div>
              </div>
              <div className="cs-body-ms">
                <p className="cs-quote">&ldquo;SAP HANA on Azure with no managed services partner meant our team was 24/7 on-call for a system they weren&apos;t fully certified to support.&rdquo;</p>
                <div className="cs-kpis-ms">
                  <div className="cs-kpi-ms" style={{ background: '#fef9ec' }}><div className="cs-kpi-n" style={{ color: '#b45309' }}>99.99%</div><div className="cs-kpi-l">SAP uptime in 12 months</div></div>
                  <div className="cs-kpi-ms" style={{ background: 'var(--green-pale)' }}><div className="cs-kpi-n" style={{ color: 'var(--green)' }}>68%</div><div className="cs-kpi-l">Licensing cost reduction</div></div>
                </div>
                <p className="cs-out">SAP HANA on Azure Large Instance taken under full management. Azure Hybrid Benefit applied to all licences. Dedicated SAP Basis engineer assigned. Zero unplanned SAP downtime in 12 months.</p>
                <div className="cs-key"><strong>Key outcome:</strong> 68% licensing saving via Azure Hybrid Benefit. 99.99% SAP uptime. Team on-call eliminated.</div>
              </div>
              <div className="cs-foot-ms"><span className="cs-prov">Azure SAP · Full MS + DBA</span><Link href="/contact" className="cs-lnk">Discuss →</Link></div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ MAIN FAQ ═══ */}
      <section className="ps ps-w">
        <div className="container">
          <div className="sec-ey rv"><span className="badge bb">Common Questions</span></div>
          <h2 className="sec-ti rv">Managed Services — Questions We Hear Every Week</h2>
          <p className="sec-su rv">From CIOs evaluating their first MSP to IT heads looking to switch — here are honest answers.</p>
          <div className="faq-list-ms">
            {mainFaqs.map((faq, i) => (
              <div key={i} className={`faq-item-ms rv d${(i % 5) + 1}${openMain === i ? ' open' : ''}`}>
                <div className="faq-q-ms" onClick={() => setOpenMain(openMain === i ? null : i)}>
                  {faq.q}
                  <span className="faq-arrow-ms">▾</span>
                </div>
                <div className="faq-a-ms"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="final-cta-ms">
        <div className="container">
          <div className="fci rv">
            <span className="badge bw" style={{ marginBottom: '18px', display: 'inline-flex' }}>⚡ Thynkwise Managed Services</span>
            <h2>Stop managing infrastructure.<br />Start building your business.</h2>
            <p>Tell us what you&apos;re running. We&apos;ll tell you how we&apos;d manage it — with a scoped proposal, SLA commitments in writing, and a FinOps savings estimate before you sign anything.</p>
            <div className="fci-acts">
              <Link href="/get-assessment" className="btn btn-primary-ms">Get Free Assessment →</Link>
              <Link href="/book-demo" className="btn btn-ghost-w">Talk to an Expert</Link>
            </div>
            <div style={{ marginTop: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.77rem', color: 'rgba(255,255,255,0.45)' }}>✓ No commitment required</span>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
              <span style={{ fontSize: '0.77rem', color: 'rgba(255,255,255,0.45)' }}>✓ Transparent billing · SLA-backed</span>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.77rem', color: 'rgba(255,255,255,0.45)' }}>💬 WhatsApp: +91 99999 99999</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AEO FAQ (schema.org) ═══ */}
      <section className="faq-section-ms ps" aria-label="Frequently Asked Questions">
        <div className="container">
          <div className="section-label" style={{ textAlign: 'center', fontFamily: 'var(--mono)', fontSize: '0.72rem', letterSpacing: '0.18em', color: 'var(--blue)', textTransform: 'uppercase', marginBottom: '12px' }}>KNOWLEDGE BASE</div>
          <h2 className="section-title" style={{ textAlign: 'center', fontFamily: 'var(--font)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#0a0a0a', marginBottom: '12px' }}>Frequently Asked Questions</h2>
          <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '1rem', marginBottom: '48px' }}>Everything you need to know — answered clearly.</p>
          <div className="faq-list-ms" style={{ maxWidth: '820px' }}>
            {aeoFaqs.map((faq, i) => (
              <div key={i} className={`faq-item-ms${openAeo === i ? ' open' : ''}`}>
                <div className="faq-q-ms" onClick={() => setOpenAeo(openAeo === i ? null : i)}>
                  <span>{faq.q}</span>
                  <svg className="faq-arrow" viewBox="0 0 24 24" width="20" height="20" style={{ flexShrink: 0, color: 'var(--orange)', transition: 'transform 0.3s', transform: openAeo === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <path fill="none" stroke="currentColor" strokeWidth="2.5" d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                <div className="faq-a-ms"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STICKY BAR ═══ */}
      <div className={`sticky-bar${showSticky ? ' show' : ''}`}>
        <p>⚡ Managed Cloud Services · 24/7 IST NOC · 99.95% SLA · 30% FinOps Savings</p>
        <Link href="/get-assessment" className="btn btn-primary-ms" style={{ padding: '9px 18px', fontSize: '0.8rem' }}>Get Free Assessment →</Link>
      </div>

      {/* ═══ WA FLOAT ═══ */}
      <a href="https://wa.me/919999999999" className="wa-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24"><path d={WA_PATH} /></svg>
      </a>
    </>
  );
}