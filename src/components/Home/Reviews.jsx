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
      <div className="flex justify-center gap-6 mt-6 lg:hidden">
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
              <LinkButton to="/" text={t("common.leaveReview")} />
            </div>
    </div>
  );
};

export default Reviews;
