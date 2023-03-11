import { Component, OnInit } from "@angular/core";
import * as data from "src/assets/data/json/worlds.json";
import { REGIONS } from "src/app/constants/regions.constant";

@Component({
  selector: "home-page",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.css"],
})
export class HomePage implements OnInit {
  allCountry = data.worlds;
  countryDisplayLst: any;
  regions = REGIONS;
  subregions: any;

  countryCol1: any;
  countryCol2: any;
  countryCol3: any;

  ngOnInit() {
    this.allCountry.forEach((country) => {
      country.flag = "/assets/data/flags/16x16/" + country.alpha2Code.toLowerCase() + ".png";
    });
    this.countryDisplayLst = this.allCountry;
    this.subregions = this.regions[0].subregions;
    this.countryDisplayLst = this.allCountry.filter((country) => country.region == this.regions[0].code);
    this.splitCountryCol();
  }

  regionFilter(event: any) {
    const regionCode = event.target.value;
    console.log(regionCode);
    this.subregions = this.regions.find((region) => region.code == regionCode)?.subregions;
    console.log(this.subregions);
    this.countryDisplayLst = this.allCountry.filter((country) => country.region == regionCode);
    this.splitCountryCol();
  }

  subregionFilter(event: any) {
    const subregionCode = event.target.value;
    this.countryDisplayLst = this.allCountry.filter((country) => country.subregion == subregionCode);
    this.splitCountryCol();
  }

  splitCountryCol() {
    let len = this.countryDisplayLst.length;
    this.countryCol1 = this.countryDisplayLst.slice(0, len / 3);
    this.countryCol2 = this.countryDisplayLst.slice(len / 3, (2 * len) / 3);
    this.countryCol3 = this.countryDisplayLst.slice((2 * len) / 3, len);
  }
}
