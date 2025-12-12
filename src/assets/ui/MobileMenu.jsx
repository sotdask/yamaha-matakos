import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Icons, Images } from "../assets";
import { LinkButton } from "./index";
import { models } from "./models";

const MobileMenu = ({
  isOpen,
  onClose,
  isModelsOpen,
  isExploreOpen,
  isAccessoriesOpen,
  onToggleModels,
  onToggleExplore,
  onToggleAccessories,
}) => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleFocus = () => {
      if (isOpen) {
        onClose();
      }
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, [isOpen, onClose]);

  const subcategories = {
    motorcycles: [
      "supersport",
      "hyper-naked",
      "sport-heritage",
      "sport-touring",
      "adventure",
      "off-road-competition",
    ],
    scooters: ["sport", "urban-mobility"],
    ebikes: ["urban"],
  };

  const modelSubcategories = {
    supersport: [
      "R1 RACE",
      "2026 R9",
      "R7",
      "R3",
      "R125",
      "2025 R9",
      "R6 RACE",
      "2025 R125",
    ],
    "hyper-naked": ["MT-09 SP", "MT-09", "MT-07", "MT-03", "MT-125"],
    "sport-heritage": [
      "XSR900 GP",
      "XSR900",
      "XSR700",
      "2026 XSR125 LEGACY",
      "2026 XSR125",
      "2024 XSR125 LEGACY",
      "2024 XSR125",
    ],
    "sport-touring": [
      "TRACER 9 GT+",
      "TRACER 9 GT",
      "NIKEN GT",
      "TRACER 9",
      "2024 TRACER 9 GT+",
      "2024 TRACER 7 GT",
      "2024 TRACER 7",
      "TRACER 7 GT",
      "TRACER 7",
    ],
    adventure: [
      "TÉNÉRÉ 700 WORLD RAID",
      "TÉNÉRÉ 700 RALLY",
      "TÉNÉRÉ 700 EXPLORE",
      "TÉNÉRÉ 700",
      "WR125R",
    ],
    "off-road-competition": [
      "YZ450F 70TH ANNIVERSARY EDITION",
      "2026 YZ450F",
      "YZ250F 70TH ANNIVERSARY EDITION",
      "2026 YZ250F",
      "YZ250 70TH ANNIVERSARY EDITION",
      "2026 YZ250",
      "YZ125 70TH ANNIVERSARY EDITION",
      "2026 YZ125",
      "2026 YZ85",
      "2026 YZ65",
      "WR450F",
      "WR250F",
      "TT-R110",
      "2026 TT-R50",
      "PW50",
      "TT-R125",
      "2024 TT-R50",
    ],
    sport: [
      "TMAX 25TH ANNIVERSARY",
      "TMAX TECH MAX",
      "TMAX",
      "2025 TMAX TECH MAX",
      "2025 TMAX",
      "XMAX 300 TECH MAX+",
      "2025 XMAX 300 TECH MAX+",
      "XMAX 300 TECH MAX",
      "2025 XMAX 300 TECH MAX",
      "XMAX 300",
      "2025 XMAX 300",
      "XMAX 125 TECH MAX+",
      "XMAX 125 TECH MAX",
      "2025 XMAX 125 TECH MAX+",
      "2025 XMAX 125 TECH MAX",
      "XMAX 125",
      "2024 XMAX 125 TECH MAX",
      "2025 XMAX 125",
      "NMAX 155 TECH MAX",
      "NMAX 125 TECH MAX",
      "NMAX 125",
      "NMAX 155",
      "2025 NMAX 125 TECH MAX",
      "2025 NMAX 125",
    ],
    "urban-mobility": [
      "2024 TRICITY 300",
      "TRICITY 125",
      "RayZR",
      "D'ELIGHT",
      "NEO'S DUAL BATTERY",
    ],
    urban: ["BOOSTER EASY", "BOOSTER"],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const handleBackToCategories = () => {
    setSelectedSubcategory(null);
  };

  const handleBackToMain = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
  };

  const handleClose = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    onClose();
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-100 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleClose}
      ></div>
      <div
        className={`fixed top-[110px] right-0 h-[calc(100vh-110px)] w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-120 transform transition-all duration-300 ease-out lg:hidden ${
          selectedCategory && !selectedSubcategory
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200/50 bg-gradient-to-r from-white to-gray-50/50">
            <button
              onClick={handleBackToMain}
              className="flex items-center gap-2 text-primary hover:text-[#720303] transition-colors"
            >
              <img
                src={Icons.modalArrow}
                className="w-4 h-4 rotate-180"
                alt="Back"
              />
              <span className="text-sm font-semibold">
                {selectedCategory === "motorcycles"
                  ? t("mobileMenu.motorcycles")
                  : selectedCategory === "scooters"
                  ? t("mobileMenu.scooters")
                  : t("mobileMenu.eBikes")}
              </span>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="flex flex-col gap-2">
              {selectedCategory &&
                subcategories[selectedCategory]?.map((subcategory, index) => (
                  <li
                    key={subcategory}
                    className={`transition-all duration-300 ${
                      selectedCategory && !selectedSubcategory
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                    }`}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    <button
                      onClick={() => handleSubcategoryClick(subcategory)}
                      className="w-full text-left text-base font-semibold text-primary py-3 px-4 rounded-lg hover:bg-primary/10 hover:text-[#720303] transition-colors flex items-center justify-between"
                    >
                      <span className="capitalize">
                        {subcategory.replace(/-/g, " ")}
                      </span>
                      <img src={Icons.modalArrow} alt="" aria-hidden="true" className="w-4 h-4" />
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-[120px] right-0 h-[calc(100vh-120px)] w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-130 transform transition-all duration-300 ease-out lg:hidden ${
          selectedSubcategory
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200/50 bg-gradient-to-r from-white to-gray-50/50">
            <button
              onClick={handleBackToCategories}
              className="flex items-center gap-2 text-primary hover:text-[#720303] transition-colors"
            >
              <img
                src={Icons.modalArrow}
                className="w-4 h-4 rotate-180"
                alt="Back"
              />
              <span className="text-sm font-semibold capitalize">
                {selectedSubcategory?.replace(/-/g, " ")}
              </span>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="grid grid-cols-2 gap-4">
              {selectedSubcategory &&
                modelSubcategories[selectedSubcategory]?.map((model, index) => {
                  const modelData = models[model];
                  const link = modelData?.link || "#";
                  const image = modelData?.image;
                  return (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={model}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClose();
                        setTimeout(() => {
                          window.open(link, "_blank", "noopener,noreferrer");
                        }, 100);
                      }}
                      className={`block cursor-pointer text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all text-sm overflow-hidden ${
                        selectedSubcategory
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{
                        transitionDelay: `${index * 30}ms`,
                      }}
                    >
                      <div className="mb-2">
                        {image ? (
                          <img
                            src={image}
                            alt={model}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400 text-xs">
                              No Image
                            </span>
                          </div>
                        )}
                      </div>
                      <span className="text-center block px-2 pb-2 text-xs font-semibold">
                        {model}
                      </span>
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-110 transform transition-all duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200/50 bg-gradient-to-r from-white to-gray-50/50">
            <a href="/" title="Yamaha Matakos Homepage" onClick={handleClose}>
              <img src={Icons.logo} alt="Yamaha Matakos logo" />
            </a>
            <button
              onClick={handleClose}
              className="p-2.5 rounded-full active:scale-95 transition-transform"
              aria-label="Close menu"
            >
              <img src={Icons.closeMenu} alt="Close menu" className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col">
            <ul className="flex flex-col gap-2">
              <li>
                <button
                  onClick={onToggleModels}
                  className="w-full text-left text-lg font-bold text-primary py-3 px-4 rounded-lg flex items-center justify-between"
                >
                  <span>{t("mobileMenu.ourModels")}</span>
                  <img
                    src={Icons.down}
                    alt="Expand or collapse section"
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isModelsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isModelsOpen && (
                  <div className="mt-2 ml-4 space-y-1 overflow-hidden">
                    <button
                      onClick={() => handleCategoryClick("motorcycles")}
                      className="block w-full text-left text-base font-semibold text-[#720303] py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      {t("mobileMenu.motorcycles")}
                    </button>
                    <button
                      onClick={() => handleCategoryClick("scooters")}
                      className="block w-full text-left text-base font-semibold text-[#720303] py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      {t("mobileMenu.scooters")}
                    </button>
                    <button
                      onClick={() => handleCategoryClick("ebikes")}
                      className="block w-full text-left text-base font-semibold text-[#720303] py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      {t("mobileMenu.eBikes")}
                    </button>
                  </div>
                )}
              </li>
              <li>
                <div className="w-full">
                  <button
                    onClick={onToggleAccessories}
                    className="w-full text-left text-lg font-bold text-primary py-3 px-4 rounded-lg flex items-center justify-between"
                  >
                    <span>{t("mobileMenu.accessoriesMore")}</span>
                    <img
                      src={Icons.down}
                      alt="Expand or collapse section"
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isAccessoriesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isAccessoriesOpen && (
                    <div className="mt-2 ml-4 space-y-1 overflow-hidden">
                      <a
                        href="https://www.yamaha-motor.eu/gr/el/accessories/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={t("navbar.accessories")}
                        onClick={handleClose}
                        className="block text-base font-semibold text-[#720303] py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        {t("navbar.accessories")}
                      </a>
                      <a
                        href="https://www.yamaha-motor.eu/gr/el/clothing-merchandise/clothing/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={t("navbar.clothing")}
                        onClick={handleClose}
                        className="block text-base font-semibold text-[#720303] py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        {t("navbar.clothing")}
                      </a>
                      <a
                        href="https://www.yamaha-motor.eu/gr/el/service-support/overview/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={t("navbar.maintenance")}
                        onClick={handleClose}
                        className="block text-base font-semibold text-[#720303] py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        {t("navbar.maintenance")}
                      </a>
                      <a
                        href="https://www.yamaha-motor.eu/gr/el/clothing-merchandise/riding-gear/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={t("navbar.ridingGear")}
                        onClick={handleClose}
                        className="block text-base font-semibold text-[#720303] py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        {t("navbar.ridingGear")}
                      </a>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <div className="w-full">
                  <button
                    onClick={onToggleExplore}
                    className="w-full text-left text-lg font-bold text-primary py-3 px-4 rounded-lg flex items-center justify-between"
                  >
                    <span>{t("mobileMenu.explore")}</span>
                    <img
                      src={Icons.down}
                      alt="Expand or collapse section"
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isExploreOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isExploreOpen && (
                    <div className="mt-2 ml-4 space-y-1 overflow-hidden">
                      <Link
                        to="/about"
                        title={t("mobileMenu.aboutUs")}
                        onClick={handleClose}
                        className="block text-base font-semibold text-[#720303] py-2 px-4 rounded-lg"
                      >
                        {t("mobileMenu.aboutUs")}
                      </Link>
                      <Link
                        to="/workshop"
                        title={t("mobileMenu.workshop")}
                        onClick={handleClose}
                        className="block text-base font-semibold text-[#720303] py-2 px-4 rounded-lg"
                      >
                        {t("mobileMenu.workshop")}
                      </Link>
                      <Link
                        to="/blog"
                        title={t("mobileMenu.articles")}
                        onClick={handleClose}
                        className="block text-base font-semibold text-[#720303] py-2 px-4 rounded-lg"
                      >
                        {t("mobileMenu.articles")}
                      </Link>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <Link
                  to="/contact"
                  title={t("mobileMenu.contact")}
                  onClick={onClose}
                  className="block text-lg font-bold text-primary py-3 px-4 rounded-lg"
                >
                  {t("mobileMenu.contact")}
                </Link>
              </li>
            </ul>
            <div className="mt-10 py-5 border-t border-gray-200/60">
              <div className="mb-6 flex justify-center">
                <LinkButton
                  to="https://yamaha-matakos.car.gr/bikes/"
                  text={t("mobileMenu.buyNow")}
                  onClick={onClose}
                />
              </div>
              <div className="flex items-center justify-center gap-x-4">
              <button
                  onClick={() => changeLanguage("en")}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    i18n.language === "en"
                      ? "bg-[#720303] text-white"
                      : "bg-gray-100 text-primary hover:bg-[#720303]/10"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage("el")}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    i18n.language === "el"
                      ? "bg-[#720303] text-white"
                      : "bg-gray-100 text-primary hover:bg-[#720303]/10"
                  }`}
                >
                  ΕΛ
                </button>
              </div>
            </div>
            <div className="mt-auto pt-8 pb-6 border-t border-gray-200/60">
              <div className="flex justify-center gap-8 mb-6">
                <a
                  href="https://www.facebook.com/yamahamatakos"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit our Facebook page"
                  className="active:scale-95 transition-transform"
                  onClick={onClose}
                >
                  <img
                    src={Icons.facebook}
                    alt="Visit our Facebook page"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://www.instagram.com/yamaha.matakos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit our Instagram page"
                  className="active:scale-95 transition-transform"
                  onClick={onClose}
                >
                  <img
                    src={Icons.instagram}
                    alt="Visit our Instagram page"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@yamahamatakos"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit our TikTok page"
                  className="active:scale-95 transition-transform"
                  onClick={onClose}
                >
                  <img
                    src={Icons.tiktok}
                    alt="Visit our TikTok page"
                    className="w-6 h-6"
                  />
                </a>
              </div>

              <p className="text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Yamaha Matakos.{" "}
                {t("footer.allRightsReserved")}
              </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
