import api from "../api";

import { userLoggedIn } from "./auth";

export const signup = credentials => dispatch =>
  api.user.signup(credentials).then(res => {
    const { email, uid } = { ...res.user };
    console.log({ email, uid });
    localStorage.auth = JSON.stringify({ email, uid });
    dispatch(userLoggedIn({ email, uid }));
  });
