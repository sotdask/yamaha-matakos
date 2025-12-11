import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Title } from "../../assets/ui";
import { Icons } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Partners = () => {
  const { t } = useTranslation();
  const swiperRef = useRef(null);

  return (
    <div className="mb-(--html-spacing) section-padding">
      <div data-aos="fade-up">
        <Title text={t("partners.title")} />
      </div>
      <div className="wrapper flex flex-col lg:flex-row lg:justify-between mt-7 lg:mt-12 mb-5 lg:mb-10" data-aos="fade-up" data-aos-delay="100">
        <p className="w-full lg:max-w-4/12 text-lg mb-6 lg:mb-0 text-center lg:text-start">
          {t("partners.description")}
        </p>
        <div className="hidden lg:flex gap-6">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="cursor-pointer hover:opacity-70 transition-opacity duration-300"
            aria-label="Previous slide"
          >
            <img
              src={Icons.leftArrow}
              alt="View previous partner"
              className="w-12"
            />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="cursor-pointer hover:opacity-70 transition-opacity duration-300"
            aria-label="Next slide"
          >
            <img
              src={Icons.rightArrow}
              alt="View next partner"
              className="w-12"
            />
          </button>
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={2}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={Icons.shark}
            alt="Yamaha Matakos partner logo"
            className="w-full h-auto object-contain border-2 border-primary rounded-4xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Icons.richa}
            alt="Yamaha Matakos partner logo"
            className="w-full h-auto object-contain border-2 border-primary rounded-4xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Icons.akrapovic}
            alt="Yamaha Matakos partner logo"
            className="w-full h-auto object-contain border-2 border-primary rounded-4xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Icons.alpinestars}
            alt="Yamaha Matakos partner logo"
            className="w-full h-auto object-contain border-2 border-primary rounded-4xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Icons.rockoil}
            alt="Yamaha Matakos partner logo"
            className="w-full h-auto object-contain border-2 border-primary rounded-4xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Icons.yamalube}
            alt="Yamaha Matakos partner logo"
            className="w-full h-auto object-contain border-2 border-primary rounded-4xl"
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center gap-6 mt-6 lg:hidden">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="cursor-pointer hover:opacity-70 transition-opacity duration-300"
          aria-label="Previous slide"
        >
          <img
            src={Icons.leftArrow}
            alt="View previous partner"
            className="w-12"
          />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="cursor-pointer hover:opacity-70 transition-opacity duration-300"
          aria-label="Next slide"
        >
          <img
            src={Icons.rightArrow}
            alt="View next partner"
            className="w-12"
          />
        </button>
      </div>
    </div>
  );
};

export default Partners;
