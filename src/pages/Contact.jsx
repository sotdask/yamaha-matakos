import React from "react";
import { Header, Footer, ContactOptions, Map } from "../components";
import { Title } from "../assets/ui";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main id="main-content">
        <div className="mt-[94px] section-padding py-3.5 bg-[#C2BABA]" data-aos="fade-down">
          <h1 className="font-bold text-[#720303] text-lg text-center md:text-start md:text-xl">
            {t("contact.title").toUpperCase()}
          </h1>
        </div>
        <div className="my-(--html-spacing) section-padding">
          <div data-aos="fade-up">
            <Title text="reach out to us" />
          </div>
          <ContactOptions />
          <Map/>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
