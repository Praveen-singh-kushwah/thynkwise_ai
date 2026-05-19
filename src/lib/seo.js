export const SITE_URL = 'https://www.thynkwise.ai';

export function buildCmsMetadata(
  data,
  { path, title: fallbackTitle, description: fallbackDescription, keywords, imageUrl },
) {
  const seo = data?.seo || {};
  const title = seo.browser_title || fallbackTitle;
  const description = seo.meta_description || fallbackDescription;
  const canonical = seo.canonical_url || `${SITE_URL}${path}`;
  const openGraphTitle = seo.og_title || title;
  const openGraphDescription = seo.og_description || description;
  const twitterTitle = seo.twitter_title || openGraphTitle;
  const image = imageUrl ? { images: [{ url: imageUrl, width: 1200, height: 630 }] } : {};

  return {
    title,
    description,
    keywords: seo.meta_keywords || keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: 'Thynkwise',
      title: openGraphTitle,
      description: openGraphDescription,
      ...image,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@thynkwise',
      title: twitterTitle,
      description: openGraphDescription,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };
}
