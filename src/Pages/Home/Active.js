import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import Info from "./Sections/Info";
import Incentive from "./Sections/Incentive";
import Cause from "./Sections/Cause";
import Groups from "./Sections/Groups";

const Active = () => {
  return (
    <div>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/w/home">
          <Info />
        </Route>
        <Route path="/w/incentive">
          <Incentive />
        </Route>
        <Route path="/w/cause">
          <Cause />
        </Route>
        <Route path="/w/groups">
          <Groups />
        </Route>
      </AnimatedSwitch>
    </div>
  );
};

export default Active;
