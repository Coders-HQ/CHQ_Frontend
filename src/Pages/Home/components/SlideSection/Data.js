import GlobalHackathon from "./illustrations/GlobalHackathon";
import Contribute from "./illustrations/Contribute";
import Scholarships from "./illustrations/Scholarships";

export const globalHackathons = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Hackathons",
  headline: "1",
  description: "Global Virtual Hackathon",
  buttonLabel: "Learn More",
  imgStart: false,
  Img: <GlobalHackathon />,
  alt: "Null",
  dark: true,
  primary: true,
  darkText: true,
  Index: 0,
};

export const openSource = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Open Source",
  headline: "",
  description: "You can contribute in building our community of coders",
  buttonLabel: "Learn More",
  imgStart: true,
  alt: "Coding a robot",
  dark: false,
  primary: false,
  darkText: true,
  Img: <Contribute />,
};

export const scholarShip = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Scholarships",
  headline: "100",
  description: "Scholarships for UAE nationals for coding bootcamps.",
  buttonLabel: "Learn More",
  imgStart: false,
  alt: "Coding a robot",
  dark: false,
  primary: false,
  darkText: true,
  Img: <Scholarships />,
};
