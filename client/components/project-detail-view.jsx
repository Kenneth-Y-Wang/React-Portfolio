import * as React from 'react';
import { useState } from 'react';
import Row from './portfolio-row';

const ProjectDetailView = () => {

  const [projectDisplay, setProjectDisplay] = useState('puppyParadise');

  const chooseProject = event => {
    setProjectDisplay(event.target.name);
  };

  return (
  <div className="container">
    <Row rowPadding={false} isWrapped={false}>
      Hello World
    </Row>
  </div>
  );

};

export default ProjectDetailView;
