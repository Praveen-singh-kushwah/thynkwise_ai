import Link from 'next/link';
import SectionHeader from './SectionHeader';

const industries = [
  {
    href: '/bfsi-cloud',
    icon: '\u{1F3E6}',
    iconBg: 'rgba(5,150,105,0.08)',
    title: 'BFSI',
    subtitle: 'RBI, SEBI, IRDAI compliant cloud',
    delay: 'd1',
  },
  {
    href: null,
    icon: '\u{1F3E5}',
    iconBg: 'rgba(220,38,38,0.07)',
    title: 'Healthcare',
    subtitle: 'HIPAA, ABDM, HL7 FHIR ready',
    delay: 'd2',
  },
  {
    href: null,
    icon: '\u{1F3ED}',
    iconBg: 'rgba(124,58,237,0.08)',
    title: 'Manufacturing',
    subtitle: 'OT-IT convergence, IIoT, ERP cloud',
    delay: 'd3',
  },
  {
    href: null,
    icon: '\u{1F6D2}',
    iconBg: 'rgba(8,145,178,0.08)',
    title: 'E-Commerce',
    subtitle: 'High-scale, seasonal burst, CDN',
    delay: 'd4',
  },
  {
    href: null,
    icon: '\u{1F3DB}\uFE0F',
    iconBg: 'rgba(58,89,168,0.08)',
    title: 'Government & PSU',
    subtitle: 'MeitY empanelled, GFR compliant',
    delay: 'd1',
  },
  {
    href: null,
    icon: '\u{1F393}',
    iconBg: 'rgba(246,136,31,0.08)',
    title: 'Education',
    subtitle: 'LMS, student data, EdTech scale',
    delay: 'd2',
  },
  {
    href: null,
    icon: '\u{1F4E1}',
    iconBg: 'rgba(22,163,74,0.08)',
    title: 'Telecom',
    subtitle: '5G NF, BSNL/private cloud, RAN',
    delay: 'd3',
  },
  {
    href: '/gpuaas',
    icon: '\u{1F916}',
    iconBg: 'rgba(168,85,247,0.08)',
    title: 'AI & Research',
    subtitle: 'GPU clusters, LLM training, HPC',
    delay: 'd4',
  },
];

function IndustryCard({ industry }) {
  const content = (
    <>
      <div className="ind-ico" style={{ background: industry.iconBg }}>
        {industry.icon}
      </div>
      <div>
        <h3>{industry.title}</h3>
        <p>{industry.subtitle}</p>
      </div>
    </>
  );

  if (industry.href) {
    return (
      <Link href={industry.href} className={`ind-card rv ${industry.delay}`}>
        {content}
      </Link>
    );
  }

  return <div className={`ind-card rv ${industry.delay}`}>{content}</div>;
}

export default function IndustriesSection() {
  return (
    <section className="sec sec-lt">
      <div className="container">
        <SectionHeader
          badge="Industries We Serve"
          badgeClassName="badge badge-blue"
          title="Built for Complex, Regulated Environments"
          subtitle="Cloud deployments in regulated industries are not the same as general IT projects. Thynkwise brings sector-specific experience to every engagement."
        />

        <div className="ind-grid">
          {industries.map((industry) => (
            <IndustryCard key={industry.title} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}
