import { Component } from "@angular/core";
import * as data from "src/assets/data/json/worlds.json";

@Component({
  selector: "container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.css"],
})
export class ContainerComponent {
  countries = data;

  // Scroll to top
  toTop() {
    // For Safari
    document.body.scrollTop = 0;
    // For Chrome, Firefox, IE and Opera
    document.documentElement.scrollTop = 0;
  }
}
