import React from "react";
import { useTranslation } from "react-i18next";
import { Title } from "../../assets/ui";
import { Images } from "../../assets/assets";

const Explore = () => {
  const { t } = useTranslation();

  const CATEGORY_CARDS = [
    {
      title: t("explore.motorcycles"),
      image: Images.motorcycleCategory,
      href: "https://www.yamaha-motor.eu/gr/el/motorcycles/",
      modelsLabel: t("explore.modelsLabel.motorcycles"),
      description: t("explore.motorcyclesDescription"),
    },
    {
      title: t("explore.scooters"),
      image: Images.scooterCategory,
      href: "https://www.yamaha-motor.eu/gr/el/scooters/",
      modelsLabel: t("explore.modelsLabel.scooters"),
      description: t("explore.scootersDescription"),
    },
    {
      title: t("explore.eBikes"),
      image: Images.bikeCategory,
      href: "https://www.yamaha-motor.eu/gr/el/ebike/",
      modelsLabel: t("explore.modelsLabel.eBikes"),
      description: t("explore.eBikesDescription"),
    },
  ];

  return (
    <div className="mb-(--html-spacing) section-padding">
      <Title text={t("explore.title")} />
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-7 lg:mt-12 gap-y-12">
        {CATEGORY_CARDS.map((category) => (
          <article
            key={category.title}
            className="group relative isolate flex w-full xs:w-10/12 sm:w-8/12 md:w-10/12 flex-col overflow-hidden border border-white/10 bg-white/5 p-0.5 shadow-[0_35px_80px_-25px_rgba(0,0,0,0.65)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_45px_90px_-25px_rgba(114,3,3,0.55)]"
          >
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex h-full flex-col bg-black/80">
              <div className="relative overflow-hidden">
                <a href={category.href} target="_blank">
                  <img
                    src={category.image}
                    alt={`${category.title} category`}
                    className="h-80 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                  />
                </a>
                <span className="absolute left-5 top-5 inline-flex items-center rounded-3xl bg-white/15 px-4 py-1 text-xs uppercase tracking-wider text-black/80 font-bold backdrop-blur">
                  {category.modelsLabel}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-6 px-7 py-3">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    {category.description}
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <a
                    href={category.href}
                    target="_blank"
                    className="uppercase font-bold border-2 border-white text-white inline-block w-fit px-2 py-2 mb-3 text-sm hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {t("common.exploreMore")}
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Explore;
