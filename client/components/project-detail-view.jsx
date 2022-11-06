import * as React from 'react';
import { useState } from 'react';
import Row from './portfolio-row';
import Column from './portfolio-column';
import Box from './portfolio-box';
import Heading from './heading';
import BackgroundImage from './background-image';
import CarousalProject from './carousal-projact';

const ProjectDetailView = () => {

  const [projectDisplay, setProjectDisplay] = useState('puppyParadise');

  const chooseProject = event => {
    setProjectDisplay(event.target.name);
  };

  return (
     <CarousalProject options={[1, 2, 3]} />
  );

};

export default ProjectDetailView;
