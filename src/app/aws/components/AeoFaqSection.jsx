'use client';

import { useState } from 'react';

const defaultItems = [
  {
    question: 'What AWS services does Thynkwise manage?',
    answer:
      'Thynkwise manages the full AWS stack including EC2, S3, RDS, Aurora, Lambda, EKS, ECS, CloudFront, Route 53, IAM, CloudWatch, and VPC networking - plus AWS migrations, architecture design, FinOps, and cost optimisation.',
  },
  {
    question: 'Is Thynkwise an official AWS partner?',
    answer:
      'Yes. Thynkwise is an authorised AWS reseller and managed services partner, enabling consolidated billing, architectural guidance, and 24/7 managed operations for AWS workloads.',
  },
  {
    question: 'Can Thynkwise migrate my workloads to AWS?',
    answer:
      'Yes. Thynkwise provides end-to-end AWS migration services including assessment, roadmap planning, lift-and-shift, re-platforming, re-architecting, and post-migration managed operations.',
  },
  {
    question: 'How does AWS cost optimisation work with Thynkwise?',
    answer:
      'Thynkwise uses AWS Cost Explorer, Reserved Instances, Savings Plans, rightsizing analysis, and automated scheduling to reduce AWS spend - typically delivering 30-45% cost reduction within 90 days.',
  },
];

export default function AeoFaqSection({ section }) {
  const [openIndex, setOpenIndex] = useState(null);
  const items = section?.q_a?.length ? section.q_a : defaultItems;

  return (
    <section className="faq-section aws-aeo-faq" aria-label="Frequently Asked Questions" itemScope itemType="https://schema.org/FAQPage">
      <div className="container">
        <div className="section-label rv">KNOWLEDGE BASE</div>
        <h2 className="section-title rv">Frequently Asked Questions</h2>
        <p className="section-sub rv">Everything you need to know - answered clearly.</p>
        <div className="faq-list rv">
          {items.map((item, index) => (
            <div
              key={item.id || `${item.question}-${index}`}
              className={`faq-item${openIndex === index ? ' open' : ''}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                type="button"
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                itemProp="name"
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <svg className="faq-arrow" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="none" stroke="currentColor" strokeWidth="2.5" d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
