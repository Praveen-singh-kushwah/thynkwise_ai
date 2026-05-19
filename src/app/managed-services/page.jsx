import { cache } from 'react';
import './managed-services.css';
import ManagedServicesPage from './components';
import { getManagedServicesPage } from '@/lib/strapi/managed-services-page';
import { getPageSeo } from '@/lib/strapi/page-seo';
import { buildCmsMetadata } from '@/lib/seo';

const getCachedManagedServicesPage = cache(async () => getManagedServicesPage());
const getCachedManagedServicesSeo = cache(async () =>
  getPageSeo('/api/managed-services-page', 'managed-services-page'),
);

export async function generateMetadata() {
  const managedServicesData = await getCachedManagedServicesSeo();

  return buildCmsMetadata(managedServicesData, {
    path: '/managed-services',
    title: 'Managed IT & Cloud Services - 24/7 Infrastructure Management | Thynkwise',
    description:
      'Managed infrastructure, application, and cloud operations: 24/7 monitoring, patch management, auto-scaling, backup, DR, performance management, and named account team across AWS, Azure, GCP, and on-premise.',
    keywords:
      'managed IT services, managed cloud services, 24/7 infrastructure management, managed AWS services, managed Azure services, patch management, backup and recovery, disaster recovery managed, SLA managed services',
    imageUrl: 'https://www.thynkwise.ai/assets/og-managed.jpg',
  });
}

export default async function Page() {
  const managedServicesData = await getCachedManagedServicesPage();

  return <ManagedServicesPage data={managedServicesData} />;
}
