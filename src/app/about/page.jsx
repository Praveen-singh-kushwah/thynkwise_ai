import './about.css';
import AboutPage from './components';
import { getAboutPage } from '@/lib/strapi/about-page';

export default async function Page() {
  const aboutPageData = await getAboutPage();

  return <AboutPage data={aboutPageData} />;
}
