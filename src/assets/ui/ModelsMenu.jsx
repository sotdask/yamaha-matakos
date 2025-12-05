import React, { useState } from "react";
import { Icons, Images } from "../assets";
import { models } from "./models";

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
                "adventure",
                "off-road-competition",
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
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">e-Bikes</h3>
            <ul className="space-y-3">
              {["urban"].map((item) => (
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
          <ul className="grid grid-cols-3 gap-4">
            {selectedSubcategory &&
              subcategories[selectedSubcategory]?.map((model, index) => {
                const modelData = models[model];
                const link = modelData?.link || "#";
                const image = modelData?.image || Images.placeholder;
                return (
                  <li key={index}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block cursor-pointer text-gray-700 hover:text-primary hover:bg-primary/10 px-3 py-2.5 rounded-lg transition-colors text-sm"
                    >
                      <div className="mb-2">
                        <img
                          src={image}
                          alt={model}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                      </div>
                      <span className="text-center block">{model}</span>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModelsMenu;
