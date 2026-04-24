import { fetchStrapiDocument } from './client';

const SALES_CONSULTING_PAGE_QUERY = `
  /api/sales-consulting-page
    ?populate[seo][populate]=*
    &populate[hero][populate]=*
    &populate[problem_section][populate]=*
    &populate[crm_platforms_section][populate][platform_cards][populate]=*
    &populate[beyond_crm_section][populate]=*
    &populate[academy_banner][populate]=*
    &populate[case_study_section][populate]=*
    &populate[engagement_model_section][populate]=*
    &populate[testimonials_section][populate]=*
    &populate[faq_section][populate]=*
    &populate[final_cta_section][populate]=*
`.replace(/\s/g, '');

export async function getSalesConsultingPage() {
  return fetchStrapiDocument(SALES_CONSULTING_PAGE_QUERY, {
    tags: ['sales-consulting-page'],
  });
}
