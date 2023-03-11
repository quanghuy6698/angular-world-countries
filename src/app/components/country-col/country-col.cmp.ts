import { Component, Input } from "@angular/core";

@Component({
  selector: "country-col-cmp",
  templateUrl: "./country-col.cmp.html",
  styleUrls: ["./country-col.cmp.css"],
})
export class CountryColCmp {
  @Input() countryLst: any;
}
