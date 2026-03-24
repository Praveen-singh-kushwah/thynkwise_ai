import { fetchStrapiDocument } from './client';

const ABOUT_PAGE_QUERY = `
  /api/about-page
    ?populate[hero][populate]=*
    &populate[our_mission][populate][left][populate]=*
    &populate[our_mission][populate][right][populate][stat][populate]=*
    &populate[by_the_numbers][populate][heading][populate]=*
    &populate[by_the_numbers][populate][card][populate][stat][populate]=*
    &populate[our_values][populate][heading][populate]=*
    &populate[our_values][populate][card][populate]=*
    &populate[the_team][populate][heading][populate]=*
    &populate[the_team][populate][team_card][populate]=*
    &populate[technology_partners][populate][heading][populate]=*
    &populate[technology_partners][populate][partner_card][populate]=*
    &populate[where_we_are][populate][heading][populate]=*
    &populate[where_we_are][populate][card][populate]=*
    &populate[stats_band][populate][stat][populate]=*
    &populate[cta_section][populate]=*
    &populate[faq][populate][q_a][populate]=*
`.replace(/\s/g, '');

export async function getAboutPage() {
  return fetchStrapiDocument(ABOUT_PAGE_QUERY, {
    tags: ['about-page'],
  });
}
