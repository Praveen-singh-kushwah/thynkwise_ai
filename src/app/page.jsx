import HomePage from './components/home-page/HomePage';
import { getHomePage } from '@/lib/strapi/home-page';

export default async function Page() {
  const homePageData = await getHomePage();

  return <HomePage data={homePageData} />;
}
