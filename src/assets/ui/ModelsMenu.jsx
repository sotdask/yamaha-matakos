import React, { useState } from "react";
import { Icons, Images } from "../assets";

const modelImages = {
  "R1 RACE": Images.r1_race,
  "2026 R9": Images.r9_2026,
  R7: Images.r7,
  R3: Images.r3,
  R125: Images.r125,
  "2025 R9": Images.r9_2025,
  "R6 RACE": Images.r6_race,
  "2025 R125": Images.r125_2025,

  "MT-09 SP": Images.mt_09_sp,
  "MT-09": Images.mt_09,
  "MT-07": Images.mt_07,
  "MT-03": Images.mt_03,
  "MT-125": Images.mt_125,

  "XSR900 GP": Images.xsr900_gp,
  XSR900: Images.xsr900,
  XSR700: Images.xsr700,
  "2026 XSR125 LEGACY": Images.xsr125_2026_legacy,
  "2026 XSR125": Images.xsr125_2026,
  "2024 XSR125 LEGACY": Images.xsr125_2024_legacy,
  "2024 XSR125": Images.xsr125_2024,

  FJR1300: Images.fjr1300,
  "Tracer 9": Images.tracer9,

  YZ450F: Images.yz450f,
  YZ250F: Images.yz250f,
  YZ125: Images.yz125,

  "Tenere 700": Images.tenere700,
  "Super Ténéré": Images.superTenere,

  NMAX: Images.nmax,
  XMAX: Images.xmax,

  Fascino: Images.fascino,
  RayZR: Images.rayzr,

  "YDX-MORO": Images.ydxMoro,
  "YDX-TORC": Images.ydxTorc,
  "Yamaha Urban Rush": Images.urbanRush,
  "Yamaha Gravel Pro": Images.gravelPro,
};

const ModelsMenu = ({ isOpen }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const subcategories = {
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
    "sport-heritage": ["XSR900 GP", "XSR900", "XSR700", "2026 XSR125 LEGACY", "2026 XSR125", "2024 XSR125 LEGACY", "2024 XSR125"],
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
        {/* MAIN CATEGORIES */}
        <div
          className={`grid grid-cols-3 gap-8 transition-all duration-300 ${
            selectedSubcategory ? "opacity-30" : "opacity-100"
          }`}
        >
          {/* Motorcycles */}
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
                    onClick={() => setSelectedSubcategory(item)}
                    className="w-full cursor-pointer flex gap-x-2 items-center text-gray-700 hover:text-primary hover:bg-primary/10 px-3 py-2.5 rounded-lg transition-colors text-sm text-left"
                  >
                    <span className="capitalize">
                      {item.replace(/-/g, " ")}
                    </span>
                    <img src={Icons.modalArrow} alt="" className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Scooters */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Scooters</h3>
            <ul className="space-y-3">
              {["sport", "urban-mobility"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setSelectedSubcategory(item)}
                    className="w-full cursor-pointer flex gap-x-2 items-center text-gray-700 hover:text-primary hover:bg-primary/10 px-3 py-2.5 rounded-lg transition-colors text-sm text-left"
                  >
                    <span className="capitalize">
                      {item.replace(/-/g, " ")}
                    </span>
                    <img src={Icons.modalArrow} alt="" className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* e-Bikes */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">e-Bikes</h3>
            <ul className="space-y-3">
              {["mountain", "urban", "gravel"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setSelectedSubcategory(item)}
                    className="w-full cursor-pointer flex gap-x-2 items-center text-gray-700 hover:text-primary hover:bg-primary/10 px-3 py-2.5 rounded-lg transition-colors text-sm text-left"
                  >
                    <span className="capitalize">
                      {item.replace(/-/g, " ")}
                    </span>
                    <img src={Icons.modalArrow} alt="" className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SUBCATEGORY MODELS PANEL */}
        <div
          className={`
            absolute inset-0 bg-white overflow-y-scroll rounded-xl p-6 z-10 transform transition-all duration-300 ease-out
            ${
              selectedSubcategory
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }
          `}
        >
          <button
            onClick={() => setSelectedSubcategory(null)}
            className="flex cursor-pointer items-center gap-2 mb-6 text-gray-700 hover:text-primary transition-colors"
          >
            <img src={Icons.modalArrow} className="w-4 h-4 rotate-180" />
            <span className="text-sm font-semibold">Back</span>
          </button>

          {selectedSubcategory && (
            <h3 className="text-lg font-bold text-primary mb-4 capitalize">
              {selectedSubcategory.replace(/-/g, " ")}
            </h3>
          )}

          {/* MODELS GRID */}
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
                        src={modelImages[model] || Images.placeholder}
                        alt={model}
                        className="w-full h-24 object-cover rounded-lg"
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
