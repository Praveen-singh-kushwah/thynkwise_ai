'use client';

import { useState } from 'react';

export default function FaqSection({ section }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!section) {
    return null;
  }

  const questions = section.questions || [];
  const hasContent = section.eyebrow || section.title || section.description || questions.length;

  if (!hasContent) {
    return null;
  }

  return (
    <section
      className="faq-section"
      aria-label="Frequently Asked Questions"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container">
        {section.eyebrow ? <div className="section-label rv">{section.eyebrow}</div> : null}
        {section.title ? <h2 className="section-title rv d1">{section.title}</h2> : null}
        {section.description ? <p className="section-sub rv d2">{section.description}</p> : null}
        {questions.length ? (
          <div className="faq-list rv d3">
            {questions.map((item, index) => (
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
        ) : null}
      </div>
    </section>
  );
}
