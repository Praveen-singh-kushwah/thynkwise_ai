'use client';

import useScrollReveal from '../../components/useScrollReveal';
import HeroSection from './HeroSection';
import WhyAzureSection from './WhyAzureSection';
import AzureServicesSection from './AzureServicesSection';
import AzureForBfsiSection from './AzureForBfsiSection';
import TeamCredentialsSection from './TeamCredentialsSection';
import AzureSuccessStoriesSection from './AzureSuccessStoriesSection';
import ComparisonSection from './ComparisonSection';
import CommonQuestionsSection from './CommonQuestionsSection';
import FinalCtaSection from './FinalCtaSection';
import AeoFaqSection from './AeoFaqSection';

export default function AzurePage({ data }) {
  useScrollReveal();

  return (
    <div className="azure-page">
      <HeroSection hero={data?.hero} />
      <WhyAzureSection section={data?.why_azure} />
      <AzureServicesSection section={data?.azure_services} />
      <AzureForBfsiSection section={data?.azure_for_bfsi_india} />
      <TeamCredentialsSection section={data?.team_credentials} />
      <AzureSuccessStoriesSection section={data?.azure_success_stories} />
      <ComparisonSection section={data?.comparison} />
      <CommonQuestionsSection section={data?.common_questions} />
      <FinalCtaSection section={data?.cta} />
      <AeoFaqSection section={data?.faq} />
    </div>
  );
}
