import React, { useState } from "react";
import Drawer from "./Drawer/Drawer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Sections/Home/Home";
import Explore from "./Sections/Explore/Explore";
import Profile from "./Sections/Profile/Profile";
import Settings from "./Sections/Settings/Settings";
import Chat from "./Sections/Chat/Chat";
import NotFound from "../NotFound/NotFound";
import Header from "./Drawer/Header";

const Dashboard = () => {
  // This gets us the User Data assigned into a state

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-main">
        <Switch>
          <Route exact path="/u">
            <Header />
            <Drawer userData={userData} drawerStatus={true} />
            <Home />
          </Route>
          <Route exact path="/u/profile/:username">
            <Header />
            <Drawer userData={userData} drawerStatus={true} />
            <Profile />
          </Route>
          <Route exact path="/u/explore">
            <Header />
            <Drawer userData={userData} drawerStatus={true} />
            <Explore />
          </Route>
          <Route exact path="/u/settings">
            <Header />
            <Drawer userData={userData} drawerStatus={true} />
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
