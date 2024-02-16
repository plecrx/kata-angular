import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-summary",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: "./summary.component.html",
})
export class SummaryComponent {
  constructor(private router: Router) {}
}
