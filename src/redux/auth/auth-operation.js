import { createAsyncThunk } from '@reduxjs/toolkit';

import { registration, login, logout, refresh } from 'shared/api/auth-api';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await registration(data);
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
    const sid = value.auth.user.id;

    if (!sid) {
      return rejectWithValue(`token is invalid`);
    }
    try {
      const result = await refresh(sid);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
