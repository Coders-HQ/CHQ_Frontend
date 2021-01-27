import React from "react";
import video1 from "../../../Videos/vid1.mp4";
import video2 from "../../../Videos/vid2.mp4";
import video3 from "../../../Videos/vid3.mp4";

const videos = [video1, video2, video3];
const video = videos[Math.floor(Math.random() * videos.length)];

const Background = () => {
  return (
    <video
      autoPlay
      loop
      muted
      style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1",
      }}
    >
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default Background;
