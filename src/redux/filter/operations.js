import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../catalog/operations';
import { toast } from 'react-toastify';

export const filterCarsThunk = createAsyncThunk(
  'fetchOneCar',
  async (filters, thunkAPI) => {
    try {
      const { data } = await instance.get('adverts');

      //   console.log(filters);
      //   console.log(data);
      const filteredData = data.filter(car => {
        const makeMatch = !filters.make || car.make === filters.make;
        const priceMatch =
          !filters.rentalPrice ||
          Number(car.rentalPrice.replace(/\D/g, '')) < filters.rentalPrice;

        return makeMatch && priceMatch;
      });

      if (!filteredData.length) {
        toast.warning(
          'It seems that no such machines were found for your request😭 Try to apply other search parameters!'
        );
      }

      return filteredData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
