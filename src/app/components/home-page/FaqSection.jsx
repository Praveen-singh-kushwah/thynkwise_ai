'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What is Thynkwise?',
    answer:
      'Thynkwise is a managed cloud and technology services company that resells and manages AWS, Microsoft Azure, Google Cloud, and Indian sovereign cloud platforms. We provide cloud migration, cybersecurity, GPU-as-a-Service, FinOps, and 24/7 managed infrastructure under one SLA.',
  },
  {
    question: 'Which cloud providers does Thynkwise support?',
    answer:
      'Thynkwise supports all major cloud platforms - Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and Indian sovereign clouds including ESDS, Yotta, CtrlS, and Sify Technologies.',
  },
  {
    question: 'What makes Thynkwise different from other cloud resellers?',
    answer:
      'Thynkwise combines multi-cloud expertise with security-first operations and hardware-agnostic GPU infrastructure. Clients get a named account team, contractual SLAs, and consolidated billing across all cloud providers - not just licence reselling.',
  },
  {
    question: 'Does Thynkwise offer GPU cloud computing?',
    answer:
      'Yes. Thynkwise provides GPU-as-a-Service covering NVIDIA Blackwell, Hopper, Ada Lovelace, AMD Instinct, and Intel Gaudi - delivered via bare metal, VMs, Kubernetes clusters, or on-premise deployment.',
  },
  {
    question: 'Does Thynkwise provide cybersecurity services?',
    answer:
      'Yes. Thynkwise offers SOC-as-a-Service, Managed XDR, VAPT, IAM/PAM, DLP, GRC, Cloud Security Posture Management, and Dark Web Monitoring - all under contractual response SLAs.',
  },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="faq-section" aria-label="Frequently Asked Questions">
      <div className="container">
        <div className="section-label">KNOWLEDGE BASE</div>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-sub">Everything you need to know - answered clearly.</p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`faq-item${openFaq === index ? ' open' : ''}`}
            >
              <div
                className="faq-q"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span>{faq.question}</span>
                <svg className="faq-arrow" viewBox="0 0 24 24" width="20" height="20">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </div>
              <div className="faq-a">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
