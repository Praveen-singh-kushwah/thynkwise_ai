import './indian-csps.css';
import IndianCspsPage from './components';
import { getIndianSovereignCloudPage } from '@/lib/strapi/indian-sovereign-cloud-page';

export default async function Page() {
  const indianSovereignCloudPageData = await getIndianSovereignCloudPage();

  return <IndianCspsPage data={indianSovereignCloudPageData} />;
}
