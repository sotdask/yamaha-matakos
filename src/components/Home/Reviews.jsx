import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Title } from "../../assets/ui";
import { Icons } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { LinkButton } from "../../assets/ui";

const Reviews = () => {
  const { t } = useTranslation();
  const swiperRef = useRef(null);

  return (
    <div className="my-(--html-spacing) section-padding flex flex-col items-center">
      <Title text={t("reviews.title")} />
      <p className="lg:w-6/12 text-base lg:text-lg mt-5 text-center">
        {t("reviews.description")}
      </p>
      <div className="mt-4">
        <h5 className="uppercase text-[#720303] font-bold text-2xl text-center">
          {t("reviews.yamahaMatakos")}
        </h5>
        <div className="stars-wrapper mt-2 flex gap-x-3">
          <img src={Icons.star} alt="Five star rating" />
          <img src={Icons.star} alt="" />
          <img src={Icons.star} alt="" />
          <img src={Icons.star} alt="" />
          <img src={Icons.star} alt="" />
        </div>
        <p className="text-base text-[#2C2828] tracking-wide text-center mt-2">
          {t("reviews.withOverRatings")}
        </p>
      </div>
      <div className="w-full mt-8 mb-8">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoHeight={false}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className="mySwiper reviews-swiper"
        >
          <SwiperSlide className="h-auto">
            <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={Icons.star} alt="Star rating" className="w-5 h-5" />
                ))}
              </div>
              <p className="text-[#2C2828] text-base mb-4 grow">
                {t("reviews.review1.text")}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#720303] text-lg">
                  {t("reviews.review1.name")}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  {t("reviews.review1.date")}
                </p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="h-auto">
            <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={Icons.star} alt="Star rating" className="w-5 h-5" />
                ))}
              </div>
              <p className="text-[#2C2828] text-base mb-4 grow">
                {t("reviews.review2.text")}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#720303] text-lg">
                  {t("reviews.review2.name")}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  {t("reviews.review2.date")}
                </p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="h-auto">
            <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={Icons.star} alt="Star rating" className="w-5 h-5" />
                ))}
              </div>
              <p className="text-[#2C2828] text-base mb-4 grow">
                {t("reviews.review3.text")}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#720303] text-lg">
                  {t("reviews.review3.name")}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  {t("reviews.review3.date")}
                </p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="h-auto">
            <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={Icons.star} alt="Star rating" className="w-5 h-5" />
                ))}
              </div>
              <p className="text-[#2C2828] text-base mb-4 grow">
                {t("reviews.review4.text")}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#720303] text-lg">
                  {t("reviews.review4.name")}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  {t("reviews.review4.date")}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
            <div className="hidden lg:flex justify-center gap-6 mt-4 mb-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="cursor-pointer hover:opacity-70 transition-opacity duration-300"
          aria-label="Previous slide"
        >
          <img src={Icons.leftArrow} alt="View previous review" className="w-12" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="cursor-pointer hover:opacity-70 transition-opacity duration-300"
          aria-label="Next slide"
        >
          <img src={Icons.rightArrow} alt="View next review" className="w-12" />
        </button>
      </div>
      <div className="flex justify-center gap-6 mt-4 lg:hidden">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="cursor-pointer hover:opacity-70 transition-opacity duration-300"
          aria-label="Previous slide"
        >
          <img src={Icons.leftArrow} alt="View previous review" className="w-12" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="cursor-pointer hover:opacity-70 transition-opacity duration-300"
          aria-label="Next slide"
        >
          <img src={Icons.rightArrow} alt="View next review" className="w-12" />
        </button>
      </div>
      
      <div className="wrapper flex justify-center mt-12">
        <LinkButton to="https://www.google.com/search?sca_esv=38e51a907b0f751b&hl=en&sxsrf=AE3TifPPhO1mrs1z9JErEsFDZEph5Dzx1g:1764973373370&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMcFu7HxW0sB83V5Xig8A6EErFGi55swFbqDN0abwqzcq7YgRw-aGCfgs6kR90UluH0uGmHoZYcNNv_NTkBJJOXfy_Ze-&q=Yamaha+Matakos+Reviews&sa=X&ved=2ahUKEwj8ttSXvqeRAxVOcfEDHamfD40Q0bkNegQIJxAE" target="_blank" text={t("common.leaveReview")} />
      </div>
    </div>
  );
};

export default Reviews;
