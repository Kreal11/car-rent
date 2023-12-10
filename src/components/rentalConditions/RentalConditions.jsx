import React from 'react';
import { ConditionsHeader, ConditionsList } from './RentalConditions.styled';

export const RentalConditions = ({ car }) => {
  const conditionsList = car.rentalConditions.split('\n');

  return (
    <>
      <ConditionsHeader>Rental Conditions: </ConditionsHeader>
      <ConditionsList>
        {conditionsList.map((condition, index) => {
          const [textBeforeColon, textAfterColon] = condition.split(':');
          return (
            <li key={index}>
              {textBeforeColon}
              {textAfterColon && (
                <>
                  : <span>{textAfterColon.trim()}</span>
                </>
              )}
            </li>
          );
        })}
        <li>
          Mileage:{' '}
          <span>
            {car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </li>
        <li>
          Price: <span>{car.rentalPrice}</span>
        </li>
      </ConditionsList>
    </>
  );
};
