export const metadata = {
  title: 'Book a Cloud Demo | Thynkwise',
  description:
    'Book a personalized demo with the Thynkwise team. See how we manage AWS, Azure, GCP, cybersecurity, and GPU infrastructure for Indian enterprises.',
  keywords:
    'book cloud demo, managed cloud services demo, AWS demo, Azure demo, cloud assessment booking, Thynkwise demo',
  authors: [{ name: 'Thynkwise Technologies' }],
  robots: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
  alternates: { canonical: 'https://www.thynkwise.ai/book-demo' },
  openGraph: {
    type: 'website',
    title: 'Book a Cloud Demo | Thynkwise',
    description:
      'Book a personalized demo with Thynkwise and get a tailored cloud strategy walkthrough for your workloads.',
    url: 'https://www.thynkwise.ai/book-demo',
    siteName: 'Thynkwise',
    images: [{ url: 'https://www.thynkwise.ai/assets/og-demo.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thynkwise',
    title: 'Book a Cloud Demo | Thynkwise',
    description:
      'Book a personalized demo with Thynkwise and get a tailored cloud strategy walkthrough for your workloads.',
    images: ['https://www.thynkwise.ai/assets/og-demo.jpg'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thynkwise.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Book Demo', item: 'https://www.thynkwise.ai/book-demo' },
  ],
};

export default function BookDemoLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
