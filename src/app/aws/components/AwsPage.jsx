'use client';

import useScrollReveal from '../../components/useScrollReveal';
import HeroSection from './HeroSection';
import ComparisonSection from './ComparisonSection';
import WhyThynkwiseSection from './WhyThynkwiseSection';

export default function AwsPage({ data }) {
  useScrollReveal();

  return (
    <div className="aws-page">
      <HeroSection hero={data?.hero} />
      <ComparisonSection section={data?.comparison} />
      <WhyThynkwiseSection section={data?.why_thynkwise} />
    </div>
  );
}
