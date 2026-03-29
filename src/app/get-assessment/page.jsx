import './get-assessment.css';
import GetAssessmentPage from './components';
import { getGetAssessmentPage } from '@/lib/strapi/get-assessment-page';

export default async function Page() {
  const getAssessmentPageData = await getGetAssessmentPage();

  return <GetAssessmentPage data={getAssessmentPageData} />;
}
