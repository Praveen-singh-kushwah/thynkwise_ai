import { fetchStrapiDocument } from './client';

const AWS_PAGE_QUERY = `
  /api/aws-page
    ?populate[hero][populate][left_container][populate][points][populate]=*
    &populate[hero][populate][right_container][populate]=*
    &populate[comparison][populate][direct][populate][points][populate]=*
    &populate[comparison][populate][via_thynkwise][populate][points][populate]=*
    &populate[why_thynkwise][populate][heading][populate]=*
    &populate[why_thynkwise][populate][card][populate]=*
    &populate[aws_services][populate][service_category][populate]=*
    &populate[certified_expertise][populate][card][populate]=*
    &populate[real_world_aws][populate]=*
    &populate[client_outcomes][populate]=*
    &populate[by_the_numbers][populate]=*
    &populate[common_questions][populate][q_a][populate]=*
    &populate[cta][populate][points][populate]=*
    &populate[faq][populate][q_a][populate]=*
`.replace(/\s/g, '');

export async function getAwsPage() {
  return fetchStrapiDocument(AWS_PAGE_QUERY, {
    tags: ['aws-page'],
  });
}
