import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
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
export class SummaryComponent {
  formData: EffyFormData = {} as EffyFormData;
  results: CalculationResult = {} as CalculationResult;

  constructor(
    private router: Router,
    private formDataService: FormDataService,
    private calculatorService: CalculatorService,
  ) {}

  ngOnInit() {
    this.formData = this.formDataService.getForm().value;
    this.results = this.calculatorService.calculateResult(this.formData);
  }

  navigateToPersonalInfoPage() {
    this.router.navigate(["personal-info"]);
  }
}
