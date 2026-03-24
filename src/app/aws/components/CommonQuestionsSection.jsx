'use client';

import { useState } from 'react';

const defaultItems = [
  {
    question: 'Is Thynkwise more expensive than going direct to AWS?',
    answer:
      'Not for most customers. Our management fee is typically recovered within 60 days through FinOps savings we identify and implement. Clients average 28-35% AWS cost reduction in Year 1, even after our fee. We also pass through AWS reseller discounts where applicable.',
  },
  {
    question: 'Can I switch from AWS Direct to Thynkwise without touching my infrastructure?',
    answer:
      'Yes - it is a billing migration only. We take over your existing AWS accounts without modifying any resource. EC2 instances, databases, S3 buckets, and all configurations remain exactly as they are. Migration completes in 3-5 business days with zero downtime.',
  },
  {
    question: 'Do I get GST-compliant invoicings?',
    answer:
      'Yes - all AWS bills through Thynkwise are Local-currency with full GST breakdown, HSN/SAC codes, and PAN details. Invoices arrive on the 1st of each month and integrate directly with Tally, Zoho Books, and SAP.',
  },
  {
    question: 'Where is our data stored - India or abroad?',
    answer:
      'All default configurations deploy to AWS Mumbai (ap-south-1). For regulated industries, we configure VPC endpoints, AWS PrivateLink, and S3 bucket policies to enforce data residency within the Mumbai region at the infrastructure level - preventing data from leaving Indian jurisdiction even during DR failover.',
  },
  {
    question: 'What AWS certifications does the Thynkwise team hold?',
    answer:
      '150+ active certifications including Solutions Architect Professional, DevOps Engineer Professional, Security Specialty, Database Specialty, and Machine Learning Specialty. We maintain Advanced Consulting Partner status, which AWS audits annually - we have maintained it every year since achieving it.',
  },
];

export default function CommonQuestionsSection({ section }) {
  const [openIndex, setOpenIndex] = useState(null);
  const items = section?.q_a?.length ? section.q_a : defaultItems;

  return (
    <section className="ps ps-cream aws-common-faq">
      <div className="container">
        <span className="sec-label rv">Common Questions</span>
        <h2 className="sec-title rv d1">AWS with Thynkwise - answered</h2>
        <div className="faq-list rv d2">
          {items.map((item, index) => (
            <div key={item.id || `${item.question}-${index}`} className={`faq-item${openIndex === index ? ' open' : ''}`}>
              <button
                type="button"
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className="faq-arrow">{'▾'}</span>
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
