import React, { useState } from "react";
import { Icons } from "../assets/assets";

function Footer() {
  const [openSections, setOpenSections] = useState({
    company: false,
    motorcycles: false,
    scooters: false,
    ebikes: false,
    getInTouch: false,
    information: false,
    businessHours: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const footerSections = [
    {
      id: "company",
      title: "Our Company",
      links: [
        { text: "Homepage", href: "/" },
        { text: "About us", href: "/about" },
        { text: "News", href: "#" },
        { text: "Workshop", href: "#" },
        { text: "Contact", href: "#" },
        { text: "Accessories", href: "#" },
        { text: "Clothing", href: "#" },
        { text: "Maintenance", href: "#" },
        { text: "Riding Gear", href: "#" },
      ],
    },
    {
      id: "motorcycles",
      title: "Motorcycles",
      links: [
        { text: "Supersport", href: "#" },
        { text: "Hyper Naked", href: "#" },
        { text: "Sport Heritage", href: "#" },
        { text: "Sport Touring", href: "#" },
        { text: "Off Road Competition", href: "#" },
        { text: "Adventure", href: "#" },
      ],
    },
    {
      id: "scooters",
      title: "Scooters",
      links: [
        { text: "Sport", href: "#" },
        { text: "Urban Mobility", href: "#" },
      ],
    },
    {
      id: "ebikes",
      title: "e-Bikes",
      links: [
        { text: "Mountain", href: "#" },
        { text: "Urban", href: "#" },
        { text: "Gravel", href: "#" },
      ],
    },
    {
      id: "getInTouch",
      title: "Get in Touch",
      links: [
        { text: "Lagkada 127, Thessaloniki", href: "#" },
        { text: "+30 2310522774", href: "tel:2310522774" },
        { text: "info@yamaha-matakos.gr", href: "mailto:info@yamaha-matakos.gr" },
      ],
    },
    {
      id: "information",
      title: "Information",
      links: [
        { text: "Cookie Policy", href: "#" },
        { text: "Privacy Policy", href: "#" },
      ],
    },
    {
      id: "businessHours",
      title: "Business Hours",
      items: [
        "Monday: 9:00 - 18:00",
        "Tuesday: 9:00 - 18:00",
        "Wednesday: 9:00 - 18:00",
        "Thursday: 9:00 - 18:00",
        "Friday: 9:00 - 18:00",
        "Saturday: 9:00 - 14:00",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <img
        src={Icons.backgroundLogo}
        alt="background-logo"
        className="absolute top-4/12 lg:top-28 lg:left-4/12 opacity-20"
      />

      <div className="section-padding pt-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-7 gap-8">
          {footerSections.map((section) => (
            <div key={section.id} className="w-full">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between text-left lg:hidden mb-4"
              >
                <h3 className="text-xl font-bold text-[#f2f2f2]">
                  {section.title}
                </h3>
                <img
                  src={Icons.down}
                  alt="dropdown-arrow"
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openSections[section.id] ? "rotate-180" : ""
                  }`}
                />
              </button>
              <h3 className="text-2xl font-bold text-[#F2F2F2] mb-4 hidden lg:block">
                {section.title}
              </h3>
              <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${
                  openSections[section.id] ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="space-y-2 pb-4">
                  {section.links
                    ? section.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          className="block text-[#F2F2F2] text-base"
                        >
                          {link.text}
                        </a>
                      ))
                    : section.items?.map((item, index) => (
                        <span
                          key={index}
                          className="block text-[#F2F2F2] text-base"
                        >
                          {item}
                        </span>
                      ))}
                </div>
              </div>
              <div className="hidden lg:block space-y-2">
                {section.links
                  ? section.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="block text-[#F2F2F2] hover:text-primary transition-colors text-base"
                      >
                        {link.text}
                      </a>
                    ))
                  : section.items?.map((item, index) => (
                      <span key={index} className="block text-[#F2F2F2] text-base">
                        {item}
                      </span>
                    ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex gap-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img src={Icons.facebook} alt="facebook" className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img src={Icons.instagram} alt="instagram" className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img src={Icons.tiktok} alt="tiktok" className="w-6 h-6" />
            </a>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
            <p className="text-[#F2F2F2] text-sm text-center lg:text-right">
              © {new Date().getFullYear()} Yamaha Matakos. All rights reserved.
            </p>
            <a href="https://sotdask.gr" target="_blank" className="text-[#F2F2F2] text-sm text-center lg:text-right flex items-center gap-1">
              Created using{" "}
              <span className="inline-block animate-sparkle">✨</span> by SD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
