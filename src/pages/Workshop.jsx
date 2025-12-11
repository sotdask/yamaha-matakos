import React from "react";
import { Header, Footer, WorkshopInfo, FAQ } from "../components";
import { useTranslation } from "react-i18next";

const Workshop = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main id="main-content">
        <div className="mt-[94px] section-padding py-3.5 bg-[#C2BABA]" data-aos="fade-down">
          <h1 className="font-bold text-[#720303] text-lg text-center md:text-start md:text-xl">
            {t("workshop.pageTitle").toUpperCase()}
          </h1>
        </div>
        <WorkshopInfo/>
        <FAQ/>
      </main>
      <Footer />
    </>
  );
};

export default Workshop;
