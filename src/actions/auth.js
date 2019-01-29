import api from "../api";
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(res => {
    const { email, uid } = { ...res.user };
    localStorage.auth = JSON.stringify({ email, uid });
    setAuthorizationHeader(email);
    dispatch(userLoggedIn({ email, uid }));
  });

export const logout = () => dispatch => {
  localStorage.removeItem("auth");
  setAuthorizationHeader();
  dispatch(userLoggedOut());
};
