import { cache } from 'react';
import './cybersecurity.css';
import CybersecurityPage from './components';
import { getCybersecurityPage } from '@/lib/strapi/cybersecurity-page';
import { getPageSeo } from '@/lib/strapi/page-seo';
import { buildCmsMetadata } from '@/lib/seo';

const getCachedCybersecurityPage = cache(async () => getCybersecurityPage());
const getCachedCybersecuritySeo = cache(async () =>
  getPageSeo('/api/cybersecurity-page', 'cybersecurity-page'),
);

export async function generateMetadata() {
  const cybersecurityData = await getCachedCybersecuritySeo();

  return buildCmsMetadata(cybersecurityData, {
    path: '/cybersecurity',
    title: 'Managed Cybersecurity Services - SOC, XDR, VAPT, GRC | Thynkwise',
    description:
      'Managed SOC-as-a-Service, XDR, VAPT, IAM/PAM, DLP, GRC, cloud security, dark web monitoring, brand protection, and DC security consulting with contractual SLAs and 24/7 coverage.',
    keywords:
      'managed cybersecurity services, SOC as a service, managed XDR, VAPT services, IAM PAM managed, managed DLP, GRC compliance, cloud security posture management, dark web monitoring, brand protection, managed SIEM, CrowdStrike managed, SentinelOne managed, Palo Alto managed',
    imageUrl: 'https://www.thynkwise.ai/assets/og-security.jpg',
  });
}

export default async function Page() {
  const cybersecurityData = await getCachedCybersecurityPage();

  return <CybersecurityPage data={cybersecurityData} />;
}
