import { fetchStrapiDocument } from './client';

const HOME_PAGE_QUERY = `
  /api/home-page
    ?populate[seo][populate]=*
    &populate[hero][populate]=*
    &populate[stats_band][populate]=*
    &populate[capabilities_section][populate][capability_cards][populate]=*
    &populate[partner_network_section][populate]=*
    &populate[client_portfolio_section][populate]=*
    &populate[testimonials_section][populate]=*
    &populate[faq_section][populate]=*
    &populate[final_cta_section][populate]=*
`.replace(/\s/g, '');

export async function getHomePage() {
  return fetchStrapiDocument(HOME_PAGE_QUERY, {
    tags: ['home-page'],
  });
}
