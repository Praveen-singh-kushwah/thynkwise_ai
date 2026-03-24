'use client';

import useScrollReveal from '../../components/useScrollReveal';
import HeroSection from './HeroSection';
import MissionSection from './MissionSection';
import ByTheNumbersSection from './ByTheNumbersSection';
import OurValuesSection from './OurValuesSection';
import TeamSection from './TeamSection';
import TechnologyPartnersSection from './TechnologyPartnersSection';

export default function AboutPage({ data }) {
  useScrollReveal();

  return (
    <div className="about-page">
      <HeroSection hero={data?.hero} />
      <MissionSection section={data?.our_mission} />
      <ByTheNumbersSection section={data?.by_the_numbers} />
      <OurValuesSection section={data?.our_values} />
      <TeamSection section={data?.the_team} />
      <TechnologyPartnersSection section={data?.technology_partners} />
    </div>
  );
}
