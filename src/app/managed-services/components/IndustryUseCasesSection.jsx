import SectionHeader from './SectionHeader';
import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import { industryUseCases } from './data';

export default function IndustryUseCasesSection({ section }) {
  const useCases = section?.usecase?.length
    ? section.usecase.map((useCase, index) => ({
        ...industryUseCases[index % industryUseCases.length],
        id: useCase.id,
        title: useCase.industry || industryUseCases[index % industryUseCases.length].title,
        text: useCase.description || industryUseCases[index % industryUseCases.length].text,
        iconUrl: getStrapiMediaUrl(useCase.icon),
        tags: useCase.tags?.map((tag) => tag.tag).filter(Boolean) || industryUseCases[index % industryUseCases.length].tags,
      }))
    : industryUseCases;

  return (
    <section className="ps ps-w">
      <div className="container">
        <SectionHeader
          badge="By Industry"
          badgeClassName="badge bo"
          title={section?.heading || 'Managed Services Across Every Sector'}
          description="Each industry has different compliance, uptime, and security requirements. Thynkwise tailors managed services to the specific demands of your sector."
        />

        <div className="uc-grid">
          {useCases.map((useCase, index) => (
            <div key={useCase.id || `${useCase.title}-${index}`} className={`uc-card rv ${useCase.delay}`}>
              <div className="uc-icon">
                {useCase.iconUrl ? (
                  <CmsImage
                    src={useCase.iconUrl}
                    alt={useCase.title}
                    style={{ width: 28, height: 28, objectFit: 'contain' }}
                  />
                ) : (
                  useCase.icon
                )}
              </div>
              <div className="uc-body">
                <h3>{useCase.title}</h3>
                <p>{useCase.text}</p>
                <div className="uc-tags">
                  {useCase.tags.map((tag, tagIndex) => (
                    <span key={`${useCase.id || useCase.title}-${tagIndex}`} className="uc-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
