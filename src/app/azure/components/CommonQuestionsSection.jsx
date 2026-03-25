'use client';

import { useState } from 'react';

const defaultItems = [
  {
    question: 'Is Thynkwise a Microsoft-certified Azure partner in India?',
    answer:
      "Yes. Thynkwise is a Microsoft Certified Solution Provider (CSP) and Azure Advanced Partner in India with active certifications across architecture, security, and DevOps tracks.",
  },
  {
    question: 'Why use a Microsoft Azure reseller in India instead of going direct?',
    answer:
      'Azure resellers like Thynkwise provide local-currency billing with GST invoices, DPDP and RBI-aligned compliance setup, and managed support in IST. Direct plans typically leave these responsibilities with your in-house team.',
  },
  {
    question: 'Can I move from Azure direct billing to Thynkwise without downtime?',
    answer:
      'Yes. Billing transfer is handled without changing your Azure resources or runtime configurations. Existing infrastructure remains intact while account and invoicing ownership transitions.',
  },
  {
    question: 'Can Azure meet RBI data localisation requirements for Indian banks?',
    answer:
      'Yes. Azure India regions support in-country hosting, and Thynkwise configures policy controls and network boundaries so regulated workloads stay within approved jurisdictions.',
  },
  {
    question: 'What is Azure Hybrid Benefit and can we use it?',
    answer:
      'Azure Hybrid Benefit lets eligible organizations reuse existing Microsoft licenses in Azure for lower compute and database costs. Thynkwise validates entitlement and enables it as part of cost optimization.',
  },
];

export default function CommonQuestionsSection({ section }) {
  const [openIndex, setOpenIndex] = useState(null);
  const items = section?.q_a?.length ? section.q_a : defaultItems;

  return (
    <section className="ps ps-white azure-common-faq">
      <div className="container">
        <span className="badge baz sec-eyebrow azure-faq-badge rv">Azure FAQ</span>
        <h2 className="sec-title rv d1">Common Questions About Azure with Thynkwise</h2>
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
                <span className="faq-arrow">{'\u25BE'}</span>
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
