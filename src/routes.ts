import { Routes } from "@angular/router";

import {
  HomeComponent,
  NotFoundComponent,
  ProjectPageComponent,
  SummaryPageComponent,
  PersonalInfoPageComponent,
} from "./pages";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "personal-info", component: PersonalInfoPageComponent },
  { path: "project", component: ProjectPageComponent },
  { path: "summary", component: SummaryPageComponent },
  { path: "**", component: NotFoundComponent },
];
