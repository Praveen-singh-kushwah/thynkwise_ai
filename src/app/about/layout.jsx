import { DM_Serif_Display } from 'next/font/google';

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--about-serif',
  display: 'swap',
});

export const metadata = {
  title: 'About Thynkwise | Multi-Cloud Managed Services Partner',
  description:
    'Learn about Thynkwise - our mission, values, and approach to delivering managed cloud, cybersecurity, and GPU services across AWS, Azure, GCP, and sovereign cloud platforms.',
  keywords:
    'about Thynkwise, cloud managed services company, multi-cloud partner, AWS Azure GCP reseller, managed IT company, cloud consulting company, cloud partner values',
  authors: [{ name: 'Thynkwise Technologies' }],
  robots: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
  alternates: { canonical: 'https://www.thynkwise.ai/about' },
  openGraph: {
    type: 'website',
    title: 'About Thynkwise | Multi-Cloud Managed Services Partner',
    description:
      'Learn about Thynkwise - our mission, values, and approach to delivering managed cloud, cybersecurity, and GPU services across AWS, Azure, GCP, and sovereign cloud platforms.',
    url: 'https://www.thynkwise.ai/about',
    siteName: 'Thynkwise',
    images: [{ url: 'https://www.thynkwise.ai/assets/og-about.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thynkwise',
    title: 'About Thynkwise | Multi-Cloud Managed Services Partner',
    description:
      'Learn about Thynkwise - our mission, values, and approach to delivering managed cloud, cybersecurity, and GPU services across AWS, Azure, GCP, and sovereign cloud platforms.',
    images: ['https://www.thynkwise.ai/assets/og-about.jpg'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thynkwise.ai/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.thynkwise.ai/about' },
  ],
};

export default function AboutLayout({ children }) {
  return (
    <div className={dmSerif.variable}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </div>
  );
}
