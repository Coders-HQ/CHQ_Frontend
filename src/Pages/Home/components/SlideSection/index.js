import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { SlideContainer, SlideWrapper } from "./SlideElements";
import "./styles.css";
import InfoSection from "../InfoSection";
import { globalHackathons, openSource, scholarShip } from "./Data";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slideSection = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={5000}
      id="about"
    >
      <div>
        <InfoSection {...globalHackathons} />
      </div>
      <div>
        <InfoSection {...openSource} />
      </div>
      <div>
        <InfoSection {...scholarShip} />
      </div>
    </AutoplaySlider>
  );
};

export default slideSection;
