import { Component, OnInit } from "@angular/core";
import { TweetServiceService } from "src/app/services/tweet-service.service";
import { ITweet } from "src/app/interfaces/tweetInterface";
import { Router } from '@angular/router';

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  constructor(public ts: TweetServiceService) {}
  
  Tweets: ITweet[];
  
  /*tweetSelected: ITweet;
  private router: Router;

  selecc(tweet: ITweet){
    this.tweetSelected = tweet; 
    this.router.navigateByUrl("/TweetDetail/"); 
  }*/

  getTweetsTimeLine(): void {
    this.ts.getTweets().subscribe(Tweets => {
      this.Tweets = Tweets;
    });
  }

  ngOnInit(): void {
    this.getTweetsTimeLine();
  }
}
