import app from "./base";

export default {
  user: {
    login: credentials =>
      app
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password),
    signup: credentials =>
      app
        .auth()
        .createUserWithEmailAndPassword(credentials.email, credentials.password)
  }
};
