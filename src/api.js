import axios from 'axios';
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
  },
  books: {
    fetchAll: () => axios.get("/api/books").then(res => res.data.books),
    create: book =>
        axios.post("/api/books", { book }).then(res => res.data.book)
  }
};
