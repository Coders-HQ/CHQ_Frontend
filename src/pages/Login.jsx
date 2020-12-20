import { jsx, css } from "@emotion/core";
import React, { Component } from "react";

class Login extends Component {
  render() {
    return <h1 css={styles}>Login Page</h1>;
  }
}

const styles = css`
  h1 {
    font-size: 64px;
  }
`;

export default Login;
