'use client';

import { useState } from 'react';

const defaultItems = [
  {
    question: 'What Azure services does Thynkwise manage?',
    answer:
      'Thynkwise manages Azure Virtual Machines, AKS, Azure SQL, Cosmos DB, Azure Active Directory, Microsoft Sentinel, Defender for Cloud, Azure OpenAI, and the full Azure networking stack including VNets, NSGs, and ExpressRoute.',
  },
  {
    question: 'Does Thynkwise offer Azure Sentinel SIEM management?',
    answer:
      'Yes. Thynkwise manages Microsoft Sentinel as part of its cybersecurity portfolio, including rule tuning, alert triage, SOAR playbook automation, and 24/7 SOC analyst coverage.',
  },
  {
    question: 'Can Thynkwise help with Azure cost management?',
    answer:
      'Yes. Thynkwise uses Azure Cost Management, Reserved Instances, Hybrid Benefit licensing, and automated rightsizing to reduce Azure spend, typically achieving 30-40% savings.',
  },
];

export default function AeoFaqSection({ section }) {
  const [openIndex, setOpenIndex] = useState(null);
  const items = section?.q_a?.length ? section.q_a : defaultItems;

  return (
    <section className="faq-section azure-aeo-faq" aria-label="Frequently Asked Questions" itemScope itemType="https://schema.org/FAQPage">
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
