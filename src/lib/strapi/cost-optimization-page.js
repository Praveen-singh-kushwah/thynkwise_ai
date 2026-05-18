import { fetchStrapiDocument } from './client';

const COST_OPTIMIZATION_PAGE_QUERY = `
  /api/cost-optimization-page
    ?populate[seo][populate]=*
    &populate[hero][populate][proof_stats][populate]=*
    &populate[hero][populate][waste_meter][populate][waste_items][populate]=*
    &populate[answer_box][populate]=*
    &populate[cost_leaks_section][populate][cards][populate]=*
    &populate[finops_process_section][populate][steps][populate]=*
`.replace(/\s/g, '');

export async function getCostOptimizationPage() {
  return fetchStrapiDocument(COST_OPTIMIZATION_PAGE_QUERY, {
    tags: ['cost-optimization-page'],
  });
}
