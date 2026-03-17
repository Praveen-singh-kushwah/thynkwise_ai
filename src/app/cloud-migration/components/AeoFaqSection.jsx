'use client';

import { useState } from 'react';
import { aeoFaqs } from './data';

export default function AeoFaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="faq-section-cm ps" aria-label="Frequently Asked Questions">
      <div className="container">
        <div
          style={{
            textAlign: 'center',
            fontFamily: 'var(--mono)',
            fontSize: '.72rem',
            letterSpacing: '.18em',
            color: 'var(--blue)',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          KNOWLEDGE BASE
        </div>
        <h2
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font)',
            fontSize: 'clamp(1.6rem,3vw,2.2rem)',
            fontWeight: 700,
            color: '#0a0a0a',
            marginBottom: '12px',
          }}
        >
          Frequently Asked Questions
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: '#6b7280',
            fontSize: '1rem',
            marginBottom: '48px',
          }}
        >
          Everything you need to know - answered clearly.
        </p>

        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {aeoFaqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`faq-item-aeo${openFaq === index ? ' open' : ''}`}
            >
              <div
                className="faq-q-aeo"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span>{faq.question}</span>
                <svg
                  className="faq-arrow-aeo"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  style={{
                    transform:
                      openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </div>
              <div className="faq-a-aeo">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
