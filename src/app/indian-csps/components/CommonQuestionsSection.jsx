'use client';

import { useState } from 'react';

export default function CommonQuestionsSection({ section }) {
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
    <section className="ps ps-w">
      <div className="container">
        {section.eyebrow ? (
          <div className="sec-eyebrow rv">
            <span className="badge bb">{section.eyebrow}</span>
          </div>
        ) : null}
        {section.title ? <h2 className="sec-title rv">{section.title}</h2> : null}
        {section.description ? <p className="sec-sub rv">{section.description}</p> : null}
        {questions.length ? (
          <div className="faq-list">
            {questions.map((item, index) => (
              <div
                key={item.id || `${item.question}-${index}`}
                className={`faq-item rv d${(index % 4) + 1}${openIndex === index ? ' open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
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
        ) : null}
      </div>
    </section>
  );
}
