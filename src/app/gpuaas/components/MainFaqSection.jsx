'use client';

import { useState } from 'react';
import { mainFaqs } from './data';

export default function MainFaqSection({ section }) {
  const [openIndex, setOpenIndex] = useState(null);
  const items = section?.q_a?.length ? section.q_a : mainFaqs;

  return (
    <section className="sec gpu-main-faq">
      <div className="container">
        <div className="sec-ey rv">
          <span className="badge bc">FAQ</span>
        </div>
        <h2 className="sec-ti rv">Common Questions from GPU Engineers</h2>
        <div className="faq-list">
          {items.map((item, index) => (
            <div
              key={item.id || `${item.question}-${index}`}
              className={`faq-item rv d${(index % 5) + 1}${openIndex === index ? ' open' : ''}`}
            >
              <button
                type="button"
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{item.question}</span>
                <span className="faq-arrow">{'\u25BE'}</span>
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
