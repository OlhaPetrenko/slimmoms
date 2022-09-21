import { createAsyncThunk } from '@reduxjs/toolkit';
import { userInfo } from '../../shared/api/user-api';

export const userInfoOperation = createAsyncThunk(
  'user/get',
  async (_, { rejectWithValue }) => {
    try {
      const result = await userInfo();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
