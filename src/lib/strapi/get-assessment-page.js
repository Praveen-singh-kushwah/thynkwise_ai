import { fetchStrapiDocument } from './client';

const GET_ASSESSMENT_PAGE_QUERY = `
  /api/get-assessment-page
    ?populate[hero][populate][badge_items][populate]=*
    &populate[assessment_quiz][populate][questions][populate][options]=*
    &populate[contact_form][populate][role_options][populate]=*
    &populate[results_section][populate]=*
    &populate[faq][populate]=*
`.replace(/\s/g, '');

export async function getGetAssessmentPage() {
  return fetchStrapiDocument(GET_ASSESSMENT_PAGE_QUERY, {
    tags: ['get-assessment-page'],
  });
}
