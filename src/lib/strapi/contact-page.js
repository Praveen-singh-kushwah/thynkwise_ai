import { fetchStrapiDocument } from './client';

const CONTACT_PAGE_QUERY = `
  /api/contact-page
    ?populate[hero][populate][response_channels][populate]=*
    &populate[contact_form][populate][step_indicators][populate]=*
    &populate[contact_form][populate][about_you_step][populate][role_options][populate]=*
    &populate[contact_form][populate][cloud_situation_step][populate][current_cloud_options][populate]=*
    &populate[contact_form][populate][cloud_situation_step][populate][monthly_spend_options][populate]=*
    &populate[contact_form][populate][cloud_situation_step][populate][industry_options][populate]=*
    &populate[contact_form][populate][cloud_situation_step][populate][challenge_options][populate]=*
    &populate[contact_form][populate][requirements_step][populate][service_options][populate]=*
    &populate[contact_form][populate][requirements_step][populate][contact_method_options][populate]=*
    &populate[contact_form][populate][success_state][populate][what_happens_next_items][populate]=*
    &populate[contact_form][populate][quick_actions][populate]=*
    &populate[contact_channels][populate][channels][populate]=*
    &populate[offices][populate][offices][populate]=*
`.replace(/\s/g, '');

export async function getContactPage() {
  return fetchStrapiDocument(CONTACT_PAGE_QUERY, {
    tags: ['contact-page'],
  });
}
