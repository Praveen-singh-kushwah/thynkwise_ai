import { fetchStrapiDocument } from './client';

const HOME_PAGE_QUERY = `
  /api/home-page
    ?populate[hero][populate]=*
    &populate[valueItem][populate]=*
    &populate[service][populate][serviceCard][populate]=*
    &populate[cloudProvider][populate][cards][populate]=*
    &populate[stat][populate]=*
    &populate[WhyThynkwise][populate][why_card][populate]=*
    &populate[industry][populate][industryCard][populate]=*
    &populate[ClientOutcomes][populate][outcomesCard][populate]=*
    &populate[testimonial][populate]=*
    &populate[cta][populate]=*
    &populate[faq][populate]=*
`.replace(/\s/g, '');

export async function getHomePage() {
  return fetchStrapiDocument(HOME_PAGE_QUERY, {
    tags: ['home-page'],
  });
}
