'use client';

import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import CrmPlatformsSection from './CrmPlatformsSection';
import BeyondCrmSection from './BeyondCrmSection';
import CaseStudySection from './CaseStudySection';
import EngagementModelSection from './EngagementModelSection';
import TestimonialsSection from './TestimonialsSection';
import FaqSection from './FaqSection';
import FinalCtaSection from './FinalCtaSection';
import useScrollReveal from '@/app/components/useScrollReveal';

export default function SalesConsultingPage({ data }) {
  useScrollReveal();

  return (
    <>
      <HeroSection hero={data?.hero} />
      <ProblemSection section={data?.problem_section} />
      <CrmPlatformsSection section={data?.crm_platforms_section} />
      <BeyondCrmSection
        section={data?.beyond_crm_section}
        academy={data?.academy_banner}
      />
      <CaseStudySection section={data?.case_study_section} />
      <EngagementModelSection section={data?.engagement_model_section} />
      <TestimonialsSection section={data?.testimonials_section} />
      <FaqSection section={data?.faq_section} />
      <FinalCtaSection section={data?.final_cta_section} />
    </>
  );
}
