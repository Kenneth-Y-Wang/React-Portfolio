import * as React from 'react';
import { useState } from 'react';
import Row from './portfolio-row';
import Column from './portfolio-column';
import Box from './portfolio-box';
import Heading from './heading';

const ProjectDetailView = () => {

  const [projectDisplay, setProjectDisplay] = useState('puppyParadise');

  const chooseProject = event => {
    setProjectDisplay(event.target.name);
  };

  return (
  <div className="container">
    <Row rowPadding={true} isWrapped={false}>
      <Column span={'10'}>
        {/* <div style={{ backgroundColor: '#495057', width: '100%', height: '100px' }} /> */}
        <Box backgroundColor={'mobile:#495057,tablet:white'} width={'mobile:50%,tablet:100%'} height={'100px'} >
          <Heading type={'h2'} weight={'200'} size={'5rem'} color={'red'} textAlign={'center'}>Hello world</Heading>
        </Box>
      </Column>
    </Row>
  </div>
  );

};

export default ProjectDetailView;
