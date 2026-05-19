import { fetchStrapiDocument } from './client';

export async function getPageSeo(path, tag) {
  return fetchStrapiDocument(`${path}?populate[seo][populate]=*`, {
    tags: [tag],
    silentStatuses: [400, 403],
  });
}
