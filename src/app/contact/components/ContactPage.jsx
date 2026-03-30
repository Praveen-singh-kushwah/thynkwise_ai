'use client';

import useScrollReveal from '../../components/useScrollReveal';
import HeroSection from './HeroSection';
import ContactMainSection from './ContactMainSection';

export default function ContactPage({ data }) {
  useScrollReveal();

  return (
    <div className="contact-page">
      <HeroSection hero={data?.hero} />
      <ContactMainSection
        formSection={data?.contact_form}
        channelsSection={data?.contact_channels}
        officesSection={data?.offices}
      />
    </div>
  );
}
