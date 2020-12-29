import Nav from "../../components/Navbar/Nav";
import Info from "./Info";
import Overlay from "./Overlay";
import backgroundVideo from "../../components/video/vid1.mp4";
import React from "react";

const Home = () => (
  <section className="main" id="home">
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
      <source src={backgroundVideo} type="video/mp4" />
    </video>
    <Overlay />
    <Nav />
    <Info />
  </section>
);

/* const styles = css`
  width: 100%;
  height: 100vh;
`; */

export default Home;
