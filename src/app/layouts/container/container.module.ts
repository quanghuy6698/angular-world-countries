import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ContainerRouter } from "./container.route";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CountryComponent } from "src/app/the-world/country/country.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ContainerRouter)],
  declarations: [CountryComponent, HeaderComponent, FooterComponent],
  exports: [CountryComponent, HeaderComponent, FooterComponent],
})
export class ContainerModule {}
