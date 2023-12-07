import React from 'react';
import {
  CatalogItem,
  ItemButton,
  ItemDescrList,
  ItemHeaderWrapper,
} from './OneCar.styled';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../modal/Modal';

export const OneCar = ({ car }) => {
  const addressParts = car.address.split(',');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();

  const { isOpen, openModal, closeModal } = useModal();

  return (
    <CatalogItem key={car.id}>
      <img src={car.img} alt="Car" crossOrigin="anonymous" />
      <div>
        <ItemHeaderWrapper>
          <div>
            <h2>
              {car.make} <span>{car.model}</span>, {car.year}
            </h2>
          </div>
          <h5>{car.rentalPrice}</h5>
        </ItemHeaderWrapper>
        <ItemDescrList>
          <li>{city}</li>
          <li>{country}</li>
          <li>{car.rentalCompany}</li>
          <li>{car.type}</li>
          <li>{car.model}</li>
          <li>{car.id}</li>
          <li>{car.accessories[0]}</li>
        </ItemDescrList>
      </div>
      <ItemButton type="button" onClick={openModal}>
        Learn more
      </ItemButton>
      {isOpen ? (
        <Modal
          closeModal={closeModal}
          car={car}
          city={city}
          country={country}
        />
      ) : null}
    </CatalogItem>
  );
};
