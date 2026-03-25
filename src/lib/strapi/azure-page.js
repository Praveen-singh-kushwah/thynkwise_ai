import { fetchStrapiDocument } from './client';

const AZURE_PAGE_QUERY = `
  /api/azure-page
    ?populate[hero][populate][left_container][populate][points][populate]=*
    &populate[hero][populate][right_container][populate]=*
    &populate[why_azure][populate][heading][populate]=*
    &populate[why_azure][populate][card][populate]=*
    &populate[azure_services][populate][service_category][populate]=*
    &populate[azure_for_bfsi_india][populate][left_container][populate][points][populate]=*
    &populate[azure_for_bfsi_india][populate][right_container][populate][card][populate]=*
    &populate[team_credentials][populate][card][populate]=*
    &populate[azure_success_stories][populate]=*
    &populate[comparison][populate][direct][populate][points][populate]=*
    &populate[comparison][populate][via_thynkwise][populate][points][populate]=*
`.replace(/\s/g, '');

export async function getAzurePage() {
  return fetchStrapiDocument(AZURE_PAGE_QUERY, {
    tags: ['azure-page'],
  });
}
