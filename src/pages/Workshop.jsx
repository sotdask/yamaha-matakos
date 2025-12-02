import React from "react";
import { Header, Footer, WorkshopInfo, FAQ } from "../components";

const Workshop = () => {
  return (
    <>
      <Header />
      <div className="mt-[94px] section-padding py-3.5 bg-[#C2BABA]">
        <h1 className="font-bold text-[#720303] text-lg text-center md:text-start md:text-xl">
          WORKSHOP
        </h1>
      </div>
        <WorkshopInfo/>
        <FAQ/>
      <Footer />
    </>
  );
};

export default Workshop;
