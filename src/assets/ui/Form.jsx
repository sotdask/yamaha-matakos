import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Form() {
  const { t } = useTranslation();
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus === "error") {
      setSubmitStatus(null);
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      setSubmitStatus("error");
      setErrorMessage(
        t("form.privacyRequired") ||
          "Παρακαλώ αποδεχτείτε την πολιτική απορρήτου"
      );
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");
    try {
      const API_ENDPOINT =
        import.meta.env.VITE_API_ENDPOINT ||
        "https://yamaha-matakos-backend.onrender.com/api/contact";
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        let errorMsg = `HTTP error! status: ${response.status}`;
        try {
          await response.json();
        } catch (err) {
          console.error("Could not parse JSON:", err);
        }
        throw new Error(errorMsg);
      }
      await response.json();
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsChecked(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      let userMessage =
        t("form.submitError") ||
        "Σφάλμα κατά την αποστολή. Παρακαλώ δοκιμάστε ξανά αργότερα.";
      if (
        error.message.includes("Failed to fetch") ||
        error.message.includes("NetworkError")
      ) {
        userMessage =
          "Δεν ήταν δυνατή η σύνδεση με τον server. Ελέγξτε τη σύνδεσή σας και δοκιμάστε ξανά.";
      } else {
        userMessage = error.message;
      }
      setSubmitStatus("error");
      setErrorMessage(userMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-secondary py-6 sm:py-8 lg:py-11 px-6 sm:px-8 lg:px-10 rounded-3xl w-full"
      noValidate
    >
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
              value={formData.firstName}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="border-2 border-primary rounded-2xl text-primary py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
              value={formData.lastName}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="border-2 border-primary rounded-2xl text-primary py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="border-2 border-primary rounded-2xl text-primary py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border-2 border-primary rounded-2xl text-primary py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full border-2 border-primary rounded-2xl text-primary py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
              disabled={isSubmitting}
              className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-primary rounded-md cursor-pointer appearance-none checked:bg-primary checked:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-1 transition-all duration-200 hover:border-[#720303] hover:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
              href="/privacy-policy"
              title={t("form.privacyPolicy")}
              className="text-[#720303] font-semibold underline hover:text-[#8a0404] transition-colors"
            >
              {t("form.privacyPolicy")}
            </a>
          </label>
        </div>

        {submitStatus === "success" && (
          <div
            className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg text-center"
            role="alert"
            aria-live="polite"
          >
            <p className="font-semibold">
              {t("form.submitSuccess") ||
                "Ευχαριστούμε! Το μήνυμά σας στάλθηκε επιτυχώς."}
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div
            className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg text-center"
            role="alert"
            aria-live="assertive"
          >
            <p className="font-semibold">
              {errorMessage ||
                t("form.submitError") ||
                "Σφάλμα κατά την αποστολή. Παρακαλώ δοκιμάστε ξανά."}
            </p>
          </div>
        )}

        <div className="pt-4 flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer uppercase font-bold border-2 border-primary text-primary inline-block w-fit px-4 py-2 text-sm hover:bg-primary hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {t("form.submitting") || "Αποστολή..."}
              </span>
            ) : (
              t("form.submit")
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
