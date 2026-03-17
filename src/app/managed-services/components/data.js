export const heroPills = [
  { label: '99.95% UPTIME SLA' },
  { label: '24/7 IST NOC' },
  { label: 'FINOPS INCLUDED' },
];

export const heroStats = [
  { value: '200+', label: 'Organisations managed' },
  { value: '99.95%', label: 'Avg uptime delivered' },
  { value: '24/7', label: '24/7 support, all plans' },
  { value: '30%', label: 'Avg FinOps savings' },
];

export const liveMetrics = [
  {
    value: '99.97%',
    label: 'Platform uptime (30d)',
    className: 'g',
  },
  {
    value: '4.2 min',
    label: 'Avg P1 response today',
    className: 'o',
  },
  {
    value: '847',
    label: 'Alerts resolved this week',
    className: 'b',
  },
  {
    value: '30%',
    label: 'Avg FinOps savings',
    className: 'p',
  },
];

export const slaBars = [
  { name: 'AWS environments', percent: '99.98%', width: '99.98%' },
  { name: 'Azure environments', percent: '99.96%', width: '99.96%' },
  { name: 'GCP environments', percent: '99.95%', width: '99.95%' },
];

export const pillars = [
  {
    icon: '\u{1F3D7}\uFE0F',
    label: 'Pillar 01',
    titleTop: 'Infrastructure',
    titleBottom: 'Managed Services',
    items: [
      'Server & Storage Management',
      'Network Management',
      'Database Administration (DBA)',
      'Backup & Disaster Recovery',
      'Capacity Planning & Quality Assurance',
      'Data Centre Operations',
      'Hardware Lifecycle Management',
    ],
  },
  {
    icon: '\u26A1',
    label: 'Pillar 02',
    titleTop: 'Application',
    titleBottom: 'Managed Services',
    items: [
      'Application Performance Management (APM)',
      'Incident Management',
      'Problem & Root Cause Management',
      'Release & Change Management',
      'Versioning, Upgrades & Patching',
      'DevOps Support',
      'Application Integration & API Management',
      'Functional & Technical Application Support',
    ],
  },
  {
    icon: '\u2601\uFE0F',
    label: 'Pillar 03',
    titleTop: 'Cloud',
    titleBottom: 'Managed Services',
    items: [
      'Cloud Infrastructure Management',
      'Cloud Security & Compliance',
      'Cost Optimisation & Governance (FinOps)',
      'Cloud Monitoring & Alerting',
      'Backup & Disaster Recovery',
      'Cloud Automation & DevOps',
      'Cloud Migration Services',
    ],
  },
];

export const serviceCatalogue = [
  {
    accent: 'var(--blue)',
    iconBg: 'var(--blue-pale)',
    icon: '\u2699\uFE0F',
    title: 'Infrastructure',
    items: [
      'Datacenter with Power & Cooling',
      'Physical Servers',
      'SAN Storage',
      'Switches (except L2)',
      'Structured Cabling',
    ],
    delay: 'd1',
  },
  {
    accent: 'var(--orange)',
    iconBg: 'var(--orange-pale)',
    icon: '\u{1F5C4}\uFE0F',
    title: 'Database',
    items: ['Microsoft SQL with Always On', 'Oracle', 'MySQL', 'PostgreSQL', 'MongoDB'],
    delay: 'd2',
  },
  {
    accent: 'var(--teal)',
    iconBg: 'var(--teal-pale)',
    icon: '\u{1F504}',
    title: 'Migration',
    items: [
      'Servers & Service Migrations',
      'On-Premise to Cloud',
      'Cloud to Cloud',
      'Cloud to On-Premise',
    ],
    delay: 'd3',
  },
  {
    accent: 'var(--purple)',
    iconBg: 'var(--purple-pale)',
    icon: '\u{1F310}',
    title: 'Network',
    items: [
      'Network Management for WAN / LAN',
      'ISP Link Monitoring',
      'SD-WAN Configuration & Support',
      'Network Performance Reporting',
    ],
    delay: 'd1',
  },
  {
    accent: '#dc2626',
    iconBg: '#fff1f1',
    icon: '\u{1F512}',
    title: 'Security',
    items: [
      'Endpoint Security',
      'Network Security',
      'Application Security',
      'VAPT & Vulnerability Scanning',
      'SIEM & SOC-as-a-Service',
    ],
    delay: 'd2',
  },
  {
    accent: '#0078d4',
    iconBg: '#e6f2ff',
    icon: '\u{1F4E7}',
    title: 'Microsoft 365',
    items: [
      'O365 Product Suite Management',
      'Email Management',
      'Teams & SharePoint Administration',
      'Licence Management & Renewals',
      'Security & Compliance Centre',
    ],
    delay: 'd3',
  },
];

