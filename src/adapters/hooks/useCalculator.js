import { useState, useEffect } from "react";
import { calculatePrice } from "@/core/calculator/use-cases/calculatePrice";

export function useCalculator() {
  // Inicializar el estado `formData` desde localStorage o con valores por defecto
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("calculatorFormData"); // Intentar obtener datos guardados
    return savedData
      ? JSON.parse(savedData) // Si hay datos guardados, parsearlos y usarlos
      : {
        salary: "",
        expenses: [],
        dailyHours: "",
        workDaysPerWeek: "",
        weeksWorked: "",
        additionalPercentage: "",
      };
  });

  const [results, setResults] = useState(() => {
    const savedResults = localStorage.getItem("calculationResults"); // Intentar obtener resultados guardados
    return savedResults ? JSON.parse(savedResults) : null; // Si hay resultados guardados, parsearlos
  });

  const [error, setError] = useState(null); // Para manejar errores

  // Guardar `formData` en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("calculatorFormData", JSON.stringify(formData)); // Convertir `formData` a string JSON y guardarlo
  }, [formData]); // Ejecutar efecto cuando `formData` cambie

  // Guardar `results` en localStorage cada vez que cambie
  useEffect(() => {
    if (results) {
      localStorage.setItem("calculationResults", JSON.stringify(results)); // Convertir `results` a string JSON y guardarlo
    }
  }, [results]); // Ejecutar efecto cuando `results` cambie

  // Actualiza los datos del formulario
  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Agrega un nuevo gasto a la lista
  const addExpense = (name, amount) => {
    if (!name || amount <= 0) {
      setError("Expense name must be non-empty, and amount must be greater than 0.");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      expenses: [...prev.expenses, { name, amount: parseFloat(amount) }],
    }));
    setError(null); // Limpia el error si se agrega correctamente
  };

  // Elimina un gasto de la lista
  const removeExpense = (index) => {
    setFormData((prev) => ({
      ...prev,
      expenses: prev.expenses.filter((_, i) => i !== index),
    }));
  };

  // Calcula los resultados
  const calculate = () => {
    try {
      const input = {
        salary: parseFloat(formData.salary),
        expenses: formData.expenses,
        dailyHours: parseFloat(formData.dailyHours),
        workDaysPerWeek: parseFloat(formData.workDaysPerWeek),
        weeksWorked: parseFloat(formData.weeksWorked),
        additionalPercentage: parseFloat(formData.additionalPercentage),
      };

      const calculationResults = calculatePrice(input);
      setResults(calculationResults); // Guardar los resultados en el estado
      setError(null); // Limpiar errores si el cálculo fue exitoso
    } catch (err) {
      setError(err.message);
      setResults(null); // Limpiar resultados si hay un error
    }
  };

  return {
    formData,
    results,
    error,
    updateFormData,
    addExpense,
    removeExpense,
    calculate,
  };
}
