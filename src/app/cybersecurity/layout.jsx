import { aeoFaqs } from './components/data';

export const metadata = {
  title: 'Managed Cybersecurity Services - SOC, XDR, VAPT, GRC | Thynkwise',
  description:
    'Managed SOC-as-a-Service, XDR, VAPT, IAM/PAM, DLP, GRC, cloud security, dark web monitoring, brand protection, and DC security consulting with contractual SLAs and 24/7 coverage.',
  keywords:
    'managed cybersecurity services, SOC as a service, managed XDR, VAPT services, IAM PAM managed, managed DLP, GRC compliance, cloud security posture management, dark web monitoring, brand protection, managed SIEM, CrowdStrike managed, SentinelOne managed, Palo Alto managed',
  authors: [{ name: 'Thynkwise Technologies' }],
  robots: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
  alternates: { canonical: 'https://www.thynkwise.ai/cybersecurity' },
  openGraph: {
    type: 'website',
    title: 'Managed Cybersecurity Services - SOC, XDR, VAPT, GRC | Thynkwise',
    description:
      'Managed SOC-as-a-Service, XDR, VAPT, IAM/PAM, DLP, GRC, cloud security, dark web monitoring, brand protection, and DC security consulting.',
    url: 'https://www.thynkwise.ai/cybersecurity',
    siteName: 'Thynkwise',
    images: [
      {
        url: 'https://www.thynkwise.ai/assets/og-security.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thynkwise',
    title: 'Managed Cybersecurity Services - SOC, XDR, VAPT, GRC | Thynkwise',
    description:
      'Managed SOC-as-a-Service, XDR, VAPT, IAM/PAM, DLP, GRC, cloud security, dark web monitoring, brand protection, and DC security consulting.',
    images: ['https://www.thynkwise.ai/assets/og-security.jpg'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thynkwise.ai/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://www.thynkwise.ai/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Cybersecurity',
      item: 'https://www.thynkwise.ai/cybersecurity',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: aeoFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function CybersecurityLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
