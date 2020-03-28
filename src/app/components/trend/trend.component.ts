import { Component, OnInit } from '@angular/core';
import { ITrend } from '../../interfaces/trendInterface'
import { TrendServiceService } from '../../services/trend-service.service'

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css']
})
export class TrendComponent implements OnInit {
  trends: ITrend[];
  cont :number =0;

  constructor(private trendService: TrendServiceService ) { }

  ngOnInit(): void {
    this.trendService.getTrends().
      subscribe( data => this.trends= data[0].trends )
  }


}

