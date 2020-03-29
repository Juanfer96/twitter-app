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
  notscrolly = true;
  initialTimeLineTweets = 50; //the initial tweets that are going to we displayed
  index = 1; //the index used to keep displaying tweets in the timeline
  cont: number;

  getTweetsTimeLine(): void {
    this.ts.getTweets(this.initialTimeLineTweets).subscribe(Tweets => {
      this.Tweets = Tweets;
    });
  }

  onScroll() {
    console.log("scrolled");

    if (this.notscrolly) {
      this.notscrolly = false;
      this.index++;
      this.cont = this.initialTimeLineTweets * this.index;
      this.addNewTeetsTimeLine(this.cont);
      console.log("Tweets on screen" + this.cont);
    }
  }

  addNewTeetsTimeLine(count: number) {
    this.ts.getTweets(count).subscribe(Tweets => {
      this.Tweets = Tweets;
      this.notscrolly = true;
    });
  }

  ngOnInit(): void {
    this.getTweetsTimeLine();
  }
}
