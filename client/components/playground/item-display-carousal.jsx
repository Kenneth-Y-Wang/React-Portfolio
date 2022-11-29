import * as React from 'react';
import { useState } from 'react';
import GridContainer from '../grid-container';
import Box from '../portfolio-box';
import Row from '../portfolio-row';
import Column from '../portfolio-column';
import BackgroundImage from '../background-image';
import ItemChoice from './item-choice';
import ItemDetail from './item-detail';

const ItemDisplayCarousal = ({ products }) => {

  const [itemDisplay, setItemDisplay] = useState(0);

  const chooseItem = index => {
    setItemDisplay(index);

  };
  console.log(itemDisplay);

  const choiceList = products.map((product, index) => {

    return (
           <div key={index}><ItemChoice product={product} index={index} chooseItem={chooseItem} /></div>
    );
  });

  const detailList = products.map((product, index) => {
    return (
      <div key={index}><ItemDetail product={product} index={index} itemDisplay={itemDisplay} /></div>
    );
  });
  return (
    <GridContainer>
      <Row isWrapped={true}>
        <Column span={'mobile:12,tablet:2'}>
          <Box
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'mobile:row,tablet:column'}
          className={'item-detail-holder'}>
            {choiceList}
          </Box>
        </Column>
        <Column span={'mobile:12,tablet:10'}>
          <Box height={'mobile:450px,tablet:100%'} width={'100%'} className={'item-detail-holder'}>
          {detailList}
          </Box>
        </Column>
      </Row>
    </GridContainer>
  );

};

export default ItemDisplayCarousal;
