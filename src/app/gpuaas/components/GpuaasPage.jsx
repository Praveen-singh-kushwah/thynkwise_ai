'use client';

import { useEffect, useState } from 'react';
import useScrollReveal from '../../components/useScrollReveal';
import HeroSection from './HeroSection';
import WhoDeploysSection from './WhoDeploysSection';
import DeliveryModelsSection from './DeliveryModelsSection';
import GpuCatalogueSection from './GpuCatalogueSection';
import WorkloadLibrarySection from './WorkloadLibrarySection';
import FrameworkStackSection from './FrameworkStackSection';
import TurnkeySystemsSection from './TurnkeySystemsSection';
import StatsBandSection from './StatsBandSection';
import WhyThynkwiseSection from './WhyThynkwiseSection';
import OutcomesSection from './OutcomesSection';
import PartnerEcosystemSection from './PartnerEcosystemSection';
import MainFaqSection from './MainFaqSection';
import FinalCtaSection from './FinalCtaSection';
import AeoFaqSection from './AeoFaqSection';
import StickyBar from './StickyBar';
import WhatsAppFloat from './WhatsAppFloat';

export default function GpuaasPage({ data }) {
  useScrollReveal();
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="gpu-page">
      <HeroSection section={data?.hero} />
      <WhoDeploysSection section={data?.gpuaas_who_deploys} />
      <DeliveryModelsSection section={data?.gpuaas_delivery_models} />
      <GpuCatalogueSection section={data?.gpu_architecture} />
      <WorkloadLibrarySection section={data?.workload_library} />
      <FrameworkStackSection section={data?.framework_stack} />
      <TurnkeySystemsSection section={data?.turnkey_systems} />
      <StatsBandSection />
      <WhyThynkwiseSection section={data?.why_thynkwise} />
      <OutcomesSection section={data?.outcomes} />
      <PartnerEcosystemSection section={data?.partner_ecosystem} />
      <MainFaqSection section={data?.common_questions} />
      <FinalCtaSection section={data?.cta_section} />
      <AeoFaqSection section={data?.faq} />
      <StickyBar show={showSticky} />
      <WhatsAppFloat />
    </div>
  );
}
