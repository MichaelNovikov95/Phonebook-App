import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from 'api/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await Api.fetchContacts();
    return contacts;
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async contactId => {
    await Api.deleteContacts(contactId);
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async data => {
    const contacts = await Api.addContacts(data);
    return contacts;
  }
);
