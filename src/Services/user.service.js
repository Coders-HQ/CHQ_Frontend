import axios from "axios";
import authHeader from "./auth-header";

/**
 *
 * GET API Calls
 *
 **/

const API_URL = "https://coders-hq.herokuapp.com/";

const getProfile = (userName) => {
  // Get profile of user
  if (userName !== null) {
    const config = {
      method: "get",
      url: API_URL + "profiles/" + userName + "/",
    };

    return axios(config).then(function (response) {
      return response.data;
    });
  }
};

const getHackathons = () => {
  // Get all Hackathons
  return axios.get(API_URL + "hackathons");
};

const getSpecHackthon = ({ id }) => {
  // GET Specific Hackathons
  return axios.get(API_URL + "hackathon/" + id);
};

export { getProfile, getHackathons, getSpecHackthon };
