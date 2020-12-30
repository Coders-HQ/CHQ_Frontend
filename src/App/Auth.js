import React from "react";

export const Auth = () => {
  const token = localStorage.getItem("token");
  if (token != null) {
    return true;
    console.log("Token Exists");
  } else {
    console.log("Token DN Exists");
    return false;
  }
};
