'use client';

import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { mainFaqs } from './data';

export default function MainFaqSection({ section }) {
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = section?.faq_item?.length ? section.faq_item : mainFaqs;

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
          {faqs.map((faq, index) => (
            <div
              key={faq.id || `${faq.question}-${index}`}
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
