import React from "react";
import { useTranslation } from "react-i18next";
import { Title } from "../../assets/ui";
import { Images } from "../../assets/assets";
import { LinkButton } from "../../assets/ui";

const Showcase = () => {
  const { t } = useTranslation();

  const SHOWCASE_CARDS = [
    {
      title: "Sport Touring",
      image: Images.tracer_900_showcase,
      href: "https://www.yamaha-motor.eu/gr/el/motorcycles/sport-touring/pdp/tracer-9/#2025-MT09ATRS-VRSK",
      modelLabel: "Tracer 9",
      description: t("showcase.tracerDescription"),
    },
    {
      title: "Sport",
      image: Images.xmax_300_showcase,
      href: "https://www.yamaha-motor.eu/gr/el/scooters/sport/pdp/xmax-300/#2026-XMAX300A-DPBMC",
      modelLabel: "XMAX 300",
      description: t("showcase.xmaxDescription"),
    },
    {
      title: "Sport",
      image: Images.nmax_125_showcase,
      href: "https://www.yamaha-motor.eu/gr/el/scooters/sport/pdp/nmax-125/",
      modelLabel: "NMAX 125",
      description: t("showcase.nmaxDescription"),
    },
    {
      title: "Supersport",
      image: Images.r6_showcase,
      href: "https://www.yamaha-motor.eu/gr/el/motorcycles/supersport/pdp/r6-race/",
      modelLabel: "R6 RACE",
      description: t("showcase.r6Description"),
    },
  ];

  return (
    <div className="mb-(--html-spacing) section-padding">
      <Title text={t("showcase.title")} />
      <div className="max-w-7xl mx-auto mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
        {SHOWCASE_CARDS.map((showcase, index) => (
          <article
            key={index}
            className="card w-full h-[320px] md:h-[280px] lg:h-[350px] xl:h-[420px] relative overflow-hidden group cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={showcase.image}
              alt={showcase.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                target="_blank"
                className="uppercase font-bold border-2 border-white text-white inline-block w-fit px-6 py-2 mt-2 lg:mt-4 text-sm hover:bg-white hover:text-black transition-all duration-300"
              >
                {t("common.makeItYours")}
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="flex justify-center mt-8 lg:mt-12">
        <LinkButton to="https://www.yamaha-motor.eu/gr/el/motorcycles/" text={t("common.viewMore")} />
      </div>
    </div>
  );
};

export default Showcase;
