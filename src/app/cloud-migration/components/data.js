export const whatsappPath =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';

export const heroSteps = [
  {
    number: '1',
    name: 'Discovery & Assessment',
    subtitle: 'Current state mapping / dependency analysis / risk register',
  },
  {
    number: '2',
    name: 'Architecture Blueprint',
    subtitle: 'Target state design / cost model / compliance review',
  },
  {
    number: '3',
    name: 'Phased Migration',
    subtitle: 'Wave-by-wave with parallel running / no big-bang cutover',
  },
  {
    number: '4',
    name: 'Zero-Downtime Cutover',
    subtitle: 'DNS traffic shifting / blue-green deployment / under 1hr window',
  },
  {
    number: '5',
    name: '30-Day Hypercare',
    subtitle: '24/7 monitoring / performance tuning / team training',
  },
];

export const processSteps = [
  {
    week: 'Week 1-2',
    name: 'Discovery & Dependency Mapping',
    description:
      'Automated discovery tools scan your entire estate - every server, database, application, and network dependency. We find the hidden couplings your team forgot about before they find us mid-migration.',
    deliverables: ['Current state inventory', 'Dependency map', 'Risk register'],
    dotColor: 'var(--orange)',
  },
  {
    week: 'Week 2-4',
    name: 'Architecture Blueprint & Business Case',
    description:
      'Target state architecture design with local currency cost modelling. You know the total 3-year TCO - infrastructure + licensing + operations - before committing a single rupee to migration execution.',
    deliverables: ['Architecture design', 'Local cost model', 'DPDP review'],
    dotColor: 'var(--blue)',
  },
  {
    week: 'Weeks 4-N',
    name: 'Phased Wave Migration',
    description:
      'Workloads migrate in prioritised waves - development first, staging second, production last. Each wave validates the next. Your business continues operating throughout. Zero big-bang cutovers.',
    deliverables: ['Wave planning', 'Parallel running', 'Wave sign-offs'],
    dotColor: 'var(--orange)',
  },
  {
    week: 'Go-Live Day',
    name: 'Zero-Downtime Production Cutover',
    description:
      'DNS traffic shifting with instant rollback capability. Database replication with sub-1-hour cutover windows. We staff a war room with your team for 48 hours post-cutover. Every client has survived this day.',
    deliverables: ['DNS cutover', 'Rollback plan', 'War room'],
    dotColor: 'var(--teal)',
  },
  {
    week: 'Days 1-30',
    name: 'Hypercare & Optimisation',
    description:
      "30 days of 24/7 monitoring with immediate response SLA. Performance tuning, FinOps optimisation, and team training. By day 30, your team owns the cloud environment. By day 60, you're saving 30%+ vs before.",
    deliverables: ['24/7 monitoring', 'FinOps tuning', 'Team training'],
    dotColor: '#a855f7',
  },
];

export const riskGroups = {
  risks: [
    'Downtime during production cutover',
    'Data loss or corruption mid-migration',
    'Hidden dependencies causing app failures',
    'Cost blowout from underestimating scope',
    'Compliance gaps discovered post-launch',
    'Team unprepared to manage new environment',
  ],
  mitigations: [
    'Blue-green deployment, <1hr window with instant rollback',
    'Database replication + checksums before any cutover',
    'Automated discovery maps 100% of dependencies',
    'Fixed-price contracts - overrun risk is ours, not yours',
    'DPDP/RBI compliance review in blueprint phase',
    'Embedded 30-day hypercare with runbook handover',
  ],
};

