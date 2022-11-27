import * as React from 'react';
import { useState } from 'react';
import GridContainer from '../grid-container';
import Box from '../portfolio-box';
import Row from '../portfolio-row';
import Column from '../portfolio-column';
import BackgroundImage from '../background-image';

const ItemDisplayCarousal = ({ products }) => {

  const [itemDisplay, setItemDisplay] = useState(1);

  return (
    <GridContainer>
      <Row isWrapped={true}>
        <Column span={'mobile:12,tablet:2'}>
          <Box
          width={'100%'}
          height={'500px'}
          backgroundColor={'red'}></Box>
        </Column>
        <Column span={'mobile:12,tablet:10'}>
          <Box
          width={'100%'}
          height={'500px'}
          backgroundColor={'blue'}></Box>
        </Column>
      </Row>
    </GridContainer>
  );

};

export default ItemDisplayCarousal;
