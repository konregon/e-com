import React from "react";
import styled from "styled-components";
import FeatureProduct from "./components/FeatureProduct";
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
  <FeatureProduct/>
  <Trusted/>
  <Services/>
  </>
  );
};


export default Home;
