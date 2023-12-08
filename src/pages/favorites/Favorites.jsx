import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import { FavoriteCar } from '../../components/favoriteCar/FavoriteCar';
import { CatalogList, CatalogWrapper } from '../catalog/Catalog.styled';

export const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <CatalogWrapper>
      <CatalogList>
        {favorites?.map(favoriteCar => {
          return (
            <FavoriteCar key={crypto.randomUUID()} favoriteCar={favoriteCar} />
          );
        })}
      </CatalogList>
    </CatalogWrapper>
  );
};
