import { Component, OnInit } from "@angular/core";
import { ITimeLineaConfiguration } from "src/app/interfaces/timeLineConfigurationInterface";

@Component({
  selector: "app-settings-page",
  templateUrl: "./settings-page.component.html",
  styleUrls: ["./settings-page.component.css"]
})
export class SettingsPageComponent implements OnInit {
  timeLineSetting: ITimeLineaConfiguration;

  constructor() {
    this.timeLineSetting = {
      hideAccountsNotVerified: JSON.parse(localStorage.getItem("verified"))
    };
  }

  ngOnInit(): void {
    console.log(this.timeLineSetting);
    localStorage.setItem("verified", "true");
  }
}
