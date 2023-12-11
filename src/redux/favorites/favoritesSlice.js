import { createSlice } from '@reduxjs/toolkit';

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
      console.log(state.filteredFavorites);
      // const filteredFavorites = state.favorites.filter(car => {
      //   const makeMatch = !payload.make || car.make === payload.make;
      //   const priceMatch =
      //     !payload.rentalPrice ||
      //     Number(car.rentalPrice.replace(/\D/g, '')) <= payload.rentalPrice;
      //   if (!payload.mileage.min && payload.mileage.max) {
      //     return makeMatch && priceMatch && car.mileage <= payload.mileage.max;
      //   }
      //   if (!payload.mileage.max && payload.mileage.min) {
      //     const mileageMatchFrom = car.mileage >= payload.mileage.min;
      //     return makeMatch && priceMatch && mileageMatchFrom;
      //   }

      //   const mileageMatch =
      //     payload.mileage === '' ||
      //     (car.mileage >= payload.mileage.min &&
      //       car.mileage <= payload.mileage.max);

      //   return makeMatch && priceMatch && mileageMatch;
      // });
      // console.log(filteredFavorites);
      // state.filteredFavorites = [];
      // state.filteredFavorites = [
      //   ...state.filteredFavorites,
      //   ...filteredFavorites,
      // ];
    },
  },
});

export const { addToFavorites, removeFromFavorites, setFilterFavorites } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