export const primaryMigrationTypes = [
  {
    icon: '\u{1F3AF}',
    title: 'Assessment & Consultation',
    description:
      'Migration strategy design, dependency mapping, TCO modelling, and risk register. Know what to move, in what order, before a single workload shifts.',
    tags: ['Discovery tools', 'Architecture blueprint', 'Risk register'],
    delay: 'd1',
  },
  {
    icon: '\u{1F310}',
    title: 'Network-Level Migrations',
    description:
      'Migrations over Internet, IPSec VPN, MPLS, and Point-to-Point links. Full network topology design with security and latency requirements met before data moves.',
    tags: ['IPSec / MPLS', 'P2P circuits', 'SD-WAN'],
    delay: 'd2',
  },
  {
    icon: '\u{1F512}',
    title: 'On-Premise to Private Cloud',
    description:
      'Move workloads to dedicated, isolated private cloud environments. Full data sovereignty, compliance-ready, no noisy-neighbour risk. Ideal for BFSI and Government.',
    tags: ['ESDS Sovereign', 'Azure Stack', 'VMware Cloud'],
    delay: 'd3',
  },
  {
    icon: '\u2601\uFE0F',
    title: 'On-Premise to Public Cloud',
    description:
      'Full lift-and-shift or re-platform of on-premise workloads to AWS, Azure, Google Cloud, or ESDS. Phased migration with zero big-bang cutovers.',
    tags: ['AWS / Azure / GCP', 'ESDS', 'Multi-cloud'],
    delay: 'd4',
  },
];

export const secondaryMigrationTypes = [
  {
    icon: '\u{1F4BE}',
    title: 'Data Migration',
    description:
      'Database migration (MySQL, Oracle, MSSQL, PostgreSQL, MongoDB) using proven 3rd-party tools - AWS DMS, Azure Database Migration Service, Striim, and Qlik. Checksums verified before cutover.',
    tags: ['AWS DMS', 'Azure DMS', '3rd-party tools', 'Zero data loss'],
    delay: 'd1',
  },
  {
    icon: '\u{1F504}',
    title: 'Virtual to Virtual Migration',
    description:
      'VM-to-VM migrations between hypervisors using cloud-native tools. VMware to Hyper-V, Hyper-V to KVM, or cross-cloud VM migrations with live replication and minimal cutover windows.',
    tags: ['Native tools', 'Live replication', 'Cross-hypervisor'],
    delay: 'd2',
  },
  {
    icon: '\u{1F5A5}\uFE0F',
    title: 'Physical to Virtual Migration',
    description:
      'P2V conversions of bare-metal servers to virtualised cloud instances using native cloud migration tools - AWS Application Migration Service, Azure Migrate, or Google Migrate. No agents where possible.',
    tags: ['AWS MGN', 'Azure Migrate', 'Google Migrate'],
    delay: 'd3',
  },
];

export const sixRs = [
  {
    id: 'R1',
    icon: '\u{1F680}',
    name: 'Rehost',
    title: 'Lift & Shift',
    description:
      "Move applications to cloud as-is with minimal changes. Fastest and cheapest - but doesn't unlock cloud-native benefits. Best for low-complexity workloads under time pressure. Typical savings: 20-30% on infrastructure costs alone.",
    tag: 'Contact us for scope / 4-8 weeks',
    delay: 'd1',
  },
  {
    id: 'R2',
    icon: '\u2699\uFE0F',
    name: 'Replatform',
    title: 'Lift, Tinker & Shift',
    description:
      'Minor optimisations during migration - move from self-managed MySQL to RDS, from bare-metal to managed Kubernetes. Balances speed with modernisation. Most mid-market companies choose this path. Typical infrastructure savings: 30-45%.',
    tag: 'Timeline: 8-16 weeks',
    delay: 'd2',
  },
  {
    id: 'R3',
    icon: '\u{1F501}',
    name: 'Repurchase',
    title: 'Drop & Shop',
    description:
      'Replace existing software with a SaaS alternative - move from on-premise CRM to Salesforce, on-premise ERP to SAP S/4 HANA Cloud. Eliminates infrastructure management entirely. Thynkwise handles data migration and integration.',
    tag: 'Variable / Project-based',
    delay: 'd3',
  },
  {
    id: 'R4',
    icon: '\u{1F3D7}\uFE0F',
    name: 'Refactor',
    title: 'Re-architect',
    description:
      'Redesign applications for cloud-native patterns - microservices, serverless, containers. Highest upfront cost but maximum long-term savings and agility. Required for applications needing massive scale (UPI payment volumes, D2C peak traffic).',
    tag: 'Timeline: 4-12 months',
    delay: 'd1',
  },
  {
    id: 'R5',
    icon: '\u{1F33F}',
    name: 'Retire',
    title: 'Turn Off',
    description:
      "Decommission applications no longer needed. Thynkwise's discovery typically finds 10-20% of an enterprise's workloads can be retired - that's immediate cost savings with zero migration work. The easiest savings you'll achieve in the entire programme.",
    tag: 'Discovery-driven',
    delay: 'd2',
  },
  {
    id: 'R6',
    icon: '\u{1F512}',
    name: 'Retain',
    title: 'Keep On-Premise',
    description:
      'Not everything moves to cloud. Highly regulated data, ultra-low-latency manufacturing systems, and mainframes sometimes stay on-premise - connected to cloud via hybrid architecture. Thynkwise designs the hybrid boundary, not just the cloud side.',
    tag: 'Hybrid architecture',
    delay: 'd3',
  },
];

