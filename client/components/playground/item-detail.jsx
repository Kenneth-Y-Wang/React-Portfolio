import * as React from 'react';
import BackgroundImage from '../background-image';
import Box from '../portfolio-box';
import ItemImage from './item-image-carousal';
import Text from '../text';

const ItemDetail = ({ product, index, itemDisplay }) => {

  const boxClass = itemDisplay === index
    ? ''
    : 'hidden';

  console.log(product);

  return (
    <Box
    width={'100%'}
    height={'100%'}
    position={'relative'}
    animation={'fade-in linear 1s'}
    backgroundColor={'white'}
    className={boxClass}>
      <Box
      height={'60%'}
      width={'100%'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      paddingTop={'1rem'}
      paddingBottom={'1rem'}>
        <ItemImage product={product} />
      </Box>
      <Box
      height={'mobile:118px,tablet:88px'}
      width={'100%'}
      dispaly={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      paddingTop={'1rem'}
      paddingLeft={'mobile:.75rem,tablet:1rem'}
      paddingRight={'mobile:.75rem,tablet:1rem'}>
        <Text
        color={'#495057'}
        font={'Montserrat'}
        size={'1rem'}
        textAlign={'center'}>{product.title} ${product.price}</Text>
        <Text
        color={'#495057'}
        font={'Montserrat'}
        size={'mobile:.6rem,tablet:.8rem'}
        textAlign={'center'}
        classes={'mg-t-75'}>{product.description}</Text>
      </Box>
    </Box>
  );
};

export default ItemDetail;
