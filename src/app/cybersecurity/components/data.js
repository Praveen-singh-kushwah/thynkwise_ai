export const heroThreats = [
  {
    severity: 'CRIT',
    severityClassName: 'cy-sev-crit',
    type: 'Ransomware Lateral Movement Detected',
    meta: 'Endpoint \u00B7 Production Subnet \u00B7 T1021.002',
    status: '\u25CF CONTAINED',
    statusClassName: 'cy-status-contained',
  },
  {
    severity: 'HIGH',
    severityClassName: 'cy-sev-high',
    type: 'Credential Stuffing Attack',
    meta: 'API Gateway \u00B7 4,200 req/min \u00B7 ASN: 14618',
    status: '\u25CF BLOCKED',
    statusClassName: 'cy-status-contained',
  },
  {
    severity: 'HIGH',
    severityClassName: 'cy-sev-high',
    type: 'Privilege Escalation Attempt',
    meta: 'Domain Controller \u00B7 Account: svc_backup',
    status: '\u29D6 INVESTIGATING',
    statusClassName: 'cy-status-investigating',
  },
  {
    severity: 'MED',
    severityClassName: 'cy-sev-med',
    type: 'Anomalous Data Transfer',
    meta: 'DLP Alert \u00B7 Cloud Upload \u00B7 2.4GB flagged',
    status: '\u29D6 REVIEWING',
    statusClassName: 'cy-status-investigating',
  },
  {
    severity: 'CRIT',
    severityClassName: 'cy-sev-crit',
    type: 'Dark Web Credential Exposure',
    meta: 'Domain Match \u00B7 3 executive accounts',
    status: '\u25CF NOTIFIED',
    statusClassName: 'cy-status-contained',
  },
];

export const domainCards = [
  {
    variant: 'cy-domain-detect',
    number: '01',
    icon: '\u{1F50D}',
    title: 'Detect & Respond',
    description:
      'Continuous monitoring, real-time threat detection, and automated + human-led response \u2014 from endpoint to cloud to dark web.',
    items: [
      'SOC as a Service (24/7)',
      'Managed XDR / EDR',
      'Threat Hunting (Eagle Eye)',
      'Dark Web Monitoring',
      'SIEM + SOAR Automation',
    ],
  },
  {
    variant: 'cy-domain-protect',
    number: '02',
    icon: '\u{1F6E1}',
    title: 'Protect & Prevent',
    description:
      'Harden your attack surface, lock down identities, secure your network and cloud environments before threats reach you.',
    items: [
      'VAPT (Network \u00B7 Web \u00B7 API \u00B7 Mobile)',
      'IAM & Privilege Access (PAM)',
      'Managed DLP',
      'Cloud Security (CSPM \u00B7 CWPP)',
      'Network Security (NGFW \u00B7 SASE)',
    ],
  },
  {
    variant: 'cy-domain-comply',
    number: '03',
    icon: '\u{1F4CB}',
    title: 'Comply & Govern',
    description:
      'Embed regulatory compliance and risk governance into daily operations \u2014 audit-ready 365 days a year, not just when the auditor arrives.',
    items: [
      'GRC (ISO 27001 \u00B7 SOC 2 \u00B7 NIST)',
      'CERT-In Incident Reporting',
      'Risk Register & BIA',
      'Security Awareness Training',
      'BCP / DRaaS',
    ],
  },
];

export const serviceTabs = [
  { id: 'detect', label: '\u{1F50D} Detect & Respond' },
  { id: 'protect', label: '\u{1F6E1} Protect & Prevent' },
  { id: 'comply', label: '\u{1F4CB} Comply & Govern' },
  { id: 'consult', label: '\u{1F3D7} Build & Consult' },
];

