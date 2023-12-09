import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCatalog, selectIsLoading } from '../../redux/catalog/selectors';
import { OneCar } from '../../components/oneCar/OneCar';
import { fetchCarsThunk } from '../../redux/catalog/operations';
import {
  CatalogList,
  CatalogWrapper,
  LoadMoreButton,
  SearchButton,
  SearchForm,
} from './Catalog.styled';
import { CarBrandSelect } from '../../components/carBrandSelect/CarBrandSelect';
import { RentPriceSelect } from '../../components/rentPriceSelect/RentPriceSelect';
import { CarMileageInputs } from '../../components/carMileageSelect/CarMileageSelect';

export const Catalog = () => {
  const catalog = useSelector(selectCatalog);
  const isLoading = useSelector(selectIsLoading);

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk({ page: page, limit: 12 }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <CatalogWrapper>
      <SearchForm action="">
        {/* <SearchInputContainer> */}
        <CarBrandSelect id="carBrand" label="Car brand" />
        {/* </SearchInputContainer> */}
        {/* <SearchInputContainer> */}
        <RentPriceSelect id="rentPrice" label="Price/ 1 hour" />
        {/* </SearchInputContainer> */}
        {/* <SearchInputContainer> */}
        <CarMileageInputs id="carMileage" label="Car mileage" />
        {/* </SearchInputContainer> */}

        <SearchButton>Search</SearchButton>
      </SearchForm>

      <CatalogList>
        {catalog?.map(car => {
          return <OneCar key={car.id} car={car} />;
        })}
      </CatalogList>
      {page < 3 && (
        <LoadMoreButton
          type="button"
          onClick={handleLoadMore}
          disabled={isLoading}
        >
          Load more
        </LoadMoreButton>
      )}
    </CatalogWrapper>
  );
};
