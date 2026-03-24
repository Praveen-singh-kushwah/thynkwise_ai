'use client';

import useScrollReveal from '../../components/useScrollReveal';
import HeroSection from './HeroSection';

export default function AboutPage({ data }) {
  useScrollReveal();

  return (
    <div className="about-page">
      <HeroSection hero={data?.hero} />
    </div>
  );
}
