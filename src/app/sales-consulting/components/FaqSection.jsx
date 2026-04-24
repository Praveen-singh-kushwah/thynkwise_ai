'use client';

import { useMemo, useState } from 'react';

const fallbackSection = {
  eyebrow_text: 'Knowledge Base',
  title: 'Frequently asked questions',
  faq_items: [],
};

export default function FaqSection({ section }) {
  const data = section?.title ? section : fallbackSection;
  const items = data?.faq_items || [];
  const defaultOpenIndex = useMemo(
    () => items.findIndex((item) => item?.is_open_by_default),
    [items]
  );
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex >= 0 ? defaultOpenIndex : 0);

  if (!items.length) {
    return null;
  }

  return (
    <section className="sc-section">
      <div className="container sc-centered">
        {data?.eyebrow_text ? <div className="sc-label rv">{data.eyebrow_text}</div> : null}
        {data?.title ? <h2 className="sc-title rv d1">{data.title}</h2> : null}

        <div className="sc-faq-wrap">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div className={`sc-faq-item ${isOpen ? 'is-open' : ''}`} key={`${item?.question}-${index}`}>
                <button
                  type="button"
                  className="sc-faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item?.question}</span>
                  <span className="sc-faq-arrow">▾</span>
                </button>
                <div className="sc-faq-answer">
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