export const industries = [
  {
    icon: '\u{1F3E6}',
    name: 'BFSI',
    subtitle: 'Banking / Finance / Insurance',
    cloud: 'Azure Primary',
    cloudStyle: {},
    background: 'linear-gradient(135deg,#1e3a5f,#2d5a8e)',
    compliance: 'RBI Data Localisation / DPDP / PCI-DSS / SEBI CSCRF',
    timeline: '12-24 weeks',
    capability:
      'Pre-audited RBI-compliant landing zones, Azure Policy guardrails, end-to-end encryption in transit and at rest, Core Banking System migration playbooks.',
  },
  {
    icon: '\u{1F3E5}',
    name: 'Healthcare',
    subtitle: 'Hospitals / Diagnostics / HealthTech',
    cloud: 'AWS Primary',
    cloudStyle: {},
    background: 'linear-gradient(135deg,#0d4f3c,#1a7a5e)',
    compliance: 'DISHA / DPDP / ABDM Integration',
    timeline: '8-16 weeks',
    capability:
      'ABDM-integrated cloud environments, patient data encryption, PACS/DICOM workload migration, EMR/HIS database migration with zero data loss.',
  },
  {
    icon: '\u{1F3DB}\uFE0F',
    name: 'Government & PSU',
    subtitle: 'Central / State / Public Sector',
    cloud: 'ESDS Sovereign',
    cloudStyle: { background: 'rgba(0,201,167,.2)', color: '#00c9a7' },
    background: 'linear-gradient(135deg,#3a1f6b,#5e3aab)',
    compliance: 'MeITY Empanelment / GI Cloud / NIC Standards',
    timeline: '8-14 weeks',
    capability:
      'MeITY-empanelled sovereign cloud, GFR-compliant procurement, STQC-audited infrastructure, 100% data residency in India.',
  },
  {
    icon: '\u{1F6CD}\uFE0F',
    name: 'E-Commerce & D2C',
    subtitle: 'Retail / Marketplace / D2C Brands',
    cloud: 'AWS Primary',
    cloudStyle: {},
    background: 'linear-gradient(135deg,#5c1a1a,#a03030)',
    compliance: 'PCI-DSS / DPDP / Payment Gateway SLAs',
    timeline: '6-12 weeks',
    capability:
      'Auto Scaling Groups for peak traffic events, CloudFront CDN for sub-2s page loads, ElastiCache for session management, RDS Multi-AZ for payment processing.',
  },
  {
    icon: '\u{1F3ED}',
    name: 'Manufacturing',
    subtitle: 'Auto / Pharma / Discrete Mfg',
    cloud: 'Azure for SAP',
    cloudStyle: {},
    background: 'linear-gradient(135deg,#1a3a5c,#2d6a9f)',
    compliance: 'ISO 27001 / GxP (Pharma) / FDA 21 CFR Part 11',
    timeline: '16-32 weeks',
    capability:
      'SAP HANA migration to Azure, Azure Hybrid Benefit for Windows/SQL licensing, IoT Edge for factory floors, OT/IT network segmentation design.',
  },
  {
    icon: '\u{1F680}',
    name: 'Startups & SaaS',
    subtitle: 'Series A-C / Product Companies',
    cloud: 'GCP + AWS Credits',
    cloudStyle: { background: 'rgba(0,201,167,.2)', color: '#00c9a7' },
    background: 'linear-gradient(135deg,#1a4a1a,#2e7d32)',
    compliance: 'DPDP / SOC 2 Type II readiness',
    timeline: '2-6 weeks',
    capability:
      'Google for Startups credits activation, AWS Activate credits, cloud-native architecture from Day 1, Kubernetes on GKE/EKS, CI/CD pipeline setup.',
  },
  {
    icon: '\u{1F4DA}',
    name: 'EdTech',
    subtitle: 'LMS / Online Learning / Assessments',
    cloud: 'AWS or GCP',
    cloudStyle: {},
    background: 'linear-gradient(135deg,#3a2a0a,#7a5a10)',
    compliance: 'DPDP (minor data) / NEP 2020 guidelines',
    timeline: '4-10 weeks',
    capability:
      'Live video streaming infrastructure, CDN optimisation, multi-region latency reduction, assessment platform migration, student data privacy architecture.',
  },
  {
    icon: '\u{1F69B}',
    name: 'Logistics & Supply Chain',
    subtitle: '3PL / Fleet / Last-Mile',
    cloud: 'AWS Primary',
    cloudStyle: {},
    background: 'linear-gradient(135deg,#1a3050,#2a5080)',
    compliance: 'DPDP / Motor Vehicles Act data requirements',
    timeline: '8-14 weeks',
    capability:
      'IoT fleet tracking on AWS IoT Core, real-time shipment visibility, route optimisation ML models, warehouse management system migration.',
  },
];

