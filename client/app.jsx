import React from 'react';
import Home from './pages/home';
import Navbar from './components/navbar';
import HeroImage from './components/hero-image';
import AboutMe from './components/about-me';

export default class App extends React.Component {
  render() {
    return (
      <>
        < Navbar />
        < HeroImage />
        < AboutMe />

      </>
    );
  }
}
