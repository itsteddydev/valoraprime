import React, { useState } from "react";
import ResultsView from "./ResultsView"; // Importar el componente ResultsView
import { useCalculator } from "@/adapters/hooks/useCalculator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CalculatorForm() {
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

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Price Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Error Handling */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Salary Input */}
        <div className="mb-4">
          <Label className="font-medium">Basic Salary</Label>
          <Input
            type="number"
            value={formData.salary}
            onChange={(e) => updateFormData("salary", e.target.value)}
            placeholder="Enter your basic salary"
            className="mt-2"
          />
        </div>

        {/* Weekly Hours Inputs */}
        <div className="mb-4 grid grid-cols-3 gap-4">
          <div>
            <Label className="font-medium">Daily Hours</Label>
            <Input
              type="number"
              value={formData.dailyHours}
              onChange={(e) => updateFormData("dailyHours", e.target.value)}
              placeholder="e.g., 8"
              className="mt-2"
            />
          </div>
          <div>
            <Label className="font-medium">Work Days Per Week</Label>
            <Input
              type="number"
              value={formData.workDaysPerWeek}
              onChange={(e) => updateFormData("workDaysPerWeek", e.target.value)}
              placeholder="e.g., 5"
              className="mt-2"
            />
          </div>
          <div>
            <Label className="font-medium">Weeks Worked</Label>
            <Input
              type="number"
              value={formData.weeksWorked}
              onChange={(e) => updateFormData("weeksWorked", e.target.value)}
              placeholder="e.g., 4"
              className="mt-2"
            />
          </div>
        </div>

        {/* Expense Inputs */}
        <div className="mb-4">
          <Label className="font-medium">Expenses</Label>
          <div className="flex gap-2 mt-2">
            <Input
              type="text"
              placeholder="Expense name (e.g., Rent)"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              className="flex-grow"
            />
            <Input
              type="number"
              placeholder="Amount"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
              className="w-32"
            />
            <Button
              onClick={() => {
                addExpense(expenseName, expenseAmount);
                setExpenseName("");
                setExpenseAmount("");
              }}
            >
              Add
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
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Percentage */}
        <div className="mb-4">
          <Label className="font-medium">Additional Percentage</Label>
          <Input
            type="number"
            value={formData.additionalPercentage}
            onChange={(e) => updateFormData("additionalPercentage", e.target.value)}
            placeholder="e.g., 25"
            className="mt-2"
          />
        </div>

        {/* Calculate Button */}
        <Button className="w-full" onClick={calculate}>
          Calculate
        </Button>
        <Button
          variant="secondary"
          className="w-full mt-4"
          onClick={() => {
            localStorage.removeItem("calculationResults"); // Borrar resultados guardados
            window.location.reload(); // Recargar para reiniciar el estado
          }}
        >
          Clear Results
        </Button>


        {/* Results */}
        <ResultsView results={results} />
      </CardContent>
    </Card>
  );
}
