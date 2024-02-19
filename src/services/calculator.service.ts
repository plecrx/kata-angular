import { Injectable } from "@angular/core";
import { EffyFormData } from "../types";
import { CalculationResult } from "../types/calculation-result";

const COST_PER_SQUARE_METER = 80;
const EFFY_COEFFICIENT = 0.75;
const INCOME_COEFFICIENT = 0.15;

@Injectable({ providedIn: "root" })
export class CalculatorService {
  calculateResult(formData: EffyFormData): CalculationResult {
    const projectCost = this.calculateProjectCost(formData.propertySize);
    const effyAmount = this.calculateEffyAmount(
      projectCost,
      formData.incomes,
      formData.nbPeople,
    );
    const isEligible = this.isEligible(effyAmount, formData.isOwner);

    return {
      projectCost,
      effyAmount,
      isEligible,
    };
  }

  private calculateProjectCost(propertySize: number): number {
    return propertySize * COST_PER_SQUARE_METER;
  }

  private calculateEffyAmount(
    projectCost: number,
    income: number,
    nbPeople: number,
  ): number {
    return (
      projectCost * EFFY_COEFFICIENT - (income / nbPeople) * INCOME_COEFFICIENT
    );
  }

  private isEligible(effyAmount: number, isOwner: boolean): boolean {
    return effyAmount > 0 && isOwner;
  }
}