export const servicePanels = {
  detect: {
    type: 'services',
    cards: [
      {
        title: 'SOC as a Service',
        icon: '\u{1F5A5}',
        cardStyle: { '--cy-acc': 'var(--red)' },
        iconStyle: { background: 'var(--red-pale)' },
        items: [
          '24/7 security monitoring across on-premise, cloud, and hybrid environments',
          'SIEM-driven alerting with automated triage and playbook execution',
          'Security Insight Services \u2014 threat correlation, analysis, and reporting',
          'Eagle Eye \u2014 advanced threat hunting for low-and-slow adversaries',
          'Named Tier 2 analyst for escalations and monthly security reviews',
          'Monthly threat intelligence report with board-ready executive summary',
        ],
        tag: '24/7 Operations',
      },
      {
        title: 'Managed XDR / EDR',
        icon: '\u{1F4BB}',
        cardStyle: { '--cy-acc': 'var(--orange)' },
        iconStyle: { background: 'var(--orange-pale)' },
        items: [
          'Extended Detection & Response (XDR) across endpoints, network, identity, and cloud',
          'AI-driven threat prevention and behavioural anomaly detection',
          'Automated threat containment, isolation, and rollback',
          'Device control \u2014 USB, Bluetooth, removable media policies',
          'Remote forensic investigation and incident reconstruction',
          'CrowdStrike Falcon \u00B7 SentinelOne Singularity \u00B7 Palo Alto Cortex XDR',
        ],
        tag: 'XDR \u00B7 AI-Driven',
        tagStyle: {
          background: 'var(--orange-pale)',
          color: 'var(--orange-dark)',
          borderColor: 'rgba(246,136,31,.2)',
        },
      },
      {
        title: 'Dark Web Monitoring & Brand Protection',
        icon: '\u{1F311}',
        cardStyle: { '--cy-acc': '#1e1b4b' },
        iconStyle: { background: '#f0f0ff' },
        items: [
          'Continuous dark web scanning for credential leaks and data breaches',
          'Brand impersonation, lookalike domain, and typosquatting detection',
          'Phishing site identification and takedown coordination',
          'Executive and VIP identity exposure monitoring',
          'Leaked API key and secrets alert with rotation guidance',
          'Real-time threat intelligence feeds integrated into SOC workflows',
        ],
        tag: 'Threat Intel',
        tagStyle: {
          background: '#f0f0ff',
          color: '#3730a3',
          borderColor: 'rgba(55,48,163,.15)',
        },
      },
    ],
  },
  protect: {
    type: 'services',
    cards: [
      {
        title: 'VAPT - Vulnerability Assessment & Penetration Testing',
        icon: '\u{1F3AF}',
        cardStyle: { '--cy-acc': 'var(--red)' },
        iconStyle: { background: 'var(--red-pale)' },
        items: [
          'External and internal network vulnerability scanning and assessment',
          'Web application penetration testing \u2014 OWASP Top 10 and beyond',
          'Mobile application security testing \u2014 iOS and Android',
          'API security testing, authentication, and authorisation flaws',
          'Red team exercises and social engineering simulation campaigns',
          'Detailed remediation reports with risk-prioritised fix plans',
        ],
        tag: 'OWASP \u00B7 PTES Standard',
      },
      {
        title: 'IAM & Privilege Access Management',
        icon: '\u{1F511}',
        cardStyle: { '--cy-acc': 'var(--blue)' },
        iconStyle: { background: 'var(--blue-pale)' },
        items: [
          'Identity & Access Management \u2014 centralised governance with lifecycle automation',
          'Privilege Access Management (PAM) \u2014 just-in-time access and session recording',
          'MFA deployment and passwordless authentication rollout',
          'Zero Trust Network Access (ZTNA) architecture design',
          'Role-based access control (RBAC) and least-privilege enforcement',
          'Okta \u00B7 CyberArk \u00B7 Microsoft Entra ID integration and management',
        ],
        tag: 'Zero Trust \u00B7 PAM',
        tagStyle: {
          background: 'var(--blue-pale)',
          color: 'var(--blue)',
          borderColor: 'rgba(58,89,168,.18)',
        },
      },
      {
        title: 'Managed DLP - Data Loss Prevention',
        icon: '\u{1F512}',
        cardStyle: { '--cy-acc': 'var(--purple)' },
        iconStyle: { background: 'var(--purple-pale)' },
        items: [
          'Data Loss Prevention \u2014 prevent unauthorised data exfiltration at all exit points',
          'Automated classification of sensitive data \u2014 PII, financial, IP, health records',
          'Email, cloud upload, USB, and print monitoring with real-time blocking',
          'Policy enforcement across endpoints, cloud apps, and SaaS platforms',
          'DPDP Act 2023 data governance framework alignment',
          'Incident reporting dashboard and automated remediation workflows',
        ],
        tag: 'Data Sovereignty',
        tagStyle: {
          background: 'var(--purple-pale)',
          color: 'var(--purple)',
          borderColor: 'rgba(124,58,237,.15)',
        },
      },
      {
        title: 'Cloud Security (CSPM \u00B7 CWPP \u00B7 DevSecOps)',
        icon: '\u2601',
        cardStyle: { '--cy-acc': 'var(--teal)' },
        iconStyle: { background: 'var(--teal-pale)' },
        items: [
          'Cloud Security Posture Management (CSPM) \u2014 misconfiguration detection across AWS, Azure, GCP',
          'Cloud Workload Protection Platform (CWPP) \u2014 runtime protection for VMs, containers, serverless',
          'Container and Kubernetes security hardening \u2014 CIS benchmarks, OPA/Gatekeeper',
          'Cloud-native WAF and DDoS protection configuration',
          'Secrets management and encryption key governance',
          'DevSecOps pipeline integration \u2014 SAST, DAST, SCA shift-left tools',
        ],
        tag: 'Multi-Cloud \u00B7 DevSecOps',
        tagStyle: {
          background: 'var(--teal-pale)',
          color: 'var(--teal-dark)',
          borderColor: 'rgba(0,180,160,.2)',
        },
      },
      {
        title: 'Network Security',
        icon: '\u{1F310}',
        cardStyle: { '--cy-acc': 'var(--amber)' },
        iconStyle: { background: 'var(--amber-pale)' },
        items: [
          'Next-Generation Firewall (NGFW) deployment, tuning, and managed operations',
          'Intrusion Detection & Prevention (IDS/IPS) with threat signatures updated continuously',
          'SD-WAN security architecture design and managed operations',
          'Network Detection & Response (NDR) \u2014 traffic analysis and anomaly detection',
          'Secure Access Service Edge (SASE) and Zero Trust architecture implementation',
          'DDoS mitigation, scrubbing, and upstream filtering services',
        ],
        tag: 'NGFW \u00B7 SASE \u00B7 NDR',
        tagStyle: {
          background: 'var(--amber-pale)',
          color: 'var(--amber)',
          borderColor: 'rgba(217,119,6,.2)',
        },
      },
    ],
  },
  comply: {
    type: 'services',
    cards: [
      {
        title: 'GRC - Governance, Risk & Compliance',
        icon: '\u{1F4CB}',
        cardStyle: { '--cy-acc': 'var(--green)' },
        iconStyle: { background: 'var(--green-pale)' },
        items: [
          'ISO 27001:2022 implementation \u2014 gap assessment through certification',
          'SOC 2 Type II readiness assessment and evidence preparation',
          'NIST CSF and CIS Controls alignment and roadmap development',
          'CERT-In compliance \u2014 incident reporting framework implementation',
          'RBI \u00B7 SEBI \u00B7 IRDAI cybersecurity guidelines \u2014 sector-specific advisory',
          'Third-party vendor risk assessment and supply chain security governance',
        ],
        tag: 'ISO 27001 \u00B7 SOC 2',
        tagStyle: {
          background: 'var(--green-pale)',
          color: 'var(--green)',
          borderColor: 'rgba(5,150,105,.18)',
        },
      },
      {
        title: 'Risk Management',
        icon: '\u2696',
        cardStyle: { '--cy-acc': 'var(--red)' },
        iconStyle: { background: 'var(--red-pale)' },
        items: [
          'Information security risk register \u2014 identification, scoring, and treatment plans',
          'Business Impact Analysis (BIA) \u2014 criticality tiers and recovery priorities',
          'Regulatory gap assessments with remediation roadmap and ownership matrix',
          'Continuous compliance monitoring and automated evidence collection',
          'Audit management \u2014 internal, external, and regulatory audit preparation',
          'Executive security dashboard reporting \u2014 CISO, CXO, and board-ready',
        ],
        tag: 'Risk Register \u00B7 BIA',
      },
      {
        title: 'Security Awareness & Training',
        icon: '\u{1F393}',
        cardStyle: { '--cy-acc': 'var(--blue)' },
        iconStyle: { background: 'var(--blue-pale)' },
        items: [
          'Phishing simulation campaigns \u2014 baseline, targeted, and spear-phishing',
          'Role-based security awareness modules \u2014 IT, finance, HR, operations, management',
          'CISO and board-level security briefings with threat landscape context',
          'Incident response tabletop exercises and crisis communication drills',
          'Security culture metrics, click rates, and quarterly maturity reporting',
          'Customised e-learning modules for department-specific risk scenarios',
        ],
        tag: 'Human Risk Reduction',
        tagStyle: {
          background: 'var(--blue-pale)',
          color: 'var(--blue)',
          borderColor: 'rgba(58,89,168,.18)',
        },
      },
      {
        title: 'Backup as a Service & BCP/DRaaS',
        icon: '\u{1F4BE}',
        cardStyle: { '--cy-acc': 'var(--green)' },
        iconStyle: { background: 'var(--green-pale)' },
        items: [
          'Automated cloud backup with 3-2-1 strategy across geographically separated locations',
          'Ransomware-resilient immutable backup with air-gap capabilities',
          'Business Continuity Plan (BCP) development, documentation, and testing',
          'Disaster Recovery as a Service (DRaaS) with contractual RPO/RTO SLAs',
          'Annual DR drills with documented exercise reports and gap remediation',
          'Backup monitoring, integrity checks, and restoration testing \u2014 continuous',
        ],
        tag: 'DR Tested \u00B7 RTO/RPO',
        tagStyle: {
          background: 'var(--green-pale)',
          color: 'var(--green)',
          borderColor: 'rgba(5,150,105,.18)',
        },
      },
    ],
  },
  consult: {
    type: 'consult',
    cards: [
      {
        title: 'SOC Build & Management',
        icon: '\u{1F3D7}',
        iconStyle: { background: 'var(--red-pale)' },
        description:
          'End-to-end Security Operations Centre design and implementation \u2014 from site selection and hardware procurement to SIEM deployment, playbook development, analyst hiring, and Tier 1/2/3 team structure. Delivered turnkey with ongoing management or knowledge-transferred to your internal team.',
        tags: [
          'Architecture Design',
          'SIEM Deployment',
          'Analyst Training',
          'Playbooks',
          'Handover',
        ],
      },
      {
        title: 'NOC Build & Management',
        icon: '\u{1F4E1}',
        iconStyle: { background: 'var(--blue-pale)' },
        description:
          'Network Operations Centre design, tooling, and staffing \u2014 24/7 infrastructure monitoring, alerting, and incident management. Covers multi-cloud, on-premise, and hybrid environments. Integrates with your SOC for unified security and operations coverage under a single pane of glass.',
        tags: ['NOC Design', 'Monitoring Tools', 'Runbooks', 'SLA Framework'],
      },
      {
        title: 'Data Centre Build Consultancy',
        icon: '\u{1F3E2}',
        iconStyle: { background: 'var(--green-pale)' },
        description:
          'Physical data centre design advisory covering Tier classification, power and cooling architecture, structured cabling, physical access controls, fire suppression systems, and compliance readiness. From greenfield DC builds to retrofits and modular expansion projects.',
        tags: [
          'Tier III/IV Design',
          'Power & Cooling',
          'Physical Security',
          'Compliance Audit',
        ],
      },
      {
        title: 'DC & Security Audits',
        icon: '\u{1F50E}',
        iconStyle: { background: 'var(--amber-pale)' },
        description:
          'Independent technical audits of data centres, network infrastructure, cloud environments, and security controls. Covers physical security, logical access, patch compliance, segmentation, backup integrity, and regulatory alignment. Delivers audit report with prioritised remediation roadmap.',
        tags: [
          'Technical Audit',
          'Gap Analysis',
          'Remediation Roadmap',
          'Independent',
        ],
      },
    ],
  },
};

