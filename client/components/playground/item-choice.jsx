import * as React from 'react';
import Box from '../portfolio-box';
import BackgroundImage from '../background-image';

const ItemChoice = ({ product, index, chooseItem }) => {

  return (
    <Box
    width={'mobile:110px,tablet:100%'}
    height={'mobile:100px,tablet:140px'}
    position={'relative'}
    animation={'fade-in linear 1s'}>
     <BackgroundImage
      url={`url("${product.thumbnail}")`}
      className={'choice-button-thumbnail'}
      imagePositionX={'center'}
      imagePositionY={'center'}
      imageSize={'cover'} />
       <div className='choice-button-name' onClick={() => chooseItem(index)}>{product.title}</div>
    </Box>
  );
};

export default ItemChoice;
