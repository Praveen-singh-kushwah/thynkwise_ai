'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import useScrollReveal from '../components/useScrollReveal';

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const mainFaqs = [
  {
    q: "What migration services does Thynkwise provide?",
    a: "Thynkwise provides the full spectrum of migration services: Assessment & Consultation for strategy design, Network-level migrations over Internet/IPSec/MPLS/P2P, Data Migration using proven 3rd-party tools, Virtual-to-Virtual migrations using native cloud tooling, Physical-to-Virtual migrations, On-Premise to Private Cloud, and On-Premise to Public Cloud (AWS, Azure, GCP, ESDS). Every engagement is scope-defined with transparent deliverables, local-currency billing, and GST invoices. Contact us for a scoped assessment tailored to your workload portfolio.",
  },
  {
    q: "Can cloud migration be done with zero downtime?",
    a: "Yes — with the right architecture and preparation. Thynkwise uses blue-green deployment for stateless applications, database replication with minimal cutover windows (typically under 1 hour even for production databases), and DNS traffic shifting with instant rollback. Our 0% failure rate across 500+ migrations includes production applications in BFSI, e-commerce, and healthcare — sectors where downtime is measured in lakhs per minute. We also maintain a 30-day hypercare period post-cutover so any issues are caught and resolved before the project closes.",
  },
  {
    q: "How long does cloud migration take for a mid-market company?",
    a: "A mid-market company with 50–200 workloads typically completes migration in 3–6 months using Thynkwise's phased approach. The timeline depends on three factors: workload complexity (databases and SAP take longest), compliance requirements (BFSI migrations add 4–6 weeks for RBI audit preparation), and your team's availability for testing and sign-off. Thynkwise builds the migration timeline into the fixed-price contract — if we run over, that's our problem.",
  },
  {
    q: "What is the ROI of cloud migration?",
    a: "Most Thynkwise mid-market clients recover migration cost within 8–12 months through cloud savings alone. The ROI calculation: 30–40% reduction in infrastructure costs; elimination of hardware refresh capex every 3 years; reduced IT headcount needs (1–3 FTEs can be redeployed); 99.9% uptime SLA vs typical on-premise 97–98% availability. Year 1 ROI is typically 3–4x the migration investment when measured against infrastructure savings, eliminated capex, and productivity gains.",
  },
  {
    q: "Do we need to be DPDP compliant before or after migration?",
    a: "DPDP Act 2023 compliance must be designed into the cloud architecture from Day 1 — retrofitting compliance costs 3–5x more than building it in during migration. Thynkwise's blueprint phase includes a DPDP compliance review that maps your personal data flows, identifies consent management requirements, and configures cloud data residency policies (all data remains in Indian regions). For BFSI clients, we additionally configure RBI data localisation guardrails via Azure Policy or AWS SCPs before any data moves.",
  },
  {
    q: "AWS, Azure, GCP or ESDS — which is right for my workloads?",
    a: "It depends on what you're migrating. AWS is the default choice for most applications in India — broadest service set, two India regions (Mumbai + Hyderabad), and the strongest regional case study library. Azure is the right choice if you're a Microsoft-heavy shop (Windows Server, SQL Server, Active Directory) because Azure Hybrid Benefit saves 40–80% on licensing, or if you're in BFSI where Azure has stronger documented RBI compliance frameworks. Google Cloud wins for AI/ML and data analytics workloads. Thynkwise's free migration assessment gives you a specific recommendation based on your actual workload — not a generic answer.",
  },
];

const aeoFaqs = [
  { q: "What is cloud migration?", a: "Cloud migration is the process of moving applications, data, and infrastructure from on-premise data centres or legacy systems to cloud platforms like AWS, Azure, or Google Cloud. It includes assessment, planning, data migration, application refactoring, and cutover." },
  { q: "How long does a cloud migration take?", a: "Cloud migration timelines vary by complexity. A single application lift-and-shift can take 2–6 weeks. A full enterprise data centre migration typically takes 3–12 months. Thynkwise provides a detailed timeline after the initial discovery assessment." },
  { q: "What is the difference between lift-and-shift and re-platforming?", a: "Lift-and-shift (rehosting) moves workloads to cloud with minimal changes, preserving existing architecture. Re-platforming makes targeted optimisations (e.g., moving to managed databases) without full re-architecture. Re-architecting redesigns applications natively for cloud." },
  { q: "Does Thynkwise migrate databases to cloud?", a: "Yes. Thynkwise migrates Oracle, SQL Server, MySQL, PostgreSQL, MongoDB, and other databases to cloud-native managed services like Amazon RDS, Azure SQL, Cloud SQL, and Aurora — with minimal downtime using CDC and replication strategies." },
  { q: "What is zero-downtime cloud migration?", a: "Zero-downtime migration uses continuous replication and traffic cutover techniques to migrate applications and databases to cloud without service interruption. Thynkwise uses AWS DMS, Azure Database Migration Service, and Google Datastream for zero-downtime migrations." },
];

