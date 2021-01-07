/** @jsxImportSource @emotion/core */

import React, { useEffect, useState } from "react";
import Link from "./Link";
import Button from "../../../Components/GlobalComponents/Button";
import Github from "./Github";
import { logout, isAuth } from "../../../Services/auth.service";

const LinksContainer = ({ hidden }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuth()) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    console.log("hi from useeffect");
  }, [isAuthenticated]);

  return (
    <div className={(hidden ? "hidden" : "") + " linksContainer"}>
      <div className="mid">
        <Link name="HOME" linkTo="/" />
        <Link name="INCENTIVE" linkTo="/incentive" />
        <Link name="OUR CAUSE" linkTo="/cause" />
        <Link name="OUR GROUPS" linkTo="/groups" />
      </div>
      {
        // If the user is authenticated it will show the register and login otherwise only logout button
        isAuthenticated ? (
          <div className="btn-group">
            <Button className="left-btn" text="DASHBOARD" linkTo="/dashboard" />
            <Button className="right-btn" text="LOGOUT" linkTo="/logout" />
          </div>
        ) : (
          <div className="btn-group">
            <Button
              className="left-btn"
              text="JOIN NOW"
              linkTo="/register"
              className="reg-btn"
            />
            <Button
              className="right-btn"
              text="LOGIN"
              linkTo="/login"
              className="log-btn"
            />
          </div>
        )

        // If the user is authenticated it will show the register and login otherwise only logout button
      }
      <Github />
    </div>
  );
};

export default LinksContainer;
