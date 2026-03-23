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

export default function CloudMigrationPage({ data }) {
  useScrollReveal();

  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <HeroSection hero={data?.cloud_migration_hero} />
      <QuickAnswerSection answers={data?.quick_answer} />
      <MigrationProcessSection
        section={data?.migration_process}
        riskSection={data?.migration_risk_management}
      />
      <MigrationServiceTypesSection section={data?.migration_service_types} />
      <SixRsSection section={data?.six_r_framework} />
      <IndustryMigrationsSection section={data?.industry_migration} />
      <TrustBandSection stats={data?.trust_stats} />
      <CaseStudiesSection section={data?.case_study} />
      <MainFaqSection section={data?.faq} />
      <FinalCtaSection cta={data?.cta_section} />
      <AeoFaqSection />
      <StickyBar show={showSticky} />
      <WhatsAppFloat />
    </>
  );
}
