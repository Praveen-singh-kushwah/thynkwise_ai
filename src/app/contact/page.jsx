import './contact.css';
import ContactPage from './components';
import { getContactPage } from '@/lib/strapi/contact-page';

export default async function Page() {
  const contactPageData = await getContactPage();

  return <ContactPage data={contactPageData} />;
}
