import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://654a30b8e182221f8d52b0a2.mockapi.io/api/v2',
});

export const fetchCarsThunk = createAsyncThunk(
  'fetchAllCars',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await instance.get('adverts', {
        params: {
          page: page,
          limit: limit,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
