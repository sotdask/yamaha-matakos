import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../assets";
import { LinkButton } from "./index";

const MobileMenu = ({
  isOpen,
  onClose,
  isModelsOpen,
  isExploreOpen,
  onToggleModels,
  onToggleExplore,
}) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-100 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-110 transform transition-all duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200/50 bg-gradient-to-r from-white to-gray-50/50">
            <Link to="/" onClick={onClose}>
              <img src={Icons.logo} alt="logo" />
            </Link>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full active:scale-95 transition-transform"
              aria-label="Close menu"
            >
              <img src={Icons.closeMenu} alt="" className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col">
            <ul className="flex flex-col gap-2">
              <li>
                <button
                  onClick={onToggleModels}
                  className="w-full text-left text-lg font-bold text-primary py-3 px-4 rounded-lg flex items-center justify-between"
                >
                  <span>OUR MODELS</span>
                  <img
                    src={Icons.down}
                    alt="dropdown-arrow"
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isModelsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isModelsOpen && (
                  <div className="mt-2 ml-4 space-y-1 overflow-hidden">
                    <a
                      href="#"
                      onClick={onClose}
                      className="block text-base font-semibold text-[#720303] py-2 px-4 rounded-lg"
                    >
                      Motorcycles
                    </a>
                    <a
                      href="#"
                      onClick={onClose}
                      className="block text-base font-semibold text-[#720303] py-2 px-4 rounded-lg"
                    >
                      Scooters
                    </a>
                    <a
                      href="#"
                      onClick={onClose}
                      className="block text-base font-semibold text-[#720303] py-2 px-4 rounded-lg"
                    >
                      e-Bikes
                    </a>
                  </div>
                )}
              </li>
              <li>
                <button
                  onClick={onClose}
                  className="w-full text-left text-lg font-bold text-primary py-3 px-4 rounded-lg"
                >
                  ACCESSORIES & MORE
                </button>
              </li>
              <li>
                <div className="w-full">
                  <button
                    onClick={onToggleExplore}
                    className="w-full text-left text-lg font-bold text-primary py-3 px-4 rounded-lg flex items-center justify-between"
                  >
                    <span>EXPLORE</span>
                    <img
                      src={Icons.down}
                      alt="dropdown-arrow"
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isExploreOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isExploreOpen && (
                    <div className="mt-2 ml-4 space-y-1 overflow-hidden">
                      <Link
                        to="/about"
                        onClick={onClose}
                        className="block text-base font-semibold text-[#720303] py-2 px-4 rounded-lg"
                      >
                        About Us
                      </Link>
                      <Link
                        to="/workshop"
                        onClick={onClose}
                        className="block text-base font-semibold text-[#720303] py-2 px-4 rounded-lg"
                      >
                        Workshop
                      </Link>
                      <Link
                        to="/blog"
                        onClick={onClose}
                        className="block text-base font-semibold text-[#720303] py-2 px-4 rounded-lg"
                      >
                        Articles
                      </Link>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <Link
                        to="/contact"
                  onClick={onClose}
                  className="block text-lg font-bold text-primary py-3 px-4 rounded-lg"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            <div className="mt-10 pt-8 border-t border-gray-200/60">
              <div className="mb-6 flex justify-center">
                <LinkButton
                  to="https://yamaha-matakos.car.gr/bikes/"
                  text="Buy Now"
                  onClick={onClose}
                />
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <button className="text-primary font-bold text-lg">EN</button>
                <button className="text-primary font-bold text-lg">ΕΛ</button>
              </div>
            </div>
            <div className="mt-auto pt-8 pb-6 border-t border-gray-200/60">
              <div className="flex justify-center gap-8 mb-6">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="active:scale-95 transition-transform"
                  onClick={onClose}
                >
                  <img
                    src={Icons.facebook}
                    alt="facebook"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="active:scale-95 transition-transform"
                  onClick={onClose}
                >
                  <img
                    src={Icons.instagram}
                    alt="instagram"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="active:scale-95 transition-transform"
                  onClick={onClose}
                >
                  <img src={Icons.tiktok} alt="tiktok" className="w-6 h-6" />
                </a>
              </div>

              <p className="text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Yamaha Matakos. All rights
                reserved.
              </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

