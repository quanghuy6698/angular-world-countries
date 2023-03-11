import { Component, Input } from "@angular/core";
import ICountry from "src/app/models/country.model";

@Component({
  selector: "country-cmp",
  templateUrl: "./country.cmp.html",
  styleUrls: ["./country.cmp.css"],
})
export class CountryCmp {
  @Input() country: ICountry;

  constructor() {
    this.country = {};
  }
}
