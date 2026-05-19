import { cache } from 'react';
import './azure.css';
import AzurePage from './components';
import { getAzurePage } from '@/lib/strapi/azure-page';
import { getPageSeo } from '@/lib/strapi/page-seo';
import { buildCmsMetadata } from '@/lib/seo';

const getCachedAzurePage = cache(async () => getAzurePage());
const getCachedAzureSeo = cache(async () => getPageSeo('/api/azure-page', 'azure-page'));

export async function generateMetadata() {
  const azurePageData = await getCachedAzureSeo();

  return buildCmsMetadata(azurePageData, {
    path: '/azure',
    title: 'Azure Managed Services & Reseller Partner | Thynkwise',
    description:
      'Thynkwise is a Microsoft Azure authorised reseller and managed services partner. Azure VMs, AKS, SQL, Sentinel, Defender, Azure OpenAI - full-stack Azure management and migrations.',
    keywords:
      'Azure managed services, Microsoft Azure reseller, Azure partner, Azure migration, AKS managed, Azure Sentinel SIEM, Azure cost optimisation, Azure DevOps managed, Azure OpenAI services, managed Azure infrastructure',
  });
}

export default async function Page() {
  const azurePageData = await getCachedAzurePage();

  return <AzurePage data={azurePageData} />;
}
