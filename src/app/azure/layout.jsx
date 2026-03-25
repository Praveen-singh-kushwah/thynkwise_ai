export const metadata = {
  title: 'Azure Managed Services & Reseller Partner | Thynkwise',
  description:
    'Thynkwise is a Microsoft Azure authorised reseller and managed services partner. Azure VMs, AKS, SQL, Sentinel, Defender, Azure OpenAI - full-stack Azure management and migrations.',
  keywords:
    'Azure managed services, Microsoft Azure reseller, Azure partner, Azure migration, AKS managed, Azure Sentinel SIEM, Azure cost optimisation, Azure DevOps managed, Azure OpenAI services, managed Azure infrastructure',
  authors: [{ name: 'Thynkwise Technologies' }],
  robots: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
  alternates: { canonical: 'https://www.thynkwise.ai/azure' },
  openGraph: {
    type: 'website',
    title: 'Azure Managed Services & Reseller Partner | Thynkwise',
    description:
      'Thynkwise is a Microsoft Azure authorised reseller and managed services partner. Azure VMs, AKS, SQL, Sentinel, Defender, Azure OpenAI - full-stack Azure management and migrations.',
    url: 'https://www.thynkwise.ai/azure',
    siteName: 'Thynkwise',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thynkwise',
    title: 'Azure Managed Services & Reseller Partner | Thynkwise',
    description:
      'Thynkwise is a Microsoft Azure authorised reseller and managed services partner. Azure VMs, AKS, SQL, Sentinel, Defender, Azure OpenAI - full-stack Azure management and migrations.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thynkwise.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Azure', item: 'https://www.thynkwise.ai/azure' },
  ],
};

export default function AzureLayout({ children }) {
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