export const whyItems = [
  {
    icon: '\u{1F464}',
    iconBg: 'var(--orange-pale)',
    title: 'Named Account Manager',
    text: 'Every client gets a named account manager - not a ticket queue. One person who knows your architecture, your team, and your compliance requirements. Escalation path is a phone call, not a JIRA ticket.',
    delay: 'd1',
  },
  {
    icon: '\u{1F4B0}',
    iconBg: 'var(--green-pale)',
    title: 'FinOps That Pays for Itself',
    text: 'Thynkwise FinOps identifies right-sizing opportunities, reserved instance optimisation, and idle resource elimination. Most clients achieve 25-35% cloud spend reduction within 60 days - often exceeding the managed service fee.',
    delay: 'd2',
  },
  {
    icon: '\u{1F6E1}\uFE0F',
    iconBg: 'var(--blue-pale)',
    title: 'Compliance Built In',
    text: 'DPDP Act 2023, RBI data localisation, CERT-In, and ISO 27001 compliance are configured at architecture level - not audited retrospectively. Managed clients pass compliance audits. Not patched after findings.',
    delay: 'd3',
  },
  {
    icon: '\u{1F501}',
    iconBg: 'var(--teal-pale)',
    title: 'Multi-Cloud. One SLA.',
    text: 'AWS, Azure, GCP, ESDS, Yotta, CtrlS - managed together under one SLA, one invoice, one point of contact. No juggling multiple vendor relationships. No inter-cloud blame games when things go wrong.',
    delay: 'd1',
  },
  {
    icon: '\u26A1',
    iconBg: 'var(--purple-pale)',
    title: 'SLA-Backed Response Times',
    text: 'P1 Critical: 15-minute response, 4-hour resolution. P2 High: 30-minute response, 8-hour resolution. P3 Medium: 2-hour response, 24-hour resolution. SLAs in writing, penalties for breach, no exceptions.',
    delay: 'd2',
  },
  {
    icon: '\u{1F1EE}\u{1F1F3}',
    iconBg: 'var(--orange-pale)',
    title: '100% IST-Based Operations',
    text: 'Your NOC is in India. Your engineers speak your language and work your time zone. No routing tickets to an offshore NOC that comes online 5 hours after your P1 alert fires at 2am IST.',
    delay: 'd3',
  },
];

export const onboardingSteps = [
  {
    number: '1',
    name: 'Discovery & Audit',
    description:
      'Full environment inventory, access provisioning, dependency mapping and baseline performance benchmarks',
    delay: 'd1',
  },
  {
    number: '2',
    name: 'Runbook Development',
    description:
      'Custom runbooks for every workload. Escalation paths defined. On-call rotation established. SLA thresholds configured',
    delay: 'd2',
  },
  {
    number: '3',
    name: 'Monitoring Setup',
    description:
      'NOC tooling deployed across all environments. Alert thresholds tuned. Dashboards activated. 24/7 coverage begins',
    delay: 'd3',
  },
  {
    number: '4',
    name: 'FinOps Baseline',
    description:
      'First cost analysis run. Right-sizing recommendations issued. Reserved instance opportunities identified within 14 days',
    delay: 'd4',
  },
  {
    number: '5',
    name: 'Go Live + Review',
    description:
      'Full managed services active. Monthly review cadence established with your named account manager and leadership team',
    delay: 'd5',
  },
];

