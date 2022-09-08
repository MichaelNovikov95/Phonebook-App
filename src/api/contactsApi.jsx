import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const Api = {
  fetchContacts: async () => {
    const { data } = await axios.get(`${BASE_URL}/contacts`);
    return data;
  },

  deleteContacts: async contactId => {
    await axios.delete(`${BASE_URL}/contacts/${contactId}`);
  },

  addContacts: async newContact => {
    const { data } = await axios.post(`${BASE_URL}/contacts/`, newContact);

    return data;
  },
};
