import React, { useState } from 'react';
import HeaderPlayground from './components/playground/header-play-ground';
import HeroPlayground from './components/playground/hero-playground';
import SubmitButton from './components/playground/submit-button';
import getMultipleRandom from './lib/get-multiple-random';
import ItemDisplay from './components/playground/item-display-container';
import Footer from './components/footer';

export default function AppPlayGround() {

  const [containerDisplay, setContainerDisplay] = useState(false);
  const [products, setProducts] = useState([]);

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
        const products = getMultipleRandom(data.products, 3);
        setProducts(products);
        setContainerDisplay(true);
      }
      // console.log(products);
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
        <Footer />
      </>
  );

}
