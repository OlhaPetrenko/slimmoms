import { createSlice } from '@reduxjs/toolkit';
import { userInfoOperation } from './user-operations';

const initialState = {
  user: {},
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [userInfoOperation.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [userInfoOperation.fulfilled]: (state, { payload }) => {
      return { ...payload, isLoading: false, error: null };
    },
    [userInfoOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;
