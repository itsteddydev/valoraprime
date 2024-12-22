import { CalculationParams } from "../models/CalculationParams";

export function calculatePrice(data) {
  // Crear una instancia del modelo con los datos proporcionados
  const params = new CalculationParams(data);

  // Retornar un objeto con todos los resultados necesarios
  return {
    monthlyExpenses: params.monthlyExpenses,
    weeklyHours: params.weeklyHours,
    priceWithoutAdditional: params.priceWithoutAdditional,
    finalPrice: params.finalPrice,
    totalSalaryWithoutAdditional: params.totalSalaryWithoutAdditional,
    totalSalaryWithAdditional: params.totalSalaryWithAdditional,
  };
}
