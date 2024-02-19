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
  formData: FormGroup;
  civilityOptions: string[] = ["Mlle", "Madame", "Monsieur"];
  constructor(
    private router: Router,
    private formDataService: FormDataService,
  ) {
    this.formData = this.getFormData();
  }

  isInvalid(fieldName: string): boolean {
    return this.formDataService.isInvalid(fieldName);
  }

  getErrorMessage(fieldName: string): string {
    return this.formDataService.getErrorMessage(fieldName);
  }

  navigateToHomePage(): void {
    this.router.navigate(["home"]);
  }

  handleNextPageClick(): void {
    if (!this.formData.valid) {
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
