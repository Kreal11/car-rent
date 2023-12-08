import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import { FavoriteCar } from '../../components/favoriteCar/FavoriteCar';

export const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div>
      <ul>
        {favorites?.map(favoriteCar => {
          return <FavoriteCar key={favoriteCar.id} favoriteCar={favoriteCar} />;
        })}
      </ul>
    </div>
  );
};
