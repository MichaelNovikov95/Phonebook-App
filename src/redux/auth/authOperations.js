import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/signup', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch ({ message }) {
    alert(message);
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch ({ message }) {
    alert(message);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch ({ message }) {
    alert(message);
  }
});

export const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const prevSessionToken = state.auth.token;

    if (prevSessionToken === null) {
      console.log('Нет такого юзера');
      return thunkAPI.rejectWithValue();
    }

    token.set(prevSessionToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch ({ message }) {
      console.log(message);
    }
  }
);
