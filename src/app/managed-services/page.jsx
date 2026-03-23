import './managed-services.css';
import ManagedServicesPage from './components';
import { getManagedServicesPage } from '@/lib/strapi/managed-services-page';

export default async function Page() {
  const managedServicesData = await getManagedServicesPage();

  return <ManagedServicesPage data={managedServicesData} />;
}