export const complianceFrameworks = [
  {
    icon: '\u{1F3C5}',
    name: 'ISO 27001:2022',
    description:
      'Information Security Management System \u2014 implementation through certification',
  },
  {
    icon: '\u{1F6E1}',
    name: 'SOC 2 Type II',
    description:
      'Trust Services Criteria \u2014 readiness assessment and evidence preparation',
  },
  {
    icon: '\u{1F510}',
    name: 'NIST CSF',
    description:
      'Cybersecurity Framework \u2014 Identify, Protect, Detect, Respond, Recover',
  },
  {
    icon: '\u{1F4CA}',
    name: 'CIS Controls',
    description:
      '18 critical security controls \u2014 prioritised implementation and scoring',
  },
  {
    icon: '\u{1F3DB}',
    name: 'CERT-In',
    description:
      'Incident reporting compliance \u2014 6-hour mandatory reporting automation',
  },
  {
    icon: '\u{1F3E6}',
    name: 'RBI IT Guidelines',
    description:
      'Banking sector cybersecurity \u2014 Master Direction on IT and IS',
  },
  {
    icon: '\u{1F4CB}',
    name: 'DPDP Act 2023',
    description:
      'Digital Personal Data Protection \u2014 data governance and breach response',
  },
  {
    icon: '\u2696',
    name: 'SEBI / IRDAI',
    description:
      'Capital markets and insurance sector cybersecurity guidelines',
  },
];

