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

export default function CybersecurityPage({ data }) {
  useScrollReveal();

  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="cy-page">
      <HeroSection hero={data?.cybersecurity_hero} events={data?.security_event} />
      <ThreeDomainsSection section={data?.security_domains} />
      <ServiceCatalogueSection section={data?.security_service_catalogue} />
      <ComplianceFrameworksSection section={data?.security_compliance_frameworks} />
      <WhyThynkwiseSection section={data?.why_thynkwise_security} />
      <StatsBandSection section={data?.security_stats_band} />
      <CaseStudiesSection section={data?.security_case_studies} />
      <TechnologyPartnersSection section={data?.security_partner} />
      <MainFaqSection section={data?.faq} />
      <FinalCtaSection cta={data?.cta} />
      <AeoFaqSection />
      <StickyBar show={showSticky} />
      <WhatsAppFloat />
    </div>
  );
}

