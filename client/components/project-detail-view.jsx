import * as React from 'react';
import { useState } from 'react';
import Row from './portfolio-row';
import Column from './portfolio-column';

const ProjectDetailView = () => {

  const [projectDisplay, setProjectDisplay] = useState('puppyParadise');

  const chooseProject = event => {
    setProjectDisplay(event.target.name);
  };

  return (
  <div className="container">
    <Row rowPadding={true} isWrapped={false}>
      <Column offset={'mobile:0,tablet:0,desktop:5'} span={'mobile:6,tablet:6,desktop:7'}>
          <div style={{ backgroundColor: '#495057', width: '100%', height: '100px' }} />
      </Column>
    </Row>
  </div>
  );

};

export default ProjectDetailView;
