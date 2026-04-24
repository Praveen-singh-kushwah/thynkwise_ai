import { cache } from 'react';
import './sales-consulting.css';
import SalesConsultingPage from './components';
import { getSalesConsultingPage } from '@/lib/strapi/sales-consulting-page';

const SITE_URL = 'https://www.thynkwise.ai';

const getCachedSalesConsultingPage = cache(async () => getSalesConsultingPage());

function getSeo(data) {
  const seo = data?.seo || {};
  const title =
    seo?.browser_title ||
    'Sales Consulting & CRM Implementation | ThynkWISE';
  const description =
    seo?.meta_description ||
    'ThynkWISE delivers CRM implementation, sales automation, Fractional CSO and outreach systems for B2B teams.';
  const canonical = seo?.canonical_url || `${SITE_URL}/sales-consulting`;

  return { seo, title, description, canonical };
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

function buildServiceSchema(data) {
  const { seo, description, canonical } = getSeo(data);

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: seo?.service_schema_name || 'Sales Consulting - ThynkWISE',
    provider: {
      '@type': 'Organization',
      name: 'ThynkWISE Technologies',
      url: SITE_URL,
    },
    description: seo?.service_schema_description || description,
    serviceType: seo?.service_type || 'Sales Consulting and CRM Implementation',
    areaServed: seo?.area_served?.map((item) => item?.label).filter(Boolean) || [
      'India',
      'United States',
      'United Kingdom',
      'Middle East',
    ],
    url: canonical,
  };
}

export async function generateMetadata() {
  const data = await getCachedSalesConsultingPage();
  const { seo, title, description, canonical } = getSeo(data);
  const openGraphTitle = seo?.og_title || title;
  const openGraphDescription = seo?.og_description || description;

  return {
    title,
    description,
    keywords: seo?.meta_keywords,
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
      title: seo?.twitter_title || openGraphTitle,
      description: openGraphDescription,
    },
  };
}

export default async function Page() {
  const data = await getCachedSalesConsultingPage();
  const faqSchema = buildFaqSchema(data);
  const serviceSchema = buildServiceSchema(data);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <SalesConsultingPage data={data} />
    </>
  );
}
