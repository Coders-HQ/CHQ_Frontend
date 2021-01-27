import React from "react";
import ImageSrc from "../../../Images/Logo/png/light_text.png";

const Logo = ({ width }) => {
  return (
    <div className="Logo">
      <img src={ImageSrc} alt="Coders HQ Logo" width={width} />
    </div>
  );
};
export default Logo;
