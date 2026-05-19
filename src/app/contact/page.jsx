import { cache } from 'react';
import './contact.css';
import ContactPage from './components';
import { getContactPage } from '@/lib/strapi/contact-page';
import { getPageSeo } from '@/lib/strapi/page-seo';
import { buildCmsMetadata } from '@/lib/seo';

const getCachedContactPage = cache(async () => getContactPage());
const getCachedContactSeo = cache(async () => getPageSeo('/api/contact-page', 'contact-page'));

export async function generateMetadata() {
  const contactPageData = await getCachedContactSeo();

  return buildCmsMetadata(contactPageData, {
    path: '/contact',
    title: 'Contact Thynkwise | Cloud, Security & GPU Services',
    description:
      'Get in touch with Thynkwise for managed cloud services, cybersecurity, GPUaaS, and cloud consulting. Speak with a cloud specialist in IST.',
    keywords:
      'contact Thynkwise, cloud services contact, managed services enquiry, cloud architect consultation, free cloud assessment, Thynkwise sales',
    imageUrl: 'https://www.thynkwise.ai/assets/og-contact.jpg',
  });
}

export default async function Page() {
  const contactPageData = await getCachedContactPage();

  return <ContactPage data={contactPageData} />;
}
