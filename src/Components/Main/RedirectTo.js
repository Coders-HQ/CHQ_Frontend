import React from "react";
import { BrowserRouter as Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../Features/userSlice";

const RedirectTo = () => {
  const user = useSelector(selectUser);

  return user ? <Redirect to="/" /> : "";
};

export default RedirectTo;
