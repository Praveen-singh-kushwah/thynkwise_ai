import styles from './HomeSections.module.css';

const fallbackSection = {
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
};

export default function PartnerNetworkSection({ section }) {
  const data = section?.partner_pills?.length ? section : fallbackSection;

  return (
    <section className={styles.partnerNetwork}>
      <div className="container">
        <div className={styles.centeredIntro}>
          <div className={`${styles.sectionLabel} rv`}>{data?.eyebrow_text}</div>
          <h2 className={`${styles.sectionTitle} ${styles.centeredTitle} rv d1`}>{data?.title}</h2>
          {data?.description ? (
            <p className={`${styles.sectionDescription} ${styles.centeredDescription} rv d2`}>
              {data.description}
            </p>
          ) : null}
        </div>

        <div className={`${styles.partnerPills} rv d2`}>
          {(data?.partner_pills || []).map((pill, index) => (
            <span key={`${pill?.label}-${index}`} className={styles.partnerPill}>
              {pill?.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
