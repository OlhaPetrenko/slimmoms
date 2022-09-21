import { createAsyncThunk } from '@reduxjs/toolkit';
import { productSearch } from '../../shared/api/product-api';

export const productOperation = createAsyncThunk(
  'product-search',
  async (data, { rejectWithValue }) => {
    try {
      const result = await productSearch(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
