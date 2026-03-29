'use client';

import useScrollReveal from '../../components/useScrollReveal';
import HeroSection from './HeroSection';
import ComparisonSection from './ComparisonSection';
import WhyThynkwiseSection from './WhyThynkwiseSection';
import GcpServicesSection from './GcpServicesSection';
import GcpCertificationsSection from './GcpCertificationsSection';
import RealWorldGcpSection from './RealWorldGcpSection';
import ClientOutcomesSection from './ClientOutcomesSection';
import ByTheNumbersSection from './ByTheNumbersSection';
import CommonQuestionsSection from './CommonQuestionsSection';
import FinalCtaSection from './FinalCtaSection';
import AeoFaqSection from './AeoFaqSection';

export default function GcpPage({ data }) {
  useScrollReveal();

  return (
    <div className="gcp-page">
      <HeroSection hero={data?.hero} />
      <ComparisonSection section={data?.comparison} />
      <WhyThynkwiseSection section={data?.why_thynkwise_gcp} />
      <GcpServicesSection section={data?.gcp_services_portfolio} />
      <GcpCertificationsSection section={data?.gcp_certifications} />
      <RealWorldGcpSection section={data?.real_world_gcp_in_india} />
      <ClientOutcomesSection section={data?.client_outcomes} />
      <ByTheNumbersSection section={data?.by_the_numbers} />
      <CommonQuestionsSection section={data?.common_questions} />
      <FinalCtaSection section={data?.final_cta} />
      <AeoFaqSection section={data?.faq} />
    </div>
  );
}
