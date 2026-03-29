import './gcp.css';
import GcpPage from './components';
import { getGcpPage } from '@/lib/strapi/gcp-page';

export default async function Page() {
  const gcpPageData = await getGcpPage();

  return <GcpPage data={gcpPageData} />;
}
