import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Info from "./Sections/Info";
import Incentive from "./Sections/Incentive";
import Cause from "./Sections/Cause";
import Groups from "./Sections/Groups";

const Active = () => {
  return (
    <div>
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
    </div>
  );
};

export default Active;
