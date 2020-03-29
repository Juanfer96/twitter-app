import { Component, OnInit } from '@angular/core';
import { HomePageComponent } from './../home-page/home-page.component';
import { ActivatedRoute } from '@angular/router';
import { ITweet } from './../../interfaces/tweetInterface';

@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.css']
})
export class TweetDetailComponent implements OnInit {

  tt: ITweet;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.tt = this.activeRoute.snapshot.data.id;
  }

}
