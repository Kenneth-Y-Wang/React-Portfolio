import * as React from 'react';
import { useState, useEffect } from 'react';
import BackgroundImage from '../background-image';

const ItemImage = ({ product }) => {
  const [picIndex, updateIndex] = useState(0);

  const autoRun = () => {
    if (product.images.length === 0) {
      return;
    }
    updateIndex(picIndex === (product.images.length - 1) ? 0 : picIndex + 1);
  };

  useEffect(() => {
    const timeId = setInterval(() => autoRun(), 3000);
    return () => {
      clearInterval(timeId);
    };
  });

  const imageList = product.images.map((image, index) => {
    return (
      <div key={index} className={index === picIndex ? '' : 'hidden' } style={{ animation: 'fade-in linear 1s' }}>
        <BackgroundImage
        url={`url("${image}")`}
        imagePositionX={'center'}
        imagePositionY={'center'}
        imageSize={'cover'}
        height={'300px'}
        width={'500px'} />
      </div>
    );
  });

  return (
    <>
    {imageList}
    </>
  );
};

export default ItemImage;
