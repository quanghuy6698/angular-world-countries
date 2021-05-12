import { Component, Input } from "@angular/core";
import ICountry from "src/app/shared/model/country.model";

@Component({
  selector: "country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.css"],
})
export class CountryComponent {
  @Input() country: ICountry;

  constructor() {
    this.country = {};
  }
}
