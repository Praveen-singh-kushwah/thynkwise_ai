import Link from 'next/link';
import SectionHeader from './SectionHeader';

const caseStudies = [
  {
    industry: 'BFSI - NBFC',
    company: 'Mid-Market Lending Platform',
    icon: '\u{1F3E6}',
    iconBg: 'rgba(5,150,105,0.1)',
    challenge:
      '"We needed to migrate our core lending system to cloud without a compliance gap. RBI audit was 90 days away."',
    kpis: [
      { value: '0', label: 'RBI audit observations' },
      { value: '34%', label: 'Infrastructure cost saved' },
    ],
    service: 'AWS Migration / RBI Compliance Architecture',
    delay: 'd1',
  },
  {
    industry: 'Manufacturing - Auto Components',
    company: 'Mid-Size OEM Supplier',
    icon: '\u{1F3ED}',
    iconBg: 'rgba(58,89,168,0.08)',
    challenge:
      '"Our Azure spend had grown 3x in 18 months with no visibility. We needed FinOps discipline, not just a bigger budget."',
    kpis: [
      { value: '41%', label: 'Azure spend reduction' },
      { value: '6 wks', label: 'To full FinOps coverage' },
    ],
    service: 'Azure Managed Services / FinOps / Reserved Instances',
    delay: 'd2',
  },
  {
    industry: 'Technology - AI Startup',
    company: 'Series B SaaS Company',
    icon: '\u{1F916}',
    iconBg: 'rgba(124,58,237,0.1)',
    challenge:
      '"We needed H100 GPU clusters for LLM training but could not justify hyperscaler GPU prices for a 12-month training runway."',
    kpis: [
      { value: '52%', label: 'GPU cost vs hyperscaler' },
      { value: '8 days', label: 'From PO to first GPU job' },
    ],
    service: 'GPUaaS / H100 Cluster / Managed ML Platform',
    delay: 'd3',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="sec sec-cream">
      <div className="container">
        <SectionHeader
          badge="Client Outcomes"
          badgeClassName="badge badge-blue"
          title="Results That Matter"
          subtitle="Not anecdotes - documented outcomes with specific numbers, from real client engagements across industries."
        />

        <div className="cs-grid">
          {caseStudies.map((study) => (
            <div key={study.company} className={`cs-card rv ${study.delay}`}>
              <div className="cs-hd">
                <div className="cs-ico" style={{ background: study.iconBg }}>
                  {study.icon}
                </div>
                <div>
                  <div className="cs-ind">{study.industry}</div>
                  <div className="cs-co">{study.company}</div>
                </div>
              </div>
              <div className="cs-body">
                <p className="cs-challenge">{study.challenge}</p>
                <div className="cs-kpis">
                  {study.kpis.map((kpi) => (
                    <div key={kpi.label} className="cs-kpi">
                      <div className="cs-kpi-n">{kpi.value}</div>
                      <div className="cs-kpi-l">{kpi.label}</div>
                    </div>
                  ))}
                </div>
                <div className="cs-service">{study.service}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link href="/about" className="btn btn-ghost">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
