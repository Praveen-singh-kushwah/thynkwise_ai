import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import SectionHeader from './SectionHeader';
import { whoDeploysItems } from './data';

const toneClasses = ['gpu-tone-cyan', 'gpu-tone-orange', 'gpu-tone-green', 'gpu-tone-purple', 'gpu-tone-amber', 'gpu-tone-muted'];

export default function WhoDeploysSection({ section }) {
  const cards = section?.gpuaas_deploy_user?.length
    ? section.gpuaas_deploy_user.map((item, index) => ({
        ...whoDeploysItems[index % whoDeploysItems.length],
        id: item.id,
        title: item.title || whoDeploysItems[index % whoDeploysItems.length].title,
        description: item.description || whoDeploysItems[index % whoDeploysItems.length].description,
        iconUrl: getStrapiMediaUrl(item.icon),
      }))
    : whoDeploysItems;

  return (
    <section className="gpu-light-sec">
      <div className="container">
        <SectionHeader
          badge="Who Deploys GPU Infrastructure Through Thynkwise"
          title={section?.heading?.title || 'Built for the Teams Pushing the Limits'}
          description={section?.heading?.description || 'From a solo researcher to a hyperscale AI team - if GPU performance is a constraint, Thynkwise removes it.'}
          centered
        />
        <div className="gpu-who-grid">
          {cards.map((card, index) => (
            <div key={card.id || `${card.title}-${index}`} className={`gpu-who-card rv d${(index % 4) + 1} ${toneClasses[index % toneClasses.length]}`}>
              <div className="gpu-who-icon">
                {card.iconUrl ? (
                  <CmsImage src={card.iconUrl} alt={card.title} style={{ width: 28, height: 28, objectFit: 'contain' }} />
                ) : (
                  card.icon
                )}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
