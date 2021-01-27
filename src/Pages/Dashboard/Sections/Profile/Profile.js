import React, { useEffect, useState } from "react";
import Loading from "../../../../Components/GlobalComponents/Loading";
import { getProfile } from "../../../../Services/user.service";

const Profile = ({ darkMode }) => {
  const [userName] = useState(
    window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1
    )
  );

  const [profileData, setUserData] = useState("");
  const [gotData, setGotData] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    try {
      setUserData(await onLoad());
      setLoading(false);
      console.log("Got Response");
    } catch (e) {
      setLoading(false);
      setUserData(null);
      console.log("Did not get Response");
    }
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
    <div
      className={"dashboard-section " + (darkMode ? "graydark" : "graylight")}
    >
      <h1>
        {checkUsername(userName) && !isLoading
          ? `${userName}'s Profile`
          : "User not found "}
      </h1>
      <h1>
        {checkUsername(userName) && !isLoading
          ? `Mobile Development: ${profileData.mobile_score}`
          : ""}
      </h1>
      <h1>
        {checkUsername(userName) && !isLoading
          ? `Front End Development: ${profileData.front_end_score}`
          : ""}
      </h1>
      <h1>
        {checkUsername(userName) && !isLoading
          ? `Back End Development: ${profileData.back_end_score}`
          : ""}
      </h1>
      <Loading loading={isLoading} />
    </div>
  );
};

export default Profile;
