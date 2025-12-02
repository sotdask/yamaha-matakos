import React from "react";
import { Header, Footer, Articles } from "../components";

const Blog = () => {
  return (
    <>
      <Header />
      <div className="mt-[94px] section-padding py-3.5 bg-[#C2BABA]">
        <h1 className="font-bold text-[#720303] text-lg text-center md:text-start md:text-xl">
          ARTICLES
        </h1>
      </div>
      <Articles/>
      <Footer />
    </>
  );
};

export default Blog;
