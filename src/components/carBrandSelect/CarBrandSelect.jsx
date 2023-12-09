import React, { useState } from 'react';
import { useCarBrands } from '../../hooks/useCarBrands';
import { CarBrandSelectWrapper } from './CarBrandSelect.styled';
import Select from 'react-select';
import { customBrandSelect } from '../../helpers/customBrandSelect';

export const CarBrandSelect = ({ id, label }) => {
  const carBrands = useCarBrands();

  const options = carBrands.map(({ value, label }) => ({ value, label }));

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const customStyles = {
    ...customBrandSelect,
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: isMenuOpen ? 'rotate(180deg)' : 'none',
    }),
  };

  return (
    <CarBrandSelectWrapper>
      <label htmlFor={id}>{label}</label>
      <Select
        options={options}
        placeholder="Enter the text"
        isSearchable
        isClearable
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
        styles={customStyles}
      />
      {/* <select name="" id={id}>
        <option value="" disabled selected>
          Enter the text
        </option>
        {carBrands?.map(brand => {
          return (
            <option key={brand} value={brand}>
              {brand}
            </option>
          );
        })}
      </select> */}
    </CarBrandSelectWrapper>
  );
};
