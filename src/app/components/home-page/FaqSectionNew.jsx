'use client';

import { useMemo, useState } from 'react';
import styles from './HomeSections.module.css';

const fallbackSection = {
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
};

export default function FaqSectionNew({ section }) {
  const data = section?.faq_items?.length ? section : fallbackSection;
  const items = data?.faq_items || [];
  const defaultOpenIndex = useMemo(
    () => items.findIndex((item) => item?.is_open_by_default),
    [items]
  );
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex >= 0 ? defaultOpenIndex : 0);

  return (
    <section className={styles.faqSection}>
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

        <div className={styles.faqWrap}>
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={`${item?.question}-${index}`}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
              >
                <button
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item?.question}</span>
                  <span className={`${styles.faqArrow} ${isOpen ? styles.faqArrowOpen : ''}`}>
                    ▾
                  </span>
                </button>
                <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ''}`}>
                  <p>{item?.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