export const whyPoints = [
  {
    icon: '\u23F1',
    title: 'Contractual Response SLAs',
    description:
      'P1 critical threats \u2014 active ransomware, credential compromise, live data exfiltration \u2014 have defined response and containment SLAs committed in writing. Not "best effort" \u2014 binding obligations with escalation paths and breach provisions.',
  },
  {
    icon: '\u{1F464}',
    title: 'Named Analyst on Your Account',
    description:
      'You get a dedicated Tier 2 security analyst who knows your environment, your compliance context, and your escalation preferences. Not a ticket queue \u2014 a person with institutional knowledge of your infrastructure.',
  },
  {
    icon: '\u{1F4CB}',
    title: 'Compliance Built Into Operations',
    description:
      "ISO 27001, SOC 2, RBI IT guidelines, DPDP Act \u2014 compliance frameworks are embedded into Thynkwise's SOC workflows from Day 1. Audit evidence collected continuously, not assembled under pressure two weeks before an auditor visits.",
  },
  {
    icon: '\u{1F517}',
    title: 'Multi-Vendor. Single Pane.',
    description:
      'CrowdStrike, Palo Alto, Fortinet, SentinelOne, Check Point \u2014 Thynkwise manages your existing security investments together in one integrated view. No rip-and-replace. No orphaned alerts across disconnected consoles.',
  },
  {
    icon: '\u{1F9E0}',
    title: 'Proactive Threat Hunting',
    description:
      'Reactive monitoring finds known threats. Eagle Eye threat hunting searches for adversaries already inside your environment \u2014 lateral movement, low-and-slow attacks, and living-off-the-land techniques that SIEM rules miss entirely.',
  },
  {
    icon: '\u{1F4CA}',
    title: 'Board-Ready Reporting',
    description:
      'Monthly executive reports covering threat landscape, incident summary, compliance posture, risk register status, and security KPIs \u2014 formatted for CISOs, CXOs, and board governance committees, not just technical teams.',
  },
];

