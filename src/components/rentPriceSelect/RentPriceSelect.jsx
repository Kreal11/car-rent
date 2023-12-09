import React, { useState } from 'react';
import { useRentPrices } from '../../hooks/useRentPrices';
import { RentPriceSelectWrapper } from './RentPriceSelect.styled';
import { customRentPriceSelect } from '../../helpers/customRentPriceSelect';
import Select from 'react-select';

export const RentPriceSelect = ({ id, label, ...rest }) => {
  const rentPrices = useRentPrices();

  const options = rentPrices.map(({ value, label }) => ({ value, label }));

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const customStyles = {
    ...customRentPriceSelect,
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: isMenuOpen ? 'rotate(180deg)' : 'none',
    }),
  };

  return (
    <RentPriceSelectWrapper>
      <label htmlFor={id}>{label}</label>
      <Select
        options={options}
        placeholder="To $"
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
        isSearchable
        isClearable
        styles={customStyles}
        {...rest}
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
