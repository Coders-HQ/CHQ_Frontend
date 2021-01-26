import React, { useState } from "react";
import Drawer from "./Drawer/Drawer";
import Header from "./Header/Header";
import { Switch, Route } from "react-router-dom";

import Home from "./Sections/Home/Home";
import Explore from "./Sections/Explore/Explore";
import Profile from "./Sections/Profile/Profile";
import Chat from "./Sections/Chat/Chat";
import Settings from "./Sections/Settings/Settings";
import NotFound from "../NotFound/NotFound";

const Dashboard = ({ isAuthenticated, themePreference, setTheme }) => {
  // This gets us the User Data assigned into a state

  const [userData] = useState(JSON.parse(localStorage.getItem("userData")));

  const [darkMode] = useState(themePreference === "dark");

  return (
    <div
      className={"dashboard-wrapper " + (darkMode ? "graydark" : "graylight")}
    >
      <div
        className={"dashboard-main " + (darkMode ? "graydark" : "graylight")}
      >
        <Switch>
          <Route exact path="/u">
            <Header
              userData={userData}
              isAuthenticated={isAuthenticated}
              darkMode={darkMode}
            />
            <Drawer
              userData={userData}
              isAuthenticated={isAuthenticated}
              darkMode={darkMode}
              setTheme={setTheme}
            />
            <Home darkMode={darkMode} />
          </Route>
          <Route exact path="/u/profile/:username">
            <Header
              userData={userData}
              isAuthenticated={isAuthenticated}
              darkMode={darkMode}
            />
            <Drawer
              userData={userData}
              isAuthenticated={isAuthenticated}
              darkMode={darkMode}
              setTheme={setTheme}
            />
            <Profile darkMode={darkMode} />
          </Route>
          <Route exact path="/u/explore">
            <Header
              userData={userData}
              isAuthenticated={isAuthenticated}
              darkMode={darkMode}
            />
            <Drawer
              userData={userData}
              isAuthenticated={isAuthenticated}
              darkMode={darkMode}
              setTheme={setTheme}
            />
            <Explore darkMode={darkMode} />
          </Route>
          <Route exact path="/u/settings">
            <Header
              userData={userData}
              isAuthenticated={isAuthenticated}
              darkMode={darkMode}
            />
            <Drawer
              userData={userData}
              isAuthenticated={isAuthenticated}
              darkMode={darkMode}
              setTheme={setTheme}
            />
            <Settings darkMode={darkMode} setTheme={setTheme} />
          </Route>
          <Route exact path="/u/messages">
            <Header
              userData={userData}
              isAuthenticated={isAuthenticated}
              darkMode={darkMode}
            />
            <Drawer
              userData={userData}
              isAuthenticated={isAuthenticated}
              darkMode={darkMode}
              setTheme={setTheme}
            />
            <Chat darkMode={darkMode} />
          </Route>
          <Route>
            <NotFound darkMode={darkMode} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
