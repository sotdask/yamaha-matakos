import React from "react";
import { useTranslation } from "react-i18next";
import { Images, Icons } from "../../assets/assets";
import { LinkButton } from "../../assets/ui";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full h-screen">
      <img
        src={Images.hero}
        alt="Yamaha motorcycle hero image showcasing freedom and adventure on the open road"
        className="w-full h-full object-cover"
        style={{ objectPosition: "25% 70%" }}
      />
      <div className="absolute inset-0 flex items-center justify-center md:justify-end px-6 xl:px-44 bg-black/40">
        <div className="px-6 pt-14 md:px-10 md:pt-18 text-[#C2BABA] w-full max-w-xl flex flex-col items-center">
          <h2  data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-center">
            Ride. Explore. Feel
          </h2>
          <h1  data-aos="fade-up" className="text-5xl md:text-6xl font-bold mt-4 mb-8 text-center">
            EXPERIENCE FREEDOM ON A MOTORBIKE
          </h1>
          <LinkButton to="/about" text={t("hero.findOutMore")} />
          <div className="socials flex gap-12 mt-14">
            <a
              href="https://www.facebook.com/yamahamatakos/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit our Facebook page"
              className="hover:scale-110 transition duration-300"
            >
              <img src={Icons.facebook} alt="Visit our Facebook page" />
            </a>
            <a
              href="https://www.instagram.com/yamaha.matakos/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit our Instagram page"
              className="hover:scale-110 transition duration-300"
            >
              <img src={Icons.instagram} alt="Visit our Instagram page" />
            </a>
            <a
              href="https://www.tiktok.com/@yamahamatakos"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit our TikTok page"
              className="hover:scale-110 transition duration-300"
            >
              <img src={Icons.tiktok} alt="Visit our TikTok page" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



