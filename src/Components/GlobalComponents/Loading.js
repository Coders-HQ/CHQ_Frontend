import React from "react";
import { css } from "@emotion/core";
import RiseLoader from "react-spinners/RiseLoader";
import Fade from "@material-ui/core/Fade";

const Loading = ({ loading }) => {
  // Can be a string as well. Need to ensure each key-value pair ends with ;

  const override = css`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 51%;
    transform: translate(-50%, -50%);
  `;

  return (
    <Fade in={loading}>
      <div className="loading">
        <RiseLoader
          css={override}
          size={50}
          color={"rgb(255,0,0)"}
          loading={loading}
        />
      </div>
    </Fade>
  );
};

export default Loading;
