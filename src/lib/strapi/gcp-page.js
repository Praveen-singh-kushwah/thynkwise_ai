import { fetchStrapiDocument } from './client';

const GCP_PAGE_QUERY = `
  /api/gcp-page
    ?populate[hero][populate][trust_points][populate]=*
    &populate[hero][populate][partner_dashboard_card][populate][stats][populate]=*
    &populate[comparison][populate][direct_option][populate][points][populate]=*
    &populate[comparison][populate][thynkwise_option][populate][points][populate]=*
    &populate[why_thynkwise_gcp][populate][benefit_cards][populate]=*
    &populate[gcp_services_portfolio][populate][service_cards][populate][tags][populate]=*
    &populate[gcp_certifications][populate][certification_cards][populate]=*
    &populate[real_world_gcp_in_india][populate][use_case_cards][populate][tags][populate]=*
    &populate[client_outcomes][populate][case_study_cards][populate]=*
    &populate[by_the_numbers][populate][stats][populate]=*
    &populate[common_questions][populate][questions][populate]=*
    &populate[final_cta][populate]=*
    &populate[faq][populate][questions][populate]=*
`.replace(/\s/g, '');

export async function getGcpPage() {
  return fetchStrapiDocument(GCP_PAGE_QUERY, {
    tags: ['gcp-page'],
  });
}
