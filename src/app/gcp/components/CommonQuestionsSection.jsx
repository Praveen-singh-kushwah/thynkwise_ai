'use client';

import { useState } from 'react';

const defaultSection = {
  eyebrow: 'Common Questions',
  title: 'Google Cloud with Thynkwise - answered',
  description: '',
  questions: [
    {
      question: 'Is Thynkwise an authorised Google Cloud partner in India?',
      answer:
        'Yes. Thynkwise is an authorised Google Cloud reseller and managed service partner in India with 40+ active GCP certifications including Professional Cloud Architect, Professional Data Engineer, and Professional ML Engineer. Google validates our partnership status annually.',
    },
    {
      question: 'Can Indian startups access Google Cloud credits through Thynkwise?',
      answer:
        'Yes. Through Thynkwise and Google for Startups, qualifying Indian startups can access up to $200,000 in Google Cloud credits. Thynkwise manages the application, eligibility check, and activation - typically completed within 10-14 business days. We also govern credit usage to ensure they fund high-value production workloads.',
    },
    {
      question: 'When is Google Cloud the right choice vs AWS or Azure?',
      answer:
        "GCP leads when your workloads centre on AI/ML (Vertex AI, Gemini), large-scale data analytics (BigQuery), Kubernetes-native applications (GKE), or Google Workspace integration. AWS leads in service breadth and Indian enterprise case studies. Azure leads for Microsoft-stack and BFSI compliance. Thynkwise recommends the right cloud objectively - we're not incentivised to push any single platform.",
    },
    {
      question: 'Is data stored in India on Google Cloud?',
      answer:
        'Google Cloud Mumbai (asia-south1) stores data within Indian jurisdiction. Thynkwise configures Organization Policies, VPC Service Controls, and data residency constraints to enforce this at the infrastructure level - preventing data from leaving India even during DR or replication operations.',
    },
    {
      question: 'Do I get invoicings for Google Cloud?',
      answer:
        'Yes - all GCP and Google Workspace billing through Thynkwise is local-currency with full GST breakdown, HSN/SAC codes, and PAN details. No USD conversion, no currency risk. Invoices integrate with Tally, Zoho Books, and SAP.',
    },
  ],
};

export default function CommonQuestionsSection({ section }) {
  const [openIndex, setOpenIndex] = useState(null);
  const eyebrow = section?.eyebrow || defaultSection.eyebrow;
  const title = section?.title || defaultSection.title;
  const description = section?.description || defaultSection.description;
  const items = section?.questions?.length ? section.questions : defaultSection.questions;

  return (
    <section className="ps ps-cream gcp-common-faq">
      <div className="container">
        <span className="sec-label rv">{eyebrow}</span>
        <h2 className="sec-title rv d1">{title}</h2>
        {description ? <p className="sec-sub rv d2">{description}</p> : null}
        <div className={`faq-list rv ${description ? 'd3' : 'd2'}`}>
          {items.map((item, index) => (
            <div key={item.id || `${item.question}-${index}`} className={`faq-item${openIndex === index ? ' open' : ''}`}>
              <button
                type="button"
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className="faq-arrow">{'\u25be'}</span>
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
