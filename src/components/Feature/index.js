import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the Day</h1>
      <p>Truffle alfredo sauce topped with Pepperoni and Cheese.</p>
      <FeatureButton to='/PizzaRestaurant/signin'>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;

