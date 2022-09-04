import * as React from 'react';
import { useState } from 'react';

const ProjectDetailView = () => {

  const [projectDisplay, setProjectDisplay] = useState('puppyParadise');

  const chooseProject = event => {
    setProjectDisplay(event.target.name);
  };

  return (
  <div className="container">

  </div>
  );

};

export default ProjectDetailView;
