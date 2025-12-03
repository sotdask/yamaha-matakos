import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icons } from "../../assets/assets";
import { Title } from "../../assets/ui";

function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqQuestions = [
    {
      title: t("workshop.faq1"),
      info: t("workshop.faqAnswer"),
    },
    {
      title: t("workshop.faq2"),
      info: t("workshop.faqAnswer"),
    },
    {
      title: t("workshop.faq3"),
      info: t("workshop.faqAnswer"),
    },
    {
      title: t("workshop.faq4"),
      info: t("workshop.faqAnswer"),
    },
    {
      title: t("workshop.faq5"),
      info: t("workshop.faqAnswer"),
    },
  ];

  return (
    <div className="mb-(--html-spacing) section-padding">
      <Title text={t("workshop.title")} />
      <div className="max-w-4xl mx-auto mt-8">
        <div className="flex flex-col gap-4">
          {faqQuestions.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "ring-2 ring-[#720303] shadow-lg"
                  : "hover:shadow-lg"
              }`}
            >
              <button
                className="flex items-center justify-between w-full px-6 py-5 text-left cursor-pointer group"
                onClick={() => toggle(index)}
              >
                <span
                  className={`text-base md:text-lg font-semibold pr-4 transition-colors duration-300 ${
                    openIndex === index
                      ? "text-[#720303]"
                      : "text-gray-800 group-hover:text-[#720303]"
                  }`}
                >
                  {item.title}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-[#720303] rotate-180"
                      : "bg-gray-100 group-hover:bg-[#720303]/10"
                  }`}
                >
                  <img
                    src={Icons.down}
                    alt="Expand or collapse question"
                    className={`w-4 h-4 transition-all duration-300 ${
                      openIndex === index ? "brightness-0 invert" : ""
                    }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.info}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
