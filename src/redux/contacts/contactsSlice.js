import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContacts,
  addContacts,
} from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '', isLoading: false, error: null },

  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [fetchContacts.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },

    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },

    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContacts.pending]: (state, _) => {
      state.isLoading = true;
    },

    [addContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = [action.payload, ...state.items];
    },

    [addContacts.rejected]: (state, _) => {
      state.isLoading = false;
    },

    [deleteContacts.pending]: (state, _) => {
      state.isLoading = true;
    },

    [deleteContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },

    [deleteContacts.rejected]: (state, _) => {
      state.isLoading = false;
    },
  },
});

export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
