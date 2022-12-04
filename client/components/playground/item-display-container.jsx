import * as React from 'react';
import GridContainer from '../grid-container';
import Box from '../portfolio-box';
import BackgroundImage from '../background-image';
import ItemDisplayCarousal from './item-display-carousal';

const ItemDisplay = ({ products, containerDisplay }) => {

  return (
    <GridContainer>
     {!containerDisplay && (
      <BackgroundImage
      height={'500px'}
      width={'100%'}
      url={'url("./images/pexels-karolina-grabowska-5632399.jpg")'}
      imagePositionX={'mobile:left,tablet:center'}
      imagePositionY={'center'}
      imageSize={'cover'}
      className={'box-relative-position'}>
        <Box className={'no-item-message'}>Sorry, you have no item...</Box>
      </BackgroundImage>
     )}
     {containerDisplay && (
      <ItemDisplayCarousal products={products} />
     )}
    </GridContainer>
  );
};

export default ItemDisplay;
