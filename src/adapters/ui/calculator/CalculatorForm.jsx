import React, { useState } from "react";
import ResultsView from "./ResultsView"; // Importar el componente ResultsView
import { useCalculator } from "@/adapters/hooks/useCalculator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

export default function CalculatorForm() {
  const { t, i18n } = useTranslation(["calculatorForm"]); // Importar el hook useTranslation
  const {
    formData,
    results,
    error,
    updateFormData,
    addExpense,
    removeExpense,
    calculate,
  } = useCalculator();

  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = () => {
    calculate();
    setShowResults(true); // Muestra ResultsView después de calcular
  };

  const handleClear = () => {
    // Limpia el localStorage
    localStorage.removeItem("calculatorFormData");
    localStorage.removeItem("calculationResults");

    // Reinicia los estados locales
    updateFormData("salary", "");
    updateFormData("dailyHours", "");
    updateFormData("workDaysPerWeek", "");
    updateFormData("weeksWorked", "");
    updateFormData("expenses", []); // Limpia los gastos
    updateFormData("additionalPercentage", "");

    setExpenseName("");
    setExpenseAmount("");

    // Oculta ResultsView
    setShowResults(false);
  };


  return (
    <Suspense fallback="loading...">
      <Card className="p-6 max-w-2xl mx-auto mb-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{t("title")}</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Error Handling */}
          {error && <p className="text-red-500 mb-4">{t("error")}</p>}

          {/* Salary Input */}
          <div className="mb-4">
            <Label className="font-medium">{t("salary.label")}</Label>
            <Input
              type="number"
              value={formData.salary}
              onChange={(e) => updateFormData("salary", e.target.value)}
              placeholder={t("salary.placeholder")}
              className="mt-2"
            />
          </div>

          {/* Weekly Hours Inputs */}
          <div className="mb-4 grid grid-cols-3 gap-4">
            <div className="col-span-3 md:col-span-1">
              <Label className="font-medium">{t("weeklyHours.dailyHours.label")}</Label>
              <Input
                type="number"
                value={formData.dailyHours}
                onChange={(e) => updateFormData("dailyHours", e.target.value)}
                placeholder={t("weeklyHours.dailyHours.placeholder")}
                className="mt-2"
              />
            </div>
            <div className="col-span-3 md:col-span-1">
              <Label className="font-medium">{t("weeklyHours.workDaysPerWeek.label")}</Label>
              <Input
                type="number"
                value={formData.workDaysPerWeek}
                onChange={(e) => updateFormData("workDaysPerWeek", e.target.value)}
                placeholder={t("weeklyHours.workDaysPerWeek.placeholder")}
                className="mt-2"
              />
            </div>
            <div className="col-span-3 md:col-span-1">
              <Label className="font-medium">{t("weeklyHours.weeksWorked.label")}</Label>
              <Input
                type="number"
                value={formData.weeksWorked}
                onChange={(e) => updateFormData("weeksWorked", e.target.value)}
                placeholder={t("weeklyHours.weeksWorked.placeholder")}
                className="mt-2"
              />
            </div>
          </div>

          {/* Expense Inputs */}
          <div className="mb-4">
            <Label className="font-medium">{t("expenses.label")}</Label>
            <div className="flex flex-col md:flex-row
             gap-2 mt-2">
              <Input
                type="text"
                placeholder={t("expenses.namePlaceholder")}
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
                className="flex-grow"
              />
              <div className="flex justify-end">
                <Input
                  type="number"
                  placeholder={t("expenses.amountPlaceholder")}
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                  className="w-32"
                />
              </div>
              <Button
                onClick={() => {
                  addExpense(expenseName, expenseAmount);
                  setExpenseName("");
                  setExpenseAmount("");
                }}
              >
                {t("expenses.addButton")}
              </Button>
            </div>
            {/* Expense List */}
            <ul className="list-disc pl-5 mt-2">
              {formData.expenses.map((expense, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>
                    {expense.name}: ${expense.amount.toFixed(2)}
                  </span>
                  <Button
                    variant="link"
                    className="text-red-500"
                    onClick={() => removeExpense(index)}
                  >
                    {t("expenses.deleteButton")}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Percentage */}
          <div className="mb-4">
            <Label className="font-medium">{t("additionalPercentage.label")}</Label>
            <Input
              type="number"
              value={formData.additionalPercentage}
              onChange={(e) => updateFormData("additionalPercentage", e.target.value)}
              placeholder={t("additionalPercentage.placeholder")}
              className="mt-2"
            />
          </div>

          {/* Botón para calcular */}
          <Button className="w-full" onClick={handleCalculate}>
            {t("buttons.calculate")}
          </Button>
          {/* Botón para limpiar */}
          <Button variant="secondary" className="w-full mt-4" onClick={handleClear}>
            {t("buttons.clearResults")}
          </Button>

          {/* ResultsView controlado por showResults */}
          {showResults && <ResultsView results={results} error={t("resultError")} />}
        </CardContent>
      </Card>
    </Suspense>
  );
}
