import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icons } from "../assets/assets";

function Footer() {
  const { t } = useTranslation();
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
      title: t("footer.ourCompany"),
      links: [
        { text: t("footer.homepage"), href: "/" },
        { text: t("footer.aboutUs"), href: "/about" },
        { text: t("footer.news"), href: "#" },
        { text: t("footer.workshop"), href: "#" },
        { text: t("footer.contact"), href: "#" },
        { text: t("footer.accessories"), href: "#" },
        { text: t("footer.clothing"), href: "#" },
        { text: t("footer.maintenance"), href: "#" },
        { text: t("footer.ridingGear"), href: "#" },
      ],
    },
    {
      id: "motorcycles",
      title: t("footer.motorcycles"),
      links: [
        { text: t("footer.supersport"), href: "#" },
        { text: t("footer.hyperNaked"), href: "#" },
        { text: t("footer.sportHeritage"), href: "#" },
        { text: t("footer.sportTouring"), href: "#" },
        { text: t("footer.offRoadCompetition"), href: "#" },
        { text: t("footer.adventure"), href: "#" },
      ],
    },
    {
      id: "scooters",
      title: t("footer.scooters"),
      links: [
        { text: t("footer.sport"), href: "#" },
        { text: t("footer.urbanMobility"), href: "#" },
      ],
    },
    {
      id: "ebikes",
      title: t("footer.eBikes"),
      links: [
        { text: t("footer.mountain"), href: "#" },
        { text: t("footer.urban"), href: "#" },
        { text: t("footer.gravel"), href: "#" },
      ],
    },
    {
      id: "getInTouch",
      title: t("footer.getInTouch"),
      links: [
        { text: t("footer.address"), href: "#" },
        { text: t("footer.phone"), href: "tel:2310522774" },
        { text: t("footer.email"), href: "mailto:info@yamaha-matakos.gr" },
      ],
    },
    {
      id: "information",
      title: t("footer.information"),
      links: [
        { text: t("footer.cookiePolicy"), href: "#" },
        { text: t("footer.privacyPolicy"), href: "#" },
      ],
    },
    {
      id: "businessHours",
      title: t("footer.businessHours"),
      items: [
        t("footer.monday"),
        t("footer.tuesday"),
        t("footer.wednesday"),
        t("footer.thursday"),
        t("footer.friday"),
        t("footer.saturday"),
        t("footer.sunday"),
      ],
    },
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <img
        src={Icons.backgroundLogo}
        alt="Yamaha Matakos decorative background logo"
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
                  alt="Expand or collapse section"
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
              <img src={Icons.facebook} alt="Visit our Facebook page" className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img src={Icons.instagram} alt="Visit our Instagram page" className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img src={Icons.tiktok} alt="Visit our TikTok page" className="w-6 h-6" />
            </a>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
            <p className="text-[#F2F2F2] text-sm text-center lg:text-right">
              © {new Date().getFullYear()} Yamaha Matakos. {t("footer.allRightsReserved")}
            </p>
            <a href="https://sotdask.gr" target="_blank" className="text-[#F2F2F2] text-sm text-center lg:text-right flex items-center gap-1">
              {t("footer.createdBy")}{" "}
              <span className="inline-block animate-sparkle">✨</span> {t("footer.by")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
