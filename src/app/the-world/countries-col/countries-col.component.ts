import { Component, Input } from "@angular/core";
@Component({
  selector: "countries-col",
  templateUrl: "./countries-col.component.html",
  styleUrls: ["./countries-col.component.css"],
})
export class CountriesColComponent {
  @Input() countries: any;
}
