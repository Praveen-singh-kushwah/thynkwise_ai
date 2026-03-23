'use client';

import HeroSection from './HeroSection';
import ValueStrip from './ValueStrip';
import ServicesSection from './ServicesSection';
import CloudProvidersSection from './CloudProvidersSection';
import StatsSection from './StatsSection';
import WhyThynkwiseSection from './WhyThynkwiseSection';
import IndustriesSection from './IndustriesSection';
import CaseStudiesSection from './CaseStudiesSection';
import TestimonialsSection from './TestimonialsSection';
import CtaBannerSection from './CtaBannerSection';
import FaqSection from './FaqSection';
import useScrollReveal from '../useScrollReveal';

export default function HomePage({ data }) {
  useScrollReveal();

  return (
    <>
      <HeroSection hero={data?.hero} />
      <ValueStrip items={data?.valueItem} />
      <ServicesSection section={data?.service} />
      <CloudProvidersSection section={data?.cloudProvider} />
      <StatsSection stats={data?.stat} />
      <WhyThynkwiseSection section={data?.WhyThynkwise} />
      <IndustriesSection section={data?.industry} />
      <CaseStudiesSection section={data?.ClientOutcomes} />
      <TestimonialsSection testimonials={data?.testimonial} />
      <CtaBannerSection cta={data?.cta} />
      <FaqSection faqs={data?.faq} />
    </>
  );
}
