import { Routes } from "@angular/router";
import { ContainerComponent } from "./layouts/container/container.component";
import { ErrorComponent } from "./layouts/error/error.component";

export const AppRoutes: Routes = [
  {
    path: "",
    component: ContainerComponent,
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
