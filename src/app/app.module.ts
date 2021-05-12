import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ContainerModule } from "./layouts/container/container.module";
import { RouterModule } from "@angular/router";
import { AppRouting } from "./app.route";
import { ErrorComponent } from "./layouts/error/error.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(AppRouting),
    ContainerModule,
  ],
  declarations: [AppComponent, ErrorComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
