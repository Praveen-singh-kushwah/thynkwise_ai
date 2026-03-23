'use client';

import { useState } from 'react';
import { aeoFaqs } from './data';

export default function AeoFaqSection({ section }) {
  const [openIndex, setOpenIndex] = useState(null);
  const items = section?.faq?.length ? section.faq : aeoFaqs;

  return (
    <section className="gpu-aeo-sec" aria-label="Frequently Asked Questions">
      <div className="container">
        <div className="gpu-aeo-label">Knowledge Base</div>
        <h2 className="gpu-aeo-title">Frequently Asked Questions</h2>
        <p className="gpu-aeo-sub">Everything you need to know - answered clearly.</p>
        <div className="gpu-faq-list gpu-aeo-list">
          {items.map((item, index) => (
            <div key={item.id || `${item.question}-${index}`} className={`gpu-faq-item${openIndex === index ? ' open' : ''}`}>
              <button type="button" className="gpu-faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                <span>{item.question}</span>
                <span className="gpu-faq-arrow">{'\u25BE'}</span>
              </button>
              <div className="gpu-faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
