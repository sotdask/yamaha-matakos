import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Icons } from "../assets/assets";
import { LinkButton, LangDropdown, MobileMenu } from "../assets/ui";
import Navbar from "./Navbar";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isModelsOpen, setIsModelsOpen] = useState(false);
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsExploreOpen(false);
    setIsModelsOpen(false);
    setIsAccessoriesOpen(false);
  };

  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
  };
  const toggleModels = () => {
    setIsModelsOpen(!isModelsOpen);
  };
  const toggleAccessories = () => {
    setIsAccessoriesOpen(!isAccessoriesOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-md shadow-md z-50 border-b border-white/10">
        <div className="section-padding flex items-center justify-between py-4">
          <div>
            <div className="pc-verion hidden lg:flex">
              <a href="https://yamaha-matakos.gr/" title="Yamaha Matakos Homepage">
                <img src={Icons.logo} alt="Yamaha Matakos logo" />
              </a>
            </div>
            <div className="mobile-version flex lg:hidden">
              <a href="tel:6940883297" title="Call Yamaha Matakos">
                <img src={Icons.tel} alt="Call Yamaha Matakos" />
              </a>
            </div>
          </div>
          <Navbar />
          <div>
            <div className="pc-version hidden lg:flex gap-6 items-center">
              <LinkButton
                to="https://yamaha-matakos.car.gr/bikes/"
                text={t("common.buyNow")}
                target="_blank"
              />
              <LangDropdown />
            </div>
            <button
              className="mobile-version lg:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <img src={Icons.burger} alt="Open navigation menu" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        isModelsOpen={isModelsOpen}
        isExploreOpen={isExploreOpen}
        isAccessoriesOpen={isAccessoriesOpen}
        onToggleModels={toggleModels}
        onToggleExplore={toggleExplore}
        onToggleAccessories={toggleAccessories}
      />
    </>
  );
};

export default Header;
