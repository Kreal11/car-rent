import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCatalog, selectIsLoading } from '../../redux/catalog/selectors';
import { OneCar } from '../../components/oneCar/OneCar';
import { fetchCarsThunk } from '../../redux/catalog/operations';
import {
  CatalogList,
  CatalogWrapper,
  LoadMoreButton,
  LoaderWrapper,
  SearchButton,
  SearchForm,
} from './Catalog.styled';
import { CarBrandSelect } from '../../components/carBrandSelect/CarBrandSelect';
import { RentPriceSelect } from '../../components/rentPriceSelect/RentPriceSelect';
import { CarMileageInputs } from '../../components/carMileageSelect/CarMileageSelect';
import { useForm } from 'react-hook-form';
import {
  selectFilterCars,
  selectIsFiltering,
} from '../../redux/filter/selectors';
import { filterCarsThunk } from '../../redux/filter/operations';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

export const Catalog = () => {
  const catalog = useSelector(selectCatalog);
  const filter = useSelector(selectFilterCars);
  const isLoading = useSelector(selectIsLoading);
  const isFiltering = useSelector(selectIsFiltering);

  const [page, setPage] = useState(1);
  const [rentalPrice, setRentalPrice] = useState(null);
  const [mileageRange, setMileageRange] = useState({ min: null, max: null });

  const carBrandSelectRef = useRef();
  const { handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk({ page: page, limit: 12 }));
  }, [dispatch, page]);

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
      dispatch(filterCarsThunk(filters));
    } else {
      toast.info('Fill in at least one field!');
    }
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  // const handleResetParameters = () => {
  //   window.location.reload();
  // };

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
      </SearchForm>

      {/* {filter?.length ? (
        <button type="button" onClick={handleResetParameters}>
          Reset search parameters
        </button>
      ) : null} */}
      {(isLoading || isFiltering) && (
        <LoaderWrapper>
          <ClipLoader color="#3470ff" />
        </LoaderWrapper>
      )}
      <CatalogList>
        {filter.length
          ? filter?.map(filteredCar => {
              return <OneCar key={filteredCar.id} car={filteredCar} />;
            })
          : catalog?.map(car => {
              return <OneCar key={car.id} car={car} />;
            })}
      </CatalogList>

      {page < 3 && !filter.length && !isLoading && (
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
