import React from "react";
import { Header, Footer, Articles } from "../components";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="mt-[94px] section-padding py-3.5 bg-[#C2BABA]">
        <h1 className="font-bold text-[#720303] text-lg text-center md:text-start md:text-xl">
          {t("blog.title").toUpperCase()}
        </h1>
      </div>
      <Articles/>
      <Footer />
    </>
  );
};

export default Blog;
