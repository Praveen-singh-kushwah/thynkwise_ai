import { cache } from 'react';
import './cost-optimization.css';
import CostOptimizationPage from './components';
import { getCostOptimizationPage } from '@/lib/strapi/cost-optimization-page';

const SITE_URL = 'https://www.thynkwise.ai';

const getCachedCostOptimizationPage = cache(async () => getCostOptimizationPage());

function buildCostOptimizationMetadata(data) {
  const seo = data?.seo || {};
  const title =
    seo.browser_title || 'Cloud Cost Optimisation India | FinOps as a Service | Thynkwise';
  const description =
    seo.meta_description ||
    'Reduce AWS, Azure, and Google Cloud spend with Thynkwise FinOps: rightsizing, reserved capacity planning, idle cleanup, and cloud cost governance.';
  const canonical = seo.canonical_url || `${SITE_URL}/cost-optimization`;
  const openGraphTitle = seo.og_title || title;
  const openGraphDescription = seo.og_description || description;

  return {
    title,
    description,
    keywords:
      seo.meta_keywords ||
      'cloud cost optimisation India, FinOps India, AWS cost optimisation, Azure cost reduction, cloud cost management, cloud spend optimisation',
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: 'Thynkwise',
      title: openGraphTitle,
      description: openGraphDescription,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@thynkwise',
      title: seo.twitter_title || openGraphTitle,
      description: openGraphDescription,
    },
  };
}

function buildFaqSchema(data) {
  const items =
    data?.faq_section?.faq_items?.filter((item) => item?.question && item?.answer) || [];

  if (!items.length) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export async function generateMetadata() {
  const costOptimizationPageData = await getCachedCostOptimizationPage();
  return buildCostOptimizationMetadata(costOptimizationPageData);
}

export default async function Page() {
  const costOptimizationPageData = await getCachedCostOptimizationPage();
  const faqSchema = buildFaqSchema(costOptimizationPageData);

  return (
    <>
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <CostOptimizationPage data={costOptimizationPageData} />
    </>
  );
}
