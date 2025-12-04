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

  "TRACER 9 GT+": Images.tracer9_gt_plus,
  "TRACER 9 GT": Images.tracer9_gt,
  "NIKEN GT": Images.niken_gt,
  "TRACER 9": Images.tracer9,
  "2024 TRACER 9 GT+": Images.tracer_2024_gt_plus,
  "2024 TRACER 7 GT": Images.tracer7_2024,
  "2024 TRACER 7": Images.tracer7_2024,
  "TRACER 7 GT": Images.tracer7_gt,
  "TRACER 7": Images.tracer7,

  "TÉNÉRÉ 700 WORLD RAID": Images.tenere700_world_raid,
  "TÉNÉRÉ 700 RALLY": Images.tenere700_rally,
  "TÉNÉRÉ 700 EXPLORE": Images.tenere700_explore,
  "TÉNÉRÉ 700": Images.tenere700,
  WR125R: Images.wr125r,

  "YZ450F 70TH ANNIVERSARY EDITION": Images.yz450f_70th,
  "2026 YZ450F": Images.yz450f_2026,
  "YZ250F 70TH ANNIVERSARY EDITION": Images.yz250f_70th,
  "2026 YZ250F": Images.yz250f_2026,
  "YZ250 70TH ANNIVERSARY EDITION": Images.yz250_70th,
  "2026 YZ250": Images.yz250_2026,
  "YZ125 70TH ANNIVERSARY EDITION": Images.yz125_70th,
  "2026 YZ125": Images.yz125_2026,
  "2026 YZ85": Images.yz85_2026,
  "2026 YZ65": Images.yz65_2026,
  WR450F: Images.wr450f,
  WR250F: Images.wr250f,
  "TT-R110": Images.tt_r110,
  "2026 TT-R50": Images.tt_r50_2026,
  PW50: Images.pw50,
  "TT-R125": Images.tt_r125,
  "2024 TT-R50": Images.tt_r50_2024,

  "TMAX 20TH ANNIVERSARY": Images.tmax_25th,
  "TMAX TECH MAX": Images.tmax_tech_max,
  TMAX: Images.tmax,
  "2025 TMAX TECH MAX": Images.tmax_tech_max_2025,
  "2025 TMAX": Images.tmax_2025,
  "XMAX 300 TECH MAX+": Images.xmax_300_tech_max_plus,
  "2025 XMAX 300 TECH MAX+": Images.xmax_300_tech_max_plus_2025,
  "XMAX 300 TECH MAX": Images.xmax_300_tech_max,
  "2025 XMAX 300 TECH MAX": Images.xmax_300_tech_max_2025,
  "XMAX 300": Images.xmax_300,
  "2025 XMAX 300": Images.xmax_300_2025,
  "XMAX 125 TECH MAX+": Images.xmax_125_tech_max,
  "XMAX 125 TECH MAX": Images.xmax_125_tech_max_plus,
  "2025 XMAX 125 TECH MAX+": Images.xmax_125_tech_max_plus_2025,
  "2025 XMAX 125 TECH MAX": Images.xmax_125_tech_max_2025,
  "XMAX 125": Images.xmax_125,
  "2024 XMAX 125 TECH MAX": Images.xmax_125_tech_max_2024,
  "2025 XMAX 125": Images.xmax_125_2025,
  "NMAX 155 TECH MAX": Images.nmax_155_tech_max,
  "NMAX 125 TECH MAX": Images.nmax_125_tech_max,
  "NMAX 125": Images.nmax_125,
  "NMAX 155": Images.nmax_155,
  "2025 NMAX 125 TECH MAX": Images.nmax_125_tech_max_2025,
  "2025 NMAX 125": Images.nmax_125_2025,

  "2024 TRICITY 300": Images.tricity_300_2024,
  "TRICITY 125": Images.tricity_125,
  RayZR: Images.rayzr,
  "D'ELIGHT": Images.delight,
  "NEO'S DUAL BATTERY": Images.neos_dual_battery,

  "BOOSTER EASY": Images.booster_easy,
    "BOOSTER": Images.booster,

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
      "TMAX 20TH ANNIVERSARY",
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
