import React from 'react';
import HeroImage from '../components/hero-image';
import AboutMe from '../components/about-me';
import Projects from '../components/projects';
import ContactForm from '../components/contact-form';
import JumpLinks from '../components/jumplink';

export default function Home(props) {
  return (
    <>
      < HeroImage />
      < AboutMe />
      < Projects myWorks={props.myWorks} />
      <ContactForm scroll={props.scroll} pageTop={props.pageTop} contactMe={props.contactMe} />
    </>
  );
}
