import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ContainerRouter } from "./container.route";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CountryComponent } from "src/app/the-world/country/country.component";
import { CommonModule } from "@angular/common";
import { ContainerComponent } from "./container.component";
import { CountriesColComponent } from "src/app/the-world/countries-col/countries-col.component";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ContainerRouter)],
  declarations: [
    ContainerComponent,
    CountryComponent,
    CountriesColComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    ContainerComponent,
    CountryComponent,
    CountriesColComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class ContainerModule {}
