import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favoritesCars',
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      console.log(payload);
      if (!state.favorites.some(favorite => favorite.id === payload.id)) {
        state.favorites?.push(payload);
      }
    },

    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        favorite => favorite.id !== payload.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
