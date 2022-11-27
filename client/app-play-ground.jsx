import React, { useState } from 'react';
import HeaderPlayground from './components/playground/header-play-ground';
import HeroPlayground from './components/playground/hero-playground';
import SubmitButton from './components/playground/submit-button';
import getMultipleRandom from './lib/get-multiple-random';
import ItemDisplay from './components/playground/item-display-container';

export default function AppPlayGround() {

  const [containerDisplay, setContainerDisplay] = useState(false);
  const products = [];
  const handleSubmit = async event => {
    try {
      const response = await fetch('https://dummyjson.com/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      // console.log(data);
      if (data) {
        const productArray = getMultipleRandom(data.products, 3);
        for (const product of productArray) {
          products.push(product);
        }
        setContainerDisplay(true);
      }
      console.log(products);
    } catch (error) {
      console.error('error', error);
    }
  };

  return (
      <>
        <HeaderPlayground />
        <HeroPlayground />
        <SubmitButton handleSubmit={handleSubmit} />
        <ItemDisplay products={products} containerDisplay={containerDisplay} />
      </>
  );

}
