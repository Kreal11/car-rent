import React from 'react';
import {
  AdvantageItem,
  AdvantagesSection,
  BgImage,
  CarBrandsList,
  CarWrapper,
  HomeWrapper,
  OfferHeader,
  ServicesList,
  TextHeader,
} from './Home.styled';
import carImage from './Сar.png';
import bgImage from './bg-image-car.jpg';
import { useCarBrandsImgs } from '../../hooks/carBrandsImgs';

export const Home = () => {
  const carBrandsImgs = useCarBrandsImgs();

  return (
    <HomeWrapper>
      <BgImage src={bgImage} alt="" />
      <CarWrapper>
        <img src={carImage} alt="" />
      </CarWrapper>
      <TextHeader>
        Welcome to <span>FastWheels Rent</span>!
        <h2>Check our advantages below!</h2>
      </TextHeader>

      <OfferHeader>We offer: </OfferHeader>

      <ServicesList>
        <li>Wide Range of Vehicles</li>
        <li>Flexible Rental Plans</li>
        <li>24/7 Customer Support</li>
        <li>Easy Online Booking</li>
      </ServicesList>

      <AdvantagesSection>
        <AdvantageItem>
          <h3>Quality Vehicles</h3>
          <p>Explore our fleet of well-maintained and modern vehicles.</p>
        </AdvantageItem>
        <AdvantageItem>
          <h3>Convenient Booking</h3>
          <p>Book your car online with just a few clicks.</p>
        </AdvantageItem>
        <AdvantageItem>
          <h3>Customer Satisfaction</h3>
          <p>Our top priority is your satisfaction. 24/7 support available.</p>
        </AdvantageItem>
      </AdvantagesSection>

      <CarBrandsList>
        {carBrandsImgs?.map((brandImg, index) => (
          <li key={index}>
            <img src={brandImg.image} alt={brandImg.alt} />
          </li>
        ))}
      </CarBrandsList>
    </HomeWrapper>
  );
};
