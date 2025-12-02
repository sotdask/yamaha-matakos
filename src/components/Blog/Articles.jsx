import React from "react";
import { Images } from "../../assets/assets";

function Articles() {
  const ARTICLE_CARDS = [
    {
      subtitle: "THE NMAX ARE NOW PART OF THE MAX FAMILY!",
      title: "NEW NMAX 125 & NMAX 125 TECH MAX",
      image: Images.article,
      href: "#",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, cRackham.",
      date: "December 1, 2025",
    },
    {
      subtitle: "THE NMAX ARE NOW PART OF THE MAX FAMILY!",
      title: "NEW NMAX 125 & NMAX 125 TECH MAX",
      image: Images.article,
      href: "#",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, cRackham.",
      date: "December 1, 2025",
    },
    {
      subtitle: "THE NMAX ARE NOW PART OF THE MAX FAMILY!",
      title: "NEW NMAX 125 & NMAX 125 TECH MAX",
      image: Images.article,
      href: "#",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, cRackham.",
      date: "December 1, 2025",
    },
  ];

  return (
    <div className="my-(--html-spacing) section-padding flex flex-col items-center">
      <p className="text-center text-lg max-w-[90%] lg:max-w-[45%]">
        Explore the world of{" "}
        <span className="font-bold text-primary">Yamaha</span> with our latest
        articles. Here, we go beyond the showroom. We share riding inspiration,
        maintenance advice, product comparisons, and real experiences that bring
        the Yamaha spirit to life.
      </p>
      <div className="w-full flex flex-col items-center gap-y-12 mt-7">
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
            <div className="text-col bg-secondary py-8 md:py-0 justify-center px-6 md:px-12 flex flex-col gap-3">
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
                  explore more
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
