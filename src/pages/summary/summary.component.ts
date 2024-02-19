import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { AmountFormatService } from "../../services/amount-format.service";
import { CalculatorService } from "../../services/calculator.service";
import { FormDataService } from "../../services/form-data.service";
import { EffyFormData } from "../../types";
import { CalculationResult } from "../../types/calculation-result";

@Component({
  selector: "app-summary",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: "./summary.component.html",
})
export class SummaryComponent implements OnInit {
  formData: EffyFormData = {} as EffyFormData;
  results: CalculationResult = {} as CalculationResult;

  constructor(
    private router: Router,
    private formDataService: FormDataService,
    private calculatorService: CalculatorService,
    private amountFormatService: AmountFormatService,
  ) {}

  ngOnInit() {
    this.formData = this.formDataService.getForm().value;
    this.results = this.calculatorService.calculateResult(this.formData);
  }

  navigateToPersonalInfoPage() {
    this.resetForm();
    this.router.navigate(["personal-info"]);
  }

  resetForm() {
    this.formDataService.resetForm();
  }

  protected formatAmount(amount: number): string {
    return this.amountFormatService.formatAmount(amount);
  }
}
