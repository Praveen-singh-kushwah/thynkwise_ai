import { fetchStrapiDocument } from './client';

const GPUAAS_PAGE_QUERY = `
  /api/gpuaas-page
    ?populate[hero][populate]=*
    &populate[gpuaas_who_deploys][populate]=*
    &populate[gpuaas_delivery_models][populate]=*
    &populate[gpu_architecture][populate]=*
    &populate[workload_library][populate]=*
    &populate[framework_stack][populate]=*
    &populate[turnkey_systems][populate]=*
    &populate[why_thynkwise][populate]=*
    &populate[outcomes][populate]=*
    &populate[partner_ecosystem][populate]=*
    &populate[common_questions][populate]=*
    &populate[cta_section][populate]=*
    &populate[faq][populate]=*
`.replace(/\s/g, '');

export async function getGpuaasPage() {
  return fetchStrapiDocument(GPUAAS_PAGE_QUERY, {
    tags: ['gpuaas-page'],
  });
}
