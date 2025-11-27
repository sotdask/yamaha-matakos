import React, { useState } from "react";
import { Icons } from "../assets/assets";
import { LinkButton, LangDropdown, MobileMenu } from "../assets/ui";
import Navbar from "./Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isModelsOpen, setIsModelsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsExploreOpen(false);
    setIsModelsOpen(false);
  };

  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
  };
  const toggleModels = () => {
    setIsModelsOpen(!isModelsOpen);
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
                text="Buy Now"
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

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        isModelsOpen={isModelsOpen}
        isExploreOpen={isExploreOpen}
        onToggleModels={toggleModels}
        onToggleExplore={toggleExplore}
      />
    </>
  );
};

export default Header;
