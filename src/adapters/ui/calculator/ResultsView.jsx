import React from "react";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

export default function ResultsView({ results }) {
  const { t, i18n } = useTranslation(["resultsView"]);

  const texts = {
    title: "CalculadfdfgdfResults",
    monthlyExpenses: "Monthly Expenses",
    weeklyHours: "Weekly Hours",
    priceWithoutAdditional: "Price Without Additional",
    finalPriceWithAdditional: "Final Pfgdfgrice With Additional",
    totalSalaryWithoutAdditional: "Total Salary Without Additional",
    totalSalaryWithAdditional: "Total Salarydfdf With Additional",
  };

  if (!results) {
    return null; // Si no hay resultados, no renderizamos nada
  }

  return (
    <Suspense fallback="loading...">
      <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">{t("title")}</h2>

        <div className="mb-4">
          <p><strong>{t("monthlyExpenses")}:</strong> ${results.monthlyExpenses.toFixed(2)}</p>
          <p><strong>{t("weeklyHours")}:</strong> {results.weeklyHours} hours</p>
        </div>

        <div className="mb-4">
          <p><strong>{t("priceWithoutAdditional")}:</strong> ${results.priceWithoutAdditional.toFixed(2)}</p>
          <p><strong>{t("finalPriceWithAdditional")}:</strong> ${results.finalPrice.toFixed(2)}</p>
        </div>

        <div className="mb-4">
          <p><strong>{t("totalSalaryWithoutAdditional")}:</strong> ${results.totalSalaryWithoutAdditional.toFixed(2)}</p>
          <p><strong>{t("totalSalaryWithAdditional")}:</strong> ${results.totalSalaryWithAdditional.toFixed(2)}</p>
        </div>
      </div>
    </Suspense>
  );
}
