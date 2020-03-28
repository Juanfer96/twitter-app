import { Component, OnInit } from "@angular/core";
import { TweetServiceService } from "src/app/services/tweet-service.service";
import { ITweet } from "src/app/interfaces/tweetInterface";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  constructor(public ts: TweetServiceService) {}
  Tweets: ITweet[];

  getTweetsTimeLine(): void {
    this.ts.getTweets().subscribe(Tweets => {
      this.Tweets = Tweets;
    });
  }

  ngOnInit(): void {
    this.getTweetsTimeLine();
  }
}
