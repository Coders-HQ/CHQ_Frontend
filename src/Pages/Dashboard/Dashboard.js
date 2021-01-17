import React, { useState } from "react";
import Drawer from "./Drawer/Drawer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Sections/Home/Home";
import Explore from "./Sections/Explore/Explore";
import Profile from "./Sections/Profile/Profile";
import Settings from "./Sections/Settings/Settings";
import Chat from "./Sections/Chat/Chat";

const Dashboard = () => {
  // This gets us the User Data assigned into a state

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  return (
    <div className="dashboard-wrapper">
      <Drawer userData={userData} drawerStatus={true} />
      <div className="dashboard-main">
        <Route path="/dashboard/home">
          <Home />
        </Route>
        <Route path="/dashboard/profile">
          <Profile />
        </Route>
        <Route path="/dashboard/explore">
          <Explore />
        </Route>
        <Route path="/dashboard/settings">
          <Settings />
        </Route>
        <Route path="/dashboard/chat">
          <Chat />
        </Route>
      </div>
    </div>
  );
};

export default Dashboard;
