import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ITrend } from "../../interfaces/trendInterface";
import { TrendServiceService } from "../../services/trend-service.service";

@Component({
  selector: "app-trend",
  templateUrl: "./trend.component.html",
  styleUrls: ["./trend.component.css"]
})
export class TrendComponent implements OnInit {
  trends: ITrend[];
  cont: number = 0;
  @Output() selectedTrend = new EventEmitter();

  constructor(private trendService: TrendServiceService) {}

  ngOnInit(): void {
    this.trendService.getTrends().subscribe(data => {
      this.trends = data[0].trends;
      this.generateId();
    });
  }

  generateId(): void {
    let i = 1;
    this.trends.forEach(item => {
      item.id = i++;
    });
  }

  onSelectedTrend(trend) {
    this.selectedTrend.emit(trend.name);
  }
}
