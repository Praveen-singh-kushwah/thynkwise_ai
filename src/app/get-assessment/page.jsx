import { cache } from 'react';
import './get-assessment.css';
import GetAssessmentPage from './components';
import { getGetAssessmentPage } from '@/lib/strapi/get-assessment-page';
import { getPageSeo } from '@/lib/strapi/page-seo';
import { buildCmsMetadata } from '@/lib/seo';

const getCachedGetAssessmentPage = cache(async () => getGetAssessmentPage());
const getCachedGetAssessmentSeo = cache(async () =>
  getPageSeo('/api/get-assessment-page', 'get-assessment-page'),
);

export async function generateMetadata() {
  const getAssessmentPageData = await getCachedGetAssessmentSeo();

  return buildCmsMetadata(getAssessmentPageData, {
    path: '/get-assessment',
    title: 'Free Cloud Assessment | Thynkwise',
    description:
      'Answer a few questions and get your personalised cloud health score, savings estimate, and next-step recommendations from Thynkwise.',
    keywords:
      'cloud assessment, free cloud assessment, cloud health score, cloud cost savings assessment, cloud readiness assessment, Thynkwise',
  });
}

export default async function Page() {
  const getAssessmentPageData = await getCachedGetAssessmentPage();

  return <GetAssessmentPage data={getAssessmentPageData} />;
}
