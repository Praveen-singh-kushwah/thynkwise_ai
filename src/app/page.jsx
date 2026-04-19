import { cache } from 'react';
import HomePage from './components/home-page/HomePage';
import { getHomePage } from '@/lib/strapi/home-page';

const SITE_URL = 'https://www.thynkwise.ai';

const getCachedHomePage = cache(async () => getHomePage());

function buildHomeMetadata(homePageData) {
  const seo = homePageData?.seo || {};
  const title = seo?.browser_title || 'ThynkWISE | Technology, Consulting, AI & Cloud';
  const description =
    seo?.meta_description ||
    'ThynkWISE helps teams grow with sales consulting, AI avatars, partner-enabled digital services, and cloud infrastructure.';
  const keywords =
    seo?.meta_keywords ||
    'ThynkWISE, sales consulting, AI avatars, digital services, cloud infrastructure';
  const canonical = seo?.canonical_url || `${SITE_URL}/`;
  const openGraphTitle = seo?.og_title || title;
  const openGraphDescription = seo?.og_description || description;
  const twitterTitle = seo?.twitter_title || openGraphTitle;

  return {
    title,
    description,
    keywords,
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
      title: twitterTitle,
      description: openGraphDescription,
    },
  };
}

function buildFaqSchema(homePageData) {
  const items =
    homePageData?.faq_section?.faq_items?.filter((item) => item?.question && item?.answer) || [];

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
  const homePageData = await getCachedHomePage();
  return buildHomeMetadata(homePageData);
}

export default async function Page() {
  const homePageData = await getCachedHomePage();
  const faqSchema = buildFaqSchema(homePageData);

  return (
    <>
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <HomePage data={homePageData} />
    </>
  );
}
