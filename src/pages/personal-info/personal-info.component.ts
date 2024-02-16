import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-personal-info",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: "./personal-info.component.html",
})
export class PersonalInfoComponent {
  constructor(private router: Router) {}

  navigateToHomePage() {
    this.router.navigate(["home"]);
  }

  navigateToProjectPage() {
    this.router.navigate(["project"]);
  }
}
