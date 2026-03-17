'use client';

import { useState } from 'react';
import { aeoFaqs } from './data';

const labelStyle = {
  textAlign: 'center',
  fontFamily: 'var(--mono)',
  fontSize: '0.72rem',
  letterSpacing: '0.18em',
  color: 'var(--blue)',
  textTransform: 'uppercase',
  marginBottom: '12px',
};

const titleStyle = {
  textAlign: 'center',
  fontFamily: 'var(--font)',
  fontSize: 'clamp(1.6rem,3vw,2.2rem)',
  fontWeight: 700,
  color: '#0a0a0a',
  marginBottom: '12px',
};

const subtitleStyle = {
  textAlign: 'center',
  color: '#6b7280',
  fontSize: '1rem',
  marginBottom: '48px',
};

export default function AeoFaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="faq-section-ms ps" aria-label="Frequently Asked Questions">
      <div className="container">
        <div className="section-label" style={labelStyle}>
          KNOWLEDGE BASE
        </div>
        <h2 className="section-title" style={titleStyle}>
          Frequently Asked Questions
        </h2>
        <p style={subtitleStyle}>Everything you need to know - answered clearly.</p>

        <div className="faq-list-ms" style={{ maxWidth: '820px' }}>
          {aeoFaqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`faq-item-ms${openFaq === index ? ' open' : ''}`}
            >
              <div
                className="faq-q-ms"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span>{faq.question}</span>
                <svg
                  className="faq-arrow"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  style={{
                    flexShrink: 0,
                    color: 'var(--orange)',
                    transition: 'transform 0.3s',
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
