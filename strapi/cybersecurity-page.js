import { fetchStrapiDocument } from './client';

const CYBERSECURITY_PAGE_QUERY = `
  /api/cybersecurity-page
    ?populate[cybersecurity_hero][populate]=*
    &populate[security_event][populate]=*
    &populate[security_domains][populate]=*
    &populate[security_service_catalogue][populate]=*
    &populate[security_compliance_frameworks][populate]=*
    &populate[why_thynkwise_security][populate]=*
    &populate[security_stats_band][populate]=*
    &populate[security_case_studies][populate]=*
    &populate[security_partner][populate]=*
    &populate[faq][populate]=*
    &populate[cta][populate]=*
`.replace(/\s/g, '');

export async function getCybersecurityPage() {
  return fetchStrapiDocument(CYBERSECURITY_PAGE_QUERY, {
    tags: ['cybersecurity-page'],
  });
}
