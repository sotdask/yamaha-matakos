import React from "react";
import { Images } from "../assets/assets";

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={Images.hero}
        alt="hero"
        className="w-full h-full object-cover"
        style={{ objectPosition: "19% 70%" }}
      />
      <div className="absolute inset-0 flex items-center justify-center md:justify-end px-6 xl:px-44 bg-black/40">
        <div className="px-6 py-8 md:px-10 md:py-12 text-[#C2BABA] w-full max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Ride. Explore Feel.
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 text-center">
            EXPERIENCE FREEDOM ON A MOTORBIKE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
