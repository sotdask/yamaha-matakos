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
        <div className="relative z-10 flex flex-col items-center pt-10 sm:pt-12 lg:pt-16">
          <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl px-4 sm:px-2.5 font-bold text-primary max-w-lg" data-aos="fade-up">
            {t("parallax.title")}
          </h3>
          <div className="flex flex-col lg:flex-row items-center gap-y-10 lg:gap-y-0 lg:gap-x-10 xl:gap-x-12 justify-between my-10 sm:my-12 lg:my-24 xl:my-36 w-full section-padding">
            <div className="wrapper flex flex-col items-center gap-y-4 sm:gap-y-5 lg:gap-y-7" data-aos="fade-up" data-aos-delay="100">
              <img src={Icons.pin_red} alt="Location map icon" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
              <a href="https://maps.app.goo.gl/3QezMT7MgEdZ7AqY9" target="_blank" title={t("parallax.address")} className="text-sm sm:text-base md:text-lg xl:text-2xl font-bold text-white text-center hover:text-[#720303] transition duration-300">{t("parallax.address")}</a>
            </div>
            <div className="wrapper flex flex-col items-center gap-y-4 sm:gap-y-5 lg:gap-y-7" data-aos="fade-up" data-aos-delay="200">
              <img src={Icons.phone_red} alt="Phone icon" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
              <a href="tel:2310522774" title={t("parallax.phone")} className="text-sm sm:text-base md:text-lg xl:text-2xl font-bold text-white hover:text-[#720303] transition duration-300">{t("parallax.phone")}</a>
            </div>
            <div className="wrapper flex flex-col items-center gap-y-4 sm:gap-y-5 lg:gap-y-7" data-aos="fade-up" data-aos-delay="300">
              <img src={Icons.mail_red} alt="Email icon" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
              <a href="mailto:info@yamaha-matakos.gr" title={t("parallax.email")} className="text-sm sm:text-base md:text-lg xl:text-2xl text-center font-bold text-white hover:text-[#720303] transition duration-300">{t("parallax.email")}</a>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxInfo;
