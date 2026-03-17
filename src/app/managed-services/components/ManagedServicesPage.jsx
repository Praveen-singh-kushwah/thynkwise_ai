'use client';

import { useEffect, useState } from 'react';
import useScrollReveal from '../../components/useScrollReveal';
import HeroSection from './HeroSection';
import ThreePillarsSection from './ThreePillarsSection';
import ServiceCatalogueSection from './ServiceCatalogueSection';
import WhyThynkwiseSection from './WhyThynkwiseSection';
import HowItWorksSection from './HowItWorksSection';
import IndustryUseCasesSection from './IndustryUseCasesSection';
import StatsBandSection from './StatsBandSection';
import CaseStudiesSection from './CaseStudiesSection';
import MainFaqSection from './MainFaqSection';
import FinalCtaSection from './FinalCtaSection';
import AeoFaqSection from './AeoFaqSection';
import StickyBar from './StickyBar';
import WhatsAppFloat from './WhatsAppFloat';

export default function ManagedServicesPage() {
  useScrollReveal();

  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <HeroSection />
      <ThreePillarsSection />
      <ServiceCatalogueSection />
      <WhyThynkwiseSection />
      <HowItWorksSection />
      <IndustryUseCasesSection />
      <StatsBandSection />
      <CaseStudiesSection />
      <MainFaqSection />
      <FinalCtaSection />
      <AeoFaqSection />
      <StickyBar show={showSticky} />
      <WhatsAppFloat />
    </>
  );
}
