import React, { useState } from 'react';

import { CarMileageSelectWrapper } from './CarMileageSelect.styled';

export const CarMileageInputs = ({ id, label }) => {
  const formatNumberWithComma = number => {
    // Функция для форматирования числа с запятой
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleMileageFromChange = e => {
    // Обработчик изменения значения для первого инпута
    const value = e.target.value.replace(/\D/g, ''); // Удаляем не-цифры
    setMileageFrom(formatNumberWithComma(value));
  };

  const handleMileageToChange = e => {
    // Обработчик изменения значения для второго инпута
    const value = e.target.value.replace(/\D/g, ''); // Удаляем не-цифры
    setMileageTo(formatNumberWithComma(value));
  };

  return (
    <CarMileageSelectWrapper>
      <label htmlFor={id}>{label}</label>
      <div>
        <div>
          <input
            type="text"
            id="carMileage"
            value={mileageFrom}
            onChange={handleMileageFromChange}
            data-from="From"
          />
          <p>From</p>
        </div>
        <div>
          <input
            type="text"
            id="carMileage"
            value={mileageTo}
            onChange={handleMileageToChange}
            data-to="To"
          />
          <p>To</p>
        </div>
      </div>
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
    </CarMileageSelectWrapper>
  );
};
