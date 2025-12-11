import React from "react";
import { useTranslation } from "react-i18next";
import { Form } from "../../assets/ui";
import { Icons } from "../../assets/assets";

function ContactOptions() {
  const { t } = useTranslation();

  return (
    <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      <div className="order-2 lg:order-1 space-y-10" data-aos="fade-up">
        <div className="relative pl-8 border-l-4 border-primary">
          <div className="absolute -left-2.5 top-0 w-4 h-4 bg-primary rounded-full"></div>
          <h5 className="text-primary font-bold text-xl mb-3 uppercase tracking-wide">
            {t("contact.visitOurStore")}
          </h5>
          <a
            href="https://maps.app.goo.gl/J6jEdJdfhTZdmBDx5"
            target="_blank"
            rel="noopener noreferrer"
            title={t("contact.address")}
            className="flex items-start gap-3 text-gray-700 hover:text-primary transition-colors group"
          >
            <img
              src={Icons.pin_red}
              alt="Location"
              className="w-5 h-5 mt-1 shrink-0 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"
            />
            <span className="text-lg leading-relaxed">{t("contact.address")}</span>
          </a>
        </div>
        <div className="relative pl-8 border-l-4 border-primary">
          <div className="absolute -left-2.5 top-0 w-4 h-4 bg-primary rounded-full"></div>
          <h5 className="text-primary font-bold text-xl mb-4 uppercase tracking-wide">
            {t("contact.howToContactUs")}
          </h5>
          <div className="space-y-4">
            <a
              href="tel:+302310522774"
              title={t("footer.phone")}
              className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors group"
            >
              <img
                src={Icons.phone_red}
                alt="Phone"
                className="w-5 h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"
              />
              <span className="text-lg">{t("footer.phone")}</span>
            </a>
            <a
              href="mailto:info@yamaha-matakos.gr"
              title={t("footer.email")}
              className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors group"
            >
              <img
                src={Icons.mail_red}
                alt="Email"
                className="w-5 h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"
              />
              <span className="text-lg break-words">{t("footer.email")}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2" data-aos="fade-up" data-aos-delay="100">
        <Form />
      </div>
    </div>
  );
}

export default ContactOptions;
