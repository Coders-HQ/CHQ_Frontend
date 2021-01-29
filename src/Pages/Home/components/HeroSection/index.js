import React, { useState } from "react";
import Overlay from "./Overlay";
import { Link } from "react-router-dom";
import {
  VideoBg,
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";
import TextLoop from "react-text-loop"; // Used this package to create a text loop effect
import Video from "../../../../Videos/vid3.mp4";
import LightLogo from "./LightLogo";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <Overlay />
        <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <LightLogo />
        <HeroH1>
          <TextLoop
            className="red"
            children={[
              "Designing",
              "Creating",
              "Engineering",
              "Envisioning",
              "Planning",
              "Picturing",
              "Making",
            ]}
          ></TextLoop>{" "}
          the future using code.
        </HeroH1>
        <HeroP>
          As technology enhances, people lives enhance too. We aim to increase
          the number of people passionate about different technologies by
          connecting them in a single network.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started? {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