export const statsBand = [
  {
    value: '350+',
    label: 'Security incidents investigated\nand closed in the last 12 months',
  },
  {
    value: '4,800+',
    label: 'Endpoints under managed\nXDR and SOC coverage',
  },
  {
    value: '97%',
    label: 'Critical incidents escalated\nwithin contractual SLA window',
  },
  {
    value: '<30 min',
    label: 'Average P1 analyst response\nfrom detection to engagement',
  },
];

export const caseStudies = [
  {
    headerStyle: { background: 'linear-gradient(135deg,#1f0808,#4a1010)' },
    icon: '\u{1F3E6}',
    industry: 'BFSI - Co-operative Bank - 22 Branches',
    company: 'Maharashtra Region',
    quote:
      '"We had no SOC. When ransomware hit three servers at 11pm on a Saturday, our IT team had no visibility and no playbook."',
    kpis: [
      {
        value: '12 min',
        label: 'Detection to containment',
        style: { background: 'var(--red-pale)' },
        valueStyle: { color: 'var(--red-dark)' },
      },
      {
        value: 'Zero',
        label: 'Data exfiltrated',
        style: { background: 'var(--green-pale)' },
        valueStyle: { color: 'var(--green)' },
      },
    ],
    outcome:
      'Thynkwise SOC detected ransomware lateral movement at 11:18pm. Three affected servers isolated within 12 minutes. Incident report dispatched within 3 hours. Core banking system unaffected. Post-incident audit: zero observations.',
    keyOutcome:
      '12-minute containment - Zero data loss - Clean post-incident audit',
    provider: 'SOC - Managed XDR - GRC',
  },
  {
    headerStyle: { background: 'linear-gradient(135deg,#0a1520,#163060)' },
    icon: '\u{1F3ED}',
    industry: 'Manufacturing - Auto Components - Pune',
    company: 'ERP + OT Environment',
    quote:
      '"Our ISO 27001 renewal was 60 days out and our last VAPT was 18 months ago. We had no idea what was exposed."',
    kpis: [
      {
        value: '47',
        label: 'Critical vulnerabilities found',
        style: { background: 'var(--red-pale)' },
        valueStyle: { color: 'var(--red-dark)' },
      },
      {
        value: 'ISO \u2713',
        label: '27001 renewed - zero NC',
        style: { background: 'var(--green-pale)' },
        valueStyle: { color: 'var(--green)' },
      },
    ],
    outcome:
      'VAPT uncovered 47 critical and high vulnerabilities across web apps, ERP interfaces, and OT segments. Full remediation in 45 days. ISO 27001 renewal: zero non-conformances.',
    keyOutcome: '47 critical vulns patched in 45 days - ISO 27001 renewed clean',
    provider: 'VAPT - GRC - ISO 27001',
  },
  {
    headerStyle: { background: 'linear-gradient(135deg,#0a1a10,#143a18)' },
    icon: '\u{1F3DB}',
    industry: 'Government - State IT Department',
    company: 'Tier 1 State - SOC Build Project',
    quote:
      '"We had the mandate to build a state-level SOC but no blueprint, no vendor relationships, and a 90-day procurement deadline."',
    kpis: [
      {
        value: '18 wks',
        label: 'PO to operational SOC',
        style: { background: 'var(--amber-pale)' },
        valueStyle: { color: 'var(--amber)' },
      },
      {
        value: 'GFR \u2713',
        label: 'Compliant procurement',
        style: { background: 'var(--green-pale)' },
        valueStyle: { color: 'var(--green)' },
      },
    ],
    outcome:
      'Full SOC build: site design, SIEM deployment, playbook development, analyst training, integration with 14 state portals. Operational in 18 weeks. CERT-In reporting active from Day 1.',
    keyOutcome: 'Operational SOC in 18 weeks - GFR-compliant - CERT-In live Day 1',
    provider: 'SOC Build - GRC - Government',
  },
];

