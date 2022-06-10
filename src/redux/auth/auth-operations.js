import { createAsyncThunk } from '@reduxjs/toolkit';

import * as API from 'shared/services/authApi';

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const user = await API.signup(data);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const user = await API.login(data);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const { token } = auth;
      const data = await API.current(token);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const user = await API.logout();
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
