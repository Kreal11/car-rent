import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavorites,
  selectFilteredFavorites,
} from '../../redux/favorites/selectors';
import { FavoriteCar } from '../../components/favoriteCar/FavoriteCar';
import {
  CatalogList,
  CatalogWrapper,
  ResetSearchButton,
  SearchButton,
  SearchForm,
} from '../catalog/Catalog.styled';
import { CarBrandSelect } from '../../components/carBrandSelect/CarBrandSelect';
import { RentPriceSelect } from '../../components/rentPriceSelect/RentPriceSelect';
import { CarMileageInputs } from '../../components/carMileageSelect/CarMileageSelect';
import { useForm } from 'react-hook-form';
// import { filterCarsThunk } from '../../redux/filter/operations';
import { toast } from 'react-toastify';
import { setFilterFavorites } from '../../redux/favorites/favoritesSlice';
import { useNavigate } from 'react-router-dom';

export const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  const filteredFavorites = useSelector(selectFilteredFavorites);
  const carBrandSelectRef = useRef();

  const [rentalPrice, setRentalPrice] = useState(null);
  const [mileageRange, setMileageRange] = useState({ min: null, max: null });

  const { handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = data => {
    const filters = {
      make: data.carBrand?.label || '',
      rentalPrice: rentalPrice?.value || '',
      mileage: {
        min: mileageRange.from
          ? parseInt(mileageRange.from.replace(/,/g, ''), 10)
          : '',
        max: mileageRange.to
          ? parseInt(mileageRange.to.replace(/,/g, ''), 10)
          : '',
      },
    };

    if (filters.mileage.min === '' && filters.mileage.max === '') {
      filters.mileage = '';
    }

    if (Object.values(filters).some(value => value !== '')) {
      dispatch(setFilterFavorites(filters));
    } else {
      toast.info('Fill in at least one field!');
    }
  };

  const handleResetParameters = () => {
    window.location.reload();
    navigate('/favorites');
  };

  return (
    <CatalogWrapper>
      <SearchForm action="" onSubmit={handleSubmit(submit)}>
        <CarBrandSelect
          id="carBrand"
          label="Car brand"
          onChange={selectedOption => setValue('carBrand', selectedOption)}
          ref={carBrandSelectRef}
        />
        <RentPriceSelect
          id="rentPrice"
          label="Price/ 1 hour"
          onChange={selectedOption => setRentalPrice(selectedOption)}
        />
        <CarMileageInputs
          id="carMileage"
          label="Car mileage"
          onChange={mileage => setMileageRange(mileage)}
        />

        <SearchButton type="submit">Search</SearchButton>
        {filteredFavorites?.length ? (
          <ResetSearchButton type="button" onClick={handleResetParameters}>
            Reset search
          </ResetSearchButton>
        ) : null}
      </SearchForm>

      <CatalogList>
        {filteredFavorites?.length ? (
          filteredFavorites?.map((favoriteCar, index) => {
            return <FavoriteCar key={index} favoriteCar={favoriteCar} />;
          })
        ) : favorites?.length ? (
          favorites?.map((favoriteCar, index) => {
            return <FavoriteCar key={index} favoriteCar={favoriteCar} />;
          })
        ) : (
          <h3>
            There are no favorites cars yet😭 Tap on the "heart" symbol to add
            favorites cars to list!
          </h3>
        )}
      </CatalogList>
    </CatalogWrapper>
  );
};
