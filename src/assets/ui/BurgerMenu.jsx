import React, { useState } from "react";
import { Icons } from "../assets";
import LinkButton from "./LinkButton";
import LangDropdown from "./LangDropdown";

function BurgerMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Burger Button */}
      <button
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        className="relative z-60 p-2"
        aria-label="Toggle menu"
      >
        <div className="relative w-8 h-6 flex flex-col justify-between">
          <span
            className={`block h-1 w-8 bg-[#720303] rounded transition-all duration-300 origin-center ${
              mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block h-1 w-6 bg-[#720303] rounded transition-all duration-300 ml-auto ${
              mobileMenuOpen ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`block h-1 w-4 bg-[#720303] rounded transition-all duration-300 ml-auto origin-center ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2.5 w-8" : ""
            }`}
          />
        </div>
      </button>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />
      <div
        className={`
          fixed top-0 right-0 h-screen w-80 bg-gradient-to-b from-gray-200 to-gray-50 shadow-2xl z-50 
          transform transition-transform duration-500 ease-out overflow-hidden
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#720303] via-[#a00] to-[#720303]" />
        <div className="pt-6 pb-4 px-8 border-b border-gray-100">
          <img src={Icons.logo} alt="Yamaha Matakos" className="h-10" />
        </div>
        <nav className="flex flex-col px-4 pt-6">
          {[
            { label: "OUR MODELS", href: "#models" },
            { label: "ACCESSORIES & MORE", href: "#accessories" },
            { label: "EXPLORE", href: "#explore" },
            { label: "CONTACT", href: "#contact" },
          ].map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="group relative py-4 px-4 text-gray-800 font-semibold text-base tracking-wide 
                         hover:text-[#720303] transition-all duration-300 rounded-lg hover:bg-[#720303]/5"
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full bg-[#720303] opacity-0 group-hover:opacity-100 
                               transform scale-0 group-hover:scale-100 transition-all duration-300"
                />
                {item.label}
              </span>
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            </a>
          ))}
        </nav>
        <div className="px-8 mt-8 space-y-5">
          <LinkButton
            to="https://yamaha-matakos.car.gr/bikes/"
            text="Buy One Now"
          />
          <div className="flex items-center gap-3">
            <button className="p-3 border-primary border-2 rounded-2xl font-bold">EN</button>
            <button className="p-3 border-primary border-2 rounded-2xl font-bold">EΛ</button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-100/80 to-transparent">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
            Follow Us
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <img
                src={Icons.facebook}
                alt="Facebook"
                className="w-5 h-5 group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <img
                src={Icons.instagram}
                alt="Instagram"
                className="w-5 h-5 group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <img
                src={Icons.tiktok}
                alt="TikTok"
                className="w-5 h-5 group-hover:scale-110 transition-transform"
              />
            </a>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-400">
              © 2025 Yamaha Matakos. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
