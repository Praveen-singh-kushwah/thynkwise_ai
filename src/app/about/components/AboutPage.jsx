'use client';

import useScrollReveal from '../../components/useScrollReveal';
import HeroSection from './HeroSection';
import MissionSection from './MissionSection';
import ByTheNumbersSection from './ByTheNumbersSection';
import OurValuesSection from './OurValuesSection';

export default function AboutPage({ data }) {
  useScrollReveal();

  return (
    <div className="about-page">
      <HeroSection hero={data?.hero} />
      <MissionSection section={data?.our_mission} />
      <ByTheNumbersSection section={data?.by_the_numbers} />
      <OurValuesSection section={data?.our_values} />
    </div>
  );
}
