'use client';

import CapabilitiesSection from './CapabilitiesSection';
import ClientPortfolioSection from './ClientPortfolioSection';
import FaqSectionNew from './FaqSectionNew';
import FinalCtaSection from './FinalCtaSection';
import HeroSection from './HeroSection';
import PartnerNetworkSection from './PartnerNetworkSection';
import StatsBandSection from './StatsBandSection';
import TestimonialsSection from './TestimonialsSection';
import useScrollReveal from '../useScrollReveal';

export default function HomePage({ data }) {
  useScrollReveal();

  return (
    <>
      <HeroSection hero={data?.hero} />
      <StatsBandSection section={data?.stats_band} />
      <CapabilitiesSection section={data?.capabilities_section} />
      <PartnerNetworkSection section={data?.partner_network_section} />
      <ClientPortfolioSection section={data?.client_portfolio_section} />
      <TestimonialsSection section={data?.testimonials_section} />
      <FaqSectionNew section={data?.faq_section} />
      <FinalCtaSection section={data?.final_cta_section} />
    </>
  );
}
