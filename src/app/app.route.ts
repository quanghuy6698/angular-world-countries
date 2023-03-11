import { Routes } from "@angular/router";
import { ErrorPage } from "./pages/error/error.page";

export const AppRouting: Routes = [
  {
    path: "",
    loadChildren: () => import("./pages/home/home.module").then((mdl) => mdl.HomeModule),
  },
  {
    path: "error",
    component: ErrorPage,
  },
  {
    path: "**",
    redirectTo: "/error",
  },
];
