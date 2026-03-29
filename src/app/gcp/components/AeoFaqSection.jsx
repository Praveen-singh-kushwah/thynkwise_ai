'use client';

import { useState } from 'react';

const defaultSection = {
  eyebrow: 'KNOWLEDGE BASE',
  title: 'Frequently Asked Questions',
  description: 'Everything you need to know - answered clearly.',
  questions: [
    {
      question: 'What Google Cloud services does Thynkwise manage?',
      answer:
        'Thynkwise manages GKE, Cloud Run, BigQuery, Vertex AI, Cloud SQL, Spanner, Pub/Sub, Dataflow, Cloud Storage, Anthos, and the full GCP networking stack - plus data engineering, ML platform management, and GCP migrations.',
    },
    {
      question: 'Does Thynkwise support Google Vertex AI?',
      answer:
        'Yes. Thynkwise manages Vertex AI infrastructure for model training, fine-tuning, and inference at scale - integrated with BigQuery ML and Google Cloud Storage for enterprise AI workloads.',
    },
    {
      question: 'Is Thynkwise a Google Cloud reseller?',
      answer:
        'Yes. Thynkwise is an authorised Google Cloud reseller offering consolidated billing, technical account management, architecture design, and 24/7 managed GCP operations.',
    },
  ],
};

export default function AeoFaqSection({ section }) {
  const [openIndex, setOpenIndex] = useState(null);
  const eyebrow = section?.eyebrow || defaultSection.eyebrow;
  const title = section?.title || defaultSection.title;
  const description = section?.description || defaultSection.description;
  const items = section?.questions?.length ? section.questions : defaultSection.questions;

  return (
    <section className="faq-section gcp-aeo-faq" aria-label="Frequently Asked Questions" itemScope itemType="https://schema.org/FAQPage">
      <div className="container">
        <div className="section-label rv">{eyebrow}</div>
        <h2 className="section-title rv d1">{title}</h2>
        <p className="section-sub rv d2">{description}</p>
        <div className="faq-list rv d3">
          {items.map((item, index) => (
            <div
              key={item.id || `${item.question}-${index}`}
              className={`faq-item${openIndex === index ? ' open' : ''}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                type="button"
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                itemProp="name"
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <svg className="faq-arrow" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="none" stroke="currentColor" strokeWidth="2.5" d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
