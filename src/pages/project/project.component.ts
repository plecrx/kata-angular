import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { FormDataService } from "../../services/form-data.service";

@Component({
  selector: "app-project",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: "./project.component.html",
})
export class ProjectComponent {
  constructor(
    private router: Router,
    private formDataService: FormDataService,
  ) {}

  navigateToSummaryPage() {
    this.router.navigate(["summary"]);
  }

  navigateToPersonalInfoPage() {
    this.saveForm();
    this.router.navigate(["personal-info"]);
  }

  private saveForm() {
    const formData = this.formDataService.getForm().value;
    this.formDataService.getForm().patchValue(formData);
  }
}
