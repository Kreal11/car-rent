import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  favorites: [],
  filteredFavorites: [],
};

const favoritesSlice = createSlice({
  name: 'favoritesCars',
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      if (!state.favorites.some(favorite => favorite.id === payload.id)) {
        state.favorites?.push(payload);
      }
    },

    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        favorite => favorite.id !== payload.id
      );
    },

    setFilterFavorites: (state, { payload }) => {
      console.log(payload);
      const { make, rentalPrice, mileage } = payload;

      state.filteredFavorites = state.favorites.filter(car => {
        const makeMatch = !make || car.make === make;
        const priceMatch =
          !rentalPrice ||
          Number(car.rentalPrice.replace(/\D/g, '')) <= rentalPrice;
        const mileageMatch =
          !mileage ||
          (car.mileage >= mileage.min && car.mileage <= mileage.max);

        return makeMatch && priceMatch && mileageMatch;
      });
      if (!state.filteredFavorites.length) {
        toast.warning(
          'It seems that no such cars were found for your request😭 Try to apply other search parameters!'
        );
      } else {
        state.filteredFavorites.length === 1
          ? toast.success(`${state.filteredFavorites.length} car was found!`)
          : toast.success(`${state.filteredFavorites.length} cars were found!`);
      }
    },
  },
});

export const { addToFavorites, removeFromFavorites, setFilterFavorites } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
