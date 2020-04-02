import { Component, OnInit } from "@angular/core";
import { ITimeLineaConfiguration } from "src/app/interfaces/timeLineConfigurationInterface";
import { TweetServiceService } from "src/app/services/tweet-service.service";

@Component({
  selector: "app-settings-page",
  templateUrl: "./settings-page.component.html",
  styleUrls: ["./settings-page.component.css"]
})
export class SettingsPageComponent implements OnInit {
  timeLineSetting: ITimeLineaConfiguration;

  constructor(public ts: TweetServiceService) {}

  ngOnInit(): void {
    this.timeLineSetting = this.ts.getRealTimeConfiguration();
    console.log(this.timeLineSetting);
  }
}
