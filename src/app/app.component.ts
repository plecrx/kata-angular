import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    return;
  }
}
