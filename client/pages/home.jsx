import React from 'react';
import HeroImage from '../components/hero-image';
import AboutMe from '../components/about-me';
import Projects from '../components/projects';
import ContactForm from '../components/contact-form';
import JumpLinks from '../components/jumplink';

export default function Home({
  myWorks,
  scroll,
  pageTop,
  contactMe
}) {
  return (
    <>
      < HeroImage />
      < AboutMe />
      < Projects myWorks={myWorks} />
      <ContactForm scroll={scroll} pageTop={pageTop} contactMe={contactMe} />
    </>
  );
}
