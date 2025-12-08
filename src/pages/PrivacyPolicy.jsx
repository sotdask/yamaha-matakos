import React from "react";
import { Header, Footer } from "../components";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="mt-[94px] section-padding py-3.5 bg-[#C2BABA]">
        <h1 className="font-bold text-[#720303] text-lg text-center md:text-start md:text-xl">
          {t("privacyPolicy.title").toUpperCase()}
        </h1>
      </div>
      <div className="my-(--html-spacing) section-padding max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <div className="space-y-6 text-[#2C2828]">
            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("privacyPolicy.introduction.title")}
              </h2>
              <p className="text-base leading-relaxed">
                {t("privacyPolicy.introduction.text")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("privacyPolicy.dataCollection.title")}
              </h2>
              <p className="text-base leading-relaxed mb-4">
                {t("privacyPolicy.dataCollection.text")}
              </p>
              <ul className="list-disc list-inside space-y-2 text-base ml-4">
                <li>{t("privacyPolicy.dataCollection.item1")}</li>
                <li>{t("privacyPolicy.dataCollection.item2")}</li>
                <li>{t("privacyPolicy.dataCollection.item3")}</li>
                <li>{t("privacyPolicy.dataCollection.item4")}</li>
                <li>{t("privacyPolicy.dataCollection.item5")}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("privacyPolicy.howWeUseData.title")}
              </h2>
              <p className="text-base leading-relaxed mb-4">
                {t("privacyPolicy.howWeUseData.text")}
              </p>
              <ul className="list-disc list-inside space-y-2 text-base ml-4">
                <li>{t("privacyPolicy.howWeUseData.item1")}</li>
                <li>{t("privacyPolicy.howWeUseData.item2")}</li>
                <li>{t("privacyPolicy.howWeUseData.item3")}</li>
                <li>{t("privacyPolicy.howWeUseData.item4")}</li>
                <li>{t("privacyPolicy.howWeUseData.item5")}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("privacyPolicy.dataSharing.title")}
              </h2>
              <p className="text-base leading-relaxed">
                {t("privacyPolicy.dataSharing.text")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("privacyPolicy.dataSecurity.title")}
              </h2>
              <p className="text-base leading-relaxed">
                {t("privacyPolicy.dataSecurity.text")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("privacyPolicy.yourRights.title")}
              </h2>
              <p className="text-base leading-relaxed mb-4">
                {t("privacyPolicy.yourRights.text")}
              </p>
              <ul className="list-disc list-inside space-y-2 text-base ml-4">
                <li>{t("privacyPolicy.yourRights.item1")}</li>
                <li>{t("privacyPolicy.yourRights.item2")}</li>
                <li>{t("privacyPolicy.yourRights.item3")}</li>
                <li>{t("privacyPolicy.yourRights.item4")}</li>
                <li>{t("privacyPolicy.yourRights.item5")}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("privacyPolicy.dataRetention.title")}
              </h2>
              <p className="text-base leading-relaxed">
                {t("privacyPolicy.dataRetention.text")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("privacyPolicy.childrenPrivacy.title")}
              </h2>
              <p className="text-base leading-relaxed">
                {t("privacyPolicy.childrenPrivacy.text")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("privacyPolicy.updates.title")}
              </h2>
              <p className="text-base leading-relaxed">
                {t("privacyPolicy.updates.text")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#720303] mb-4">
                {t("privacyPolicy.contact.title")}
              </h2>
              <p className="text-base leading-relaxed">
                {t("privacyPolicy.contact.text")}
              </p>
              <p className="text-base leading-relaxed mt-2">
                <strong>{t("privacyPolicy.contact.email")}:</strong> info@yamaha-matakos.gr
              </p>
              <p className="text-base leading-relaxed">
                <strong>{t("privacyPolicy.contact.phone")}:</strong> +30 2310522774
              </p>
              <p className="text-base leading-relaxed mt-2">
                <strong>{t("privacyPolicy.contact.address")}:</strong> Λαγκαδά 126, Θεσσαλονίκη
              </p>
            </div>

            <div className="pt-4 text-sm text-gray-600">
              <p>{t("privacyPolicy.lastUpdated")}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;


