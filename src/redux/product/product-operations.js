import { createAsyncThunk } from '@reduxjs/toolkit';
import { productSearch } from '../../shared/api/product-api';

export const productOperation = createAsyncThunk(
  'product-search',
  async (data, { rejectWithValue, getState }) => {
    const value = getState();
    console.log(value);
    const accToken = value.auth.accessToken;
    const objData = {
      product: data,
      token: accToken,
    };
    try {
      const result = await productSearch(objData);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
