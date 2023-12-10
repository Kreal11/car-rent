const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const { fetchCarsThunk } = require('./operations');

const initialState = {
  catalog: [],
  currentId: null,
  isLiked: false,
  isLoading: false,
  error: null,
  page: 1,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,

  reducers: {
    setCurrentId: (state, { payload }) => {
      state.currentId = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        const newCars = payload.filter(
          newCar =>
            !state.catalog.some(existingCar => existingCar.id === newCar.id)
        );

        state.catalog = [...state.catalog, ...newCars];
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(fetchCarsThunk.pending), (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(fetchCarsThunk.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { currentId } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
