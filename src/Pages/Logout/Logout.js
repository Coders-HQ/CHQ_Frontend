import React, { useEffect } from "react";
import { logout } from "../../Services/auth.service";
import { BrowserRouter as Redirect } from "react-router-dom";
const Logout = () => {
  logout();
  window.location.reload();
};

export default Logout;
