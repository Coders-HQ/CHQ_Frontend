import React, { useEffect, useState } from "react";
import Loading from "../../../../Components/GlobalComponents/Loading";
import { getProfile, getUsername } from "../../../../Services/user.service";
import { BrowserRouter as Redirect } from "react-router-dom";

const Profile = ({ props }) => {
  const [userName, setUserName] = useState(
    window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1
    )
  );

  const [profileData, setUserData] = useState("");
  const [gotData, setGotData] = useState(false);
  const [localName, setLocalName] = useState(
    JSON.parse(localStorage.getItem("userData")).username
  );

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const onLoad = async () => {
    try {
      const result = await getProfile(userName);
      setGotData(true);
      return result;
    } catch (e) {
      setGotData(false);
      return null;
    }
  };

  const getData = async () => {
    setUserData(await onLoad());
    setLoading(false);
    console.log("Data Loaded");
  };

  const checkUsername = (userName) => {
    if (
      gotData !== false &&
      profileData !== undefined &&
      profileData !== null
    ) {
      if (userName === profileData.username) {
        return true;
      } else {
        return false;
      }
    }
  };
  return (
    <div>
      <h1>
        {checkUsername(userName) && !isLoading ? userName + "'s " : "Invalid "}
        Profile
      </h1>
      <h1>Mobile Score: {profileData.mobile_score}</h1>
      <h1>Front End: {profileData.front_end_score}</h1>
      <h1>Back End: {profileData.back_end_score}</h1>
      <div>
        <Loading loading={isLoading} />
      </div>
    </div>
  );
};

export default Profile;
