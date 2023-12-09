import { createSlice } from '@reduxjs/toolkit';
import { filterCarsThunk } from './operations';

const initialState = {
  filter: [],
  isLoading: false,
  error: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  extraReducers: builder => {
    builder.addCase(filterCarsThunk.fulfilled, (state, { payload }) => {
      console.log(payload);
      //   if (state.filter.length) {
      //     state.filter = [];
      //   }
      state.filter = [];
      state.filter = payload;
      state.isLoading = false;
    });
  },
});

export const filterReducer = filterSlice.reducer;
