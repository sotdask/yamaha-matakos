import React from "react";
import { useTranslation } from "react-i18next";
import { Images, Icons } from "../../assets/assets";

function Info() {
  const { t } = useTranslation();
  return (
    <div className="my-(--html-spacing) section-padding">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="flex flex-col gap-5">
          <div>
            <img
              src={Images.workshop2}
              alt="Yamaha Workshop Technician"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-4 text-gray-700 text-center text-base lg:text-lg leading-relaxed">
            <p>
              {t("workshop.technicianDescription")}
            </p>
            <p>
              {t("workshop.partsDescription")}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <div className="w-11/12 md:w-9/12">
            <img
              src={Images.workshop1}
              alt="Yamaha Workshop"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
