import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, id, password) => {
  return axios.post(API_URL + "signup", {
    username,
    id,
    password,
  });
};

const login = (id, password) => {
  return axios
    .post(API_URL + "signin", {
      id,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};