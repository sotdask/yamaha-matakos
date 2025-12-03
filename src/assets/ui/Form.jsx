import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Form() {
  const { t } = useTranslation();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <form className="bg-secondary py-6 sm:py-8 lg:py-11 px-6 sm:px-8 lg:px-10 rounded-3xl w-full">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="space-y-3 flex flex-col w-full lg:w-1/2">
            <label
              htmlFor="firstName"
              className="block text-[#720303] font-semibold text-base sm:text-lg"
            >
              {t("form.firstName")}
            </label>
            <input
              type="text"
              placeholder={t("form.firstNamePlaceholder")}
              name="firstName"
              id="firstName"
              className="border-2 border-primary rounded-2xl text-primary py-3 px-4 w-full"
            />
          </div>
          <div className="space-y-3 flex flex-col w-full lg:w-1/2">
            <label
              htmlFor="lastName"
              className="block text-[#720303] font-semibold text-base sm:text-lg"
            >
              {t("form.lastName")}
            </label>
            <input
              type="text"
              placeholder={t("form.lastNamePlaceholder")}
              name="lastName"
              id="lastName"
              className="border-2 border-primary rounded-2xl text-primary py-3 px-4 w-full"
            />
          </div>
        </div>

        <div className="space-y-3 flex flex-col w-full">
          <label
            htmlFor="email"
            className="block text-[#720303] font-semibold text-base sm:text-lg"
          >
            {t("form.email")}
          </label>
          <input
            type="email"
            placeholder={t("form.emailPlaceholder")}
            name="email"
            id="email"
            className="border-2 border-primary rounded-2xl text-primary py-3 px-4 w-full"
          />
        </div>

        <div className="space-y-3 flex flex-col w-full">
          <label
            htmlFor="phone"
            className="block text-[#720303] font-semibold text-base sm:text-lg"
          >
            {t("form.phone")}
          </label>
          <input
            type="tel"
            placeholder={t("form.phonePlaceholder")}
            name="phone"
            id="phone"
            className="border-2 border-primary rounded-2xl text-primary py-3 px-4 w-full"
          />
        </div>

        <div className="space-y-3 w-full">
          <label
            htmlFor="message"
            className="block text-[#720303] font-semibold text-base sm:text-lg"
          >
            {t("form.message")}
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder={t("form.messagePlaceholder")}
            className="w-full border-2 border-primary rounded-2xl text-primary py-3 px-4"
          ></textarea>
        </div>
        <div className="flex items-start space-x-3 lg:col-span-2 mt-4">
          <div className="relative flex items-center justify-center mt-0.5 sm:mt-1">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-primary rounded-md cursor-pointer appearance-none checked:bg-primary checked:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-1 transition-all duration-200 hover:border-[#720303] hover:shadow-sm"
            />
            <svg
              className={`absolute w-3 h-3 sm:w-4 sm:h-4 pointer-events-none transition-opacity duration-200 ${
                isChecked ? "opacity-100" : "opacity-0"
              }`}
              fill="none"
              stroke="white"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <label
            htmlFor="privacy"
            className="text-primary text-sm sm:text-base md:text-lg cursor-pointer leading-relaxed flex-1"
          >
            {t("form.privacyAgreement")}{" "}
            <a
              href="#"
              className="text-[#720303] font-semibold underline hover:text-[#8a0404] transition-colors"
            >
              {t("form.privacyPolicy")}
            </a>
          </label>
        </div>
        <div className="pt-4 flex justify-center">
          <button className="cursor-pointer uppercase font-bold border-2 border-primary text-primary inline-block w-fit px-4 py-2 text-sm hover:bg-primary hover:text-white transition-all duration-300">
            {t("form.submit")}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
