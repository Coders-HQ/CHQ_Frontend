import axios from "axios";

const API_URL = "https://coders-hq.herokuapp.com/auth/";

const register = (username, email, password1, password2) => {
  return axios
    .post(API_URL + "register/", {
      username,
      password1,
      password2,
      email,
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login/", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.key) {
        localStorage.setItem("accessToken", response.data.key);
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getLocalToken = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getLocalToken,
};
