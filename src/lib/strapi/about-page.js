import { fetchStrapiDocument } from './client';

const ABOUT_PAGE_QUERY = `
  /api/about-page
    ?populate[hero][populate]=*
    &populate[our_mission][populate][left][populate]=*
    &populate[our_mission][populate][right][populate][stat][populate]=*
    &populate[by_the_numbers][populate][heading][populate]=*
    &populate[by_the_numbers][populate][card][populate][stat][populate]=*
`.replace(/\s/g, '');

export async function getAboutPage() {
  return fetchStrapiDocument(ABOUT_PAGE_QUERY, {
    tags: ['about-page'],
  });
}
