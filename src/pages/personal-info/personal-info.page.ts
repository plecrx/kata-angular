import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { FormDataService } from "../../services/form-data.service";

@Component({
  selector: "app-personal-info",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: "./personal-info.page.html",
})
export class PersonalInfoPageComponent {
  civilityOptions: string[] = ["Mlle", "Madame", "Monsieur"];
  constructor(
    private router: Router,
    private formDataService: FormDataService,
  ) {}

  isInvalid(fieldName: string): boolean {
    const control = this.getFormData().get(fieldName);

    return !!(control?.invalid && (control.dirty || control.touched));
  }

  getErrorMessage(fieldName: string): string {
    const field = this.getFormData().get(fieldName);
    if (field?.hasError("required")) {
      return `Le champ ${fieldName} est requis.`;
    }

    return "";
  }

  navigateToHomePage(): void {
    this.router.navigate(["home"]);
  }

  handleNextPageClick(): void {
    const formData = this.getFormData();
    if (!formData.valid) {
      return;
    }
    this.navigateToProjectPage();
  }

  navigateToProjectPage(): void {
    this.saveForm();
    this.router.navigate(["project"]);
  }

  protected getFormData(): FormGroup {
    return this.formDataService.getForm();
  }

  private saveForm(): void {
    const formData = this.formDataService.getForm().value;
    this.formDataService.saveFormData(formData);
  }
}
