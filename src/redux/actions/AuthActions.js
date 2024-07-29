export const SET_EMAIL = "SET_EMAIL";
export const SET_AUTHENTICATED = "SET_AUTHENTICATED";

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setAuthenticated = (isAuthenticated) => ({
  type: SET_AUTHENTICATED,
  payload: isAuthenticated,
});
