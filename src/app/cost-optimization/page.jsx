import './cost-optimization.css';
import CostOptimizationPage from './components';
import { getCostOptimizationPage } from '@/lib/strapi/cost-optimization-page';

export default async function Page() {
  const costOptimizationPageData = await getCostOptimizationPage();

  return <CostOptimizationPage data={costOptimizationPageData} />;
}