const industries = [
  { icon: '🏦', name: 'BFSI', sub: 'Banking · Finance · Insurance', cloud: 'Azure Primary', bg: 'linear-gradient(135deg,#1e3a5f,#2d5a8e)', cloudStyle: {}, compliance: 'RBI Data Localisation · DPDP · PCI-DSS · SEBI CSCRF', timeline: '12–24 weeks', cap: 'Pre-audited RBI-compliant landing zones, Azure Policy guardrails, end-to-end encryption in transit and at rest, Core Banking System migration playbooks.' },
  { icon: '🏥', name: 'Healthcare', sub: 'Hospitals · Diagnostics · HealthTech', cloud: 'AWS Primary', bg: 'linear-gradient(135deg,#0d4f3c,#1a7a5e)', cloudStyle: {}, compliance: 'DISHA · DPDP · ABDM Integration', timeline: '8–16 weeks', cap: 'ABDM-integrated cloud environments, patient data encryption, PACS/DICOM workload migration, EMR/HIS database migration with zero data loss.' },
  { icon: '🏛️', name: 'Government & PSU', sub: 'Central · State · Public Sector', cloud: 'ESDS Sovereign', bg: 'linear-gradient(135deg,#3a1f6b,#5e3aab)', cloudStyle: { background: 'rgba(0,201,167,.2)', color: '#00c9a7' }, compliance: 'MeITY Empanelment · GI Cloud · NIC Standards', timeline: '8–14 weeks', cap: 'MeITY-empanelled sovereign cloud, GFR-compliant procurement, STQC-audited infrastructure, 100% data residency in India.' },
  { icon: '🛍️', name: 'E-Commerce & D2C', sub: 'Retail · Marketplace · D2C Brands', cloud: 'AWS Primary', bg: 'linear-gradient(135deg,#5c1a1a,#a03030)', cloudStyle: {}, compliance: 'PCI-DSS · DPDP · Payment Gateway SLAs', timeline: '6–12 weeks', cap: 'Auto Scaling Groups for peak traffic events, CloudFront CDN for sub-2s page loads, ElastiCache for session management, RDS Multi-AZ for payment processing.' },
  { icon: '🏭', name: 'Manufacturing', sub: 'Auto · Pharma · Discrete Mfg', cloud: 'Azure for SAP', bg: 'linear-gradient(135deg,#1a3a5c,#2d6a9f)', cloudStyle: {}, compliance: 'ISO 27001 · GxP (Pharma) · FDA 21 CFR Part 11', timeline: '16–32 weeks', cap: 'SAP HANA migration to Azure, Azure Hybrid Benefit for Windows/SQL licensing, IoT Edge for factory floors, OT/IT network segmentation design.' },
  { icon: '🚀', name: 'Startups & SaaS', sub: 'Series A–C · Product Companies', cloud: 'GCP + AWS Credits', bg: 'linear-gradient(135deg,#1a4a1a,#2e7d32)', cloudStyle: { background: 'rgba(0,201,167,.2)', color: '#00c9a7' }, compliance: 'DPDP · SOC 2 Type II readiness', timeline: '2–6 weeks', cap: 'Google for Startups credits activation, AWS Activate credits, cloud-native architecture from Day 1, Kubernetes on GKE/EKS, CI/CD pipeline setup.' },
  { icon: '📚', name: 'EdTech', sub: 'LMS · Online Learning · Assessments', cloud: 'AWS or GCP', bg: 'linear-gradient(135deg,#3a2a0a,#7a5a10)', cloudStyle: {}, compliance: 'DPDP (minor data) · NEP 2020 guidelines', timeline: '4–10 weeks', cap: 'Live video streaming infrastructure, CDN optimisation, multi-region latency reduction, assessment platform migration, student data privacy architecture.' },
  { icon: '🚛', name: 'Logistics & Supply Chain', sub: '3PL · Fleet · Last-Mile', cloud: 'AWS Primary', bg: 'linear-gradient(135deg,#1a3050,#2a5080)', cloudStyle: {}, compliance: 'DPDP · Motor Vehicles Act data requirements', timeline: '8–14 weeks', cap: 'IoT fleet tracking on AWS IoT Core, real-time shipment visibility, route optimisation ML models, warehouse management system migration.' },
];

