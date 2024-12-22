export class CalculationParams {
  constructor({ salary, expenses = [], dailyHours = 0, workDaysPerWeek = 0, weeksWorked = 0, additionalPercentage = 0 }) {
    this.salary = salary;//Sueldo base
    this.expenses = expenses; // Lista de objetos con formato { name: string, amount: number }
    this.dailyHours = dailyHours; // Horas trabajadas por día
    this.workDaysPerWeek = workDaysPerWeek; // Días trabajados por semana
    this.weeksWorked = weeksWorked; // Semanas trabajadas al mes
    this.additionalPercentage = additionalPercentage; // Porcentaje adicional

    // Calculados automáticamente
    this.monthlyExpenses = this.calculateMonthlyExpenses();
    this.weeklyHours = this.calculateWeeklyHours();
    this.priceWithoutAdditional = this.calculatePriceWithoutAdditional();
    this.finalPrice = this.calculateFinalPrice();

    // Nuevos cálculos
    this.totalSalaryWithoutAdditional = this.calculateTotalSalaryWithoutAdditional();
    this.totalSalaryWithAdditional = this.calculateTotalSalaryWithAdditional();

    this.validate();
  }

  // Valida los datos de entrada
  validate() {
    if (!this.salary || this.salary <= 0) {
      throw new Error("The salary must be greater than 0.");
    }
    if (this.dailyHours < 0 || this.workDaysPerWeek < 0 || this.weeksWorked < 0) {
      throw new Error("Daily hours, work days per week, and weeks worked must be non-negative.");
    }
    if (this.additionalPercentage < 0) {
      throw new Error("The additional percentage cannot be negative.");
    }
  }

  // Calcula el total de gastos mensuales
  calculateMonthlyExpenses() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  // Calcula las horas trabajadas semanalmente
  calculateWeeklyHours() {
    return this.dailyHours * this.workDaysPerWeek * this.weeksWorked;
  }

  // Calcula el precio sin porcentaje adicional
  calculatePriceWithoutAdditional() {
    if (this.weeklyHours === 0) {
      throw new Error("Weekly hours must be greater than 0 to calculate the base price.");
    }
    return this.monthlyExpenses / this.weeklyHours;
  }

  // Calcula el precio final con porcentaje adicional
  calculateFinalPrice() {
    return this.priceWithoutAdditional * (1 + this.additionalPercentage / 100);
  }


  // Calcula el total salario mensual sin adicionales
  calculateTotalSalaryWithoutAdditional() {
    return this.priceWithoutAdditional * this.weeklyHours;
  }

  // Calcula el total salario mensual con adicionales
  calculateTotalSalaryWithAdditional() {
    return this.finalPrice * this.weeklyHours;
  }
}
