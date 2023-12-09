import React from 'react';
import { useRentPrices } from '../../hooks/useRentPrices';
import { RentPriceSelectWrapper } from './RentPriceSelect.styled';
import { customRentPriceSelect } from '../../helpers/customRentPriceSelect';
import Select from 'react-select';

export const RentPriceSelect = ({ id, label }) => {
  const rentPrices = useRentPrices();

  const options = rentPrices.map(({ value, label }) => ({ value, label }));

  return (
    <RentPriceSelectWrapper>
      <label htmlFor={id}>{label}</label>
      <Select
        options={options}
        placeholder="To $"
        isSearchable
        isClearable
        styles={customRentPriceSelect}
      />
      {/* <select>
        <option value="" disabled selected>
          To $
        </option>
        {rentPrices?.map(price => {
          return (
            <option key={price} value={price}>
              To {price}$
            </option>
          );
        })}
      </select> */}
    </RentPriceSelectWrapper>
  );
};
