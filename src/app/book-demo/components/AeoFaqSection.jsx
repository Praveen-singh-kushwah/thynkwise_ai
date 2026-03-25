'use client';

import { useState } from 'react';

export default function AeoFaqSection({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="demo-faq-section" aria-label="Frequently Asked Questions" itemScope itemType="https://schema.org/FAQPage">
      <div className="container">
        <div className="demo-faq-label">KNOWLEDGE BASE</div>
        <h2 className="demo-faq-title">Frequently Asked Questions</h2>
        <p className="demo-faq-sub">Everything you need to know - answered clearly.</p>
        <div className="demo-faq-list">
          {items.map((item, index) => (
            <div
              key={item.id || `${item.question}-${index}`}
              className={`demo-faq-item${openIndex === index ? ' open' : ''}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                type="button"
                className="demo-faq-q"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                itemProp="name"
              >
                <span>{item.question}</span>
                <svg className="demo-faq-arrow" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="none" stroke="currentColor" strokeWidth="2.5" d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="demo-faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