export const trustStats = [
  {
    value: '500+',
    label: 'Cloud migrations delivered across India',
    delay: 'd1',
  },
  {
    value: '0',
    label: 'Failed production migrations (0% failure rate)',
    delay: 'd2',
  },
  {
    value: '8-12',
    label: 'Months to ROI recovery for mid-market clients',
    delay: 'd3',
  },
  {
    value: '30%',
    label: 'Average infrastructure cost saving post-migration',
    delay: 'd4',
  },
];

export const caseStudies = [
  {
    headerBackground: 'linear-gradient(135deg,#1e2a4a,#2d3f6e)',
    icon: '\u{1F3E6}',
    iconColor: '#93bbff',
    industry: 'BFSI - Co-operative Bank',
    company: 'Western Maharashtra / 14 Branches',
    challenge:
      'We had 3 physical servers running core banking auxiliary systems. Every month there was a hardware alert. Our IT team was firefighting instead of building.',
    metrics: [
      {
        value: '14 wks',
        label: 'Full migration timeline',
        background: 'var(--blue-pale)',
        color: 'var(--blue)',
      },
      {
        value: '99.97%',
        label: 'Uptime post go-live',
        background: 'var(--orange-pale)',
        color: 'var(--orange-dark)',
      },
    ],
    outcome:
      'Migrated 38 workloads to Azure using a phased P2V approach - physical servers converted to Azure VMs with zero data loss. Azure Policy guardrails configured for RBI data localisation. Compliance audit passed with zero findings. IT team redeployed from maintenance to digital banking features.',
    keyOutcome: {
      label: 'Key outcome',
      text: '43% reduction in infrastructure TCO year-on-year. Hardware refresh capex fully eliminated.',
      background: 'var(--teal-pale)',
      borderColor: 'var(--teal)',
      color: 'var(--teal-dark)',
    },
    provider: 'Azure / P2V Migration / 38 workloads',
    delay: 'd1',
  },
  {
    headerBackground: 'linear-gradient(135deg,#1a3a1a,#2e5c20)',
    icon: '\u{1F6CD}\uFE0F',
    iconColor: '#86efac',
    industry: 'E-Commerce - D2C Apparel Brand',
    company: 'Bengaluru / 3M monthly orders',
    challenge:
      "Our platform would go down during sale events without warning. We lost an entire day of revenue twice. On-premise hardware simply couldn't scale on demand.",
    metrics: [
      {
        value: '4.2s -> 1.1s',
        label: 'Page load time improvement',
        background: 'var(--teal-pale)',
        color: 'var(--teal-dark)',
        fontSize: '1.2rem',
      },
      {
        value: '340%',
        label: 'Peak traffic handled, zero downtime',
        background: 'var(--orange-pale)',
        color: 'var(--orange-dark)',
      },
    ],
    outcome:
      'Re-platformed 45 workloads from bare-metal to AWS in 8 weeks using AWS Application Migration Service. Auto Scaling Groups configured for variable traffic with pre-warmed capacity plans. CloudFront CDN deployed across all edge locations. First peak sale season post-migration - zero downtime, zero tickets.',
    keyOutcome: {
      label: 'Key outcome',
      text: '38% reduction in infrastructure running costs. Cart abandonment dropped 22% due to faster load times.',
      background: 'var(--blue-pale)',
      borderColor: 'var(--blue)',
      color: 'var(--blue)',
    },
    provider: 'AWS / P2V + Re-platform / 45 workloads',
    delay: 'd2',
  },
  {
    headerBackground: 'linear-gradient(135deg,#2a1a0a,#5c3a10)',
    icon: '\u{1F3ED}',
    iconColor: '#fcd34d',
    industry: 'Manufacturing - Auto Components',
    company: 'Pune / SAP ECC to S/4HANA',
    challenge:
      'Our SAP ECC was running on aging hardware. The vendor said it was end of life. We were facing a full server refresh plus SAP licence renewal - both in the same year.',
    metrics: [
      {
        value: '22 wks',
        label: 'SAP HANA migration timeline',
        background: '#fef9ec',
        color: '#b45309',
      },
      {
        value: '68%',
        label: 'Windows/SQL licensing reduction',
        background: 'var(--orange-pale)',
        color: 'var(--orange-dark)',
      },
    ],
    outcome:
      'Migrated SAP ECC to SAP S/4HANA on Azure Large Instance in 22 weeks. Azure Hybrid Benefit applied to all Windows Server and SQL Server licences. Hardware refresh capex fully eliminated. Azure ML predictive maintenance model deployed post-migration - production line downtime reduced by 22%.',
    keyOutcome: {
      label: 'Key outcome',
      text: '3-year TCO 41% lower than continuing on-premise. Zero unplanned SAP downtime in 12 months post go-live.',
      background: 'var(--cream-light)',
      borderColor: 'var(--orange)',
      color: 'var(--orange-dark)',
    },
    provider: 'Azure / SAP HANA / V2V Migration',
    delay: 'd3',
  },
];

