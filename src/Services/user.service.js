import axios from "axios";
import authHeader from "./auth-header";

/**
 *
 * GET API Calls
 *
 **/

const API_URL = "https://coders-hq.herokuapp.com/";

const getProfile = ({ username }) => {
  // Get profile of user
  return axios.get(API_URL + "profiles/" + username);
};

const getHackathons = () => {
  // Get all Hackathons
  return axios.get(API_URL + "hackathons");
};

const getSpecHackthon = ({ id }) => {
  // GET Specific Hackathons
  return axios.get(API_URL + "hackathon/" + id);
};

export default {
  getProfile,
  getHackathons,
  getSpecHackthon,
};
