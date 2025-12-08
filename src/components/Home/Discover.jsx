import React from "react";
import { useTranslation } from "react-i18next";
import { Title } from "../../assets/ui";
import { Images } from "../../assets/assets";
import { LinkButton } from "../../assets/ui";

const Discover = () => {
  const { t } = useTranslation();
  return (
    <div className="my-(--html-spacing) section-padding">
      <Title text={t("discover.title")} />
      <div className="wrapper gap-10 lg:gap-12 mt-8 lg:mt-12 flex flex-col lg:flex-row justify-center">
        <div className="card relative overflow-hidden group cursor-pointer h-64 lg:h-80 xl:h-92">
          <img
            src={Images.r6_article}
            alt="Article image: New NMAX 125 and NMAX 125 Tech MAX motorcycles"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="z-20 px-4 lg:px-12 lg:w-11/12 flex justify-center text-white menu absolute inset-0 flex-col">
            <h4 className="text-xl tracking-wide font-bold">
              {t("discover.article1.articleSubtitle")}
            </h4>
            <h3 className="font-bold text-2xl lg:text-4xl mt-2">
              {t("discover.article1.articleTitle")}
            </h3>
            <a
              href="#"
              title={`${t("common.readMore")} - ${t("discover.article1.articleTitle")}`}
              className="uppercase font-bold border-2 border-white text-white inline-block w-fit px-6 py-2 mt-2 lg:mt-4 text-sm lg:text-base hover:bg-white hover:text-black transition-all duration-300"
            >
              {t("common.readMore")}
            </a>
          </div>
        </div>
        <div className="card relative overflow-hidden group cursor-pointer h-64 lg:h-80 xl:h-92">
          <img
            src={Images.tmax_article}
            alt="Article image: New NMAX 125 and NMAX 125 Tech MAX motorcycles"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="z-20 px-4 lg:px-12 lg:w-11/12 flex justify-center text-white menu absolute inset-0 flex-col">
            <h4 className="text-xl tracking-wide font-bold">
              {t("discover.article2.articleSubtitle")}
            </h4>
            <h3 className="font-bold text-2xl lg:text-4xl mt-2">
              {t("discover.article2.articleTitle")}
            </h3>
            <a
              href="#"
              title={`${t("common.readMore")} - ${t("discover.article1.articleTitle")}`}
              className="uppercase font-bold border-2 border-white text-white inline-block w-fit px-6 py-2 mt-2 lg:mt-4 text-sm lg:text-base hover:bg-white hover:text-black transition-all duration-300"
            >
              {t("common.readMore")}
            </a>
          </div>
        </div>
      </div>
      <div className="wrapper flex justify-center mt-10 lg:mt-12">
        <LinkButton to="/blog" text={t("common.viewMoreArticles")} />
      </div>
    </div>
  );
};

export default Discover;
