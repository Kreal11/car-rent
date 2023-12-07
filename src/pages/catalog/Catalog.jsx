import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCatalog, selectIsLoading } from '../../redux/catalog/selectors';
import { OneCar } from '../../components/oneCar/OneCar';
import { fetchCarsThunk } from '../../redux/catalog/operations';
import { CatalogList, CatalogWrapper } from './Catalog.styled';

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
      {page < 3 && (
        <button type="button" onClick={handleLoadMore} disabled={isLoading}>
          Load more
        </button>
      )}
    </CatalogWrapper>
  );
};
