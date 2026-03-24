import { fetchStrapiDocument } from './client';

const AWS_PAGE_QUERY = `
  /api/aws-page
    ?populate[hero][populate][left_container][populate][points][populate]=*
    &populate[hero][populate][right_container][populate]=*
`.replace(/\s/g, '');

export async function getAwsPage() {
  return fetchStrapiDocument(AWS_PAGE_QUERY, {
    tags: ['aws-page'],
  });
}
