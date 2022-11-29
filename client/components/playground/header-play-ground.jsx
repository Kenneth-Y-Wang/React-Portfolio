import React, { useState, useContext } from 'react';
import Row from '../portfolio-row';
import Column from '../portfolio-column';
import GridContainer from '../grid-container';
import Box from '../portfolio-box';
import Heading from '../heading';

export default function HeaderPlayground() {

  return (
    <GridContainer horizontalPadding={true}>
      <Row rowPadding={false} isWrapped={false}>
        <Column span={'12'}>
          <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Heading type={'h3'} color={'#343a40'} font={'Meddon, cursive'}>Kenneth &apos;s Playground</Heading>
          </Box>
        </Column>
      </Row>
    </GridContainer>
  );

}