export const partnerSections = [
  {
    label: 'Endpoint Protection \u00B7 EDR \u00B7 XDR',
    cards: [
      {
        accent: 'rgba(255,60,0,.4)',
        abbrBg: '#FF3C00',
        abbr: 'CS',
        name: 'CrowdStrike',
        role: 'Falcon EDR \u00B7 XDR \u00B7 NG-SIEM',
      },
      {
        accent: 'rgba(106,0,244,.4)',
        abbrBg: '#6A00F4',
        abbr: 'S1',
        name: 'SentinelOne',
        role: 'Singularity \u00B7 AI-Native XDR',
      },
      {
        accent: 'rgba(0,165,80,.4)',
        abbrBg: '#00A550',
        abbr: 'PA',
        name: 'Palo Alto',
        role: 'Cortex XDR \u00B7 XSIAM',
      },
      {
        accent: 'rgba(0,120,212,.4)',
        abbrBg: '#0078D4',
        abbr: 'MS',
        name: 'Microsoft',
        role: 'Defender XDR \u00B7 Sentinel SIEM',
      },
      {
        accent: 'rgba(0,136,204,.4)',
        abbrBg: '#0088CC',
        abbr: 'So',
        name: 'Sophos',
        role: 'Intercept X \u00B7 MDR Service',
      },
    ],
  },
  {
    label: 'Network Security \u00B7 Firewall \u00B7 SASE',
    cards: [
      {
        accent: 'rgba(238,46,32,.4)',
        abbrBg: '#EE2E20',
        abbr: 'Ft',
        name: 'Fortinet',
        role: 'FortiGate NGFW \u00B7 FortiSOC',
      },
      {
        accent: 'rgba(0,96,192,.4)',
        abbrBg: '#0060C0',
        abbr: 'CP',
        name: 'Check Point',
        role: 'Quantum NGFW \u00B7 Harmony',
      },
      {
        accent: 'rgba(0,165,80,.4)',
        abbrBg: '#00A550',
        abbr: 'PAN',
        name: 'Palo Alto NGFW',
        role: 'PA-Series \u00B7 Prisma SASE',
      },
      {
        accent: 'rgba(0,98,186,.4)',
        abbrBg: '#0062BA',
        abbr: 'Ci',
        name: 'Cisco',
        role: 'Umbrella \u00B7 SecureX \u00B7 ASA',
      },
      {
        accent: 'rgba(0,180,216,.4)',
        abbrBg: '#00B4D8',
        abbr: 'Zs',
        name: 'Zscaler',
        role: 'ZIA \u00B7 ZPA \u00B7 Zero Trust',
      },
    ],
  },
  {
    label: 'Identity \u00B7 SIEM \u00B7 GRC',
    cards: [
      {
        accent: 'rgba(0,114,206,.4)',
        abbrBg: '#0072CE',
        abbr: 'Ok',
        name: 'Okta',
        role: 'Identity \u00B7 SSO \u00B7 MFA',
      },
      {
        accent: 'rgba(0,54,136,.4)',
        abbrBg: '#003688',
        abbr: 'CA',
        name: 'CyberArk',
        role: 'PAM \u00B7 Privileged Access',
      },
      {
        accent: 'rgba(0,40,86,.4)',
        abbrBg: '#002856',
        abbr: 'IBM',
        name: 'IBM QRadar',
        role: 'SIEM \u00B7 SOAR \u00B7 Threat Intel',
      },
      {
        accent: 'rgba(115,34,0,.4)',
        abbrBg: '#732200',
        abbr: 'Sp',
        name: 'Splunk',
        role: 'SIEM \u00B7 UEBA \u00B7 Observability',
      },
      {
        accent: 'rgba(232,65,24,.4)',
        abbrBg: '#E84118',
        abbr: 'TD',
        name: 'Trend Micro',
        role: 'Vision One \u00B7 Cloud Security',
      },
    ],
  },
];

