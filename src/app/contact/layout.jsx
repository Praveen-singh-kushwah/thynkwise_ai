export const metadata = {
  title: 'Contact Thynkwise | Cloud, Security & GPU Services',
  description:
    'Get in touch with Thynkwise for managed cloud services, cybersecurity, GPUaaS, and cloud consulting. Speak with a cloud specialist in IST.',
  keywords:
    'contact Thynkwise, cloud services contact, managed services enquiry, cloud architect consultation, free cloud assessment, Thynkwise sales',
  authors: [{ name: 'Thynkwise Technologies' }],
  robots: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
  alternates: { canonical: 'https://www.thynkwise.ai/contact' },
  openGraph: {
    type: 'website',
    title: 'Contact Thynkwise | Cloud, Security & GPU Services',
    description:
      'Reach the Thynkwise team for cloud managed services, cybersecurity, GPUaaS, and IT consulting.',
    url: 'https://www.thynkwise.ai/contact',
    siteName: 'Thynkwise',
    images: [{ url: 'https://www.thynkwise.ai/assets/og-contact.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thynkwise',
    title: 'Contact Thynkwise | Cloud, Security & GPU Services',
    description:
      'Reach the Thynkwise team for cloud managed services, cybersecurity, GPUaaS, and IT consulting.',
    images: ['https://www.thynkwise.ai/assets/og-contact.jpg'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thynkwise.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.thynkwise.ai/contact' },
  ],
};

export default function ContactLayout({ children }) {
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
