import { fetchStrapiDocument } from './client';

const MANAGED_SERVICES_PAGE_QUERY = `
  /api/managed-services-page
    ?populate[hero][populate]=*
    &populate[managed_service_pillars][populate][pillar][populate]=*
    &populate[service_catalogue][populate][service_category][populate]=*
    &populate[why_thynkwise][populate][heading][populate]=*
    &populate[why_thynkwise][populate][card][populate]=*
    &populate[process_steps][populate][process_step][populate]=*
    &populate[industry_usecases][populate][usecase][populate]=*
    &populate[stats_band][populate][stats][populate]=*
    &populate[case_studies][populate][case_study][populate]=*
    &populate[faq][populate][faq_item][populate]=*
    &populate[final_cta][populate]=*
`.replace(/\s/g, '');

export async function getManagedServicesPage() {
  return fetchStrapiDocument(MANAGED_SERVICES_PAGE_QUERY, {
    tags: ['managed-services-page'],
  });
}
