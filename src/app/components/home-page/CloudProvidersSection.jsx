import Link from 'next/link';
import SectionHeader from './SectionHeader';

const providers = [
  {
    id: 'aws',
    name: 'Amazon Web Services',
    tier: 'Advanced Reseller Partner',
    href: '/aws',
    cta: 'Explore AWS Services',
    accent: '#f90',
    border: '#f90',
    shadow: 'rgba(255,153,0,0.12)',
    services: [
      'EC2, RDS, S3, Lambda',
      'EKS, ECS, Fargate',
      'SageMaker AI/ML',
      'AWS Security Hub',
    ],
    delay: 'd1',
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    tier: 'Cloud Solution Provider',
    href: '/azure',
    cta: 'Explore Azure Services',
    accent: '#0078d4',
    border: '#0078d4',
    shadow: 'rgba(0,120,212,0.12)',
    services: [
      'Virtual Machines, AKS',
      'Azure AD & Sentinel SIEM',
      'Azure OpenAI Service',
      'M365 & Teams licensing',
    ],
    delay: 'd2',
  },
  {
    id: 'gcp',
    name: 'Google Cloud Platform',
    tier: 'GCP Reseller Partner',
    href: '/gcp',
    cta: 'Explore GCP Services',
    accent: '#4285f4',
    border: '#4285f4',
    shadow: 'rgba(66,133,244,0.12)',
    services: [
      'GKE, Compute Engine',
      'BigQuery & Dataflow',
      'Vertex AI & Gemini',
      'Cloud Armor WAF',
    ],
    delay: 'd3',
  },
  {
    id: 'sovereign',
    name: 'Indian Sovereign Cloud',
    tier: 'Multi-Provider Partner',
    href: '/indian-csps',
    cta: 'Explore Sovereign Cloud',
    accent: '#00968A',
    border: '#00968A',
    shadow: 'rgba(0,150,138,0.12)',
    services: [
      'MeitY-empanelled platforms',
      'ESDS, Yotta, CtrlS, Sify',
      'Data residency & sovereignty',
      'RBI / DPDP compliance',
    ],
    delay: 'd4',
  },
];

function CloudProviderLogo({ id }) {
  if (id === 'aws') {
    return (
      <svg viewBox="0 0 80 32" fill="none">
        <text
          x="0"
          y="24"
          fontFamily="Arial Black"
          fontSize="16"
          fontWeight="900"
          fill="#232F3E"
        >
          aws
        </text>
        <rect x="36" y="8" width="44" height="16" rx="8" fill="#f90" opacity=".9" />
        <text
          x="40"
          y="20"
          fontFamily="Arial"
          fontSize="8"
          fill="#fff"
          fontWeight="700"
        >
          PARTNER
        </text>
      </svg>
    );
  }

  if (id === 'azure') {
    return (
      <svg viewBox="0 0 80 32" fill="none">
        <text
          x="0"
          y="24"
          fontFamily="Arial Black"
          fontSize="13"
          fontWeight="900"
          fill="#0078d4"
        >
          Azure
        </text>
      </svg>
    );
  }

  if (id === 'gcp') {
    return (
      <svg viewBox="0 0 80 32" fill="none">
        <text
          x="0"
          y="22"
          fontFamily="Arial Black"
          fontSize="10"
          fontWeight="900"
          fill="#4285f4"
        >
          Google
        </text>
        <text
          x="44"
          y="22"
          fontFamily="Arial"
          fontSize="10"
          fontWeight="600"
          fill="#5f6368"
        >
          Cloud
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 80 32" fill="none">
      <rect x="0" y="6" width="80" height="20" rx="6" fill="rgba(0,150,138,0.08)" />
      <text
        x="8"
        y="21"
        fontFamily="Arial"
        fontSize="10"
        fontWeight="700"
        fill="#00968A"
      >
        Sovereign Cloud
      </text>
    </svg>
  );
}

export default function CloudProvidersSection() {
  return (
    <section className="sec sec-cream">
      <div className="container">
        <SectionHeader
          badge="Partner Ecosystem"
          badgeClassName="badge badge-orange"
          title="Every Major Cloud Platform. One Expert Team."
          subtitle="Thynkwise is an authorised reseller and managed services partner across all major cloud providers. We architect without bias - the right cloud for the right workload, every time."
        />

        <div className="cloud-grid">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className={`cloud-card rv ${provider.delay}`}
              style={{
                '--cc-border': provider.border,
                '--cc-shadow': provider.shadow,
                '--cc-accent': provider.accent,
              }}
            >
              <div className="cc-logo">
                <CloudProviderLogo id={provider.id} />
              </div>
              <div className="cc-name">{provider.name}</div>
              <div className="cc-tier" style={{ color: provider.accent }}>
                {provider.tier}
              </div>
              <div className="cc-divider" />
              <ul className="cc-services" style={{ '--cc-accent': provider.accent }}>
                {provider.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
              <Link href={provider.href} className="cc-link" style={{ color: provider.accent }}>
                {provider.cta} {'\u2192'}
              </Link>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '22px', fontSize: '0.82rem' }}>
          <Link href="/compare" style={{ color: 'var(--blue)', fontWeight: 600 }}>
            Not sure which cloud? Compare AWS vs Azure vs GCP {'\u2192'}
          </Link>
        </p>
      </div>
    </section>
  );
}
