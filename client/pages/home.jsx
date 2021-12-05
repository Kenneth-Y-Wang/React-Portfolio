import React from 'react';
import HeroImage from '../components/hero-image';
import AboutMe from '../components/about-me';
import Projects from '../components/projects';
import ContactForm from '../components/contact-form';

export default function Home(props) {
  return (
    <>
      < HeroImage />
      < AboutMe />
      < Projects />
      <ContactForm contactMe={props.contactMe} />
    </>
  );
}
