import SectionHeader from './SectionHeader';

const whyItems = [
  {
    icon: '\u{1F3D7}\uFE0F',
    title: 'Architecture-First',
    text: 'Every engagement starts with a workload-level architecture review. We design before we deploy - no lift-and-shift that creates bigger problems in the cloud.',
    delay: 'd1',
  },
  {
    icon: '\u{1F464}',
    title: 'Named Account Team',
    text: 'A dedicated cloud architect and account manager - not a shared pool or rotating helpdesk. You speak to the person who built your infrastructure.',
    delay: 'd2',
  },
  {
    icon: '\u{1F4CA}',
    title: 'Transparent FinOps',
    text: 'Monthly cost reporting, rightsizing recommendations, and a documented spend reduction plan - not vague "savings" claims with no mechanism behind them.',
    delay: 'd3',
  },
  {
    icon: '\u{1F510}',
    title: 'Security Integrated, Not Add-On',
    text: 'Managed SOC, endpoint protection, and compliance frameworks woven into cloud operations from day one - not sold separately after a security incident.',
    delay: 'd1',
  },
  {
    icon: '\u2696\uFE0F',
    title: 'Vendor-Agnostic Advice',
    text: 'Thynkwise is certified across AWS, Azure, GCP, and sovereign cloud. We recommend the platform that fits your workload - not the one with the best margin for us.',
    delay: 'd2',
  },
  {
    icon: '\u{1F4CB}',
    title: 'Compliance as a Workflow',
    text: 'RBI, SEBI, DPDP, ISO 27001, SOC 2 - compliance frameworks built into architecture and operations, not retrofitted at audit time under pressure.',
    delay: 'd3',
  },
];

export default function WhyThynkwiseSection() {
  return (
    <section className="sec sec-dk">
      <div className="container">
        <SectionHeader
          badge="Why Thynkwise"
          badgeClassName="badge badge-orange"
          title="The Difference a Managed Partner Makes"
          subtitle="Cloud providers give you infrastructure. Thynkwise gives you infrastructure, operations, security, and a team that treats your cloud like they own it."
          titleStyle={{ color: '#fff' }}
        />

        <div className="why-grid">
          {whyItems.map((item) => (
            <div key={item.title} className={`why-card rv ${item.delay}`}>
              <span className="why-ico">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
