import './cybersecurity.css';
import CybersecurityPage from './components';
import { getCybersecurityPage } from '@/lib/strapi/cybersecurity-page';

export default async function Page() {
  const cybersecurityData = await getCybersecurityPage();

  return <CybersecurityPage data={cybersecurityData} />;
}

