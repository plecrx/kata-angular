import { Injectable } from "@angular/core";
import { EffyFormData } from "../types";

const COST_PER_SQUARE_METER = 80;
const EFFY_COEFFICIENT = 0.75;
const INCOME_COEFFICIENT = 0.15;

interface CalculationResult {
  projectCost: number;
  effyAmount: number;
  isEligible: boolean;
}

@Injectable({ providedIn: "root" })
export class CalculatorService {
  calculateResult(formData: EffyFormData): CalculationResult {
    const projectCost = formData.propertySize * COST_PER_SQUARE_METER;
    const effyAmount =
      projectCost * EFFY_COEFFICIENT -
      (formData.income / formData.numPeople) * INCOME_COEFFICIENT;
    const isEligible = effyAmount > 0;

    return {
      projectCost,
      effyAmount: isEligible ? effyAmount : 0,
      isEligible,
    };
  }
}
