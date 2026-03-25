import { fetchStrapiDocument } from './client';

const BOOK_DEMO_PAGE_QUERY = `
  /api/book-demo-page
    ?populate[list_point][populate]=*
    &populate[points]=*
    &populate[feedback]=*
    &populate[faq]=*
`.replace(/\s/g, '');

export async function getBookDemoPage() {
  return fetchStrapiDocument(BOOK_DEMO_PAGE_QUERY, {
    tags: ['book-demo-page'],
  });
}
