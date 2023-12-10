import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../catalog/operations';
import { toast } from 'react-toastify';

export const filterCarsThunk = createAsyncThunk(
  'fetchOneCar',
  async (filters, thunkAPI) => {
    try {
      const { data } = await instance.get('adverts');

      const filteredData = data.filter(car => {
        const makeMatch = !filters.make || car.make === filters.make;
        const priceMatch =
          !filters.rentalPrice ||
          Number(car.rentalPrice.replace(/\D/g, '')) < filters.rentalPrice;
        if (!filters.mileage.min && filters.mileage.max) {
          return makeMatch && priceMatch && car.mileage <= filters.mileage.max;
        }
        if (!filters.mileage.max && filters.mileage.min) {
          const mileageMatchFrom = car.mileage >= filters.mileage.min;
          return makeMatch && priceMatch && mileageMatchFrom;
        }

        const mileageMatch =
          filters.mileage === '' ||
          (car.mileage >= filters.mileage.min &&
            car.mileage <= filters.mileage.max);

        return makeMatch && priceMatch && mileageMatch;
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
