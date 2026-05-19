import { cache } from 'react';
import './book-demo.css';
import BookDemoPage from './components';
import { getBookDemoPage } from '@/lib/strapi/book-demo-page';
import { getPageSeo } from '@/lib/strapi/page-seo';
import { buildCmsMetadata } from '@/lib/seo';

const getCachedBookDemoPage = cache(async () => getBookDemoPage());
const getCachedBookDemoSeo = cache(async () => getPageSeo('/api/book-demo-page', 'book-demo-page'));

export async function generateMetadata() {
  const bookDemoPageData = await getCachedBookDemoSeo();

  return buildCmsMetadata(bookDemoPageData, {
    path: '/book-demo',
    title: 'Book a Cloud Demo | Thynkwise',
    description:
      'Book a personalized demo with the Thynkwise team. See how we manage AWS, Azure, GCP, cybersecurity, and GPU infrastructure for Indian enterprises.',
    keywords:
      'book cloud demo, managed cloud services demo, AWS demo, Azure demo, cloud assessment booking, Thynkwise demo',
    imageUrl: 'https://www.thynkwise.ai/assets/og-demo.jpg',
  });
}

export default async function Page() {
  const bookDemoPageData = await getCachedBookDemoPage();

  return <BookDemoPage data={bookDemoPageData} />;
}
