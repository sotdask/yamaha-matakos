import React from "react";
import { Icons } from "../assets/assets";
import { LinkButton, LangDropdown } from "../assets/ui";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-md shadow-md z-50 border-b border-white/10">
      <div className="section-padding flex items-center justify-between py-4">
        <div>
          <div className="pc-verion hidden lg:flex">
            <a href="/">
              <img src={Icons.logo} alt="logo" />
            </a>
          </div>
          <div className="mobile-version flex lg:hidden">
            <a href="tel:6940883297">
              <img src={Icons.tel} alt="telephone" />
            </a>
          </div>
        </div>
        <Navbar />
        <div>
          <div className="pc-version hidden lg:flex gap-6 items-center">
            <LinkButton
              to="https://yamaha-matakos.car.gr/bikes/"
              text="Buy One Now"
            />
            <LangDropdown />
          </div>
          <div className="mobile-version flex lg:hidden">
            <div class="flex flex-col items-end space-y-1.5">
              <div class="h-1 w-8 bg-[#720303] rounded"></div>
              <div class="h-1 w-6 bg-[#720303] rounded"></div>
              <div class="h-1 w-4 bg-[#720303] rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
