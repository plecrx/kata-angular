import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToPersonalInfoPage() {
    this.router.navigate(["personal-info"]);
  }
}
