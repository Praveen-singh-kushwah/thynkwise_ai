import { cache } from 'react';
import './indian-csps.css';
import IndianCspsPage from './components';
import { getIndianSovereignCloudPage } from '@/lib/strapi/indian-sovereign-cloud-page';
import { getPageSeo } from '@/lib/strapi/page-seo';
import { buildCmsMetadata } from '@/lib/seo';

const getCachedIndianSovereignCloudPage = cache(async () => getIndianSovereignCloudPage());
const getCachedIndianSovereignCloudSeo = cache(async () =>
  getPageSeo('/api/indian-sovereign-cloud-page', 'indian-sovereign-cloud-page'),
);

export async function generateMetadata() {
  const indianSovereignCloudPageData = await getCachedIndianSovereignCloudSeo();

  return buildCmsMetadata(indianSovereignCloudPageData, {
    path: '/indian-csps',
    title: 'Indian Sovereign Cloud Providers - ESDS, Yotta, CtrlS, Sify | Thynkwise',
    description:
      'Managed services for Indian sovereign cloud platforms: ESDS eNlight, Yotta Infrastructure, CtrlS Datacenters, Sify Technologies, E2E Networks. Data residency, BFSI compliance, and local support.',
    keywords:
      'Indian sovereign cloud, ESDS cloud reseller, Yotta cloud services, CtrlS managed cloud, Sify cloud, E2E Networks, Indian cloud provider, data localisation India, sovereign cloud BFSI, Indian data residency cloud',
  });
}

export default async function Page() {
  const indianSovereignCloudPageData = await getCachedIndianSovereignCloudPage();

  return <IndianCspsPage data={indianSovereignCloudPageData} />;
}
