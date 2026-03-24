const defaultHeading = {
  title: 'Hyperscale Partnerships. One Clear Focus.',
  description:
    "Numbers built one client at a time - the ones we're proudest of aren't the biggest, they're the ones that matter most.",
};

const defaultCards = [
  {
    stat: { value: '200+', label: 'Organisations on Cloud' },
    sub_text: 'SMB to Enterprise, across industries and geographies',
  },
  {
    stat: { value: '$60M+', label: 'Cloud Infrastructure Deployed' },
    sub_text: 'Total AWS + Azure + GCP + Indian CSPs',
  },
  {
    stat: { value: '45+', label: 'BFSI Clients' },
    sub_text: 'Banks, NBFCs, insurance - zero compliance fines',
  },
  {
    stat: { value: '94%', label: 'Annual Client Retention' },
    sub_text: 'Managed services clients renewing annually',
  },
  {
    stat: { value: '30%', label: 'Average FinOps Savings' },
    sub_text: 'Cloud cost reduction delivered in 90 days',
  },
  {
    stat: { value: '120+', label: 'Cloud Certifications' },
    sub_text: 'Across AWS, Azure, GCP on the delivery team',
  },
];

const toneClasses = ['', 'orange', '', 'green', '', 'orange'];

export default function ByTheNumbersSection({ section }) {
  const heading = section?.heading || defaultHeading;
  const cards = section?.card?.length ? section.card : defaultCards;

  return (
    <section className="ps ps-w">
      <div className="container">
        <span className="badge bb sec-ey rv">By the Numbers</span>
        <h2 className="sec-ti rv">{heading.title}</h2>
        <p className="sec-su rv">{heading.description}</p>
        <div className="nums-grid rv">
          {cards.map((card, index) => {
            const value = card?.stat?.value || defaultCards[index]?.stat?.value || '';
            const label = card?.stat?.label || defaultCards[index]?.stat?.label || '';
            const subText = card?.sub_text || defaultCards[index]?.sub_text || '';
            const dataNumber = value.replace(/[^0-9]/g, '') || value;
            const toneClass = toneClasses[index % toneClasses.length];

            return (
              <div key={`${value}-${index}`} className={`num-cell${toneClass ? ` ${toneClass}` : ''}`} data-n={dataNumber}>
                <div className="num-cell-inner">
                  <span className="nc-val">{value}</span>
                  <div className="nc-label">{label}</div>
                  <div className="nc-sub">{subText}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
