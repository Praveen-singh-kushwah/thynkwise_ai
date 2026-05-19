import { cache } from 'react';
import './cloud-migration.css';
import CloudMigrationPage from './components';
import { getCloudMigrationPage } from '@/lib/strapi/cloud-migration-page';
import { getPageSeo } from '@/lib/strapi/page-seo';
import { buildCmsMetadata } from '@/lib/seo';

const getCachedCloudMigrationPage = cache(async () => getCloudMigrationPage());
const getCachedCloudMigrationSeo = cache(async () =>
  getPageSeo('/api/cloud-migration-page', 'cloud-migration-page'),
);

export async function generateMetadata() {
  const cloudMigrationData = await getCachedCloudMigrationSeo();

  return buildCmsMetadata(cloudMigrationData, {
    path: '/cloud-migration',
    title: 'Cloud Migration Services - AWS, Azure, GCP & Hybrid | Thynkwise',
    description:
      'End-to-end cloud migration services: assessment, roadmap, lift-and-shift, re-platforming, re-architecting, and post-migration managed operations across AWS, Azure, GCP, and sovereign clouds.',
    keywords:
      'cloud migration services, AWS migration, Azure migration, GCP migration, lift and shift cloud, re-platforming cloud, cloud assessment, hybrid cloud migration, database migration cloud, zero-downtime migration, cloud migration strategy',
    imageUrl: 'https://www.thynkwise.ai/assets/og-migration.jpg',
  });
}

export default async function Page() {
  const cloudMigrationData = await getCachedCloudMigrationPage();

  return <CloudMigrationPage data={cloudMigrationData} />;
}
