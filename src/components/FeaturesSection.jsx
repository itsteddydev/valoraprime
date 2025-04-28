
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const FeaturesSection = () => {
  const { t } = useTranslation(["featuresSection"]);
  return (
    <Suspense fallback="loading...">
      <section id="features" className=" max-w-[1200px] px-2 mx-auto space-y-8 min-h-screen flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-center text-gray-800">{t("title")}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t("featuresData", { returnObjects: true }).map((feature, index) => (
            <div key={index} className="text-center">
              <i className={`${feature.iconColor} text-4xl mb-2`}>{feature.icon}</i>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Suspense>
  );
};

export default FeaturesSection;
