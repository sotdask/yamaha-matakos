import React, { useRef } from "react";
import { Title } from "../../assets/ui";
import { Icons } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Partners = () => {
  const swiperRef = useRef(null);

  return (
    <div className="mb-(--html-spacing) section-padding">
      <Title text="our partners" />
      <div className="wrapper flex flex-col lg:flex-row lg:justify-between mt-7 lg:mt-12 mb-5 lg:mb-10">
        <p className="w-full lg:max-w-4/12 text-lg mb-6 lg:mb-0 text-center lg:text-start">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <div className="hidden lg:flex gap-6">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="cursor-pointer hover:opacity-70 transition-opacity duration-300"
            aria-label="Previous slide"
          >
            <img src={Icons.leftArrow} alt="Previous" className="w-12" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="cursor-pointer hover:opacity-70 transition-opacity duration-300"
            aria-label="Next slide"
          >
            <img src={Icons.rightArrow} alt="Next" className="w-12" />
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
          <img src={Icons.partner} alt="Partner" className="w-full h-auto object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Icons.partner} alt="Partner" className="w-full h-auto object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Icons.partner} alt="Partner" className="w-full h-auto object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Icons.partner} alt="Partner" className="w-full h-auto object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Icons.partner} alt="Partner" className="w-full h-auto object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Icons.partner} alt="Partner" className="w-full h-auto object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Icons.partner} alt="Partner" className="w-full h-auto object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Icons.partner} alt="Partner" className="w-full h-auto object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Icons.partner} alt="Partner" className="w-full h-auto object-contain" />
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center gap-6 mt-6 lg:hidden">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="cursor-pointer hover:opacity-70 transition-opacity duration-300"
          aria-label="Previous slide"
        >
          <img src={Icons.leftArrow} alt="Previous" className="w-12" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="cursor-pointer hover:opacity-70 transition-opacity duration-300"
          aria-label="Next slide"
        >
          <img src={Icons.rightArrow} alt="Next" className="w-12" />
        </button>
      </div>
    </div>
  );
};

export default Partners;