export const mainFaqs = [
  {
    question: "What's the difference between your SOC service and a traditional MSSP?",
    answer:
      'Traditional MSSPs deliver log aggregation and alert forwarding. Thynkwise delivers investigation, containment, and documented outcomes. Every P1 alert is investigated by a named Tier 2 analyst \u2014 not escalated to a shared queue. Response SLAs are contractual with penalty provisions, and you receive monthly reports with security metrics your board can understand.',
  },
  {
    question:
      'Can Thynkwise work with our existing security tools - CrowdStrike, Sentinel, Fortinet?',
    answer:
      'Yes \u2014 and this is one of our core differentiators. Thynkwise is multi-vendor by design. We integrate with CrowdStrike, SentinelOne, Microsoft Sentinel, Palo Alto Cortex, Fortinet FortiSIEM, IBM QRadar, Splunk, and most major security platforms. We manage your existing investments under one SIEM view rather than forcing a platform replacement. Our initial engagement includes a technology inventory and integration assessment.',
  },
  {
    question: 'How does CERT-In compliance work under a managed SOC model?',
    answer:
      "CERT-In's 2022 directive requires organisations to report certain cybersecurity incidents within 6 hours of discovery. Thynkwise's SOC workflow is built to automatically generate and dispatch CERT-In formatted incident reports when triggered events are detected and confirmed. Reporting is part of the managed SOC engagement \u2014 not an add-on service.",
  },
  {
    question:
      'What does the onboarding process look like - how quickly can SOC coverage start?',
    answer:
      'Our onboarding follows a structured 4-week process: Week 1 \u2014 technology inventory and SIEM integration setup; Week 2 \u2014 log source onboarding and initial correlation rule baseline; Week 3 \u2014 playbook customisation and team briefing; Week 4 \u2014 go-live with monitored coverage and initial threat baseline report. For emergency onboarding, we can have basic log aggregation and alerting live within 72 hours while the full deployment completes in parallel.',
  },
  {
    question:
      'Do you offer VAPT as a standalone engagement or only as part of a managed contract?',
    answer:
      'Both. Thynkwise delivers VAPT as standalone project engagements (single test with report) and as part of managed security contracts with scheduled quarterly or semi-annual assessments. Standalone VAPT engagements include a full technical report, executive summary, risk-prioritised remediation roadmap, and a retest credit to verify remediation effectiveness within 90 days of the original assessment.',
  },
  {
    question: 'How are security incidents reported to our leadership team?',
    answer:
      'Thynkwise provides three reporting layers: real-time alerts to your designated security contacts via email, SMS, or Slack integration; a live security dashboard for IT and security teams; and a monthly executive report for CISOs, CXOs, and board governance committees. The executive report covers incident summary, threat landscape, compliance posture, risk register status, and forward-looking security recommendations \u2014 formatted for non-technical decision-makers.',
  },
];

