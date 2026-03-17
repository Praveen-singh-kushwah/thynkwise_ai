'use client';

import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { mainFaqs } from './data';

export default function MainFaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="cy-faq-sec">
      <div className="container">
        <SectionHeader
          badge="FAQ"
          badgeClassName="badge bb"
          title="Common Questions"
          description="Everything a CISO, CTO, or IT Head typically asks before engaging Thynkwise for managed security."
          centered
        />
        <div className="cy-faq-wrap rv">
          {mainFaqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`cy-faq-item${openFaq === index ? ' open' : ''}`}
            >
              <button
                type="button"
                className="cy-faq-question"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                aria-expanded={openFaq === index}
              >
                <span>{faq.question}</span>
                <span className="cy-faq-arrow">{'\u25BE'}</span>
              </button>
              <div className="cy-faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
