import axios from "axios";

const API_URL = "https://coders-hq.herokuapp.com/auth/";

// Checks if the User is authenticated or not
const isAuth = () => {
  if (
    localStorage.getItem("accessToken") !== null &&
    localStorage.getItem("userData") !== null
  ) {
    return true; // Do this only if use is authenticated
  } else {
    return false; // Do this if user is not authenticated
  }
};

// Adds user data to database
const register = (username, email, password1, password2) => {
  return axios
    .post(API_URL + "register/", {
      username,
      password1,
      password2,
      email,
    })
    .then(function (response) {
      console.log(response);
      return response;
    });
};

// Adds accessToken & userData to localStorage
const login = (username, password) => {
  return axios
    .post(API_URL + "login/", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.key) {
        console.log(response);
        localStorage.setItem("accessToken", response.data.key);
        const config = {
          method: "get",
          url: API_URL + "user/",
          headers: {
            Authorization: "Token " + response.data.key,
          },
        };

        axios(config).then((response2) => {
          console.log(response2);
          localStorage.setItem("userData", JSON.stringify(response2.data));
        });
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("userData");
  localStorage.removeItem("accessToken");
  //window.location.reload();
};

const getLocalToken = () => {
  return localStorage.getItem("accessToken");
};

// Gets username from localstorage
const getUsername = () => {
  if (localStorage.getItem("userData") !== null) {
    return JSON.parse(localStorage.getItem("userData")).username;
  } else {
    return "";
  }
};

const getCurrentUserData = () => {
  const token = localStorage.getItem("accessToken");
  if (token !== null) {
    const config = {
      method: "get",
      url: API_URL + "user/",
      headers: {
        Authorization: "Token " + token,
      },
    };

    return axios(config).then(function (response) {
      localStorage.setItem("userData", JSON.stringify(response.data));
      return response.data;
    });
  }
};

export {
  isAuth,
  register,
  login,
  logout,
  getLocalToken,
  getCurrentUserData,
  getUsername,
};
