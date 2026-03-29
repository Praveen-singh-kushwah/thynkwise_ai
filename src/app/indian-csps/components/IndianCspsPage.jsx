'use client';

import useScrollReveal from '../../components/useScrollReveal';
import HeroSection from './HeroSection';
import ComparisonSection from './ComparisonSection';
import WhyPartnerSection from './WhyPartnerSection';
import ServicesSection from './ServicesSection';
import UseCasesSection from './UseCasesSection';
import StatsBandSection from './StatsBandSection';
import CaseStudiesSection from './CaseStudiesSection';
import PartnerEcosystemSection from './PartnerEcosystemSection';
import CommonQuestionsSection from './CommonQuestionsSection';
import FinalCtaSection from './FinalCtaSection';
import AeoFaqSection from './AeoFaqSection';

export default function IndianCspsPage({ data }) {
  useScrollReveal();

  return (
    <div className="indian-csps-page">
      <HeroSection hero={data?.hero} />
      <ComparisonSection section={data?.comparison} />
      <WhyPartnerSection section={data?.why_thynkwise} />
      <ServicesSection section={data?.services} />
      <UseCasesSection section={data?.use_cases} />
      <StatsBandSection section={data?.stats_band} />
      <CaseStudiesSection section={data?.case_studies} />
      <PartnerEcosystemSection section={data?.partner_ecosystem} />
      <CommonQuestionsSection section={data?.common_questions} />
      <FinalCtaSection section={data?.final_cta} />
      <AeoFaqSection section={data?.faq} />
    </div>
  );
}
