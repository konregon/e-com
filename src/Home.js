import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name : "thapa Store",
  }

  return (
    <>
  <HeroSection
  myData={data}
  />
  <Trusted/>
  <Services/>
  </>
  );
};


export default Home;
