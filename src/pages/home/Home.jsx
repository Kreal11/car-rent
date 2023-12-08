import React from 'react';
import { CarWrapper, HomeWrapper, TextWrapper } from './Home.styled';
import carImage from './car.png';

export const Home = () => {
  return (
    <HomeWrapper>
      <CarWrapper>
        <img src={carImage} alt="" />
      </CarWrapper>
      <TextWrapper>Rent a car now!</TextWrapper>
    </HomeWrapper>
  );
};
