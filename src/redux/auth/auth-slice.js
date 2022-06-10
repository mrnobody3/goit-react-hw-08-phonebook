import { createSlice } from '@reduxjs/toolkit';

import {
  signupUser,
  loginUser,
  currentUser,
  logoutUser,
} from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signupUser.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [signupUser.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      isLogin: true,
      ...payload,
    }),
    [signupUser.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),

    [loginUser.pending]: (store, _) => {
      store.loading = true;
      store.error = null;
    },
    [loginUser.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.isLogin = true;
      store.token = payload.token;
      store.user = payload.user;
    },
    [loginUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [currentUser.pending]: (store, _) => {
      store.loading = true;
      store.error = null;
    },
    [currentUser.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.isLogin = true;
      store.user = payload;
    },
    [currentUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.isLogin = false;
      store.error = payload;
      store.token = '';
    },

    [logoutUser.pending]: (store, _) => {
      store.loading = true;
      store.error = null;
    },
    [logoutUser.fulfilled]: store => {
      store.loading = false;
      store.isLogin = false;
      store.user = {};
      store.token = '';
    },
    [logoutUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default authSlice.reducer;
