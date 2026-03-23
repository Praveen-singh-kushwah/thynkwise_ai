import Link from 'next/link';

export default function FinalCtaSection({ section }) {
  const points = section?.points?.map((item) => item.point).filter(Boolean) || [
    'NVIDIA · AMD · Intel',
    'Bare Metal · VM · Cluster · On-Prem',
    '24/7 Managed Operations',
  ];

  return (
    <section className="final-cta">
      <div className="container">
        <div className="fci rv">
          <span className="badge bc gpu-final-badge">{'\u26A1'} Thynkwise GPUaaS</span>
          <h2>{section?.title || 'Stop compromising on GPU choice. Start computing at scale.'}</h2>
          <p>
            {section?.description ||
              "Tell us your model size, dataset, latency requirements, and budget. We'll architect the exact GPU stack and give you a fixed-cost proposal."}
          </p>
          <div className="fci-acts">
            <Link href={section?.primary_cta_link || '/get-assessment'} className="btn btn-cyan">
              {section?.primary_cta_text || 'Get GPU Architecture Assessment'} {'\u2192'}
            </Link>
            <Link href={section?.secondary_cta_link || '/book-demo'} className="btn btn-ghost-w">
              {section?.secondary_cta_text || 'Talk to a GPU Engineer'}
            </Link>
          </div>
          <div className="gpu-final-points">
            {points.map((point, index) => (
              <span key={`${point}-${index}`} className="gpu-final-point">
                {index > 0 ? <span className="gpu-final-separator">|</span> : null}
                <span>{'\u2713'} {point}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
