import React, { useState } from 'react';

import { CarMileageSelectWrapper } from './CarMileageSelect.styled';

export const CarMileageInputs = ({ id, label, onChange, ...rest }) => {
  const formatNumberWithComma = number => {
    // Функция для форматирования числа с запятой
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const [mileage, setMileage] = useState({ from: '', to: '' });

  const handleMileageChange = (e, type) => {
    // Обработчик изменения значения для первого инпута
    const value = e.target.value.replace(/\D/g, ''); // Удаляем не-цифры
    const formattedValue = formatNumberWithComma(value);
    setMileage(prev => ({ ...prev, [type]: formattedValue }));
    onChange({ ...mileage, [type]: formattedValue });
  };

  // const handleMileageToChange = e => {

  //   const value = e.target.value.replace(/\D/g, '');
  //   const formattedValue = formatNumberWithComma(value);
  //   onChange({ from: rest.from, to: formattedValue });
  // };

  return (
    <CarMileageSelectWrapper>
      <label htmlFor={id}>{label}</label>
      <div>
        <div>
          <input
            type="text"
            id="carMileage"
            value={rest.from}
            onChange={e => handleMileageChange(e, 'from')}
            data-from="From"
            {...rest}
          />
          <p>From</p>
        </div>
        <div>
          <input
            type="text"
            id="carMileage"
            value={rest.to}
            onChange={e => handleMileageChange(e, 'to')}
            data-to="To"
            {...rest}
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
