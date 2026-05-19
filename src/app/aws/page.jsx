import { cache } from 'react';
import './aws.css';
import AwsPage from './components';
import { getAwsPage } from '@/lib/strapi/aws-page';
import { getPageSeo } from '@/lib/strapi/page-seo';
import { buildCmsMetadata } from '@/lib/seo';

const getCachedAwsPage = cache(async () => getAwsPage());
const getCachedAwsSeo = cache(async () => getPageSeo('/api/aws-page', 'aws-page'));

export async function generateMetadata() {
  const awsPageData = await getCachedAwsSeo();

  return buildCmsMetadata(awsPageData, {
    path: '/aws',
    title: 'AWS Managed Services & Reseller Partner | Thynkwise',
    description:
      'Thynkwise is an AWS authorised reseller and managed services partner. EC2, S3, RDS, Lambda, EKS, CloudFront - managed infrastructure, FinOps, migrations, and 24/7 monitoring under one SLA.',
    keywords:
      'AWS managed services, AWS reseller, Amazon Web Services partner, EC2 managed, AWS migration, AWS FinOps, AWS cost optimisation, managed AWS infrastructure, AWS monitoring, cloud managed services AWS',
  });
}

export default async function Page() {
  const awsPageData = await getCachedAwsPage();

  return <AwsPage data={awsPageData} />;
}
