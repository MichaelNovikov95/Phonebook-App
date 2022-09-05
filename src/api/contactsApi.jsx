import axios from 'axios';

const BASE_URL = 'https://630f4c5837925634188c20d4.mockapi.io/';

export const Api = {
  fetchContacts: async () => {
    const { data } = await axios.get(`${BASE_URL}contacts`);

    return data;
  },

  deleteContacts: async contactId => {
    const { data } = await axios.delete(`${BASE_URL}contacts/${contactId}`);

    return data;
  },

  addContacts: async newContact => {
    const { data } = await axios.post(`${BASE_URL}contacts/`, newContact);

    return data;
  },
};
