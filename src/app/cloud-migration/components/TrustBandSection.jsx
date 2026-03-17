import { trustStats } from './data';

export default function TrustBandSection() {
  return (
    <section className="trust-band">
      <div className="container">
        <div className="trust-inner">
          {trustStats.map((item) => (
            <div key={item.label} className={`trust-item rv ${item.delay}`}>
              <span className="trust-num">{item.value}</span>
              <span className="trust-lbl">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
