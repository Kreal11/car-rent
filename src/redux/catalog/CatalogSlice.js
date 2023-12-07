const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const { fetchCarsThunk, fetchOneCarThunk } = require('./operations');

const initialState = {
  catalog: [],
  currentId: null,
  isLiked: false,
  isLoading: false,
  error: null,
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
        state.catalog = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchOneCarThunk.fulfilled, (state, { payload }) => {
        const chosenCarIndex = state.catalog.findIndex(
          car => car.id === payload.id
        );
        state.catalog[chosenCarIndex] = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(fetchCarsThunk.pending, fetchOneCarThunk.pending),
        (state, { payload }) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchCarsThunk.rejected, fetchOneCarThunk.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { currentId } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