export const industryUseCases = [
  {
    icon: '\u{1F3E6}',
    title: 'BFSI - Banks, NBFCs & Insurers',
    text: 'RBI data localisation, SEBI CSCRF, IRDAI mandates - Thynkwise builds compliance into the managed architecture from day one. 24/7 NOC with core banking availability targets. CERT-In reporting automated.',
    tags: ['RBI Localisation', 'SEBI CSCRF', 'CERT-In', 'CBS Availability'],
    delay: 'd1',
  },
  {
    icon: '\u{1F3DB}\uFE0F',
    title: 'Government & PSUs',
    text: 'MeITY-empanelled cloud management, GFR-compliant operations, NIC-standard security posture. Smart city deployments, ministry portals, and citizen service platforms managed with sovereign data guarantees.',
    tags: ['MeITY', 'GFR Compliant', 'Sovereign Cloud', 'NIC Standards'],
    delay: 'd2',
  },
  {
    icon: '\u{1F3ED}',
    title: 'Manufacturing & SAP',
    text: 'SAP HANA managed services on Azure, AWS, or ESDS. Production line uptime is non-negotiable - Thynkwise delivers 99.99% availability SLAs for ERP and MES environments with change freeze windows.',
    tags: ['SAP HANA', 'Azure for SAP', 'MES Availability', 'ERP Support'],
    delay: 'd1',
  },
  {
    icon: '\u{1F6CD}\uFE0F',
    title: 'E-Commerce & D2C',
    text: 'Auto-scaling management for peak event traffic. CloudFront and CDN optimisation. Payment gateway uptime monitoring. PCI-DSS compliant managed environment with real-time traffic dashboards.',
    tags: ['Auto Scaling', 'PCI-DSS', 'CDN Management', 'Peak Events'],
    delay: 'd2',
  },
];

export const statsBand = [
  {
    value: '200+',
    line1: 'Organisations under',
    line2: 'Thynkwise management',
  },
  {
    value: '99.95%',
    line1: 'Average uptime delivered',
    line2: 'across all managed clients',
  },
  {
    value: '30%',
    line1: 'Average FinOps savings',
    line2: 'within 60 days of go-live',
  },
  {
    value: '15 min',
    line1: 'P1 critical response SLA',
    line2: '24/7 IST NOC',
  },
];

export const caseStudies = [
  {
    headerBackground: 'linear-gradient(135deg,#0b1f3a,#1a3560)',
    icon: '\u{1F3E6}',
    iconColor: '#93c5fd',
    industry: 'BFSI - NBFC',
    company: 'Pune / 280 Cr AUM',
    quote:
      'We had a 3-person IT team managing 40 servers. Every RBI audit flagged gaps. We needed managed services, not more headcount.',
    kpis: [
      {
        background: 'var(--blue-pale)',
        color: 'var(--blue)',
        value: '99.97%',
        label: 'Uptime post-handover',
      },
      {
        background: 'var(--orange-pale)',
        color: 'var(--orange-dark)',
        value: '0',
        label: 'RBI audit findings',
      },
    ],
    outcome:
      '38 workloads taken under full management on Azure. RBI data localisation configured in Month 1. IT team redeployed to product development. First clean compliance audit in 3 years.',
    keyOutcome:
      '41% reduction in IT operational cost. Zero compliance findings in annual RBI audit.',
    footer: 'Azure / 38 workloads / Full MS',
    delay: 'd1',
  },
  {
    headerBackground: 'linear-gradient(135deg,#1a2a0a,#2e4a14)',
    icon: '\u{1F6CD}\uFE0F',
    iconColor: '#86efac',
    industry: 'E-Commerce - D2C',
    company: 'Bengaluru / 3M orders/month',
    quote:
      'Our in-house team spent 60% of their time firefighting infrastructure incidents. We needed to stop managing servers and start building product.',
    kpis: [
      {
        background: 'var(--green-pale)',
        color: 'var(--green)',
        value: '34%',
        label: 'Cloud cost reduction via FinOps',
      },
      {
        background: 'var(--orange-pale)',
        color: 'var(--orange-dark)',
        value: '0',
        label: 'Sale-event outages in 12 months',
      },
    ],
    outcome:
      '45 AWS workloads moved to full managed services. Auto-scaling policies tuned for peak traffic events. FinOps delivered 34% cost reduction in Month 2.',
    keyOutcome:
      '34% AWS spend reduction. Engineering velocity up 2.3x after ops handover to Thynkwise.',
    footer: 'AWS / 45 workloads / FinOps + MS',
    delay: 'd2',
  },
  {
    headerBackground: 'linear-gradient(135deg,#2a1a0a,#5c3a10)',
    icon: '\u{1F3ED}',
    iconColor: '#fcd34d',
    industry: 'Manufacturing - Auto OEM',
    company: 'Pune / SAP Environment',
    quote:
      'SAP HANA on Azure with no managed services partner meant our team was 24/7 on-call for a system they were not fully certified to support.',
    kpis: [
      {
        background: '#fef9ec',
        color: '#b45309',
        value: '99.99%',
        label: 'SAP uptime in 12 months',
      },
      {
        background: 'var(--green-pale)',
        color: 'var(--green)',
        value: '68%',
        label: 'Licensing cost reduction',
      },
    ],
    outcome:
      'SAP HANA on Azure Large Instance taken under full management. Azure Hybrid Benefit applied to all licences. Dedicated SAP Basis engineer assigned. Zero unplanned SAP downtime in 12 months.',
    keyOutcome:
      '68% licensing saving via Azure Hybrid Benefit. 99.99% SAP uptime. Team on-call eliminated.',
    footer: 'Azure SAP / Full MS + DBA',
    delay: 'd3',
  },
];

