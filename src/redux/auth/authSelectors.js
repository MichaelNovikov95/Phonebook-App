const isLoggedIn = state => state.auth.isLoggedIn;

const getToken = state => state.auth.token;

const getUserName = state => state.auth?.user?.name;

export const authSelectors = {
  isLoggedIn,
  getUserName,
  getToken,
};

export default authSelectors;
