'use client';

import useScrollReveal from '../../components/useScrollReveal';
import HeroSection from './HeroSection';

export default function AwsPage({ data }) {
  useScrollReveal();

  return (
    <div className="aws-page">
      <HeroSection hero={data?.hero} />
    </div>
  );
}
