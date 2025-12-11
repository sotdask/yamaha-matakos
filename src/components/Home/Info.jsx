import React from "react";
import { useTranslation } from "react-i18next";
import { Title } from "../../assets/ui";
import { Icons } from "../../assets/assets";

const Info = () => {
  const { t } = useTranslation();
  return (
    <div className="my-(--html-spacing) section-padding flex flex-col items-center relative ">
      <img
        src={Icons.backgroundLogo}
        alt="Yamaha Matakos decorative background logo"
        className="absolute top-0 lg:top-0 select-none w-11/12 h-11/12"
      />
      <div data-aos="fade-up">
        <Title text={t("info.title")} />
      </div>
      <div className="wrapper text-center mt-8 lg:mt-12 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
        <p>
          {t("info.description")}
        </p>
      </div>
    </div>
  );
};

export default Info;



