import Link from 'next/link';
import CmsImage from '../CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import styles from './HomeSections.module.css';

const fallbackSection = {
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
};

function renderCardLink(card, children) {
  if (!card?.link_url) {
    return <div className="th-home-capability-card-link-shell">{children}</div>;
  }

  const isExternal =
    card.link_url.startsWith('http://') || card.link_url.startsWith('https://');

  if (isExternal) {
    return (
      <a href={card.link_url} className={styles.capabilityLink} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={card.link_url} className={styles.capabilityLink}>
      {children}
    </Link>
  );
}

function getToneClass(tone) {
  switch (tone) {
    case 'orange':
      return {
        accent: styles.accentOrange,
        media: styles.mediaOrange,
        text: styles.toneOrange,
      };
    case 'purple':
      return {
        accent: styles.accentPurple,
        media: styles.mediaPurple,
        text: styles.tonePurple,
      };
    case 'green':
      return {
        accent: styles.accentGreen,
        media: styles.mediaGreen,
        text: styles.toneGreen,
      };
    default:
      return {
        accent: styles.accentBlue,
        media: styles.mediaBlue,
        text: styles.toneBlue,
      };
  }
}

function getInitials(title) {
  if (!title) {
    return 'TW';
  }

  return title
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function CapabilitiesSection({ section }) {
  const data = section?.capability_cards?.length ? section : fallbackSection;
  const cards = data.capability_cards || [];

  return (
    <section className={styles.capabilities} id="verticals">
      <div className="container">
        <div className="th-home-section-intro">
          <div className={`${styles.sectionLabel} rv`}>{data?.eyebrow_text}</div>
          <h2 className={`${styles.sectionTitle} rv d1`}>{data?.title}</h2>
          <p className={`${styles.sectionDescription} rv d2`}>{data?.description}</p>
        </div>

        <div className={styles.capabilityGrid}>
          {cards.map((card, index) => {
            const toneClass = getToneClass(card?.accent_tone);
            const imageUrl = getStrapiMediaUrl(card?.image);

            return (
              <article
                key={`${card?.order_label}-${card?.title}-${index}`}
                className={`${styles.capabilityCard} rv ${index % 2 === 1 ? 'd1' : ''}`}
              >
                <div className={`${styles.capabilityAccent} ${toneClass.accent}`} />
                <div className={styles.capabilityOrder}>{card?.order_label}</div>

                <div className={`${styles.capabilityMedia} ${toneClass.media}`}>
                  {imageUrl ? (
                    <CmsImage
                      src={imageUrl}
                      alt={card?.title}
                      className={styles.capabilityMediaImage}
                    />
                  ) : (
                    <span className={styles.capabilityMediaFallback}>
                      {getInitials(card?.title)}
                    </span>
                  )}
                </div>

                <h3 className={styles.capabilityTitle}>{card?.title}</h3>
                <p className={styles.capabilityDescription}>{card?.description}</p>

                {!!card?.tags?.length && (
                  <div className={styles.capabilityTags}>
                    {card.tags.map((tag, tagIndex) => (
                      <span key={`${tag?.label}-${tagIndex}`} className={styles.capabilityTag}>
                        {tag?.label}
                      </span>
                    ))}
                  </div>
                )}

                <div className={styles.capabilityResult}>
                  <div className={styles.capabilityResultLabel}>{card?.result_label}</div>
                  <div className={styles.capabilityResultValue}>{card?.result_value}</div>
                </div>

                {card?.link_text ? renderCardLink(card, <span className={toneClass.text}>{card.link_text}</span>) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
