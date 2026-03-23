export default function QuickAnswerSection({ answers }) {
  const item = answers?.[0] || {
    question: 'What does a migration engagement involve, and how long does it take?',
    answer:
      'Migration is a structured process - from Assessment & Consultation through to zero-downtime production cutover and 30-day hypercare. Depending on scope, a simple lift-and-shift of 10 workloads takes 4-8 weeks; a mid-market re-platforming of 50-200 workloads takes 3-6 months; enterprise re-architecture with SAP and mainframe takes 6-18 months. Thynkwise handles every type: network-level migrations, data migrations using 3rd-party tools, virtual-to-virtual, physical-to-virtual, on-premise to private cloud, and on-premise to public cloud. Most clients achieve 30%+ infrastructure cost savings within 60 days of go-live.',
  };

  return (
    <section className="ps ps-w">
      <div className="container">
        <div className="qa-box rv">
          <div className="qa-label">
            {'\u{1F3AF}'} Quick Answer - For Those Evaluating Migration Services
          </div>
          <h2>{item.question}</h2>
          <p>{item.answer}</p>
        </div>
      </div>
    </section>
  );
}