const sixRs = [
  { r: 'R1', icon: '🚀', name: 'Rehost', title: 'Lift & Shift', p: 'Move applications to cloud as-is with minimal changes. Fastest and cheapest — but doesn\'t unlock cloud-native benefits. Best for low-complexity workloads under time pressure. Typical savings: 20–30% on infrastructure costs alone.', tag: 'Contact us for scope · 4–8 weeks', d: 'd1' },
  { r: 'R2', icon: '⚙️', name: 'Replatform', title: 'Lift, Tinker & Shift', p: 'Minor optimisations during migration — move from self-managed MySQL to RDS, from bare-metal to managed Kubernetes. Balances speed with modernisation. Most mid-market companies choose this path. Typical infrastructure savings: 30–45%.', tag: 'Timeline: 8–16 weeks', d: 'd2' },
  { r: 'R3', icon: '🔁', name: 'Repurchase', title: 'Drop & Shop', p: 'Replace existing software with a SaaS alternative — move from on-premise CRM to Salesforce, on-premise ERP to SAP S/4 HANA Cloud. Eliminates infrastructure management entirely. Thynkwise handles data migration and integration.', tag: 'Variable · Project-based', d: 'd3' },
  { r: 'R4', icon: '🏗️', name: 'Refactor', title: 'Re-architect', p: 'Redesign applications for cloud-native patterns — microservices, serverless, containers. Highest upfront cost but maximum long-term savings and agility. Required for applications needing massive scale (UPI payment volumes, D2C peak traffic).', tag: 'Timeline: 4–12 months', d: 'd1' },
  { r: 'R5', icon: '🌿', name: 'Retire', title: 'Turn Off', p: "Decommission applications no longer needed. Thynkwise's discovery typically finds 10–20% of an enterprise's workloads can be retired — that's immediate cost savings with zero migration work. The easiest savings you'll achieve in the entire programme.", tag: 'Discovery-driven', d: 'd2' },
  { r: 'R6', icon: '🔒', name: 'Retain', title: 'Keep On-Premise', p: 'Not everything moves to cloud. Highly regulated data, ultra-low-latency manufacturing systems, and mainframes sometimes stay on-premise — connected to cloud via hybrid architecture. Thynkwise designs the hybrid boundary, not just the cloud side.', tag: 'Hybrid architecture', d: 'd3' },
];

