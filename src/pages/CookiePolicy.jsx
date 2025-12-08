import React from "react";
import { Header, Footer } from "../components";
import { useTranslation } from "react-i18next";

const CookiePolicy = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="mt-[94px] section-padding py-3.5 bg-[#C2BABA]">
        <h1 className="font-bold text-[#720303] text-lg text-center md:text-start md:text-xl">
          {t("cookiePolicy.title").toUpperCase()}
        </h1>
      </div>
      <div className="my-(--html-spacing) section-padding max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <div className="space-y-6 text-[#2C2828]">
            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("cookiePolicy.introduction.title")}
              </h2>
              <p className="text-base leading-relaxed">
                {t("cookiePolicy.introduction.text")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("cookiePolicy.whatAreCookies.title")}
              </h2>
              <p className="text-base leading-relaxed mb-4">
                {t("cookiePolicy.whatAreCookies.text")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("cookiePolicy.howWeUseCookies.title")}
              </h2>
              <p className="text-base leading-relaxed mb-4">
                {t("cookiePolicy.howWeUseCookies.text")}
              </p>
              <ul className="list-disc list-inside space-y-2 text-base ml-4">
                <li>{t("cookiePolicy.howWeUseCookies.item1")}</li>
                <li>{t("cookiePolicy.howWeUseCookies.item2")}</li>
                <li>{t("cookiePolicy.howWeUseCookies.item3")}</li>
                <li>{t("cookiePolicy.howWeUseCookies.item4")}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("cookiePolicy.typesOfCookies.title")}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#720303] mb-2">
                    {t("cookiePolicy.typesOfCookies.essential.title")}
                  </h3>
                  <p className="text-base leading-relaxed">
                    {t("cookiePolicy.typesOfCookies.essential.text")}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#720303] mb-2">
                    {t("cookiePolicy.typesOfCookies.analytics.title")}
                  </h3>
                  <p className="text-base leading-relaxed">
                    {t("cookiePolicy.typesOfCookies.analytics.text")}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#720303] mb-2">
                    {t("cookiePolicy.typesOfCookies.functional.title")}
                  </h3>
                  <p className="text-base leading-relaxed">
                    {t("cookiePolicy.typesOfCookies.functional.text")}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("cookiePolicy.managingCookies.title")}
              </h2>
              <p className="text-base leading-relaxed mb-4">
                {t("cookiePolicy.managingCookies.text")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("cookiePolicy.thirdPartyCookies.title")}
              </h2>
              <p className="text-base leading-relaxed">
                {t("cookiePolicy.thirdPartyCookies.text")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("cookiePolicy.updates.title")}
              </h2>
              <p className="text-base leading-relaxed">
                {t("cookiePolicy.updates.text")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("cookiePolicy.contact.title")}
              </h2>
              <p className="text-base leading-relaxed">
                {t("cookiePolicy.contact.text")}
              </p>
              <p className="text-base leading-relaxed mt-2">
                <strong>{t("cookiePolicy.contact.email")}:</strong> info@yamaha-matakos.gr
              </p>
              <p className="text-base leading-relaxed">
                <strong>{t("cookiePolicy.contact.phone")}:</strong> +30 2310522774
              </p>
            </div>

            <div className="pt-4 text-sm text-gray-600">
              <p>{t("cookiePolicy.lastUpdated")}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicy;


