import { fetchStrapiDocument } from './client';

const COST_OPTIMIZATION_PAGE_QUERY = `
  /api/cost-optimization-page
    ?populate[seo][populate]=*
    &populate[hero][populate][proof_stats][populate]=*
    &populate[hero][populate][waste_meter][populate][waste_items][populate]=*
    &populate[answer_box][populate]=*
    &populate[cost_leaks_section][populate][cards][populate]=*
    &populate[finops_process_section][populate][steps][populate]=*
    &populate[savings_proof_section][populate][rows][populate]=*
    &populate[calculator_section][populate][provider_options][populate]=*
    &populate[calculator_section][populate][result_items][populate]=*
    &populate[optimization_layers_section][populate][cards][populate]=*
    &populate[roi_timeline_section][populate][phases][populate][items][populate]=*
    &populate[guarantee_section][populate]=*
    &populate[testimonials_section][populate][testimonials][populate]=*
`.replace(/\s/g, '');

export async function getCostOptimizationPage() {
  return fetchStrapiDocument(COST_OPTIMIZATION_PAGE_QUERY, {
    tags: ['cost-optimization-page'],
  });
}
