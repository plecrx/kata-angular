import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { FormDataService } from "../../services/form-data.service";

@Component({
  selector: "app-project",
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./project.page.html",
})
export class ProjectPageComponent {
  nbPeopleOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  formData: FormGroup;

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
  navigateToPersonalInfoPage() {
    this.saveForm();
    this.router.navigate(["personal-info"]);
  }

  navigateToSummaryPage() {
    this.router.navigate(["summary"]);
  }

  protected getFormData(): FormGroup {
    return this.formDataService.getForm();
  }

  private saveForm() {
    const formData = this.formDataService.getForm().value;
    this.formDataService.saveFormData(formData);
  }
}
