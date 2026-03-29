export const metadata = {
  title: 'Indian Sovereign Cloud Providers - ESDS, Yotta, CtrlS, Sify | Thynkwise',
  description:
    'Managed services for Indian sovereign cloud platforms: ESDS eNlight, Yotta Infrastructure, CtrlS Datacenters, Sify Technologies, E2E Networks. Data residency, BFSI compliance, and local support.',
  keywords:
    'Indian sovereign cloud, ESDS cloud reseller, Yotta cloud services, CtrlS managed cloud, Sify cloud, E2E Networks, Indian cloud provider, data localisation India, sovereign cloud BFSI, Indian data residency cloud',
  authors: [{ name: 'Thynkwise Technologies' }],
  robots: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
  alternates: { canonical: 'https://www.thynkwise.ai/indian-csps' },
  openGraph: {
    type: 'website',
    title: 'Indian Sovereign Cloud Providers - ESDS, Yotta, CtrlS, Sify | Thynkwise',
    description:
      'Managed services for Indian sovereign cloud platforms: ESDS eNlight, Yotta Infrastructure, CtrlS Datacenters, Sify Technologies, E2E Networks. Data residency, BFSI compliance, and local support.',
    url: 'https://www.thynkwise.ai/indian-csps',
    siteName: 'Thynkwise',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thynkwise',
    title: 'Indian Sovereign Cloud Providers - ESDS, Yotta, CtrlS, Sify | Thynkwise',
    description:
      'Managed services for Indian sovereign cloud platforms: ESDS eNlight, Yotta Infrastructure, CtrlS Datacenters, Sify Technologies, E2E Networks. Data residency, BFSI compliance, and local support.',
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
      name: 'Indian Sovereign Cloud',
      item: 'https://www.thynkwise.ai/indian-csps',
    },
  ],
};

export default function IndianCspsLayout({ children }) {
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
