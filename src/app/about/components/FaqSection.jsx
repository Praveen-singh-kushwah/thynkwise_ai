'use client';

import { useState } from 'react';

const defaultItems = [
  {
    question: 'What does Thynkwise do?',
    answer:
      'Thynkwise manages cloud infrastructure, cybersecurity operations, and GPU computing for enterprises across industries. We are an official reseller and managed services provider for AWS, Azure, Google Cloud, and Indian sovereign cloud platforms.',
  },
  {
    question: 'Is Thynkwise an AWS partner?',
    answer:
      'Yes. Thynkwise is an authorised AWS reseller and managed services partner, offering AWS infrastructure, migrations, architecture design, FinOps, and 24/7 managed operations.',
  },
  {
    question: 'Does Thynkwise have an SLA for managed services?',
    answer:
      'Yes. Thynkwise provides contractual SLAs - not just best-effort commitments. Our SLA includes financial penalties for missed targets and defined response times per incident priority.',
  },
];

export default function FaqSection({ section }) {
  const [openIndex, setOpenIndex] = useState(0);
  const items = section?.q_a?.length ? section.q_a : defaultItems;

  return (
    <section className="faq-section" aria-label="Frequently Asked Questions">
      <div className="container">
        <div className="section-label rv">KNOWLEDGE BASE</div>
        <h2 className="section-title rv">Frequently Asked Questions</h2>
        <p className="section-sub rv">Everything you need to know - answered clearly.</p>
        <div className="faq-list rv">
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
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
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
