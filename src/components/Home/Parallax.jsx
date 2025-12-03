import React from "react";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import { Images, Icons } from "../../assets/assets";

const ParallaxInfo = () => {
  const { t } = useTranslation();
  return (
    <Parallax 
      bgImage={Images.parallax} 
      bgImageAlt="Yamaha Matakos contact section background image" 
      strength={200}
      bgImageStyle={{
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 flex flex-col items-center pt-8 sm:pt-12 lg:pt-16">
          <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl px-4 sm:px-2.5 font-bold text-primary max-w-lg">
            {t("parallax.title")}
          </h3>
          <div className="flex flex-col lg:flex-row items-center gap-y-8 sm:gap-y-10 lg:gap-y-0 lg:gap-x-8 xl:gap-x-12 justify-between my-8 sm:my-12 lg:my-24 xl:my-36 w-full section-padding">
            <div className="wrapper flex flex-col items-center gap-y-4 sm:gap-y-5 lg:gap-y-7">
              <img src={Icons.parallaxMap} alt="Location map icon" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
              <a href="#" className="text-sm sm:text-base md:text-lg xl:text-2xl font-bold text-white text-center">{t("parallax.address")}</a>
            </div>
            <div className="wrapper flex flex-col items-center gap-y-4 sm:gap-y-5 lg:gap-y-7">
              <img src={Icons.parallaxPhone} alt="Phone icon" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
              <a href="#" className="text-sm sm:text-base md:text-lg xl:text-2xl font-bold text-white">{t("parallax.phone")}</a>
            </div>
            <div className="wrapper flex flex-col items-center gap-y-4 sm:gap-y-5 lg:gap-y-7">
              <img src={Icons.parallaxMail} alt="Email icon" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
              <a href="#" className="text-sm sm:text-base md:text-lg xl:text-2xl text-center font-bold text-white">{t("parallax.email")}</a>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxInfo;
