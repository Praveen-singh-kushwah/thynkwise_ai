'use client';

import { useState } from 'react';
import { aeoFaqs } from './data';

export default function AeoFaqSection({ section }) {
  const [openIndex, setOpenIndex] = useState(null);
  const items = section?.faq?.length ? section.faq : aeoFaqs;

  return (
    <section className="faq-section gpu-aeo-faq" aria-label="Frequently Asked Questions">
      <div className="container">
        <div className="section-label rv">KNOWLEDGE BASE</div>
        <h2 className="section-title rv">Frequently Asked Questions</h2>
        <p className="section-sub rv">Everything you need to know — answered clearly.</p>
        <div className="faq-list rv">
          {items.map((item, index) => (
            <div
              key={item.id || `${item.question}-${index}`}
              className={`faq-item${openIndex === index ? ' open' : ''}`}
            >
              <button
                type="button"
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{item.question}</span>
                <svg className="faq-arrow" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="none" stroke="currentColor" strokeWidth="2.5" d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="faq-a">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
