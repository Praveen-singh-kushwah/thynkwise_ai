import { useMemo, useState } from 'react';
import Link from 'next/link';

const defaultSection = {
  badge_text: 'FinOps Calculator',
  title: 'How much are you wasting right now?',
  description:
    'Move the slider to estimate recoverable cloud waste. The frontend calculator computes live values from these CMS settings.',
  spend_label: 'Monthly Cloud Spend (INR)',
  provider_label: 'Cloud Provider',
  min_spend: 100000,
  max_spend: 20000000,
  default_spend: 1000000,
  step_amount: 50000,
  provider_options: [
    { label: 'AWS (32% avg waste)', waste_percentage: 32 },
    { label: 'Azure (34% avg waste)', waste_percentage: 34 },
    { label: 'GCP (30% avg waste)', waste_percentage: 30 },
    { label: 'Multi-cloud (36% avg waste)', waste_percentage: 36 },
  ],
  disclaimer:
    'Actual savings vary by workload type, current optimisation maturity, and approved implementation scope.',
  primary_cta_text: 'Get Exact Audit - Free',
  primary_cta_link: '/get-assessment',
  secondary_cta_text: 'Book a FinOps Discussion',
  secondary_cta_link: '/book-demo',
};

function formatInr(value) {
  if (value >= 10000000) {
    return `Rs. ${(value / 10000000).toFixed(1)}Cr`;
  }

  if (value >= 100000) {
    return `Rs. ${(value / 100000).toFixed(1)}L`;
  }

  return `Rs. ${value.toLocaleString('en-IN')}`;
}

function getEstimatedFee(spend) {
  if (spend <= 500000) return 25000;
  if (spend <= 2500000) return 75000;
  return 250000;
}

function getPlanLabel(spend) {
  if (spend <= 500000) return 'Starter';
  if (spend <= 2500000) return 'Growth';
  return 'Enterprise';
}

export default function CalculatorSection({ section }) {
  const data = section || defaultSection;
  const providerOptions = data.provider_options?.length
    ? data.provider_options
    : defaultSection.provider_options;
  const minSpend = Number(data.min_spend) || defaultSection.min_spend;
  const maxSpend = Number(data.max_spend) || defaultSection.max_spend;
  const stepAmount = Number(data.step_amount) || defaultSection.step_amount;
  const defaultSpend = Number(data.default_spend) || defaultSection.default_spend;
  const [spend, setSpend] = useState(defaultSpend);
  const [providerIndex, setProviderIndex] = useState(0);

  const selectedProvider = providerOptions[providerIndex] || providerOptions[0];
  const wastePercentage = Number(selectedProvider?.waste_percentage) || 32;
  const results = useMemo(() => {
    const monthlyWaste = Math.round(spend * (wastePercentage / 100));
    const annualWaste = monthlyWaste * 12;
    const annualFee = getEstimatedFee(spend) * 12;

    return {
      monthlyWaste,
      annualWaste,
      achievableMonthlySaving: monthlyWaste,
      netAnnualSaving: Math.max(0, annualWaste - annualFee),
      fee: annualFee,
    };
  }, [spend, wastePercentage]);

  const resultItems = [
    { value: formatInr(results.monthlyWaste), label: 'Estimated monthly waste', tone: 'green' },
    { value: formatInr(results.annualWaste), label: 'Estimated annual waste', tone: 'green' },
    {
      value: formatInr(results.achievableMonthlySaving),
      label: 'Achievable monthly saving',
      tone: 'orange',
    },
    { value: formatInr(results.netAnnualSaving), label: 'Net annual saving after fees', tone: 'green' },
  ];

  return (
    <section className="co-calculator-section" id="calculator">
      <div className="container">
        <div className="co-calculator-wrap rv">
          <div className="co-calculator-head">
            <span className="co-badge co-badge-green">{data.badge_text || defaultSection.badge_text}</span>
            <h2>{data.title || defaultSection.title}</h2>
            <p>{data.description || defaultSection.description}</p>
          </div>

          <div className="co-calculator-body">
            <label className="co-calculator-field">
              <span>{data.spend_label || defaultSection.spend_label}</span>
              <input
                type="range"
                min={minSpend}
                max={maxSpend}
                step={stepAmount}
                value={spend}
                onChange={(event) => setSpend(Number(event.target.value))}
              />
              <strong>{formatInr(spend)}</strong>
            </label>

            <label className="co-calculator-field">
              <span>{data.provider_label || defaultSection.provider_label}</span>
              <select
                value={providerIndex}
                onChange={(event) => setProviderIndex(Number(event.target.value))}
              >
                {providerOptions.map((option, index) => (
                  <option key={`${option.label}-${index}`} value={index}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="co-calculator-results">
            {resultItems.map((item, index) => (
              <div key={`${item.label}-${index}`} className="co-calculator-result">
                <span className={item.tone === 'orange' ? 'orange' : ''}>{item.value}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <p className="co-calculator-note">
            Based on {formatInr(spend)}/month on {selectedProvider?.label || 'cloud'} at{' '}
            {wastePercentage}% average waste. Estimated management fee: {getPlanLabel(spend)} plan (
            {formatInr(results.fee)}/year). {data.disclaimer || defaultSection.disclaimer}
          </p>

          <div className="co-calculator-actions">
            <Link href={data.primary_cta_link || defaultSection.primary_cta_link} className="btn co-btn-primary">
              {data.primary_cta_text || defaultSection.primary_cta_text} {'\u2192'}
            </Link>
            <Link href={data.secondary_cta_link || defaultSection.secondary_cta_link} className="btn co-btn-secondary">
              {data.secondary_cta_text || defaultSection.secondary_cta_text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
