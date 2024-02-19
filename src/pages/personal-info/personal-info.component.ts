import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { FormDataService } from "../../services/form-data.service";

@Component({
  selector: "app-personal-info",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: "./personal-info.component.html",
})
export class PersonalInfoComponent {
  constructor(
    private router: Router,
    private formDataService: FormDataService,
  ) {}

  navigateToHomePage(): void {
    this.router.navigate(["home"]);
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
