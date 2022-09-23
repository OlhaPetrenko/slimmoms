import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  dayProductPost,
  dayProductDelete,
  dayProductInfo,
} from '../../shared/api/day-api';

export const dayProductPostOperation = createAsyncThunk(
  'day/post',
  async (data, { rejectWithValue }) => {
    try {
      const result = await dayProductPost(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const dayProductDeleteOperation = createAsyncThunk(
//   'day/delete',
//   async (data, { rejectWithValue }) => {
//     console.log(data);
//     try {
//       const result = await dayProductDelete(data);
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
export const dayProductDeleteOperation = createAsyncThunk(
  'day/delete',
  async (data, { rejectWithValue, getState }) => {
    const value = getState();
    const accessToken = value.auth.accessToken;
    console.log(data);
    try {
      const result = await dayProductDelete(data, accessToken);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const dayProductInfoOperation = createAsyncThunk(
  'day/info',
  async (data, { rejectWithValue }) => {
    try {
      const result = await dayProductInfo(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