export const mainFaqs = [
  {
    question: 'What migration services does Thynkwise provide?',
    answer:
      'Thynkwise provides the full spectrum of migration services: Assessment & Consultation for strategy design, Network-level migrations over Internet/IPSec/MPLS/P2P, Data Migration using proven 3rd-party tools, Virtual-to-Virtual migrations using native cloud tooling, Physical-to-Virtual migrations, On-Premise to Private Cloud, and On-Premise to Public Cloud (AWS, Azure, GCP, ESDS). Every engagement is scope-defined with transparent deliverables, local-currency billing, and GST invoices. Contact us for a scoped assessment tailored to your workload portfolio.',
  },
  {
    question: 'Can cloud migration be done with zero downtime?',
    answer:
      'Yes - with the right architecture and preparation. Thynkwise uses blue-green deployment for stateless applications, database replication with minimal cutover windows (typically under 1 hour even for production databases), and DNS traffic shifting with instant rollback. Our 0% failure rate across 500+ migrations includes production applications in BFSI, e-commerce, and healthcare - sectors where downtime is measured in lakhs per minute. We also maintain a 30-day hypercare period post-cutover so any issues are caught and resolved before the project closes.',
  },
  {
    question: 'How long does cloud migration take for a mid-market company?',
    answer:
      "A mid-market company with 50-200 workloads typically completes migration in 3-6 months using Thynkwise's phased approach. The timeline depends on three factors: workload complexity (databases and SAP take longest), compliance requirements (BFSI migrations add 4-6 weeks for RBI audit preparation), and your team's availability for testing and sign-off. Thynkwise builds the migration timeline into the fixed-price contract - if we run over, that's our problem.",
  },
  {
    question: 'What is the ROI of cloud migration?',
    answer:
      'Most Thynkwise mid-market clients recover migration cost within 8-12 months through cloud savings alone. The ROI calculation: 30-40% reduction in infrastructure costs; elimination of hardware refresh capex every 3 years; reduced IT headcount needs (1-3 FTEs can be redeployed); 99.9% uptime SLA vs typical on-premise 97-98% availability. Year 1 ROI is typically 3-4x the migration investment when measured against infrastructure savings, eliminated capex, and productivity gains.',
  },
  {
    question: 'Do we need to be DPDP compliant before or after migration?',
    answer:
      "DPDP Act 2023 compliance must be designed into the cloud architecture from Day 1 - retrofitting compliance costs 3-5x more than building it in during migration. Thynkwise's blueprint phase includes a DPDP compliance review that maps your personal data flows, identifies consent management requirements, and configures cloud data residency policies (all data remains in Indian regions). For BFSI clients, we additionally configure RBI data localisation guardrails via Azure Policy or AWS SCPs before any data moves.",
  },
  {
    question: 'AWS, Azure, GCP or ESDS - which is right for my workloads?',
    answer:
      "It depends on what you're migrating. AWS is the default choice for most applications in India - broadest service set, two India regions (Mumbai + Hyderabad), and the strongest regional case study library. Azure is the right choice if you're a Microsoft-heavy shop (Windows Server, SQL Server, Active Directory) because Azure Hybrid Benefit saves 40-80% on licensing, or if you're in BFSI where Azure has stronger documented RBI compliance frameworks. Google Cloud wins for AI/ML and data analytics workloads. Thynkwise's free migration assessment gives you a specific recommendation based on your actual workload - not a generic answer.",
    linkHref: '/compare',
    linkText: 'See our full comparison',
  },
];

