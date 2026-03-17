import SectionHeader from './SectionHeader';
import { industryUseCases } from './data';

export default function IndustryUseCasesSection() {
  return (
    <section className="ps ps-w">
      <div className="container">
        <SectionHeader
          badge="By Industry"
          badgeClassName="badge bo"
          title="Managed Services Across Every Sector"
          description="Each industry has different compliance, uptime, and security requirements. Thynkwise tailors managed services to the specific demands of your sector."
        />

        <div className="uc-grid">
          {industryUseCases.map((useCase) => (
            <div key={useCase.title} className={`uc-card rv ${useCase.delay}`}>
              <div className="uc-icon">{useCase.icon}</div>
              <div className="uc-body">
                <h3>{useCase.title}</h3>
                <p>{useCase.text}</p>
                <div className="uc-tags">
                  {useCase.tags.map((tag) => (
                    <span key={tag} className="uc-tag">
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
