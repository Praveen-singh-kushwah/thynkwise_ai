$target = 'D:\New folder\test\thynkwise_ai_cms\src\index.ts'

$content = @'
import type { Core } from '@strapi/strapi';

const homePageData = {
  seo: {
    browser_title: 'ThynkWISE | Technology · Sales Consulting · AI Avatars · Cloud',
    meta_description:
      'ThynkWISE is a full-spectrum technology and consulting firm - Sales Consulting, AI Avatar as a Service, Partner-Enabled Digital Services, and Cloud & Hardware.',
    meta_keywords:
      'ThynkWISE, technology consulting India, sales consulting CRM, AI avatar enterprise, cloud managed services, Salesforce implementation, Apollo.io consulting, digital transformation, Pune technology company',
    canonical_url: 'https://www.thynkwise.ai/',
    og_title: 'ThynkWISE | Technology · Sales Consulting · AI · Cloud',
    og_description:
      'Full-spectrum technology and consulting - Sales Consulting, AI Avatar as a Service, Cloud & Hardware, and Partner-Enabled Digital Services.',
    twitter_title: 'ThynkWISE | Technology · Sales Consulting · AI · Cloud',
  },
  hero: {
    eyebrow_text: 'Technology · Consulting · AI · Cloud',
    title:
      'We Inspire<br><em>Sales Experts.</em><br>We Build Systems<br>That Deliver.',
    description:
      'ThynkWISE is a full-spectrum technology and consulting firm. CRM implementation, AI-powered digital humans, cloud infrastructure, and a vetted partner ecosystem - one partner, measurable outcomes.',
    primary_cta: {
      button_text: 'Talk to Us on WhatsApp ->',
      button_link: 'https://wa.me/919763008800',
      variant: 'whatsapp',
    },
    secondary_cta: {
      button_text: 'Explore Our Work',
      button_link: '#verticals',
      variant: 'secondary',
    },
    vertical_cards: [
      {
        order_label: '01',
        title: 'Sales Consulting',
        description: 'CRM · Automation · Fractional CSO · Revenue Systems',
        link_text: 'Explore ->',
        link_url: '/sales-consulting',
      },
      {
        order_label: '02',
        title: 'AI Avatar as a Service',
        description: 'Digital Humans · Arabic · English · 24/7 · Web · Kiosk',
        link_text: 'Explore ->',
        link_url: '/ai-avatar',
      },
      {
        order_label: '03',
        title: 'Partner-Enabled Digital',
        description: 'Web · Software · SEO/AEO via vetted specialist partners',
        link_text: 'Explore ->',
        link_url: '/partner-ecosystem',
      },
      {
        order_label: '04',
        title: 'Cloud & Hardware',
        description: 'AWS · Azure · GCP · ESDS · Managed Services · GPU',
        link_text: 'Explore ->',
        link_url: 'https://beta.thynkwise.ai',
      },
    ],
  },
  stats_band: {
    stats: [
      { metric_value: '50+', metric_label: 'Clients globally' },
      { metric_value: '5x', metric_label: 'Appointment growth' },
      { metric_value: '150%', metric_label: 'Brand awareness lift' },
      { metric_value: '4+', metric_label: 'Years delivering' },
      { metric_value: '7', metric_label: 'Countries served' },
      { metric_value: '100%', metric_label: 'Outcome focused' },
    ],
  },
  capabilities_section: {
    eyebrow_text: 'What we do',
    title: 'One partner. Four capabilities.',
    description:
      'Most technology firms do one thing adequately. ThynkWISE does four things exceptionally - and they compound. Better CRM data feeds better AI. Better AI drives better cloud ROI.',
    capability_cards: [
      {
        order_label: 'Vertical 01',
        accent_tone: 'blue',
        title: 'Sales Consulting',
        description:
          'CRM architecture, sales automation, team enablement, and embedded sales leadership. We build the system that makes your team close at a different level.',
        tags: [
          { label: 'Salesforce' },
          { label: 'Dynamics 365' },
          { label: 'Apollo.io' },
          { label: 'HubSpot' },
          { label: 'Fractional CSO' },
        ],
        result_label: 'Client result - Clarion Technologies',
        result_value: '2 appts/week to 1/day. 5x growth in 90 days via Apollo.io.',
        link_text: 'View Sales Consulting ->',
        link_url: '/sales-consulting',
      },
      {
        order_label: 'Vertical 02',
        accent_tone: 'orange',
        title: 'AI Avatar as a Service',
        description:
          'Hyper-realistic digital humans in Arabic, English, Hindi and more. Web, app, kiosk, WhatsApp, and video. 24/7. Zero downtime. No camera crew.',
        tags: [
          { label: 'Arabic AI' },
          { label: 'English' },
          { label: 'Hindi' },
          { label: 'Kiosk' },
          { label: 'WhatsApp' },
          { label: 'Enterprise' },
        ],
        result_label: 'Live deployment - AGFund',
        result_value:
          'Arabic + English AI guiding donors and applicants 24/7, zero staff intervention.',
        link_text: 'View AI Avatar Platform ->',
        link_url: '/ai-avatar',
      },
      {
        order_label: 'Vertical 03',
        accent_tone: 'purple',
        title: 'Partner-Enabled Digital Services',
        description:
          'We do not do everything - we know who does. Web development, custom software, and digital services delivered by vetted specialist partners end-to-end or white-label.',
        tags: [
          { label: 'Web Development' },
          { label: 'Custom Software' },
          { label: 'SEO / AEO' },
          { label: 'White-Label' },
          { label: 'Lucent Innovation' },
        ],
        result_label: 'Partner delivery - Barcode Gulf (UAE/KSA)',
        result_value: '4x website traffic in 12 months. SEO + GMB across 5 locations.',
        link_text: 'View Partner Ecosystem ->',
        link_url: '/partner-ecosystem',
      },
      {
        order_label: 'Vertical 04',
        accent_tone: 'green',
        title: 'Cloud & Hardware Services',
        description:
          'Authorised reseller and managed services partner for AWS, Azure, GCP, ESDS, Yotta, and Ingram Micro. Cloud migration, 24/7 NOC, FinOps, cybersecurity, datacenter hardware, and GPU cloud.',
        tags: [
          { label: 'AWS' },
          { label: 'Azure' },
          { label: 'GCP' },
          { label: 'ESDS' },
          { label: 'Yotta' },
          { label: 'Ingram Micro' },
        ],
        result_label: 'Platform performance',
        result_value: '28% average cloud cost reduction in 90 days. 99.9% uptime SLA.',
        link_text: 'View Cloud Services ->',
        link_url: 'https://beta.thynkwise.ai',
      },
    ],
  },
  partner_network_section: {
    eyebrow_text: 'Partner & supplier network',
    title: 'Best-in-class partners. Every vertical.',
    description: 'A curated partner and supplier network supporting every ThynkWISE capability.',
    partner_pills: [
      { label: 'AWS - Authorized Reseller' },
      { label: 'Microsoft Azure' },
      { label: 'Google Cloud' },
      { label: 'ESDS - Authorized Partner' },
      { label: 'Yotta Data Services' },
      { label: 'Ingram Micro' },
      { label: 'Salesforce via Nsquare' },
      { label: 'Microsoft D365 via Nsquare' },
      { label: 'Apollo.io' },
      { label: 'HubSpot' },
      { label: 'Trellus.ai' },
      { label: 'Lucent Innovation' },
      { label: 'V2S Tech' },
    ],
  },
  client_portfolio_section: {
    eyebrow_text: 'Client portfolio',
    title: 'Clients across India, USA, UK & Middle East.',
    description: 'Results with names attached - not anonymised metrics.',
    client_cards: [
      {
        category_label: 'Sales Consulting',
        client_name: 'Clarion Technologies',
        geography: 'India · Business Consulting',
        description:
          'Apollo.io implementation, sales system revamp, website content strategy. Replaced FreshSales + SalesIntel with a unified platform.',
        metric_value: '5x',
        metric_label: 'appointment growth in 90 days',
      },
      {
        category_label: 'Sales Consulting',
        client_name: 'Celebal Technologies',
        geography: 'India · Data & AI Consulting',
        description:
          'Apollo.io B2B sales implementation, demand generation tech stack, CRM workflow automation for a leading Data & AI consulting firm.',
        metric_value: 'OK',
        metric_label: 'Full demand gen stack delivered',
      },
      {
        category_label: 'Sales Consulting',
        client_name: 'BizTech Consulting',
        geography: 'India · USA · Saudi Arabia · IT Outsourcing',
        description:
          'Apollo.io CRM setup, scalable outreach foundation, and data-driven sales strategy for a fast-growing IT outsourcing consultancy.',
        metric_value: 'OK',
        metric_label: 'Outreach infrastructure live',
      },
      {
        category_label: 'Digital Marketing · Partner-Delivered',
        client_name: 'Barcode Gulf',
        geography: 'Middle East - UAE / KSA · Mobility Solutions',
        description:
          'SEO strategy, GMB optimisation across 5 locations, LinkedIn and Meta campaigns for the UAE and Saudi Arabia market.',
        metric_value: '4x',
        metric_label: 'website traffic in 12 months',
      },
      {
        category_label: 'Digital Marketing · Partner-Delivered',
        client_name: 'DataFortune',
        geography: 'India · USA · Technology Solutions',
        description:
          '360-degree digital marketing - SEO, Google Ads, content strategy, social. 2-year sustained partnership with compounding returns.',
        metric_value: '150%',
        metric_label: 'brand awareness + 40% lead growth',
      },
      {
        category_label: 'Web & Digital · Partner-Delivered',
        client_name: 'SCISPL',
        geography: 'India · Denmark · Product Engineering',
        description:
          'Website revamp, content strategy, social media management, and email marketing for a product engineering firm across India and Europe.',
        metric_value: '150%',
        metric_label: 'brand awareness lift',
      },
    ],
  },
  testimonials_section: {
    eyebrow_text: 'Client voice',
    title: 'What our clients say.',
    description: '',
    testimonial_cards: [
      {
        quote:
          'Working with the ThynkWISE team on our Apollo.io implementation has been a truly positive experience. Their deep understanding of the platform helped us unlock the full potential of Apollo for our inside sales and demand generation functions - from data structuring and workflow automation to sequence optimisation and reporting setup.',
        avatar_initials: 'SS',
        author_name: 'Sabarinathan Sampath',
        author_role: 'Deputy Vice President · Celebal Technologies',
      },
      {
        quote:
          'Partnering with ThynkWISE was a seamless experience. They did not just implement a tool - they helped us build a stronger foundation for scalable outreach and data-driven growth. ThynkWISE truly operates as an extension of our team, focused on long-term enablement and measurable impact.',
        avatar_initials: 'DS',
        author_name: 'Divyang Sonchhatra',
        author_role: 'Principal · BizTech Consulting & Solutions',
      },
    ],
  },
  faq_section: {
    eyebrow_text: 'Knowledge base',
    title: 'Frequently asked questions',
    description: '',
    faq_items: [
      {
        question: 'What does ThynkWISE do?',
        answer:
          'ThynkWISE is a full-spectrum technology and consulting firm - Sales Consulting, AI Avatar as a Service, Cloud & Hardware Services, and a Partner Ecosystem enabling web development and digital services via vetted specialists.',
        is_open_by_default: true,
      },
      {
        question: 'What is AI Avatar as a Service?',
        answer:
          'ThynkWISE deploys hyper-realistic digital humans in Arabic, English, Hindi and other languages across web, app, kiosk, WhatsApp, and video.',
        is_open_by_default: false,
      },
      {
        question: 'Does ThynkWISE implement Salesforce and Microsoft Dynamics 365?',
        answer:
          'Yes - through the Nsquare certified partnership. Salesforce and Microsoft Dynamics 365 implementations, migration, and support are part of the offering.',
        is_open_by_default: false,
      },
      {
        question: 'What results has ThynkWISE delivered for clients?',
        answer:
          '5x appointment growth for Clarion Technologies, 150% brand awareness for DataFortune and SCISPL, 4x website traffic for Barcode Gulf, and 28% average cloud cost reduction.',
        is_open_by_default: false,
      },
      {
        question: 'Where does ThynkWISE operate?',
        answer:
          'Headquartered in Pune, India, with client delivery across India, USA, UK, Canada, Australia, Netherlands, UAE, and Saudi Arabia.',
        is_open_by_default: false,
      },
    ],
  },
  final_cta_section: {
    title: 'Let us build something that matters.',
    description:
      'Sales system, AI avatar, digital infrastructure, or a partner referral - ThynkWISE delivers the full stack. One conversation. No obligation.',
    primary_cta: {
      button_text: 'WhatsApp: +91 97630 08800',
      button_link: 'https://wa.me/919763008800',
      variant: 'whatsapp',
    },
    secondary_cta: {
      button_text: 'azra@thynkwise.co.in',
      button_link: 'mailto:azra@thynkwise.co.in',
      variant: 'secondary',
    },
  },
};

