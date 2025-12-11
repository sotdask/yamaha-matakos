import React from "react";
import { Hero, Header, Info, Explore, Showcase, Partners, Discover, ParallaxInfo, Reviews, Footer } from "../components";

const Home = () => {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Info/>
        <Explore/>
        <Showcase/>
        <Partners/>
        <Discover/> 
        <ParallaxInfo/> 
        <Reviews/>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
