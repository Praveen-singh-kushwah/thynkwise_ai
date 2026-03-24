'use client';

import useScrollReveal from '../../components/useScrollReveal';
import HeroSection from './HeroSection';
import ComparisonSection from './ComparisonSection';
import WhyThynkwiseSection from './WhyThynkwiseSection';
import AwsServicesSection from './AwsServicesSection';
import CertifiedExpertiseSection from './CertifiedExpertiseSection';
import RealWorldAwsSection from './RealWorldAwsSection';
import ClientOutcomesSection from './ClientOutcomesSection';
import AwsByTheNumbersSection from './AwsByTheNumbersSection';
import CommonQuestionsSection from './CommonQuestionsSection';
import FinalCtaSection from './FinalCtaSection';
import AeoFaqSection from './AeoFaqSection';

export default function AwsPage({ data }) {
  useScrollReveal();

  return (
    <div className="aws-page">
      <HeroSection hero={data?.hero} />
      <ComparisonSection section={data?.comparison} />
      <WhyThynkwiseSection section={data?.why_thynkwise} />
      <AwsServicesSection section={data?.aws_services} />
      <CertifiedExpertiseSection section={data?.certified_expertise} />
      <RealWorldAwsSection section={data?.real_world_aws} />
      <ClientOutcomesSection section={data?.client_outcomes} />
      <AwsByTheNumbersSection section={data?.by_the_numbers} />
      <CommonQuestionsSection section={data?.common_questions} />
      <FinalCtaSection section={data?.cta} />
      <AeoFaqSection section={data?.faq} />
    </div>
  );
}