export default function CloudMigrationPage() {
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
      <section className="hero-cm">
        <div className="cm-orb cm-orb1" />
        <div className="cm-orb cm-orb2" />
        <div className="container">
          <div className="hero-cm-inner">
            <div className="hero-cm-grid">
              {/* LEFT */}
              <div>
                <div className="hero-kicker rv">
                  <div className="kicker-dot" />
                  <span className="kicker-text">500+ SUCCESSFUL MIGRATIONS</span>
                </div>
                <h1 className="rv d1">Migration Portfolio.</h1>
                <p className="hero-cm-sub rv d2">Migration shouldn&apos;t feel like stepping off a cliff. Thynkwise delivers zero-downtime migrations to AWS, Azure, GCP, and Indian CSPs — locally billed with full compliance. You get certainty, not surprises.</p>
                <div className="hero-cm-acts rv d3">
                  <Link href="/get-assessment" className="btn btn-primary-ms">Get Free Migration Assessment →</Link>
                  <Link href="/book-demo" className="btn btn-ghost-w">Talk to Migration Expert</Link>
                </div>
                <div className="hero-proof rv d4">
                  <div className="hp"><span className="hp-num">500+</span><span className="hp-lbl">Migrations delivered</span></div>
                  <div className="hp"><span className="hp-num">0</span><span className="hp-lbl">Failed migrations</span></div>
                  <div className="hp"><span className="hp-num">30%</span><span className="hp-lbl">Avg cost saving after migration</span></div>
                </div>
              </div>
              {/* RIGHT — Process card */}
              <div className="rv d2">
                <div className="hero-card-cm">
                  <div className="hc-title">Thynkwise Migration Process</div>
                  {[
                    { n: '1', name: 'Discovery & Assessment', sub: 'Current state mapping · dependency analysis · risk register' },
                    { n: '2', name: 'Architecture Blueprint', sub: 'Target state design · cost model · compliance review' },
                    { n: '3', name: 'Phased Migration', sub: 'Wave-by-wave with parallel running · no big-bang cutover' },
                    { n: '4', name: 'Zero-Downtime Cutover', sub: 'DNS traffic shifting · blue-green deployment · under 1hr window' },
                    { n: '5', name: '30-Day Hypercare', sub: '24/7 monitoring · performance tuning · team training' },
                  ].map(s => (
                    <div key={s.n} className="hc-step">
                      <div className="step-num-cm">{s.n}</div>
                      <div><span className="step-name">{s.name}</span><span className="step-sub">{s.sub}</span></div>
                    </div>
                  ))}
                  <div className="hc-guarantee">
                    <span style={{ fontSize: '1.2rem' }}>🛡️</span>
                    <span><strong>Migration Guarantee:</strong> If we miss your go-live date, we refund one month of managed services. No excuses.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUICK ANSWER ═══ */}
      <section className="ps ps-w">
        <div className="container">
          <div className="qa-box rv">
            <div className="qa-label">🎯 Quick Answer — For Those Evaluating Migration Services</div>
            <h2>What does a migration engagement involve, and how long does it take?</h2>
            <p>Migration is a structured process — from <strong>Assessment &amp; Consultation</strong> through to <strong>zero-downtime production cutover</strong> and <strong>30-day hypercare</strong>. Depending on scope, a simple lift-and-shift of 10 workloads takes 4–8 weeks; a mid-market re-platforming of 50–200 workloads takes 3–6 months; enterprise re-architecture with SAP and mainframe takes 6–18 months. Thynkwise handles every type: network-level migrations, data migrations using 3rd-party tools, virtual-to-virtual, physical-to-virtual, on-premise to private cloud, and on-premise to public cloud. Most clients achieve 30%+ infrastructure cost savings within 60 days of go-live.</p>
          </div>
        </div>
      </section>

      {/* ═══ MIGRATION PROCESS + RISKS ═══ */}
      <section className="ps ps-w">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            {/* LEFT — Process */}
            <div>
              <span className="badge bt rv">Step-by-Step Process</span>
              <h2 className="rv d1" style={{ marginTop: '10px' }}>How Thynkwise Migrates 500+ Workloads Without a Single Failure</h2>
              <p className="rv d2" style={{ marginBottom: '28px' }}>Every migration follows a battle-tested playbook. No improvisation, no heroics — systematic execution that your board can track in weekly dashboards.</p>
              <div className="process-wrap rv d3">
                <div className="process-line" />
                {[
                  { week: 'Week 1–2', name: 'Discovery & Dependency Mapping', desc: "Automated discovery tools scan your entire estate — every server, database, application, and network dependency. We find the hidden couplings your team forgot about before they find us mid-migration.", delivs: ['Current state inventory', 'Dependency map', 'Risk register'], dotColor: 'var(--orange)' },
                  { week: 'Week 2–4', name: 'Architecture Blueprint & Business Case', desc: 'Target state architecture design with local currency cost modelling. You know the total 3-year TCO — infrastructure + licensing + operations — before committing a single rupee to migration execution.', delivs: ['Architecture design', 'Local cost model', 'DPDP review'], dotColor: 'var(--blue)' },
                  { week: 'Weeks 4–N', name: 'Phased Wave Migration', desc: 'Workloads migrate in prioritised waves — development first, staging second, production last. Each wave validates the next. Your business continues operating throughout. Zero big-bang cutovers.', delivs: ['Wave planning', 'Parallel running', 'Wave sign-offs'], dotColor: 'var(--orange)' },
                  { week: 'Go-Live Day', name: 'Zero-Downtime Production Cutover', desc: 'DNS traffic shifting with instant rollback capability. Database replication with sub-1-hour cutover windows. We staff a war room with your team for 48 hours post-cutover. Every client has survived this day.', delivs: ['DNS cutover', 'Rollback plan', 'War room'], dotColor: 'var(--teal)' },
                  { week: 'Days 1–30', name: 'Hypercare & Optimisation', desc: "30 days of 24/7 monitoring with immediate response SLA. Performance tuning, FinOps optimisation, and team training. By day 30, your team owns the cloud environment. By day 60, you're saving 30%+ vs before.", delivs: ['24/7 monitoring', 'FinOps tuning', 'Team training'], dotColor: '#a855f7' },
                ].map((s, i) => (
                  <div key={i} className="process-step-cm">
                    <div className="process-dot"><div className="pd-inner" style={{ background: s.dotColor }} /></div>
                    <div className="ps-week">{s.week}</div>
                    <div className="ps-name-cm">{s.name}</div>
                    <p className="ps-desc">{s.desc}</p>
                    <div className="ps-delivs">{s.delivs.map(d => <span key={d} className="ps-deliv">{d}</span>)}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* RIGHT — Risks */}
            <div>
              <span className="badge bo rv">Risk Management</span>
              <h2 className="rv d1" style={{ marginTop: '10px', fontSize: '1.6rem' }}>The Risks Organisations Fear — And How We Eliminate Them</h2>
              <p className="rv d2" style={{ marginBottom: '24px' }}>66% of enterprises cite migration as their #1 cloud challenge. Here&apos;s what they&apos;re afraid of — and what we do about it.</p>
              <div className="risk-grid-cm rv d3" style={{ marginBottom: '24px' }}>
                <div className="risk-card-cm risk">
                  <div className="risk-head"><span className="risk-icon">⚠️</span><span className="risk-title">What Goes Wrong</span></div>
                  <ul className="risk-list-cm">
                    <li>Downtime during production cutover</li>
                    <li>Data loss or corruption mid-migration</li>
                    <li>Hidden dependencies causing app failures</li>
                    <li>Cost blowout from underestimating scope</li>
                    <li>Compliance gaps discovered post-launch</li>
                    <li>Team unprepared to manage new environment</li>
                  </ul>
                </div>
                <div className="risk-card-cm how">
                  <div className="risk-head"><span className="risk-icon">🛡️</span><span className="risk-title">How Thynkwise Eliminates It</span></div>
                  <ul className="risk-list-cm">
                    <li>Blue-green deployment, &lt;1hr window with instant rollback</li>
                    <li>Database replication + checksums before any cutover</li>
                    <li>Automated discovery maps 100% of dependencies</li>
                    <li>Fixed-price contracts — overrun risk is ours, not yours</li>
                    <li>DPDP/RBI compliance review in blueprint phase</li>
                    <li>Embedded 30-day hypercare with runbook handover</li>
                  </ul>
                </div>
              </div>
              <div className="rv" style={{ background: 'var(--teal-pale)', borderRadius: '14px', padding: '20px', border: '1px solid rgba(0,201,167,.22)' }}>
                <p style={{ fontSize: '.85rem', color: 'var(--dark)', fontStyle: 'italic', marginBottom: '8px' }}>&ldquo;We&apos;d had two failed migration attempts before Thynkwise. They discovered 47 undocumented database dependencies our previous vendors missed entirely. Go-live was 36 minutes of downtime.&rdquo;</p>
                <p style={{ fontSize: '.75rem', color: 'var(--teal-dark)', fontWeight: 600 }}>— VP Technology, E-commerce company, Mumbai · 180 workloads migrated to AWS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MIGRATION SERVICE TYPES ═══ */}
      <section className="ps ps-c">
        <div className="container">
          <span className="badge bo sec-ey rv">Migration Service Portfolio</span>
          <h2 className="sec-ti rv">Every Migration Type. One Expert Partner.</h2>
          <p className="sec-su rv">From network-level migrations to full cloud re-architecture — Thynkwise has the tooling, certifications, and playbooks for every workload type, every topology, every risk profile.</p>
          {/* Primary 4 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '18px', marginBottom: '18px' }}>
            {[
              { icon: '🎯', title: 'Assessment & Consultation', p: 'Migration strategy design, dependency mapping, TCO modelling, and risk register. Know what to move, in what order, before a single workload shifts.', tags: ['Discovery tools', 'Architecture blueprint', 'Risk register'], d: 'd1' },
              { icon: '🌐', title: 'Network-Level Migrations', p: 'Migrations over Internet, IPSec VPN, MPLS, and Point-to-Point links. Full network topology design with security and latency requirements met before data moves.', tags: ['IPSec / MPLS', 'P2P circuits', 'SD-WAN'], d: 'd2' },
              { icon: '🔒', title: 'On-Premise to Private Cloud', p: 'Move workloads to dedicated, isolated private cloud environments. Full data sovereignty, compliance-ready, no noisy-neighbour risk. Ideal for BFSI and Government.', tags: ['ESDS Sovereign', 'Azure Stack', 'VMware Cloud'], d: 'd3' },
              { icon: '☁️', title: 'On-Premise to Public Cloud', p: 'Full lift-and-shift or re-platform of on-premise workloads to AWS, Azure, Google Cloud, or ESDS. Phased migration with zero big-bang cutovers.', tags: ['AWS / Azure / GCP', 'ESDS', 'Multi-cloud'], d: 'd4' },
            ].map(c => (
              <div key={c.title} className={`mig-type-card rv ${c.d}`}>
                <div className="mig-type-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.p}</p>
                <div className="mig-type-tags">{c.tags.map(t => <span key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
          {/* Secondary 3 dark */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '18px' }}>
            {[
              { icon: '💾', title: 'Data Migration', p: 'Database migration (MySQL, Oracle, MSSQL, PostgreSQL, MongoDB) using proven 3rd-party tools — AWS DMS, Azure Database Migration Service, Striim, and Qlik. Checksums verified before cutover.', tags: ['AWS DMS', 'Azure DMS', '3rd-party tools', 'Zero data loss'], d: 'd1' },
              { icon: '🔄', title: 'Virtual to Virtual Migration', p: 'VM-to-VM migrations between hypervisors using cloud-native tools. VMware to Hyper-V, Hyper-V to KVM, or cross-cloud VM migrations with live replication and minimal cutover windows.', tags: ['Native tools', 'Live replication', 'Cross-hypervisor'], d: 'd2' },
              { icon: '🖥️', title: 'Physical to Virtual Migration', p: 'P2V conversions of bare-metal servers to virtualised cloud instances using native cloud migration tools — AWS Application Migration Service, Azure Migrate, or Google Migrate. No agents where possible.', tags: ['AWS MGN', 'Azure Migrate', 'Google Migrate'], d: 'd3' },
            ].map(c => (
              <div key={c.title} className={`mig-type-card mig-dark rv ${c.d}`}>
                <div className="mig-type-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.p}</p>
                <div className="mig-type-tags dark">{c.tags.map(t => <span key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6 R's ═══ */}
      <section className="ps ps-c">
        <div className="container">
          <span className="badge bo sec-ey rv">The 6R Migration Framework</span>
          <h2 className="sec-ti rv">Which Migration Strategy Is Right for You?</h2>
          <p className="sec-su rv">Not every workload should be treated the same. Thynkwise&apos;s discovery process identifies the right strategy for each application — before migration begins, not after. Choosing the wrong strategy creates costly rework that delays your go-live and erodes the business case.</p>
          <div className="sixr-grid">
            {sixRs.map(r => (
              <div key={r.r} className={`sixr-card rv ${r.d}`}>
                <div className="sixr-r">{r.r}</div>
                <span className="sixr-icon">{r.icon}</span>
                <div className="sixr-name">{r.name}</div>
                <h3 className="sixr-title">{r.title}</h3>
                <p>{r.p}</p>
                <span className="sixr-tag">{r.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRY MIGRATIONS ═══ */}
      <section className="ps ps-w">
        <div className="container">
          <span className="badge bb sec-ey rv">By Industry</span>
          <h2 className="sec-ti rv">Migration Expertise Across Every Sector</h2>
          <p className="sec-su rv">Every industry has unique compliance requirements, data sensitivity, and uptime constraints. Thynkwise has migrated workloads across 10+ sectors — here&apos;s what matters for each.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '18px' }} className="rv d1">
            {industries.map(ind => (
              <div key={ind.name} className="ind-card">
                <div className="ind-card-head" style={{ background: ind.bg }}>
                  <span className="ind-card-icon">{ind.icon}</span>
                  <div>
                    <div className="ind-card-name">{ind.name}</div>
                    <div className="ind-card-sub">{ind.sub}</div>
                  </div>
                  <span className="ind-card-cloud" style={ind.cloudStyle}>{ind.cloud}</span>
                </div>
                <div className="ind-card-body">
                  <div className="ind-card-comp"><strong>Compliance:</strong> {ind.compliance}</div>
                  <div className="ind-card-timeline">⏱ Typical duration: {ind.timeline}</div>
                  <div className="ind-card-cap">{ind.cap}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUST BAND ═══ */}
      <section className="trust-band">
        <div className="container">
          <div className="trust-inner">
            {[
              { num: '500+', lbl: 'Cloud migrations delivered across India', d: 'd1' },
              { num: '0', lbl: 'Failed production migrations (0% failure rate)', d: 'd2' },
              { num: '8–12', lbl: 'Months to ROI recovery for mid-market clients', d: 'd3' },
              { num: '30%', lbl: 'Average infrastructure cost saving post-migration', d: 'd4' },
            ].map(t => (
              <div key={t.num} className={`trust-item rv ${t.d}`}>
                <span className="trust-num">{t.num}</span>
                <span className="trust-lbl">{t.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDIES ═══ */}
      <section className="ps ps-c">
        <div className="container">
          <span className="badge bo sec-ey rv">Migration Case Studies</span>
          <h2 className="sec-ti rv">Real Migrations. Measurable Results. Every Time.</h2>
          <p className="sec-su rv">Every engagement is documented from discovery to hypercare. Here are three that tell the full story.</p>
          <div className="cs-grid-cm">

            <div className="cs-card-cm rv d1">
              <div className="cs-header-cm" style={{ background: 'linear-gradient(135deg,#1e2a4a,#2d3f6e)' }}>
                <div className="cs-ind-cm" style={{ color: '#93bbff' }}>🏦</div>
                <div>
                  <div className="cs-industry-cm">BFSI — Co-operative Bank</div>
                  <div className="cs-company-cm">Western Maharashtra · 14 Branches</div>
                </div>
              </div>
              <div className="cs-body-cm">
                <p className="cs-challenge">&ldquo;We had 3 physical servers running core banking auxiliary systems. Every month there was a hardware alert. Our IT team was firefighting instead of building.&rdquo;</p>
                <div className="cs-metrics-pair">
                  <div className="cs-metric-box" style={{ background: 'var(--blue-pale)' }}><div className="cs-metric-val" style={{ color: 'var(--blue)' }}>14 wks</div><div className="cs-metric-sub">Full migration timeline</div></div>
                  <div className="cs-metric-box" style={{ background: 'var(--orange-pale)' }}><div className="cs-metric-val" style={{ color: 'var(--orange-dark)' }}>99.97%</div><div className="cs-metric-sub">Uptime post go-live</div></div>
                </div>
                <p className="cs-outcome-cm">Migrated 38 workloads to Azure using a phased P2V approach — physical servers converted to Azure VMs with zero data loss. Azure Policy guardrails configured for RBI data localisation. Compliance audit passed with zero findings. IT team redeployed from maintenance to digital banking features.</p>
                <div className="cs-key-outcome" style={{ background: 'var(--teal-pale)', borderLeft: '3px solid var(--teal)' }}>
                  <div className="cs-key-label" style={{ color: 'var(--teal-dark)' }}>Key outcome</div>
                  <div className="cs-key-text">43% reduction in infrastructure TCO year-on-year. Hardware refresh capex fully eliminated.</div>
                </div>
              </div>
              <div className="cs-footer-cm"><span className="cs-provider-cm">Azure · P2V Migration · 38 workloads</span><Link href="/contact" className="cs-link-cm">Discuss your case →</Link></div>
            </div>

            <div className="cs-card-cm rv d2">
              <div className="cs-header-cm" style={{ background: 'linear-gradient(135deg,#1a3a1a,#2e5c20)' }}>
                <div className="cs-ind-cm" style={{ color: '#86efac' }}>🛍️</div>
                <div>
                  <div className="cs-industry-cm">E-Commerce — D2C Apparel Brand</div>
                  <div className="cs-company-cm">Bengaluru · 3M monthly orders</div>
                </div>
              </div>
              <div className="cs-body-cm">
                <p className="cs-challenge">&ldquo;Our platform would go down during sale events without warning. We lost an entire day of revenue twice. On-premise hardware simply couldn&apos;t scale on demand.&rdquo;</p>
                <div className="cs-metrics-pair">
                  <div className="cs-metric-box" style={{ background: 'var(--teal-pale)' }}><div className="cs-metric-val" style={{ color: 'var(--teal-dark)', fontSize: '1.2rem' }}>4.2s → 1.1s</div><div className="cs-metric-sub">Page load time improvement</div></div>
                  <div className="cs-metric-box" style={{ background: 'var(--orange-pale)' }}><div className="cs-metric-val" style={{ color: 'var(--orange-dark)' }}>340%</div><div className="cs-metric-sub">Peak traffic handled, zero downtime</div></div>
                </div>
                <p className="cs-outcome-cm">Re-platformed 45 workloads from bare-metal to AWS in 8 weeks using AWS Application Migration Service. Auto Scaling Groups configured for variable traffic with pre-warmed capacity plans. CloudFront CDN deployed across all edge locations. First peak sale season post-migration — zero downtime, zero tickets.</p>
                <div className="cs-key-outcome" style={{ background: 'var(--blue-pale)', borderLeft: '3px solid var(--blue)' }}>
                  <div className="cs-key-label" style={{ color: 'var(--blue)' }}>Key outcome</div>
                  <div className="cs-key-text">38% reduction in infrastructure running costs. Cart abandonment dropped 22% due to faster load times.</div>
                </div>
              </div>
              <div className="cs-footer-cm"><span className="cs-provider-cm">AWS · P2V + Re-platform · 45 workloads</span><Link href="/contact" className="cs-link-cm">Discuss your case →</Link></div>
            </div>

            <div className="cs-card-cm rv d3">
              <div className="cs-header-cm" style={{ background: 'linear-gradient(135deg,#2a1a0a,#5c3a10)' }}>
                <div className="cs-ind-cm" style={{ color: '#fcd34d' }}>🏭</div>
                <div>
                  <div className="cs-industry-cm">Manufacturing — Auto Components</div>
                  <div className="cs-company-cm">Pune · SAP ECC to S/4HANA</div>
                </div>
              </div>
              <div className="cs-body-cm">
                <p className="cs-challenge">&ldquo;Our SAP ECC was running on aging hardware. The vendor said it was end of life. We were facing a full server refresh plus SAP licence renewal — both in the same year.&rdquo;</p>
                <div className="cs-metrics-pair">
                  <div className="cs-metric-box" style={{ background: '#fef9ec' }}><div className="cs-metric-val" style={{ color: '#b45309' }}>22 wks</div><div className="cs-metric-sub">SAP HANA migration timeline</div></div>
                  <div className="cs-metric-box" style={{ background: 'var(--orange-pale)' }}><div className="cs-metric-val" style={{ color: 'var(--orange-dark)' }}>68%</div><div className="cs-metric-sub">Windows/SQL licensing reduction</div></div>
                </div>
                <p className="cs-outcome-cm">Migrated SAP ECC to SAP S/4HANA on Azure Large Instance in 22 weeks. Azure Hybrid Benefit applied to all Windows Server and SQL Server licences. Hardware refresh capex fully eliminated. Azure ML predictive maintenance model deployed post-migration — production line downtime reduced by 22%.</p>
                <div className="cs-key-outcome" style={{ background: 'var(--cream-light)', borderLeft: '3px solid var(--orange)' }}>
                  <div className="cs-key-label" style={{ color: 'var(--orange-dark)' }}>Key outcome</div>
                  <div className="cs-key-text">3-year TCO 41% lower than continuing on-premise. Zero unplanned SAP downtime in 12 months post go-live.</div>
                </div>
              </div>
              <div className="cs-footer-cm"><span className="cs-provider-cm">Azure · SAP HANA · V2V Migration</span><Link href="/contact" className="cs-link-cm">Discuss your case →</Link></div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ MAIN FAQ ═══ */}
      <section className="ps ps-w">
        <div className="container">
          <span className="badge bb sec-ey rv">Migration FAQ</span>
          <h2 className="sec-ti rv">Answers to Every Question Your Team Will Ask</h2>
          <p className="sec-su rv">Every question we&apos;ve been asked by CIOs, CTOs, and IT Leaders across 500+ migration engagements.</p>
          <div className="faq-list-cm">
            {mainFaqs.map((faq, i) => (
              <div key={i} className={`faq-item-cm rv d${(i % 5) + 1}${openMain === i ? ' open' : ''}`}>
                <div className="faq-q-cm" onClick={() => setOpenMain(openMain === i ? null : i)}>
                  {faq.q}<span className="faq-arrow-cm">▾</span>
                </div>
                <div className="faq-a-cm"><p>{faq.a}{i === 5 && <><br /><Link href="/compare" style={{ color: 'var(--orange)', fontWeight: 600 }}>See our full comparison →</Link></>}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="final-cta-cm">
        <div className="container">
          <div className="final-cta-inner rv">
            <span className="badge bw" style={{ marginBottom: '18px', display: 'inline-flex' }}>🚀 Trusted Multi-Cloud Migration Partner</span>
            <h2>Your Migration Starts with a<br />Free Assessment. No Obligation.</h2>
            <p>Tell us about your current infrastructure. We&apos;ll map the right cloud, the right strategy, and the right sequence. In writing. Before any commitment.</p>
            <div className="final-acts">
              <Link href="/get-assessment" className="btn btn-white-cta">Get Free Migration Assessment →</Link>
              <Link href="/book-demo" className="btn btn-ghost-w">Talk to Migration Architect</Link>
            </div>
            <div style={{ marginTop: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.72)' }}>🔒 Transparent scope · local-currency billing · 30-day hypercare included</span>
              <span style={{ color: 'rgba(255,255,255,.25)' }}>|</span>
              <a href="https://wa.me/919999999999" style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.72)' }} target="_blank" rel="noopener noreferrer">💬 WhatsApp: +91 99999 99999</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AEO FAQ ═══ */}
      <section className="faq-section-cm ps" aria-label="Frequently Asked Questions">
        <div className="container">
          <div style={{ textAlign: 'center', fontFamily: 'var(--mono)', fontSize: '.72rem', letterSpacing: '.18em', color: 'var(--blue)', textTransform: 'uppercase', marginBottom: '12px' }}>KNOWLEDGE BASE</div>
          <h2 style={{ textAlign: 'center', fontFamily: 'var(--font)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#0a0a0a', marginBottom: '12px' }}>Frequently Asked Questions</h2>
          <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '1rem', marginBottom: '48px' }}>Everything you need to know — answered clearly.</p>
          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {aeoFaqs.map((faq, i) => (
              <div key={i} className={`faq-item-aeo${openAeo === i ? ' open' : ''}`}>
                <div className="faq-q-aeo" onClick={() => setOpenAeo(openAeo === i ? null : i)}>
                  <span>{faq.q}</span>
                  <svg className="faq-arrow-aeo" viewBox="0 0 24 24" width="20" height="20" style={{ transform: openAeo === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <path fill="none" stroke="currentColor" strokeWidth="2.5" d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                <div className="faq-a-aeo"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STICKY BAR ═══ */}
      <div className={`sticky-bar${showSticky ? ' show' : ''}`}>
        <p>🚀 Expert Migration Services · Zero Downtime · 500+ Migrations Delivered</p>
        <Link href="/get-assessment" className="btn btn-primary-ms" style={{ padding: '9px 18px', fontSize: '.8rem' }}>Get Free Migration Assessment →</Link>
      </div>

      {/* ═══ WA FLOAT ═══ */}
      <a href="https://wa.me/919999999999" className="wa-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24"><path d={WA_PATH} /></svg>
      </a>
    </>
  );
}