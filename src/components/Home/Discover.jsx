import React from "react";
import { useTranslation } from "react-i18next";
import { Title } from "../../assets/ui";
import { Images } from "../../assets/assets";
import { LinkButton } from "../../assets/ui";

const Discover = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-(--html-spacing) section-padding">
      <Title text={t("discover.title")} />
      <div className="wrapper gap-12 mt-7 lg:mt-12 flex flex-col lg:flex-row justify-center">
        <div className="card relative overflow-hidden group cursor-pointer h-64 lg:h-80 xl:h-92">
          <img
            src={Images.article1}
            alt="Article image: New NMAX 125 and NMAX 125 Tech MAX motorcycles"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="z-20 px-4 lg:px-12 lg:w-9/12 flex justify-center text-white menu absolute inset-0 flex-col">
            <h4 className="text-xl tracking-wide font-bold">
              {t("discover.articleSubtitle")}
            </h4>
            <h3 className="font-bold text-2xl lg:text-4xl mt-2">
              {t("discover.articleTitle")}
            </h3>
            <a
              href="#"
              className="uppercase font-bold border-2 border-white text-white inline-block w-fit px-6 py-2 mt-2 lg:mt-4 text-sm lg:text-base hover:bg-white hover:text-black transition-all duration-300"
            >
              {t("common.readMore")}
            </a>
          </div>
        </div>
        <div className="card relative overflow-hidden group cursor-pointer h-64 lg:h-80 xl:h-92">
          <img
            src={Images.article2}
            alt="Article image: New NMAX 125 and NMAX 125 Tech MAX motorcycles"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="z-20 px-4 lg:px-12 lg:w-9/12 flex justify-center text-white menu absolute inset-0 flex-col">
            <h4 className="text-xl tracking-wide font-bold">
              {t("discover.articleSubtitle")}
            </h4>
            <h3 className="font-bold text-2xl lg:text-4xl mt-2">
              {t("discover.articleTitle")}
            </h3>
            <a
              href="#"
              className="uppercase font-bold border-2 border-white text-white inline-block w-fit px-6 py-2 mt-2 lg:mt-4 text-sm lg:text-base hover:bg-white hover:text-black transition-all duration-300"
            >
              {t("common.readMore")}
            </a>
          </div>
        </div>
      </div>
      <div className="wrapper flex justify-center mt-12">
        <LinkButton to="/blog" text={t("common.viewMoreArticles")} />
      </div>
    </div>
  );
};

export default Discover;
