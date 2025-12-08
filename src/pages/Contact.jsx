import React from "react";
import { Header, Footer, ContactOptions, Map } from "../components";
import { Title } from "../assets/ui";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="mt-[94px] section-padding py-3.5 bg-[#C2BABA]">
        <h1 className="font-bold text-[#720303] text-lg text-center md:text-start md:text-xl">
          {t("contact.title").toUpperCase()}
        </h1>
      </div>
      <div className="my-(--html-spacing) section-padding">
        <Title text="reach out to us" />
        <ContactOptions />
        <Map/>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
