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
  templateUrl: "./project.component.html",
})
export class ProjectComponent {
  constructor(
    private router: Router,
    private formDataService: FormDataService,
  ) {}

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