export const mainFaqs = [
  {
    question:
      'What exactly does "fully managed" mean - what does Thynkwise actually do day-to-day?',
    answer:
      "Thynkwise's 24/7 NOC monitors your entire environment continuously. Day-to-day: we handle all infrastructure alerts, patch deployments, backup verification, performance tuning, database health checks, security event triage, and capacity planning. Monthly: a named account manager conducts a formal review with your team covering uptime, incidents, FinOps savings, and next 30-day plans. You receive a monthly report with every incident documented, every saving quantified, and every recommendation prioritised.",
  },
  {
    question: 'What is the typical onboarding timeline? Will there be disruption?',
    answer:
      "Thynkwise's onboarding is structured across 30 days in 5 phases: environment discovery (Week 1), runbook development (Week 1-2), monitoring tool deployment (Week 2-3), FinOps baseline (Week 3), and full go-live with review cadence (Day 30). During onboarding, your existing team continues operating normally - Thynkwise mirrors operations in parallel before taking full ownership. Zero disruption is the goal and the result for every client to date.",
  },
  {
    question:
      'Can Thynkwise manage multi-cloud environments - AWS + Azure + ESDS simultaneously?',
    answer:
      'Yes - multi-cloud is Thynkwise\'s core differentiator. We have certified engineers across AWS, Azure, GCP, and all major Indian CSPs (ESDS, Yotta, CtrlS, Sify, E2E, NTT). Most of our clients run 2-3 cloud environments simultaneously. You receive one SLA covering all of them, one unified monthly invoice, and one escalation path. No inter-cloud blame routing - we own the outcome regardless of which platform has the issue.',
  },
  {
    question:
      'How does the FinOps optimisation work and how much can we realistically save?',
    answer:
      'Thynkwise FinOps runs continuously - not as a one-time exercise. Our tools identify right-sizing opportunities (oversized instances), idle resources (stopped instances still incurring storage costs), reserved instance opportunities (committing to predictable workloads at 40-60% discount), and savings plan optimisation. The typical client saves 25-35% of their cloud bill within 60 days - often more than covering the managed service fee. Savings are documented in monthly reports with before/after comparisons and full cost attribution.',
  },
  {
    question:
      'What compliance frameworks does Thynkwise support for managed environments?',
    answer:
      'Thynkwise configures and maintains compliance for: DPDP Act 2023 (data processing governance), RBI data localisation (BFSI entities), SEBI CSCRF (capital markets), IRDAI cloud guidelines (insurers), CERT-In mandates (incident reporting, VPN logging), MeITY empanelment standards (government entities), ISO 27001 (information security management), PCI-DSS (payment card environments), and SOC 2 Type II readiness. Compliance is built into the managed architecture - not audited retrospectively.',
  },
];

export const aeoFaqs = [
  {
    question: 'What are managed cloud services?',
    answer:
      'Managed cloud services are ongoing operations where a provider like Thynkwise monitors, maintains, and optimises your cloud infrastructure on your behalf - covering 24/7 alerting, patch management, backup, disaster recovery, cost optimisation, and security compliance.',
  },
  {
    question: 'What does Thynkwise include in managed services?',
    answer:
      'Thynkwise managed services cover infrastructure management (servers, networking, storage), application management (performance, deployment, CI/CD), cloud operations (cost, scaling, compliance), 24/7 monitoring, backup and DR, patch management, and a named account team.',
  },
  {
    question: 'What SLA does Thynkwise offer for managed services?',
    answer:
      'Thynkwise provides contractual SLAs with 99.9% uptime guarantee, defined response times (P1 critical: under 15 minutes), and named account ownership - not generic shared support queues.',
  },
  {
    question: 'Does Thynkwise provide on-premise managed services?',
    answer:
      'Yes. Thynkwise manages on-premise and hybrid infrastructure alongside cloud - covering VMware, Hyper-V, bare metal, and private cloud environments integrated into a unified monitoring and operations platform.',
  },
];

export const whatsappPath =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';
