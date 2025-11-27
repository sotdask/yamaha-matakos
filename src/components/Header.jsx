import React, { useState } from "react";
import { Icons } from "../assets/assets";
import { LinkButton, LangDropdown } from "../assets/ui";
import Navbar from "./Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
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
            <button 
              className="mobile-version lg:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <img src={Icons.burger} alt="Menu" />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-100 lg:hidden"
          onClick={closeMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-110 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <a href="/" onClick={closeMenu}>
              <img src={Icons.logo} alt="logo" />
            </a>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <img src={Icons.closeMenu} alt="" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="flex flex-col gap-4">
              <li>
                <button
                  onClick={closeMenu}
                  className="w-full text-left text-lg font-bold text-primary hover:text-[#720303] transition-colors py-2"
                >
                  OUR MODELS
                </button>
              </li>
              <li>
                <button
                  onClick={closeMenu}
                  className="w-full text-left text-lg font-bold text-primary hover:text-[#720303] transition-colors py-2"
                >
                  ACCESSORIES & MORE
                </button>
              </li>
              <li>
                <button
                  onClick={closeMenu}
                  className="w-full text-left text-lg font-bold text-primary hover:text-[#720303] transition-colors py-2"
                >
                  EXPLORE
                </button>
              </li>
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="block text-lg font-bold text-primary hover:text-[#720303] transition-colors py-2"
                >
                  CONTACT
                </a>
              </li>
            </ul>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <LinkButton
                to="https://yamaha-matakos.car.gr/bikes/"
                text="Buy One Now"
                onClick={closeMenu}
              />
              <div className="mt-4">
                <LangDropdown />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
