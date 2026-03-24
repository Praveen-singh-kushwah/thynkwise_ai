import './aws.css';
import AwsPage from './components';
import { getAwsPage } from '@/lib/strapi/aws-page';

export default async function Page() {
  const awsPageData = await getAwsPage();

  return <AwsPage data={awsPageData} />;
}
