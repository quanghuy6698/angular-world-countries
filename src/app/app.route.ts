import { Routes } from "@angular/router";
import { ErrorComponent } from "./layouts/error/error.component";

export const AppRouting: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./layouts/container/container.module").then(
        (m) => m.ContainerModule
      ),
  },
  {
    path: "error",
    component: ErrorComponent,
  },
  {
    path: "**",
    redirectTo: "/error",
  },
];