export const aeoFaqs = [
  {
    question: 'What is cloud migration?',
    answer:
      'Cloud migration is the process of moving applications, data, and infrastructure from on-premise data centres or legacy systems to cloud platforms like AWS, Azure, or Google Cloud. It includes assessment, planning, data migration, application refactoring, and cutover.',
  },
  {
    question: 'How long does a cloud migration take?',
    answer:
      'Cloud migration timelines vary by complexity. A single application lift-and-shift can take 2-6 weeks. A full enterprise data centre migration typically takes 3-12 months. Thynkwise provides a detailed timeline after the initial discovery assessment.',
  },
  {
    question: 'What is the difference between lift-and-shift and re-platforming?',
    answer:
      'Lift-and-shift (rehosting) moves workloads to cloud with minimal changes, preserving existing architecture. Re-platforming makes targeted optimisations (e.g., moving to managed databases) without full re-architecture. Re-architecting redesigns applications natively for cloud.',
  },
  {
    question: 'Does Thynkwise migrate databases to cloud?',
    answer:
      'Yes. Thynkwise migrates Oracle, SQL Server, MySQL, PostgreSQL, MongoDB, and other databases to cloud-native managed services like Amazon RDS, Azure SQL, Cloud SQL, and Aurora - with minimal downtime using CDC and replication strategies.',
  },
  {
    question: 'What is zero-downtime cloud migration?',
    answer:
      'Zero-downtime migration uses continuous replication and traffic cutover techniques to migrate applications and databases to cloud without service interruption. Thynkwise uses AWS DMS, Azure Database Migration Service, and Google Datastream for zero-downtime migrations.',
  },
];
