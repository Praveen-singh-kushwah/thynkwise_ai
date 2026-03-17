'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionHeader from './SectionHeader';
import { mainFaqs } from './data';

export default function MainFaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="ps ps-w">
      <div className="container">
        <SectionHeader
          badge="Migration FAQ"
          badgeClassName="badge bb"
          title="Answers to Every Question Your Team Will Ask"
          description="Every question we've been asked by CIOs, CTOs, and IT Leaders across 500+ migration engagements."
        />

        <div className="faq-list-cm rv d1">
          {mainFaqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`faq-item-cm${openFaq === index ? ' open' : ''}`}
            >
              <div
                className="faq-q-cm"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                {faq.question}
                <span className="faq-arrow-cm">{'\u25BE'}</span>
              </div>
              <div className="faq-a-cm">
                <p>
                  {faq.answer}
                  {faq.linkHref ? (
                    <>
                      <br />
                      <Link
                        href={faq.linkHref}
                        style={{ color: 'var(--orange)', fontWeight: 600 }}
                      >
                        {faq.linkText} {'\u2192'}
                      </Link>
                    </>
                  ) : null}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
