
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const TestimonialsSection = () => {
  const { t } = useTranslation(["testimonialsSection"]);

  return (
    <Suspense fallback="loading">
      <section id="testimonials" className="max-w-[1200px] px-2 mx-auto space-y-8 min-h-screen flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-center text-gray-800">{t("title")}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t("testimonialsData", { returnObjects: true }).map((testimonial, index) => (
            <div key={index} className="text-center">
              <p className="text-gray-600 italic">{testimonial.quote}</p>
              <p className="mt-2 text-sm text-gray-500">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>
    </Suspense>
  );
};

export default TestimonialsSection;
