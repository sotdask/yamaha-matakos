import React, { useRef } from "react";
import { Title } from "../../assets/ui";
import { Icons } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { LinkButton } from "../../assets/ui";

const Reviews = () => {
  const swiperRef = useRef(null);

  return (
    <div className="my-(--html-spacing) section-padding flex flex-col items-center">
      <Title text="real stories. real results" />
      <p className="lg:w-6/12 text-base lg:text-lg mt-5 text-center">
        Our results in Yamaha Matakos speak for themselves, but our customers
        say it best. Explore the real stories and experiences of people who have
        trusted us with their needs.
      </p>
      <div className="mt-4">
        <h5 className="uppercase text-[#720303] font-bold text-2xl text-center">
          yamaha matakos
        </h5>
        <div className="stars-wrapper mt-2 flex gap-x-3">
          <img src={Icons.star} alt="" />
          <img src={Icons.star} alt="" />
          <img src={Icons.star} alt="" />
          <img src={Icons.star} alt="" />
          <img src={Icons.star} alt="" />
        </div>
        <p className="text-base text-[#2C2828] tracking-wide text-center mt-2">
          With over 500 ratings
        </p>
      </div>
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
            <div className="wrapper flex justify-center mt-12">
              <LinkButton to="/" text="LEAVE A REVIEW" />
            </div>
    </div>
  );
};

export default Reviews;
