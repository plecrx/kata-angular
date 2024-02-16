import { Routes } from "@angular/router";

import {
  HomeComponent,
  NotFoundComponent,
  ProjectComponent,
  SummaryComponent,
  PersonalInfoComponent,
} from "./pages";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "personal-info", component: PersonalInfoComponent },
  { path: "project", component: ProjectComponent },
  { path: "summary", component: SummaryComponent },
  { path: "**", component: NotFoundComponent },
];
