export const metadata = {
  title: 'AWS Managed Services & Reseller Partner | Thynkwise',
  description:
    'Thynkwise is an AWS authorised reseller and managed services partner. EC2, S3, RDS, Lambda, EKS, CloudFront - managed infrastructure, FinOps, migrations, and 24/7 monitoring under one SLA.',
  keywords:
    'AWS managed services, AWS reseller, Amazon Web Services partner, EC2 managed, AWS migration, AWS FinOps, AWS cost optimisation, managed AWS infrastructure, AWS monitoring, cloud managed services AWS',
  authors: [{ name: 'Thynkwise Technologies' }],
  robots: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
  alternates: { canonical: 'https://www.thynkwise.ai/aws' },
  openGraph: {
    type: 'website',
    title: 'AWS Managed Services & Reseller Partner | Thynkwise',
    description:
      'Thynkwise is an AWS authorised reseller and managed services partner. EC2, S3, RDS, Lambda, EKS, CloudFront - managed infrastructure, FinOps, migrations, and 24/7 monitoring under one SLA.',
    url: 'https://www.thynkwise.ai/aws',
    siteName: 'Thynkwise',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thynkwise',
    title: 'AWS Managed Services & Reseller Partner | Thynkwise',
    description:
      'Thynkwise is an AWS authorised reseller and managed services partner. EC2, S3, RDS, Lambda, EKS, CloudFront - managed infrastructure, FinOps, migrations, and 24/7 monitoring under one SLA.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thynkwise.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AWS', item: 'https://www.thynkwise.ai/aws' },
  ],
};

export default function AwsLayout({ children }) {
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
