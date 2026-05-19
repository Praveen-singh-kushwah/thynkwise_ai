import { cache } from 'react';
import './gcp.css';
import GcpPage from './components';
import { getGcpPage } from '@/lib/strapi/gcp-page';
import { getPageSeo } from '@/lib/strapi/page-seo';
import { buildCmsMetadata } from '@/lib/seo';

const getCachedGcpPage = cache(async () => getGcpPage());
const getCachedGcpSeo = cache(async () => getPageSeo('/api/gcp-page', 'gcp-page'));

export async function generateMetadata() {
  const gcpPageData = await getCachedGcpSeo();

  return buildCmsMetadata(gcpPageData, {
    path: '/gcp',
    title: 'Google Cloud Managed Services & Reseller Partner | Thynkwise',
    description:
      'Thynkwise is a Google Cloud authorised reseller and managed services partner. GKE, BigQuery, Vertex AI, Cloud SQL, Anthos and Google Workspace, fully managed with startup credits activation and 24/7 support.',
    keywords:
      'Google Cloud managed services, GCP reseller, Google Cloud partner, GKE managed, BigQuery managed, Vertex AI services, GCP migration, Cloud SQL managed, Anthos hybrid cloud, GCP cost optimisation',
  });
}

export default async function Page() {
  const gcpPageData = await getCachedGcpPage();

  return <GcpPage data={gcpPageData} />;
}
