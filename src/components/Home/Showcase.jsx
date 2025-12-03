import React from "react";
import { useTranslation } from "react-i18next";
import { Title } from "../../assets/ui";
import { Images } from "../../assets/assets";
import { LinkButton } from "../../assets/ui";

const Showcase = () => {
  const { t } = useTranslation();
  
  const SHOWCASE_CARDS = [
    {
      title: t("showcase.hyperNaked"),
      image: Images.categoryFirst,
      href: "#",
      modelLabel: t("showcase.mt09"),
      description: t("showcase.description"),
    },
    {
      title: t("showcase.hyperNaked"),
      image: Images.categoryFirst,
      href: "#",
      modelLabel: t("showcase.mt09"),
      description: t("showcase.description"),
    },
    {
      title: t("showcase.hyperNaked"),
      image: Images.categoryFirst,
      href: "#",
      modelLabel: t("showcase.mt09"),
      description: t("showcase.description"),
    },
    {
      title: t("showcase.hyperNaked"),
      image: Images.categoryFirst,
      href: "#",
      modelLabel: t("showcase.mt09"),
      description: t("showcase.description"),
    },
  ];

  return (
    <div className="mb-(--html-spacing) section-padding">
      <Title text={t("showcase.title")} />
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 justify-items-center mt-7 lg:mt-12 gap-3 lg:gap-4">
        {SHOWCASE_CARDS.map((showcase) => (
          <article
            key={showcase.title}
            className="card mt-12 w-full min-h-[400px] md:w-11/12 lg:w-11/12 relative overflow-hidden group cursor-pointer"
          >
            <img
              src={Images.categoryFirst}
              alt={showcase.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="overlay absolute inset-0 w-full h-full bg-black/40 z-10 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="z-20 px-4 lg:px-12 lg:w-10/12 flex justify-center text-white menu absolute inset-0 lg:hidden lg:group-hover:flex flex-col">
              <h4 className="text-lg tracking-wider">{showcase.title}</h4>
              <h3 className="text-primary font-bold text-3xl lg:text-5xl">
                {showcase.modelLabel}
              </h3>
              <p className="text-sm lg:text-base">{showcase.description}</p>
              <a
                href={showcase.href}
                className="uppercase font-bold border-2 border-white text-white inline-block w-fit px-6 py-2 mt-2 lg:mt-4 text-sm hover:bg-white hover:text-black transition-all duration-300"
              >
                {t("common.makeItYours")}
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="wrapper flex justify-center mt-12">
        <LinkButton to="/" text={t("common.viewMore")} />
      </div>
    </div>
  );
};

export default Showcase;
