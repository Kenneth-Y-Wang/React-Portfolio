import * as React from 'react';
import Box from './portfolio-box';
import Column from './portfolio-column';
import Row from './portfolio-row';
import GridContainer from './grid-container';
import { useState } from 'react';

export default function CarousalProject({
  options,
  title,
  children
}) {

  let carousalOptions;
  options
    ? carousalOptions = options
    : carousalOptions = [];

  const colorOptions = [];

  const [carousalDisplay, setCarousalDisplay] = useState(carousalOptions[0]);

  const optionDisplay = (carousalOptions, colorOptions) => {

  };

  const projectDisplay = carousalOptions => {

  };

  return (
    <GridContainer horizontalPadding={true}>
      <Row rowPadding={false} isWrapped={true}>
        <Column span={'mobile:12,tablet:3'}>
          <Box backgroundColor={'#495057'} width={'100%'} height={'300px'} />
        </Column>

         <Column span={'mobile:12,tablet:9'}>
          <Box backgroundColor={'#0f1110'} width={'100%'} height={'300px'} />
        </Column>
      </Row>
    </GridContainer>

  );
}
