'use client';

import { useEffect, useState } from 'react';
import useScrollReveal from '../../components/useScrollReveal';
import HeroSection from './HeroSection';
import QuickAnswerSection from './QuickAnswerSection';
import MigrationProcessSection from './MigrationProcessSection';
import MigrationServiceTypesSection from './MigrationServiceTypesSection';
import SixRsSection from './SixRsSection';
import IndustryMigrationsSection from './IndustryMigrationsSection';
import TrustBandSection from './TrustBandSection';
import CaseStudiesSection from './CaseStudiesSection';
import MainFaqSection from './MainFaqSection';
import FinalCtaSection from './FinalCtaSection';
import AeoFaqSection from './AeoFaqSection';
import StickyBar from './StickyBar';
import WhatsAppFloat from './WhatsAppFloat';

export default function CloudMigrationPage() {
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
      <QuickAnswerSection />
      <MigrationProcessSection />
      <MigrationServiceTypesSection />
      <SixRsSection />
      <IndustryMigrationsSection />
      <TrustBandSection />
      <CaseStudiesSection />
      <MainFaqSection />
      <FinalCtaSection />
      <AeoFaqSection />
      <StickyBar show={showSticky} />
      <WhatsAppFloat />
    </>
  );
}
