import React from 'react';
import HeroImage from '../components/hero-image';
import AboutMe from '../components/about-me';
import Projects from '../components/projects';

export default function Home(props) {
  return (
    <>
      < HeroImage />
      < AboutMe />
      < Projects />
    </>
  );
}
