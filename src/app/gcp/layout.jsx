export const metadata = {
  title: 'Google Cloud Managed Services & Reseller Partner | Thynkwise',
  description:
    'Thynkwise is a Google Cloud authorised reseller and managed services partner. GKE, BigQuery, Vertex AI, Cloud SQL, Anthos and Google Workspace, fully managed with startup credits activation and 24/7 support.',
  keywords:
    'Google Cloud managed services, GCP reseller, Google Cloud partner, GKE managed, BigQuery managed, Vertex AI services, GCP migration, Cloud SQL managed, Anthos hybrid cloud, GCP cost optimisation',
  authors: [{ name: 'Thynkwise Technologies' }],
  robots: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
  alternates: { canonical: 'https://www.thynkwise.ai/gcp' },
  openGraph: {
    type: 'website',
    title: 'Google Cloud Managed Services & Reseller Partner | Thynkwise',
    description:
      'Thynkwise is a Google Cloud authorised reseller and managed services partner. GKE, BigQuery, Vertex AI, Cloud SQL, Anthos and Google Workspace, fully managed with startup credits activation and 24/7 support.',
    url: 'https://www.thynkwise.ai/gcp',
    siteName: 'Thynkwise',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thynkwise',
    title: 'Google Cloud Managed Services & Reseller Partner | Thynkwise',
    description:
      'Thynkwise is a Google Cloud authorised reseller and managed services partner. GKE, BigQuery, Vertex AI, Cloud SQL, Anthos and Google Workspace, fully managed with startup credits activation and 24/7 support.',
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
      name: 'Cloud Providers',
      item: 'https://www.thynkwise.ai/cloud',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Google Cloud',
      item: 'https://www.thynkwise.ai/gcp',
    },
  ],
};

export default function GcpLayout({ children }) {
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
