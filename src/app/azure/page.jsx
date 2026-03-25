import './azure.css';
import AzurePage from './components';
import { getAzurePage } from '@/lib/strapi/azure-page';

export default async function Page() {
  const azurePageData = await getAzurePage();

  return <AzurePage data={azurePageData} />;
}
