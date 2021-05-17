import { Component, OnInit } from "@angular/core";
import * as data from "src/assets/data/json/worlds.json";
import { REGIONS } from "src/app/shared/constant/regions.constant";

@Component({
  selector: "container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.css"],
})
export class ContainerComponent implements OnInit {
  countries = data.worlds;
  countriesDisplay: any;
  regions = REGIONS;
  subregions: any;

  countriesCol1: any;
  countriesCol2: any;
  countriesCol3: any;

  ngOnInit() {
    this.countries.forEach((country) => {
      country.flag =
        "/assets/data/flags/16x16/" + country.alpha2Code.toLowerCase() + ".png";
    });
    this.countriesDisplay = this.countries;
    this.subregions = this.regions[0].subregions;
    this.countriesDisplay = this.countries.filter(
      (country) => country.region == this.regions[0].code
    );
    this.splitCountriesCol();
  }

  regionFilter(event: any) {
    const regionCode = event.target.value;
    console.log(regionCode);
    this.subregions = this.regions.find(
      (region) => region.code == regionCode
    )?.subregions;
    console.log(this.subregions);
    this.countriesDisplay = this.countries.filter(
      (country) => country.region == regionCode
    );
    this.splitCountriesCol();
  }

  subregionFilter(event: any) {
    const subregionCode = event.target.value;
    this.countriesDisplay = this.countries.filter(
      (country) => country.subregion == subregionCode
    );
    this.splitCountriesCol();
  }

  splitCountriesCol() {
    let len = this.countriesDisplay.length;
    this.countriesCol1 = this.countriesDisplay.slice(0, len / 3);
    this.countriesCol2 = this.countriesDisplay.slice(len / 3, (2 * len) / 3);
    this.countriesCol3 = this.countriesDisplay.slice((2 * len) / 3, len);
  }
}
