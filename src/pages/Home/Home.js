import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import {
  globalHackathons,
  homeObjTwo,
  homeObjThree,
} from "./components/InfoSection/Data";
import Services from "./components/Services";
import FaqSection from "./components/FaqSection/faqSection";
import SlideSection from "./components/SlideSection";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <SlideSection />
      <Services />
      <FaqSection />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}

export default Home;
