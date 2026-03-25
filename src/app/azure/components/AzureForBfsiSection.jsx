import Link from 'next/link';

const defaultSection = {
  left_container: {
    heading: 'The Azure Platform Built for Indian Banking & Insurance',
    description:
      'Azure is the #1 cloud choice for Indian BFSI - and for good reason. Microsoft has invested more in RBI compliance documentation than any other hyperscaler. Thynkwise amplifies this with pre-built BFSI configurations that have passed 30+ bank audits.',
    points: [
      {
        title: 'RBI Storage Localisation',
        description:
          'All payment data stored in Azure India Central (Pune) and India South (Chennai). Policy locks prevent any cross-border data movement without explicit approval.',
      },
      {
        title: 'DPDP Act 2023 Compliance',
        description:
          'Azure Purview for data cataloguing, Microsoft Priva for privacy management, and custom DPDP consent management workflows built by Thynkwise\'s legal-tech team.',
      },
      {
        title: 'Core Banking on Azure',
        description:
          'Thynkwise has deployed Finacle, Temenos, and Mphasis BaNCS on Azure. Our team includes ex-BFSI architects with RBI technology audit experience.',
      },
      {
        title: 'PCI-DSS & ISO 27001 Ready',
        description:
          'Pre-configured Azure Landing Zones with PCI-DSS controls. Azure Blueprint templates for ISO 27001 compliance. Typical certification timeline: 8-12 weeks.',
      },
    ],
  },
  right_container: {
    title: 'BFSI on Azure - By the Numbers',
    sub_text: 'Thynkwise Azure BFSI portfolio (India, 2024)',
    card: [
      { value: '45+', label: 'Banks & NBFCs on Azure India' },
      { value: '100%', label: 'Data within Indian jurisdiction' },
      { value: '8wks', label: 'Avg. RBI compliance setup time' },
      { value: 'INR 0', label: 'RBI non-compliance fines earned' },
    ],
    message:
      '"Thynkwise\'s Azure BFSI team set up our RBI-compliant environment in 6 weeks. Our internal IT team estimated 6 months."',
    by: 'CISO, Private Sector Bank, Mumbai',
    buttonText: 'Talk to BFSI Azure Expert',
  },
};

export default function AzureForBfsiSection({ section }) {
  const left = section?.left_container || defaultSection.left_container;
  const right = section?.right_container || defaultSection.right_container;
  const points = left.points?.length ? left.points : defaultSection.left_container.points;
  const cards = right.card?.length ? right.card : defaultSection.right_container.card;

  return (
    <section className="ps ps-white">
      <div className="container">
        <div className="bfsi-grid">
          <div>
            <span className="badge baz rv">Azure for BFSI India</span>
            <h2 className="rv d1" style={{ marginTop: 12 }}>{left.heading}</h2>
            <p className="rv d2">{left.description}</p>
            <ul className="bfsi-list">
              {points.map((item, index) => (
                <li key={item.id || `${item.title}-${index}`} className={`rv d${(index % 4) + 1}`}>
                  <div>
                    <span className="li-title">{item.title}</span>
                    <span className="li-sub">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rv d2">
            <div className="bfsi-card">
              <h3 style={{ color: 'var(--azure)', marginBottom: 8 }}>{right.title}</h3>
              <p style={{ fontSize: '.83rem', marginBottom: 4 }}>{right.sub_text}</p>
              <div className="bfsi-stat-grid">
                {cards.map((item, index) => (
                  <div key={item.id || `${item.label}-${index}`} className="bfsi-stat">
                    <span className="val">{item.value}</span>
                    <div className="key">{item.label}</div>
                  </div>
                ))}
              </div>
              {(right.message || right.by) && (
                <div className="bfsi-quote">
                  {right.message && (
                    <p className="bfsi-quote-message">{right.message}</p>
                  )}
                  {right.by && (
                    <p className="bfsi-quote-by">- {right.by}</p>
                  )}
                </div>
              )}
              <Link href="/book-demo" className="btn btn-azure bfsi-cta">
                {right.buttonText || defaultSection.right_container.buttonText} {'\u2192'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
