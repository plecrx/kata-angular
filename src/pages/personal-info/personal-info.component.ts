import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { FormDataService } from "../../services/form-data.service";

@Component({
  selector: "app-personal-info",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: "./personal-info.component.html",
})
export class PersonalInfoComponent {
  constructor(
    private router: Router,
    private formDataService: FormDataService,
  ) {}

  navigateToHomePage() {
    this.router.navigate(["home"]);
  }

  navigateToProjectPage() {
    this.saveForm();
    this.router.navigate(["project"]);
  }

  private saveForm() {
    const formData = this.formDataService.getForm().value;
    this.formDataService.getForm().patchValue(formData);
  }
}
