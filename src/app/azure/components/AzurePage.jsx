'use client';

import useScrollReveal from '../../components/useScrollReveal';
import HeroSection from './HeroSection';
import WhyAzureSection from './WhyAzureSection';
import AzureServicesSection from './AzureServicesSection';
import AzureForBfsiSection from './AzureForBfsiSection';

export default function AzurePage({ data }) {
  useScrollReveal();

  return (
    <div className="azure-page">
      <HeroSection hero={data?.hero} />
      <WhyAzureSection section={data?.why_azure} />
      <AzureServicesSection section={data?.azure_services} />
      <AzureForBfsiSection section={data?.azure_for_bfsi_india} />
    </div>
  );
}
