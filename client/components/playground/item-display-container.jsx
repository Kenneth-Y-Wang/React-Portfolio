import * as React from 'react';
import { useState } from 'react';
import GridContainer from '../grid-container';
import Box from '../portfolio-box';
import Row from '../portfolio-row';
import Column from '../portfolio-column';
import BackgroundImage from '../background-image';
import ItemDisplayCarousal from './item-display-carousal';

const ItemDisplay = ({ products, containerDisplay }) => {

  // if (products.length !== 0) {
  //   setContainerDisplay(true);
  // } else {
  //   setContainerDisplay(false);
  // }

  return (
    <GridContainer>
     {!containerDisplay && (
      <BackgroundImage
      height={'500px'}
      width={'100%'}
      url={'url("./images/pexels-pixabay-434337.jpg")'} />
     )}
     {containerDisplay && (
      <ItemDisplayCarousal products={products} />
     )}
    </GridContainer>
  );
};

export default ItemDisplay;
