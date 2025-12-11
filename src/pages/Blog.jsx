import React from "react";
import { Header, Footer, Articles } from "../components";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main id="main-content">
        <div className="mt-[94px] section-padding py-3.5 bg-[#C2BABA]" data-aos="fade-down">
          <h1 className="font-bold text-[#720303] text-lg text-center md:text-start md:text-xl">
            {t("blog.title").toUpperCase()}
          </h1>
        </div>
        <Articles/>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
