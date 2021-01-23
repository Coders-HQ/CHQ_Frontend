import axios from "axios";
import authHeader from "./auth-header";

/**
 *
 * GET API Calls
 *
 **/

const getProfile = (userName) => {
  // Get profile data of a user via Username
  if (userName !== null) {
    const config = {
      method: "get",
      url: process.env.REACT_APP_API_DOMAIN + "/profiles/" + userName + "/",
    };

    return axios(config).then(function (response) {
      return response.data;
    });
  }
};

const getHackathons = () => {
  // GET all Hackathons
  return axios.get(process.env.REACT_APP_API_DOMAIN + "/hackathons/");
};

const getSpecificHackthon = ({ id }) => {
  // GET Specific Hackathons
  return axios.get(process.env.REACT_APP_API_DOMAIN + "/hackathon/" + id);
};

export { getProfile, getHackathons, getSpecificHackthon };
