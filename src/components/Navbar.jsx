import React from "react";
import { Icons } from "../assets/assets";

const Navbar = () => {
  return (
    <>
      <div className="pc-version hidden lg:flex">
        <ul className="flex lg:gap-x-4 xl:gap-x-8 text-primary font-bold text-lg xl:text-xl">
          <li>
            <button className="cursor-pointer relative hover:text-[#720303] hover: after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-[#720303] after:w-0 hover:after:w-full after:transition-all after:duration-300 transition duration-300">
              OUR MODELS
            </button>
          </li>
          <li>
            <button className="cursor-pointer relative hover:text-[#720303] hover: after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-[#720303] after:w-0 hover:after:w-full after:transition-all after:duration-300 transition duration-300">
              ACCESSORIES & MORE
            </button>
          </li>
          <li>
            <button className="cursor-pointer relative hover:text-[#720303] hover: after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-[#720303] after:w-0 hover:after:w-full after:transition-all after:duration-300 transition duration-300">
              EXPLORE
            </button>
          </li>
          <li>
            <a
              href="#"
              className="relative hover:text-[#720303] hover: after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-[#720303] after:w-0 hover:after:w-full after:transition-all after:duration-300 transition duration-300"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      <div className="mobile-version flex lg:hidden">
        <a href="/">
          <img src={Icons.logo} alt="logo" />
        </a>
      </div>
    </>
  );
};

export default Navbar;
