import axios from "axios";

export default (username = null) => {
  if (username) {
    axios.defaults.headers.common.Authorization = `${username}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};
