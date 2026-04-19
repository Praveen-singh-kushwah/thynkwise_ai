import Link from 'next/link';
import styles from './HomeSections.module.css';

const fallbackSection = {
  title: 'Let us build something that matters.',
  description:
    'Sales system, AI avatar, digital infrastructure, or a partner referral - ThynkWISE delivers the full stack. One conversation. No obligation.',
  primary_cta: {
    button_text: 'WhatsApp: +91 97630 08800',
    button_link: 'https://wa.me/919763008800',
  },
  secondary_cta: {
    button_text: 'azra@thynkwise.co.in',
    button_link: 'mailto:azra@thynkwise.co.in',
  },
};

function renderAction(link, className) {
  if (!link?.button_text || !link?.button_link) {
    return null;
  }

  const isExternal =
    link.button_link.startsWith('http://') ||
    link.button_link.startsWith('https://') ||
    link.button_link.startsWith('mailto:') ||
    link.button_link.startsWith('tel:');

  if (isExternal) {
    return (
      <a href={link.button_link} target="_blank" rel="noreferrer" className={className}>
        {link.button_text}
      </a>
    );
  }

  return (
    <Link href={link.button_link} className={className}>
      {link.button_text}
    </Link>
  );
}

export default function FinalCtaSection({ section }) {
  const data = section?.title ? section : fallbackSection;

  return (
    <section className={styles.finalCta}>
      <div className="container">
        <div className={styles.finalCtaInner}>
          <h2 className="rv">{data?.title}</h2>
          <p className="rv d1">{data?.description}</p>
          <div className={`${styles.finalCtaActions} rv d2`}>
            {renderAction(data?.primary_cta, 'btn btn-orange')}
            {renderAction(data?.secondary_cta, 'btn btn-ghost-w')}
          </div>
        </div>
      </div>
    </section>
  );
}
