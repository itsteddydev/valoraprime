import React from "react";

export default function ResultsView({ results }) {
  if (!results) {
    return null; // Si no hay resultados, no renderizamos nada
  }

  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Calculation Results</h2>

      <div className="mb-4">
        <p><strong>Monthly Expenses:</strong> ${results.monthlyExpenses.toFixed(2)}</p>
        <p><strong>Weekly Hours:</strong> {results.weeklyHours} hours</p>
      </div>

      <div className="mb-4">
        <p><strong>Price Without Additional:</strong> ${results.priceWithoutAdditional.toFixed(2)}</p>
        <p><strong>Final Price With Additional:</strong> ${results.finalPrice.toFixed(2)}</p>
      </div>

      <div className="mb-4">
        <p><strong>Total Salary Without Additional:</strong> ${results.totalSalaryWithoutAdditional.toFixed(2)}</p>
        <p><strong>Total Salary With Additional:</strong> ${results.totalSalaryWithAdditional.toFixed(2)}</p>
      </div>
    </div>
  );
}
