import { fetchStrapiDocument } from './client';

const INDIAN_SOVEREIGN_CLOUD_PAGE_QUERY = `
  /api/indian-sovereign-cloud-page
    ?populate[hero][populate][trust_stats][populate]=*
    &populate[hero][populate][dashboard_card][populate][rows][populate]=*
    &populate[comparison][populate][foreign_hyperscaler_column][populate][points][populate]=*
    &populate[comparison][populate][indian_csp_column][populate][points][populate]=*
    &populate[why_thynkwise][populate][benefit_cards][populate]=*
    &populate[services][populate][service_cards][populate][tags][populate]=*
    &populate[services][populate][credential_cards][populate]=*
    &populate[use_cases][populate][use_case_cards][populate][tags][populate]=*
    &populate[stats_band][populate]=*
    &populate[case_studies][populate][case_study_cards][populate]=*
    &populate[partner_ecosystem][populate][partner_cards][populate]=*
    &populate[common_questions][populate]=*
    &populate[final_cta][populate]=*
    &populate[faq][populate]=*
`.replace(/\s/g, '');

export async function getIndianSovereignCloudPage() {
  return fetchStrapiDocument(INDIAN_SOVEREIGN_CLOUD_PAGE_QUERY, {
    tags: ['indian-sovereign-cloud-page'],
  });
}
