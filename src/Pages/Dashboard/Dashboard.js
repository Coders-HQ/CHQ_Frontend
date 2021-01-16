import React, { useState } from "react";
import Drawer from "./Drawer/Drawer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Feed from "./Sections/Feed/Feed";
import Explore from "./Sections/Explore/Explore";
import Profile from "./Sections/Profile/Profile";
import Notifications from "./Sections/Notifications/Notifications";
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
        <Route path="/dashboard/feed">
          <Feed />
        </Route>
        <Route path="/dashboard/profile">
          <Profile />
        </Route>
        <Route path="/dashboard/explore">
          <Explore />
        </Route>
        <Route path="/dashboard/notifications">
          <Notifications />
        </Route>
        <Route path="/dashboard/chat">
          <Chat />
        </Route>
      </div>
    </div>
  );
};

export default Dashboard;
