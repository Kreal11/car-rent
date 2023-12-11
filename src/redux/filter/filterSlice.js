import { createSlice } from '@reduxjs/toolkit';
import { filterCarsThunk } from './operations';

const initialState = {
  filter: [],
  isFiltering: false,
  error: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(filterCarsThunk.fulfilled, (state, { payload }) => {
        state.filter = [];
        state.filter = payload;
        state.isFiltering = false;
        state.error = null;
      })
      .addCase(filterCarsThunk.pending, (state, { payload }) => {
        state.isFiltering = true;
        state.error = null;
      })
      .addCase(filterCarsThunk.rejected, (state, { payload }) => {
        state.isFiltering = false;
        state.error = payload;
      });
  },
});

export const filterReducer = filterSlice.reducer;
