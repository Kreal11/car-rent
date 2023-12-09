import React from 'react';
import { AccAndFunctHeader, AccAndFunctList } from './AccessorAndFunct.styled';

export const AccessorAndFunct = ({ car }) => {
  return (
    <>
      <AccAndFunctHeader>Accessories and functionalities:</AccAndFunctHeader>
      <AccAndFunctList data="accessories">
        {car.accessories.map((accessory, index) => (
          <li key={index}>{accessory}</li>
        ))}
      </AccAndFunctList>
      <AccAndFunctList data="functionalities">
        {car.functionalities.map((functionality, index) => (
          <li key={index}>{functionality}</li>
        ))}
      </AccAndFunctList>
    </>
  );
};
