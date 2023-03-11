import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppCmp } from "./app.cmp";
import { RouterModule } from "@angular/router";
import { AppRouting } from "./app.route";
import { CommonModule } from "@angular/common";
import { ErrorPage } from "./pages/error/error.page";

@NgModule({
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(AppRouting)],
  declarations: [AppCmp, ErrorPage],
  providers: [],
  bootstrap: [AppCmp],
})
export class AppModule {}
