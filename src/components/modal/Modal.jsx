import React, { useEffect } from 'react';
import {
  CloseModalButton,
  ItemDescrModalP,
  ItemHeaderModalWrapper,
  ItemTagsModalList,
  ModalWrapper,
  RentCarButton,
  WrapperOverlay,
} from './Modal.styled';
import { AccessorAndFunct } from '../accessorAndFunct/AccessorAndFunct';
import { SvgSymbols } from '../../images/svg/SvgSymbols';

export const Modal = ({ car, city, country, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [closeModal]);

  const handleClickOut = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      closeModal();
    }
  };

  return (
    <WrapperOverlay onClick={handleClickOut}>
      <ModalWrapper>
        <img src={car.img} alt="Car" crossOrigin="anonymous" />
        <div>
          <ItemHeaderModalWrapper>
            <h2>
              {car.make} <span>{car.model}</span>, {car.year}
            </h2>
          </ItemHeaderModalWrapper>
          <ItemTagsModalList>
            <li>{city}</li>
            <li>{country}</li>
            <li>id: {car.id}</li>
            <li>Year: {car.year}</li>
            <li>Type: {car.type}</li>
            <li>Fuel Consumption: {car.fuelConsumption}</li>
            <li>Engine Size: {car.engineSize}</li>
          </ItemTagsModalList>
          <ItemDescrModalP>{car.description}</ItemDescrModalP>
          <AccessorAndFunct car={car} />
        </div>
        <SvgSymbols />
        <CloseModalButton type="button" onClick={closeModal}>
          <svg height={24}>
            <use href="#icon-x" width={24} height={24} />
          </svg>
        </CloseModalButton>
        <a href="tel:+380730000000">
          <RentCarButton type="button">Rental car</RentCarButton>
        </a>
      </ModalWrapper>
    </WrapperOverlay>
  );
};
