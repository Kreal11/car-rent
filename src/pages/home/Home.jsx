import React from 'react';
import { CarWrapper, HomeWrapper, TextWrapper } from './Home.styled';
import carImage from './Сar.png';

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
