import { createSlice } from '@reduxjs/toolkit';
import {
  dayProductPostOperation,
  dayProductDeleteOperation,
  dayProductInfoOperation,
} from './day-operations';

const initialState = {
  eatenProduct: {},
  day: {},
  daySummary: {},
  isLoading: false,
  error: null,
};

const daySlice = createSlice({
  name: 'day',
  initialState,
  extraReducers: {
    [dayProductPostOperation.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [dayProductPostOperation.fulfilled]: (state, { payload }) => {
      return { ...payload, isLoading: false, error: null };
    },
    [dayProductPostOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [dayProductDeleteOperation.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },

    // Допрацювати
    [dayProductDeleteOperation.fulfilled]: (state, { payload }) => {
      state.daySummary = payload;
    },
    [dayProductDeleteOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [dayProductInfoOperation.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [dayProductInfoOperation.fulfilled]: (state, { payload }) => {
      state.day = payload;
      state.isLoading = false;
    },
    [dayProductInfoOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default daySlice.reducer;
