import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const FAQSection = () => {
  const { t } = useTranslation(["faqSection"]);
  return (
    <Suspense fallback="loading">
      <section id="faq" className="max-w-[1200px] px-2 mx-auto  space-y-8 min-h-screen flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-center text-gray-800">{t("title")}</h2>
        <div className="mt-8 space-y-6">
          {t("faqData", { returnObjects: true }).map((faq, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-700">{faq.question}</h3>
              <p className="text-sm text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </Suspense>
  );
};

export default FAQSection;
