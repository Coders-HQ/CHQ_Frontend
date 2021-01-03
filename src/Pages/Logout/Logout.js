import React, { useEffect } from "react";
import { logout, isAuth } from "../../Services/auth.service";
const Logout = (props) => {
  isAuth ? logout() : console.log("");
  props.history.push("/");
};

export default Logout;
