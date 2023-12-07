import React from 'react';
import {
  CatalogItem,
  ItemButton,
  ItemDescrList,
  ItemHeaderWrapper,
} from './OneCar.styled';

export const OneCar = ({
  id,
  year,
  make,
  model,
  type,
  img,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalPrice,
  rentalCompany,
  address,
  rentalConditions,
  mileage,
}) => {
  const addressParts = address.split(',');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();

  return (
    <CatalogItem key={id}>
      <img
        src={img}
        alt="Car"
        width="401"
        height="268"
        crossOrigin="anonymous"
      />
      <div>
        <ItemHeaderWrapper>
          <div>
            <h2>
              {make} <span>{model}</span>, {year}
            </h2>
          </div>
          <h5>{rentalPrice}</h5>
        </ItemHeaderWrapper>
        <ItemDescrList>
          <li>{city}</li>
          <li>{country}</li>
          <li>{rentalCompany}</li>
          <li>{type}</li>
          <li>{model}</li>
          <li>{id}</li>
          <li>{accessories[0]}</li>
        </ItemDescrList>
      </div>
      <ItemButton type="button">Learn more</ItemButton>
    </CatalogItem>
  );
};
