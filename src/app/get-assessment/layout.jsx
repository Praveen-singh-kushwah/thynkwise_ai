import { Syne } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--ga-syne',
  display: 'swap',
});

export const metadata = {
  title: 'Free Cloud Assessment | Thynkwise',
  description:
    'Answer a few questions and get your personalised cloud health score, savings estimate, and next-step recommendations from Thynkwise.',
  keywords:
    'cloud assessment, free cloud assessment, cloud health score, cloud cost savings assessment, cloud readiness assessment, Thynkwise',
  authors: [{ name: 'Thynkwise Technologies' }],
  robots: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
  alternates: { canonical: 'https://www.thynkwise.ai/get-assessment' },
  openGraph: {
    type: 'website',
    title: 'Free Cloud Assessment | Thynkwise',
    description:
      'Get a personalised cloud health score, cost savings estimate, and recommended next steps in minutes.',
    url: 'https://www.thynkwise.ai/get-assessment',
    siteName: 'Thynkwise',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thynkwise',
    title: 'Free Cloud Assessment | Thynkwise',
    description:
      'Get a personalised cloud health score, cost savings estimate, and recommended next steps in minutes.',
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
      name: 'Get Assessment',
      item: 'https://www.thynkwise.ai/get-assessment',
    },
  ],
};

export default function GetAssessmentLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className={syne.variable}>{children}</div>
    </>
  );
}
