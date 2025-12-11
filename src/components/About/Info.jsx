import React from "react";
import { useTranslation } from "react-i18next";
import { Images, Icons } from "../../assets/assets";

function Info() {
  const { t } = useTranslation();
  return (
    <div className="my-(--html-spacing) section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-8 lg:gap-10">
      <div className="md:col-span-1 lg:col-span-6 flex flex-col gap-4" data-aos="fade-right">
        <video
          src={Images.video}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-auto object-cover rounded-lg shadow-lg pointer-events-none"
        >
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col gap-4 text-gray-700 text-base lg:text-lg">
          <p>
            <span className="text-primary font-bold">YAMAHA MATAKOS</span> {t("about.history")}
          </p>
          <p>
            {t("about.expansion")}
          </p>
          <p>
            {t("about.award")}
          </p>
          <p className="mt-6">
            {t("about.relocation")}
          </p>
          <p>
            {t("about.commitment")}
          </p>
        </div>
      </div>
      <div className="md:col-span-1 lg:col-span-3 flex flex-col" data-aos="fade-left">
        <img
          src={Images.inside_of_store}
          alt="Yamaha Matakos Award"
          className="w-full h-auto object-cover"
        />
        <div className="flex flex-col gap-4 bg-secondary text-gray-700 text-base lg:text-lg">
          <div className="inline-flex">
            <div className="bg-[#720303] text-white text-2xl font-bold py-2 px-4 tracking-wide">
              {t("about.openingHours")}
            </div>
          </div>
          <ul className="mt-8 lg:mt-10">
            <li className="text-center font-bold text-xl">
              {t("footer.monday")}
            </li>
            <li className="text-center font-bold text-xl">
              {t("footer.tuesday")}
            </li>
            <li className="text-center font-bold text-xl">
              {t("footer.wednesday")}
            </li>
            <li className="text-center font-bold text-xl">
              {t("footer.thursday")}
            </li>
            <li className="text-center font-bold text-xl">
              {t("footer.friday")}
            </li>
            <li className="text-center font-bold text-xl">
              {t("footer.saturday")}
            </li>
            <li className="text-center  font-bold text-xl">{t("footer.sunday")}</li>
          </ul>
          <ul className="text-center font-bold text-xl mt-6 mb-8 flex flex-col gap-y-6">
            <li>
              <a href="#" target="_blank" title={t("footer.address")} className="flex flex-col items-center hover:text-primary transition duration-300">
                <img src={Icons.pin} alt="Location pin icon" className="mb-2" />
                {t("footer.address")}
              </a>
            </li>
            <li>
              <a href="#" target="_blank" title={t("footer.phone")} className="flex flex-col items-center hover:text-primary transition duration-300">
                <img src={Icons.tel2} alt="Phone icon" className="mb-2"/>
                {t("footer.phone")}
              </a>
            </li>
            <li>
              <a href="#" target="_blank" title={t("footer.email")} className="flex flex-col items-center hover:text-primary transition duration-300">
                <img src={Icons.mail} alt="Email icon" className="mb-2" />
                {t("footer.email")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Info;