const HOME_PAGE_SECTIONS = [
  'seo',
  'hero',
  'stats_band',
  'capabilities_section',
  'partner_network_section',
  'client_portfolio_section',
  'testimonials_section',
  'faq_section',
  'final_cta_section',
];

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    try {
      const homePageService = strapi.documents('api::home-page.home-page');
      const existing = (await homePageService.findFirst({
        status: 'draft',
      } as any)) as any;

      if (!existing) {
        await homePageService.create({
          data: homePageData as any,
          status: 'published',
        } as any);
        strapi.log.info('Created Home Page content.');
        return;
      }

      const missingSections: string[] = [];
      const patchData: Record<string, unknown> = {};

      for (const key of HOME_PAGE_SECTIONS) {
        if (!existing[key]) {
          patchData[key] = (homePageData as any)[key];
          missingSections.push(key);
        }
      }

      if (!missingSections.length) {
        strapi.log.info('Home Page content already exists.');
        return;
      }

      await homePageService.update({
        documentId: existing.documentId,
        data: patchData as any,
        status: 'published',
      } as any);

      strapi.log.info(`Filled missing Home Page sections: ${missingSections.join(', ')}`);
    } catch (error) {
      strapi.log.error(`Home Page bootstrap failed: ${error}`);
    }
  },
};
'@

Set-Content -LiteralPath $target -Value $content
Write-Host 'Home Page bootstrap seed updated.'
