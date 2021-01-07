import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import authHeader from "../../Services/auth-header";
console.log(authHeader());

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Container fixed>
        <h1>Test</h1>
        <a href="/">Return Home</a>
      </Container>
    </div>
  );
};

export default Dashboard;
