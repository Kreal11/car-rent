import React from 'react';
import {
  CatalogItem,
  ImgWrapper,
  ItemButton,
  ItemHeaderWrapper,
  ItemTagsList,
} from '../oneCar/OneCar.styled';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../modal/Modal';

export const FavoriteCar = ({ favoriteCar }) => {
  const addressParts = favoriteCar.address.split(',');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();

  const { isOpen, openModal, closeModal } = useModal();

  return (
    <CatalogItem key={favoriteCar.id}>
      <ImgWrapper>
        <img src={favoriteCar.img} alt="Car" crossOrigin="anonymous"></img>
      </ImgWrapper>
      <div>
        <ItemHeaderWrapper>
          <div>
            <h2>
              {favoriteCar.make} <span>{favoriteCar.model}</span>,{' '}
              {favoriteCar.year}
            </h2>
          </div>
          <h5>{favoriteCar.rentalPrice}</h5>
        </ItemHeaderWrapper>
        <ItemTagsList>
          <li>{city}</li>
          <li>{country}</li>
          <li>{favoriteCar.rentalCompany}</li>
          <li>{favoriteCar.type}</li>
          <li>{favoriteCar.model}</li>
          <li>{favoriteCar.id}</li>
          <li>{favoriteCar.accessories[0]}</li>
        </ItemTagsList>
      </div>
      <ItemButton type="button" onClick={openModal}>
        Learn more
      </ItemButton>
      {isOpen ? (
        <Modal
          closeModal={closeModal}
          car={favoriteCar}
          city={city}
          country={country}
        />
      ) : null}
    </CatalogItem>
  );
};
