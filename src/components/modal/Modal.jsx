import React, { useEffect } from 'react';
import { ModalWrapper, WrapperOverlay } from './Modal.styled';

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
          <div>
            <div>
              <h2>
                {car.make} <span>{car.model}</span>, {car.year}
              </h2>
            </div>
            <h5>{car.rentalPrice}</h5>
          </div>
          <ul>
            <li>{city}</li>
            <li>{country}</li>
            <li>{car.rentalCompany}</li>
            <li>{car.type}</li>
            <li>{car.model}</li>
            <li>{car.id}</li>
            <li>{car.accessories[0]}</li>
          </ul>
        </div>
        <button type="button" onClick={closeModal}>
          X
        </button>
        <button type="button">Rental car</button>
      </ModalWrapper>
    </WrapperOverlay>
  );
};
