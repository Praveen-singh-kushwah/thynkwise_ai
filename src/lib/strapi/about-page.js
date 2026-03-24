import { fetchStrapiDocument } from './client';

const ABOUT_PAGE_QUERY = `
  /api/about-page
    ?populate[hero][populate]=*
`.replace(/\s/g, '');

export async function getAboutPage() {
  return fetchStrapiDocument(ABOUT_PAGE_QUERY, {
    tags: ['about-page'],
  });
}
