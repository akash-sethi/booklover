import { combineReducers } from "redux";
import user from "./reducers/user";
import books from "./reducers/books";
import {USER_LOGGED_OUT} from "./types";

const appReducer = combineReducers({
  user,
  books
});

export default (state, action) => {
  if (action.type === USER_LOGGED_OUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

