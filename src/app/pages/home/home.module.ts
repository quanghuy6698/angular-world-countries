import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CountryCmp } from "src/app/components/country/country.cmp";
import { CountryColCmp } from "src/app/components/country-col/country-col.cmp";
import { FooterCmp } from "src/app/components/footer/footer.cmp";
import { HeaderCmp } from "src/app/components/header/header.cmp";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./home.page";

export const HomeRouting: Routes = [
  {
    path: "",
    component: HomePage,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(HomeRouting)],
  declarations: [HomePage, CountryCmp, CountryColCmp, HeaderCmp, FooterCmp],
  exports: [HomePage, CountryCmp, CountryColCmp, HeaderCmp, FooterCmp],
})
export class HomeModule {}
