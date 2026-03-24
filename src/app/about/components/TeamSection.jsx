import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';

const defaultHeading = {
  title: "Enterprise buyers deserve to know who's responsible for their cloud.",
  description:
    'Named account managers, named escalation contacts, and a leadership team that takes calls from CISOs. No helpdesk anonymity at Thynkwise.',
};

const defaultCards = [
  {
    name: 'Aarav Krishnamurthy',
    role: 'Founder & CEO',
    skills: [{ point: 'AWS SA Pro' }, { point: 'Azure Arch' }, { point: 'GCP PCA' }],
    description:
      'Ex-AWS, 12 years cloud. Led enterprise sales across APAC before founding Thynkwise. Personally certified across all three hyperscalers - the only CEO in the multi-cloud reseller space who can say that.',
  },
  {
    name: 'Priya Pillai',
    role: 'CTO & Head of Architecture',
    skills: [{ point: 'AWS DevOps Pro' }, { point: 'CKA' }, { point: 'TOGAF' }],
    description:
      'Ex-Microsoft, 15 years enterprise architecture. Built Azure compliance frameworks for global financial institutions. Architect of Thynkwise\'s BFSI landing zone deployed across 45+ institutions worldwide.',
  },
  {
    name: 'Rahul Sharma',
    role: 'VP - BFSI & Enterprise Sales',
    skills: [{ point: 'CISM' }, { point: 'AWS Security' }, { point: 'PCI-QSA' }],
    description:
      '20 years BFSI technology, former IT Head at a major banking group. Rare dual perspective - having sat on both sides of regulatory IT inspections as auditee and now as cloud compliance advisor.',
  },
  {
    name: 'Nisha Menon',
    role: 'Head of Managed Services & SRE',
    skills: [{ point: 'AWS SysOps' }, { point: 'Azure Admin' }, { point: 'GCP Ops' }],
    description:
      'Built and leads Thynkwise\'s SRE team across three delivery centres. Set the P1 response benchmark and reviews every SLA miss within 24 hours.',
  },
];

const headerBackgrounds = [
  'linear-gradient(135deg,#1a2a5e,#2a4285)',
  'linear-gradient(135deg,#7c3aed,#a78bfa)',
  'linear-gradient(135deg,#d96c00,#f6881f)',
  'linear-gradient(135deg,#00a896,#4dc4b8)',
];

const avatarBackgrounds = [
  'linear-gradient(135deg,var(--about-orange),#f0a84e)',
  'linear-gradient(135deg,#059669,#10b981)',
  'linear-gradient(135deg,#2a4285,#5577cc)',
  'linear-gradient(135deg,var(--about-blue),var(--about-blue-light))',
];

function getInitials(name) {
  return (name || '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function TeamSection({ section }) {
  const heading = section?.heading || defaultHeading;
  const cards = section?.team_card?.length ? section.team_card : defaultCards;

  return (
    <section className="ps ps-w">
      <div className="container">
        <span className="badge bb sec-ey rv">The Team</span>
        <h2 className="sec-ti rv">{heading.title}</h2>
        <p className="sec-su rv">{heading.description}</p>
        <div className="team-grid">
          {cards.map((card, index) => {
            const imageUrl = getStrapiMediaUrl(card.image);
            const skills = card.skills?.length ? card.skills : defaultCards[index % defaultCards.length].skills;

            return (
              <div key={card.id || `${card.name}-${index}`} className={`team-card rv d${(index % 4) + 1}`}>
                <div className="tc-header" style={{ background: headerBackgrounds[index % headerBackgrounds.length] }}>
                  <div className="tc-avatar" style={{ background: avatarBackgrounds[index % avatarBackgrounds.length] }}>
                    {imageUrl ? (
                      <CmsImage
                        src={imageUrl}
                        alt={card.name}
                        style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                      />
                    ) : (
                      getInitials(card.name)
                    )}
                  </div>
                </div>
                <div className="tc-body">
                  <div className="tc-name">{card.name}</div>
                  <div className="tc-title">{card.role}</div>
                  <div className="tc-certs">
                    {skills.map((skill, skillIndex) => (
                      <span key={`${card.id || card.name}-${skillIndex}`} className="cert-chip">
                        {skill.point}
                      </span>
                    ))}
                  </div>
                  <p className="tc-bio">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
