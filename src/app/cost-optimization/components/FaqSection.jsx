import { useState } from 'react';

const defaultSection = {
  badge_text: 'FinOps FAQ',
  title: 'Questions from CTOs and Finance Heads before they start',
  faq_items: [
    {
      question: 'How much does the free cloud cost audit actually cover?',
      answer:
        'The free 7-day audit reviews your last 90 days of billing and usage data across compute, storage, databases, networking, and managed services. The output is a written report with prioritised savings opportunities, estimated INR savings, and implementation effort.',
    },
    {
      question: 'Does cloud cost optimisation affect application performance?',
      answer:
        'Done correctly, no. Rightsizing recommendations are validated against workload baselines such as CPU, memory, network I/O, and disk throughput. Cleanup follows an approval and quarantine process before deletion.',
    },
    {
      question: 'Can Thynkwise do FinOps for multi-cloud environments?',
      answer:
        'Yes. Multi-cloud environments often have higher waste because cost ownership is split across teams and platforms. Thynkwise can consolidate the cost view and create provider-specific optimisation actions.',
    },
  ],
};

export default function FaqSection({ section }) {
  const data = section || defaultSection;
  const items = data.faq_items?.length ? data.faq_items : defaultSection.faq_items;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="co-section co-section-cream">
      <div className="container">
        <div className="co-section-header">
          <span className="co-badge co-badge-green rv">
            {data.badge_text || defaultSection.badge_text}
          </span>
          <h2 className="co-section-title rv">{data.title || defaultSection.title}</h2>
        </div>

        <div className="co-faq-list">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={`${item.question}-${index}`}
                className={`co-faq-item ${isOpen ? 'open' : ''}`}
              >
                <button type="button" className="co-faq-question" onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                  <span>{item.question}</span>
                  <span className="co-faq-arrow">{isOpen ? '\u25B4' : '\u25BE'}</span>
                </button>
                <div className="co-faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
