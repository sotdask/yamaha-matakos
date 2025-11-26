import React from "react";
import { Title } from "../../assets/ui";
import { Images } from "../../assets/assets";

const CATEGORY_CARDS = [
  {
    title: "Motorcycles",
    image: Images.motorcycleCategory,
    href: "#",
    modelsLabel: "12 models",
    description:
      "Discover the full range of Yamaha motorcycles, from agile commuters to track-ready legends built for performance.",
  },
  {
    title: "Scooters",
    image: Images.scooterCategory,
    href: "#",
    modelsLabel: "8 models",
    description:
      "Effortless city riding with clever storage, lightweight handling, and unmistakable Yamaha reliability.",
  },
  {
    title: "e-Bikes",
    image: Images.bikeCategory,
    href: "#",
    modelsLabel: "6 models",
    description:
      "Adventure-ready machines engineered to conquer the elements while keeping the ride smooth and controlled.",
  },
];

const Explore = () => {
  return (
    <div className="mb-(--html-spacing) section-padding">
      <Title text="explore yamaha" />
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-7 lg:mt-12 gap-y-12">
        {CATEGORY_CARDS.map((category) => (
          <article
            key={category.title}
            className="group relative isolate flex w-full xs:w-10/12 sm:w-8/12 md:w-10/12 flex-col overflow-hidden border border-white/10 bg-white/5 p-0.5 shadow-[0_35px_80px_-25px_rgba(0,0,0,0.65)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_45px_90px_-25px_rgba(114,3,3,0.55)]"
          >
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex h-full flex-col bg-black/80">
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={`${category.title} category`}
                  className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                />
                <span className="absolute left-5 top-5 inline-flex items-center rounded-3xl bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur">
                  {category.modelsLabel}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between gap-6 p-7">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {category.description}
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <span className="text-xs uppercase tracking-[0.4em] text-white/40">
                    Updated 2025
                  </span>
                  <a
                    href={category.href}
                    className="inline-flex items-center gap-2 self-start rounded-3xl bg-primary px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-primary/80 hover:shadow-[0_12px_25px_-10px_rgba(114,3,3,0.8)] hover:-translate-y-1"
                  >
                    Explore
                    <span className="text-lg leading-none">›</span>
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
