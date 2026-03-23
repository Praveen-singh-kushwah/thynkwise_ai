import './cloud-migration.css';
import CloudMigrationPage from './components';
import { getCloudMigrationPage } from '@/lib/strapi/cloud-migration-page';

export default async function Page() {
  const cloudMigrationData = await getCloudMigrationPage();

  return <CloudMigrationPage data={cloudMigrationData} />;
}
