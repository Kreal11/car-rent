import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCatalog } from '../../redux/catalog/selectors';
import { OneCar } from '../../components/oneCar/OneCar';
import { fetchCarsThunk } from '../../redux/catalog/operations';
import { CatalogList, CatalogWrapper } from './Catalog.styled';

export const Catalog = () => {
  const catalog = useSelector(selectCatalog);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return (
    <CatalogWrapper>
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button>Search</button>
      </form>

      <CatalogList>
        {catalog?.map(car => {
          return <OneCar key={car.id} {...car} />;
        })}
      </CatalogList>
    </CatalogWrapper>
  );
};
