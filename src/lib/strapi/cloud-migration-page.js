import { fetchStrapiDocument } from './client';

const CLOUD_MIGRATION_PAGE_QUERY = `
  /api/cloud-migration-page
    ?populate[cloud_migration_hero][populate][stats][populate]=*
    &populate[cloud_migration_hero][populate][process_step][populate]=*
    &populate[quick_answer][populate]=*
    &populate[migration_process][populate][process_step_detailed][populate][deliverables][populate]=*
    &populate[migration_risk_management][populate][risk_item][populate]=*
    &populate[migration_risk_management][populate][solution_item][populate]=*
    &populate[migration_service_types][populate][migration_service][populate]=*
    &populate[six_r_framework][populate][six_r_strategy][populate]=*
    &populate[industry_migration][populate][industry_card][populate]=*
    &populate[trust_stats][populate]=*
    &populate[case_study][populate][case_study][populate]=*
    &populate[faq][populate][faq_item][populate]=*
    &populate[cta_section][populate]=*
`.replace(/\s/g, '');

export async function getCloudMigrationPage() {
  return fetchStrapiDocument(CLOUD_MIGRATION_PAGE_QUERY, {
    tags: ['cloud-migration-page'],
  });
}
