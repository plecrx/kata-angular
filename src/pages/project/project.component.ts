import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-project",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: "./project.component.html",
})
export class ProjectComponent {
  constructor(private router: Router) {}
}
