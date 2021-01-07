import axios from "axios";

const authHeader = () => {
  const accessToken = localStorage.getItem("accessToken");
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
    .then(function (response) {
      if (response.status !== 401 || response.status !== 400) {
        return true;
      } else return false;
    })
    .catch(function (error) {
      if (error.response.status === 200) {
        return true;
      } else return false;
    });
};

export default authHeader;
