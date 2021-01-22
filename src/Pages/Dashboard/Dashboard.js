import React, { useState } from "react";
import Drawer from "./Drawer/Drawer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Sections/Home/Home";
import Explore from "./Sections/Explore/Explore";
import Profile from "./Sections/Profile/Profile";
import Settings from "./Sections/Settings/Settings";
import NotFound from "../NotFound/NotFound";

const Dashboard = ({ isAuthenticated }) => {
  // This gets us the User Data assigned into a state

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  const [drawerStatus, setDrawerStatus] = useState(true);

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-main">
        <Switch>
          <Route exact path="/u">
            <Drawer
              userData={userData}
              status={drawerStatus}
              setDrawerStatus={setDrawerStatus}
              isAuthenticated={isAuthenticated}
            />
            <Home />
          </Route>
          <Route exact path="/u/profile/:username">
            <Drawer
              userData={userData}
              status={drawerStatus}
              setDrawerStatus={setDrawerStatus}
              isAuthenticated={isAuthenticated}
            />
            <Profile />
          </Route>
          <Route exact path="/u/explore">
            <Drawer
              userData={userData}
              status={drawerStatus}
              setDrawerStatus={setDrawerStatus}
              isAuthenticated={isAuthenticated}
            />
            <Explore />
          </Route>
          <Route exact path="/u/settings">
            <Drawer
              userData={userData}
              status={drawerStatus}
              setDrawerStatus={setDrawerStatus}
              isAuthenticated={isAuthenticated}
            />
            <Settings />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
