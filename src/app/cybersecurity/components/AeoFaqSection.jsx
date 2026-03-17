'use client';

import { useState } from 'react';
import { aeoFaqs } from './data';

export default function AeoFaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section
      className="cy-aeo-faq-section"
      aria-label="Frequently Asked Questions"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container">
        <div className="cy-aeo-label">KNOWLEDGE BASE</div>
        <h2 className="cy-aeo-title">Frequently Asked Questions</h2>
        <p className="cy-aeo-sub">Everything you need to know {'\u2014'} answered clearly.</p>
        <div className="cy-aeo-list">
          {aeoFaqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`cy-aeo-item${openFaq === index ? ' open' : ''}`}
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                type="button"
                className="cy-aeo-question"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                aria-expanded={openFaq === index}
                itemProp="name"
              >
                <span>{faq.question}</span>
                <svg className="cy-aeo-arrow" viewBox="0 0 24 24" width="20" height="20">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>
              <div
                className="cy-aeo-answer"
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
