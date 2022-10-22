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
      <Column span={'mobile:12,tablet:4'} offset={'mobile:0,tablet:2'}>
        {/* <div style={{ backgroundColor: '#495057', width: '100%', height: '100px' }} /> */}
        <Box backgroundColor={'mobile:#495057,tablet:white'} width={'100%'} height={'100px'} >
          {/* <Heading type={'h5'} weight={'200'} size={'2rem'} color={'blue'} textAlign={'center'}>Hello Jimin</Heading> */}
        </Box>
      </Column>

      <Column span={'mobile:12,tablet:6'} >
        {/* <div style={{ backgroundColor: '#495057', width: '100%', height: '100px' }} /> */}
        <BackgroundImage url={'mobile:url("./images/pexels-photo-234527.jpeg"),tablet:url("./images/pexels-hasan-albari-1229861.jpg")'} width={'100%'}
         height={'100px'} imageSize={'cover'}>
          {/* <Heading type={'h5'} weight={'200'} size={'2rem'} color={'blue'} textAlign={'center'}>Hello Jimin</Heading> */}
        </BackgroundImage>
      </Column>
    </Row>
  </div>
  );

};

export default ProjectDetailView;
