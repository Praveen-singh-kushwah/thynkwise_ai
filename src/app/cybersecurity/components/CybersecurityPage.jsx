'use client';

import { useEffect, useState } from 'react';
import useScrollReveal from '../../components/useScrollReveal';
import HeroSection from './HeroSection';
import ThreeDomainsSection from './ThreeDomainsSection';
import ServiceCatalogueSection from './ServiceCatalogueSection';
import ComplianceFrameworksSection from './ComplianceFrameworksSection';
import WhyThynkwiseSection from './WhyThynkwiseSection';
import StatsBandSection from './StatsBandSection';
import CaseStudiesSection from './CaseStudiesSection';
import TechnologyPartnersSection from './TechnologyPartnersSection';
import MainFaqSection from './MainFaqSection';
import FinalCtaSection from './FinalCtaSection';
import AeoFaqSection from './AeoFaqSection';
import StickyBar from './StickyBar';
import WhatsAppFloat from './WhatsAppFloat';

export default function CybersecurityPage() {
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
      <ThreeDomainsSection />
      <ServiceCatalogueSection />
      <ComplianceFrameworksSection />
      <WhyThynkwiseSection />
      <StatsBandSection />
      <CaseStudiesSection />
      <TechnologyPartnersSection />
      <MainFaqSection />
      <FinalCtaSection />
      <AeoFaqSection />
      <StickyBar show={showSticky} />
      <WhatsAppFloat />
    </>
  );
}
