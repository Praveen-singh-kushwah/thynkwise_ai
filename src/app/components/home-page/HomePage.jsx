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

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <HeroSection />
      <ValueStrip />
      <ServicesSection />
      <CloudProvidersSection />
      <StatsSection />
      <WhyThynkwiseSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CtaBannerSection />
      <FaqSection />
    </>
  );
}
