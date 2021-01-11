import React from "react";
import Background from "./Background";
import Overlay from "./Overlay";
import "../../Styles/notfound.scss";

const NotFound = () => {
  return (
    <div className="404-wrapper">
      <Background />
      <Overlay />
      <div className="box">
        <div className="box__ghost">
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>

          <div className="box__ghost-container">
            <div className="box__ghost-eyes">
              <div className="box__eye-left"></div>
              <div className="box__eye-right"></div>
            </div>
            <div className="box__ghost-bottom">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="box__ghost-shadow"></div>
        </div>

        <div className="box__description">
          <div className="box__description-container">
            <div className="box__description-title">Whoops!</div>
            <div className="box__description-text">Page not found</div>
          </div>

          <a href="/" className="box__button">
            Return to Home Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
