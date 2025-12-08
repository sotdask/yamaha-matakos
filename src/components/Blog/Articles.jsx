import React from "react";
import { useTranslation } from "react-i18next";
import { Images } from "../../assets/assets";

function Articles() {
  const { t } = useTranslation();
  const ARTICLE_CARDS = [
    {
      subtitle: t("discover.article1.articleSubtitle"),
      title: t("discover.article1.articleTitle"),
      image: Images.r6_article,
      href: "#",
      description: t("info.description1"),
      date: "November 4, 2025",
    },
    {
      subtitle: t("discover.article2.articleSubtitle"),
      title: t("discover.article2.articleTitle"),
      image: Images.tmax_article,
      href: "#",
      description: t("info.description2"),
      date: "November 4, 2025",
    },
    {
      subtitle: t("discover.article3.articleSubtitle"),
      title: t("discover.article3.articleTitle"),
      image: Images.tenere_article,
      href: "#",
      description: t("info.description3"),
      date: "October 21, 2025",
    },
  ];

  return (
    <div className="my-(--html-spacing) section-padding flex flex-col items-center">
      <p className="text-center text-lg max-w-[90%] lg:max-w-[45%]">
        {t("blog.description")}
      </p>
      <div className="w-full flex flex-col items-center gap-y-10 lg:gap-y-12 mt-8 lg:mt-12">
        {ARTICLE_CARDS.map((article) => (
          <div className="article-card grid grid-cols-1 md:grid-cols-2">
            <div className="overflow-hidden">
              <a href={article.href}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full  object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>
            <div className="text-col bg-secondary py-8 md:py-0 justify-center px-6 md:px-12 flex flex-col gap-4">
              <h4 className="text-sm md:text-base font-semibold text-[#720303]">
                {article.subtitle}
              </h4>
              <h2 className="text-xl md:text-2xl font-bold">
                <a
                  href={article.href}
                  className="text-primary hover:text-[#720303] hover:tracking-wide transition-all duration-300"
                >
                  {article.title}
                </a>
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {article.description}
              </p>
              <span className="text-gray-500 text-sm">{article.date}</span>
              <div className="mt-2">
                <a
                  href={article.href}
                  className="uppercase font-bold border-2 border-primary text-primary inline-block w-fit px-4 py-2 text-sm hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {t("common.exploreMore")}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
