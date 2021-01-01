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
        const config = {
          method: "get",
          url: API_URL + "user/",
          headers: {
            Authorization: "Token " + response.data.key,
          },
        };

        axios(config).then((response2) => {
          localStorage.setItem("userData", JSON.stringify(response2.data));
        });
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getLocalToken = () => {
  return localStorage.getItem("accessToken");
};

const getCurrentUserData = () => {
  const token = getLocalToken();
  if (token !== null) {
    const config = {
      method: "get",
      url: API_URL + "user/",
      headers: {
        Authorization: "Token " + token,
      },
    };

    return axios(config).then(function (response) {
      localStorage.setItem("userData", response.data);
      return response.data;
    });
  }
};

export default {
  register,
  login,
  logout,
  getLocalToken,
  getCurrentUserData,
};
