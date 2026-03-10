import ManagedServicesPage from './page';

export const metadata = {
  title: 'Managed IT & Cloud Services — 24/7 Infrastructure Management | Thynkwise',
  description:
    'Managed infrastructure, application, and cloud operations: 24/7 monitoring, patch management, auto-scaling, backup, DR, performance management, and named account team — across AWS, Azure, GCP, and on-premise.',
  keywords:
    'managed IT services, managed cloud services, 24/7 infrastructure management, managed AWS services, managed Azure services, patch management, backup and recovery, disaster recovery managed, SLA managed services',
  alternates: { canonical: 'https://www.thynkwise.ai/managed-services' },
  openGraph: {
    title: 'Managed IT & Cloud Services — 24/7 Infrastructure Management | Thynkwise',
    description:
      'Managed infrastructure, application, and cloud operations: 24/7 monitoring, patch management, auto-scaling, backup, DR, performance management, and named account team.',
    url: 'https://www.thynkwise.ai/managed-services',
    images: [{ url: 'https://www.thynkwise.ai/assets/og-managed.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managed IT & Cloud Services — 24/7 Infrastructure Management | Thynkwise',
    description: 'Managed infrastructure, application, and cloud operations across AWS, Azure, GCP, and on-premise.',
    images: ['https://www.thynkwise.ai/assets/og-managed.jpg'],
  },
};

export default function Layout() {
  return <ManagedServicesPage />;
}