export const aeoFaqs = [
  {
    question: 'What is SOC as a Service?',
    answer:
      'SOC-as-a-Service (Security Operations Centre as a Service) is a managed security model where a provider like Thynkwise operates a full security operations centre on your behalf \u2014 providing 24/7 threat monitoring, alert triage, incident response, and compliance reporting without the cost of building an in-house SOC.',
  },
  {
    question: 'What is managed XDR?',
    answer:
      'Managed Extended Detection and Response (XDR) combines endpoint, network, cloud, and identity telemetry into a unified detection and response platform. Thynkwise manages XDR solutions from CrowdStrike, SentinelOne, and Microsoft Defender \u2014 with 24/7 analyst coverage.',
  },
  {
    question: 'What is VAPT in cybersecurity?',
    answer:
      'Vulnerability Assessment and Penetration Testing (VAPT) is a security testing methodology that identifies weaknesses in networks, applications, and infrastructure. Thynkwise conducts VAPT across web applications, APIs, networks, cloud environments, and thick clients.',
  },
  {
    question: 'What compliance frameworks does Thynkwise support?',
    answer:
      'Thynkwise supports ISO 27001, SOC 2, PCI-DSS, HIPAA, GDPR, RBI cybersecurity framework, SEBI guidelines, CERT-In compliance, and NIST CSF \u2014 through GRC advisory, gap assessments, and managed compliance operations.',
  },
  {
    question: 'What is dark web monitoring?',
    answer:
      'Dark web monitoring continuously scans underground forums, paste sites, and dark web marketplaces for leaked credentials, sensitive data, and brand mentions associated with your organisation \u2014 alerting your security team before breaches can be weaponised.',
  },
];

export const whatsappPath =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';
