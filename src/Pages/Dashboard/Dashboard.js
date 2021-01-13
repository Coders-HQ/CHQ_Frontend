import React, { useState } from "react";
import Drawer from "./Drawer/Drawer";
import Main from "./Main/Main";

const Dashboard = () => {
  // This gets us the User Data assigned into a state

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  return (
    <div className="dashboard-wrapper">
      <Main userData={userData} />
      <Drawer userData={userData} drawerStatus={true} />
    </div>
  );
};

export default Dashboard;
