import axios from "axios";
import Swal from "sweetalert2";

export const authHeader = () =>
  new Promise((resolve, reject) => {
    const accessToken = localStorage.getItem("accessToken") || 0;
    const userData = localStorage.getItem("userData");
    const API_URL = "https://coders-hq.herokuapp.com/auth/";
    const config = {
      method: "get",
      url: API_URL + "user/",
      headers: {
        Authorization: "Token " + accessToken,
      },
    };

    return axios(config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

export default authHeader;
