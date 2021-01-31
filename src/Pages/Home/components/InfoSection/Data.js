import Contribute from "./illustrations/Contribute";
import GlobalHackathon from "./illustrations/GlobalHackathon";
import Person from "./illustrations/Person";
import { Link } from "react-router-dom";
import { Button } from "../ButtonElements";

export const globalHackathons = {
  id: "Incentive",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Hackathons",
  headline: "1 Global Virtual Hackathon",
  description: "",
  buttonLabel: "Learn More",
  imgStart: false,
  Img: <GlobalHackathon />,
  alt: "Null",
  dark: true,
  primary: true,
  darkText: false,
  Index: 0,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Open Source",
  headline: "You can contribute in building our community of coders",
  description:
    "Join our community of innovative coders and help with building and evolving it.",
  buttonLabel: "Learn More",
  imgStart: true,
  alt: "Coding a robot",
  dark: false,
  primary: false,
  darkText: true,
  Img: <Contribute />,
};

export const homeObjThree = {
  id: "signup",
  lightBg: false,
  lightText: true,
  lightTextDesc: false,
  topLine: "Join Coders HQ!",
  headline: "Creating an account is extremely easy",
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is register and you're ready to go..",
  buttonLabel: "Start Now",
  imgStart: false,
  Img: <Person />,
  alt: "Papers",
  dark: true,
  primary: false,
  darkText: false,
  Index: 2,
};
