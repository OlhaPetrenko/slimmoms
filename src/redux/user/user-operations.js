import { createAsyncThunk } from '@reduxjs/toolkit';
import { userInfo } from '../../shared/api/user-api';

export const userInfoOperation = createAsyncThunk(
  'user/get',
  async (_, { rejectWithValue, getState }) => {
    const value = getState();
    const data = value.auth.accessToken;

    if (!data) {
      return rejectWithValue(`token is invalid`);
    }

    try {
      const result = await userInfo(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
