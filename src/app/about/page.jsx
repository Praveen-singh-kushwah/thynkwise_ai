import { cache } from 'react';
import './about.css';
import AboutPage from './components';
import { getAboutPage } from '@/lib/strapi/about-page';
import { getPageSeo } from '@/lib/strapi/page-seo';
import { buildCmsMetadata } from '@/lib/seo';

const getCachedAboutPage = cache(async () => getAboutPage());
const getCachedAboutSeo = cache(async () => getPageSeo('/api/about-page', 'about-page'));

export async function generateMetadata() {
  const aboutPageData = await getCachedAboutSeo();

  return buildCmsMetadata(aboutPageData, {
    path: '/about',
    title: 'About Thynkwise | Multi-Cloud Managed Services Partner',
    description:
      'Learn about Thynkwise - our mission, values, and approach to delivering managed cloud, cybersecurity, and GPU services across AWS, Azure, GCP, and sovereign cloud platforms.',
    keywords:
      'about Thynkwise, cloud managed services company, multi-cloud partner, AWS Azure GCP reseller, managed IT company, cloud consulting company, cloud partner values',
    imageUrl: 'https://www.thynkwise.ai/assets/og-about.jpg',
  });
}

export default async function Page() {
  const aboutPageData = await getCachedAboutPage();

  return <AboutPage data={aboutPageData} />;
}
