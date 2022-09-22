import { createSlice } from '@reduxjs/toolkit';
import { productOperation } from './product-operations';

const initialState = {
  items: [],
  // id: '',
  // categories: [],
  // weight: null,
  // title: {},
  // calories: null,
  // groupBloodNotAllowed: [],
  // __v: null,
  // isLoading: false,
  // error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [productOperation.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [productOperation.fulfilled]: (state, { payload }) => {
      state.items = [...payload];
      // return payload;
    },
    [productOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default productSlice.reducer;
