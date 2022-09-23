import { createAsyncThunk } from '@reduxjs/toolkit';

import { registration, login, logout, refresh } from 'shared/api/auth-api';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await registration(data);
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/logIn',
  async (data, { rejectWithValue }) => {
    try {
      const result = await login(data);
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const result = await logout();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const value = getState();

    const refreshToken = value.auth.refreshToken;
    const sid = value.auth.sid;
    const data = { refreshToken, seasonid: { sid } };
    // console.log(data);
    if (!sid) {
      return rejectWithValue(`token is invalid`);
    }
    try {
      const result = await refresh(data);

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
