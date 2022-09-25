import * as React from 'react';
import { useState } from 'react';
import Row from './portfolio-row';
import Column from './portfolio-column';
import Box from './portfolio-box';
import Heading from './heading';
import BackgroundImage from './background-image';

const ProjectDetailView = () => {

  const [projectDisplay, setProjectDisplay] = useState('puppyParadise');

  const chooseProject = event => {
    setProjectDisplay(event.target.name);
  };

  return (
  <div className="container">
    <Row rowPadding={true} isWrapped={true}>
      <Column span={'mobile:12,tablet:7'}>
        {/* <div style={{ backgroundColor: '#495057', width: '100%', height: '100px' }} /> */}
        <Box backgroundColor={'mobile:#495057,tablet:white'} width={'mobile:50%,tablet:100%'} height={'100px'} >
          {/* <Heading type={'h5'} weight={'200'} size={'2rem'} color={'blue'} textAlign={'center'}>Hello Jimin</Heading> */}
        </Box>
      </Column>

      <Column span={'mobile:12,tablet:2'}>
         <Box backgroundColor={'mobile:blue,tablet:red'} width={'mobile:50%,tablet:100%'} height={'100px'} >
          {/* <Heading type={'h5'} weight={'200'} size={'2rem'} color={'#6c757d'} textAlign={'center'}>Hello Caleb</Heading> */}
        </Box>
      </Column>
    </Row>
  </div>
  );

};

export default ProjectDetailView;
