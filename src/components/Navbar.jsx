import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icons } from "../assets/assets";
import { ModelsMenu } from "../assets/ui";

const Navbar = () => {
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isModelsOpen, setIsModelsOpen] = useState(false);
  const accessoriesRef = useRef(null);
  const exploreRef = useRef(null);
  const modelsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accessoriesRef.current &&
        !accessoriesRef.current.contains(event.target)
      ) {
        setIsAccessoriesOpen(false);
      }
      if (exploreRef.current && !exploreRef.current.contains(event.target)) {
        setIsExploreOpen(false);
      }
      if (modelsRef.current && !modelsRef.current.contains(event.target)) {
        setIsModelsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="pc-version hidden lg:flex">
        <ul className="flex lg:gap-x-4 xl:gap-x-8 text-primary font-bold text-base xl:text-xl">
          <li ref={modelsRef} className="relative">
            <button
              onClick={() => setIsModelsOpen(!isModelsOpen)}
              className="cursor-pointer relative hover:text-[#720303] hover: after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-[#720303] after:w-0 hover:after:w-full after:transition-all after:duration-300 transition duration-300 flex items-center gap-1"
            >
              OUR MODELS
              <img
                src={Icons.down}
                alt="dropdown-arrow"
                className={`w-4 h-4 transition-transform duration-300 ${
                  isModelsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <ModelsMenu isOpen={isModelsOpen} onClose={() => setIsModelsOpen(false)} containerRef={modelsRef} />
          </li>
          <li ref={accessoriesRef} className="relative">
            <button
              onClick={() => setIsAccessoriesOpen(!isAccessoriesOpen)}
              className="cursor-pointer relative hover:text-[#720303] hover: after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-[#720303] after:w-0 hover:after:w-full after:transition-all after:duration-300 transition duration-300 flex items-center gap-1"
            >
              ACCESSORIES & MORE
              <img
                src={Icons.down}
                alt="dropdown-arrow"
                className={`w-4 h-4 transition-transform duration-300 ${
                  isAccessoriesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isAccessoriesOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-[#F7F7F7] rounded-xl shadow-lg border border-gray-200 p-2 flex flex-col gap-1 z-50 w-48 min-w-max">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-primary/10 hover:text-[#720303] rounded-lg transition-colors text-base font-semibold"
                  >
                    Accessories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-primary/10 hover:text-[#720303] rounded-lg transition-colors text-base font-semibold"
                  >
                    Clothing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-primary/10 hover:text-[#720303] rounded-lg transition-colors text-base font-semibold"
                  >
                    Maintenance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-primary/10 hover:text-[#720303] rounded-lg transition-colors text-base font-semibold"
                  >
                    Riding Gear
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li ref={exploreRef} className="relative">
            <button
              onClick={() => setIsExploreOpen(!isExploreOpen)}
              className="cursor-pointer relative hover:text-[#720303] hover: after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-[#720303] after:w-0 hover:after:w-full after:transition-all after:duration-300 transition duration-300 flex items-center gap-1"
            >
              EXPLORE
              <img
                src={Icons.down}
                alt="dropdown-arrow"
                className={`w-4 h-4 transition-transform duration-300 ${
                  isExploreOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isExploreOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-[#F7F7F7] rounded-xl shadow-lg border border-gray-200 p-2 flex flex-col gap-1 z-50 w-48 min-w-max">
                <li>
                  <Link
                    to="/about"
                    className="block px-4 py-2 hover:bg-primary/10 hover:text-[#720303] rounded-lg transition-colors text-base font-semibold"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <a
                    href="/workshop"
                    className="block px-4 py-2 hover:bg-primary/10 hover:text-[#720303] rounded-lg transition-colors text-base font-semibold"
                  >
                    Workshop
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="block px-4 py-2 hover:bg-primary/10 hover:text-[#720303] rounded-lg transition-colors text-base font-semibold"
                  >
                    Articles
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#"
              className="relative block pb-0.5 hover:text-[#720303] hover: after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-[#720303] after:w-0 hover:after:w-full after:transition-all after:duration-300 transition duration-300"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      <div className="mobile-version flex lg:hidden">
        <Link to="/">
          <img src={Icons.logo} alt="logo" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
