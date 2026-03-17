'use client';

import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { mainFaqs } from './data';

export default function MainFaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="ps ps-w">
      <div className="container">
        <SectionHeader
          badge="Common Questions"
          badgeClassName="badge bb"
          title="Managed Services - Questions We Hear Every Week"
          description="From CIOs evaluating their first MSP to IT heads looking to switch - here are honest answers."
        />

        <div className="faq-list-ms">
          {mainFaqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`faq-item-ms rv d${(index % 5) + 1}${openFaq === index ? ' open' : ''}`}
            >
              <div
                className="faq-q-ms"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                {faq.question}
                <span className="faq-arrow-ms">{'\u25BE'}</span>
              </div>
              <div className="faq-a-ms">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
