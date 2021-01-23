import axios from "axios";

export const authHeader = () =>
  new Promise((resolve, reject) => {
    const accessToken = localStorage.getItem("accessToken") || 0;
    const API_URL = process.env.REACT_APP_API_DOMAIN + `auth/`;
    const config = {
      method: "get",
      url: API_URL + "user/",
      headers: {
        Authorization: "Token " + accessToken,
      },
    };

    const auth = {
      username: "codershq",
      password: "codersHq0123",
    };

    return axios(config, auth)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

export default authHeader;
