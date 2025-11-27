import React, { useState } from "react";
import { Icons, Images } from "../assets";


const ModelsMenu = ({ isOpen }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const subcategories = {
    supersport: ["R1", "R6", "R3", "MT-10", "MT-09", "MT-07"],
    "hyper-naked": ["MT-10", "MT-09", "MT-07"],
    "sport-heritage": ["XSR900", "XSR700"],
    "sport-touring": ["FJR1300", "Tracer 9"],
    "off-road-competition": ["YZ450F", "YZ250F", "YZ125"],
    adventure: ["Tenere 700", "Super Ténéré"],
    sport: ["NMAX", "XMAX"],
    "urban-mobility": ["Fascino", "RayZR"],
    mountain: ["YDX-MORO", "YDX-TORC"],
    urban: ["Yamaha Urban Rush"],
    gravel: ["Yamaha Gravel Pro"],
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-full -translate-x-1/2 mt-2 bg-[#F7F7F7] rounded-xl shadow-lg border border-gray-200 p-8 z-50 w-[600px] transition-all duration-300">
      <div className="relative overflow-hidden">
        <div
          className={`grid grid-cols-3 gap-8 transition-all duration-300 ${
            selectedSubcategory ? "opacity-30" : "opacity-100"
          }`}
        >
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Motorcycles</h3>
            <ul className="space-y-3">
              {[
                "supersport",
                "hyper-naked",
                "sport-heritage",
                "sport-touring",
                "off-road-competition",
                "adventure",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedSubcategory(item);
                    }}
                    className="w-full cursor-pointer flex gap-x-2 items-center text-gray-700 hover:text-primary hover:bg-primary/10 px-3 py-2.5 rounded-lg transition-colors text-sm text-left"
                  >
                    <span className="capitalize">{item.replace(/-/g, " ")}</span>
                    <img src={Icons.modalArrow} alt="arrow" className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Scooters</h3>
            <ul className="space-y-3">
              {["sport", "urban-mobility"].map((item) => (
                <li key={item}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedSubcategory(item);
                    }}
                    className="w-full cursor-pointer flex gap-x-2 items-center text-gray-700 hover:text-primary hover:bg-primary/10 px-3 py-2.5 rounded-lg transition-colors text-sm text-left"
                  >
                    <span className="capitalize">{item.replace(/-/g, " ")}</span>
                    <img src={Icons.modalArrow} alt="arrow" className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-primary mb-4">e-Bikes</h3>
            <ul className="space-y-3">
              {["mountain", "urban", "gravel"].map((item) => (
                <li key={item}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedSubcategory(item);
                    }}
                    className="w-full cursor-pointer flex gap-x-2 items-center text-gray-700 hover:text-primary hover:bg-primary/10 px-3 py-2.5 rounded-lg transition-colors text-sm text-left"
                  >
                    <span className="capitalize">{item.replace(/-/g, " ")}</span>
                    <img src={Icons.modalArrow} alt="arrow" className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`
            absolute inset-0 bg-white overflow-y-scroll rounded-xl p-6 z-10 transform transition-all duration-300 ease-out
            ${selectedSubcategory ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
          `}
        >
          <button
            onClick={() => setSelectedSubcategory(null)}
            className="flex cursor-pointer items-center gap-2 mb-6 text-gray-700 hover:text-primary transition-colors"
          >
            <img src={Icons.modalArrow} alt="back arrow" className="w-4 h-4 rotate-180" />
            <span className="text-sm font-semibold">Back</span>
          </button>

          {selectedSubcategory && (
            <h3 className="text-lg font-bold text-primary mb-4 capitalize">
              {selectedSubcategory.replace(/-/g, " ")}
            </h3>
          )}

          <ul className="grid grid-cols-3 gap-4">
            {selectedSubcategory &&
              subcategories[selectedSubcategory]?.map((model, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="block cursor-pointer text-gray-700 hover:text-primary hover:bg-primary/10 px-3 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    <div className="mb-2">
                      <img 
                        src={Images.supersportImg} 
                        alt={model} 
                        className="w-36 h-36 object-none rounded-lg"
                      />
                    </div>
                    <span className="text-center block">{model}</span>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModelsMenu;

