import React from "react";
import { Header, Footer, AboutInfo } from "../components";

const About = () => {
  return (
    <>
      <Header />
      <div className="mt-[94px] section-padding py-3.5 bg-[#C2BABA]">
        <h1 className="font-bold text-[#720303] text-lg text-center md:text-start md:text-xl">
          ABOUT YAMAHA MATAKOS
        </h1>
      </div>
      <AboutInfo />
      <Footer />
    </>
  );
};

export default About;
