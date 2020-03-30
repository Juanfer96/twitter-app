import { Component, OnInit } from "@angular/core";
import { TweetServiceService } from "src/app/services/tweet-service.service";
import { ITweet } from "src/app/interfaces/tweetInterface";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  constructor(
    public ts: TweetServiceService,
    private spinner: NgxSpinnerService
  ) {}
  Tweets: ITweet[];
  notscrolly = true;
  allTweetsLoaded = false;
  initialTimeLineTweets = 50; //the initial tweets that are going to we displayed
  index = 1; //the index used to keep displaying tweets in the timeline
  cont: number; //used to count the tweets on the timeline

  getTweetsTimeLine(): void {
    this.ts.getTweets(this.initialTimeLineTweets).subscribe(Tweets => {
      this.Tweets = Tweets;
    });
  }

  onScroll() {
    this.spinner.show(); //shows the spinner while the tweets are loading
    if (this.cont >= 200) {
      //when all the maximum number of tweets are loaded,a message is displayed in the html of the component
      this.allTweetsLoaded = true;
      console.log(this.allTweetsLoaded);
    }

    if (this.notscrolly) {
      this.notscrolly = false;
      this.index++;
      this.cont = this.initialTimeLineTweets * this.index;
      this.addNewTeetsTimeLine(this.cont);
    }
  }

  addNewTeetsTimeLine(count: number) {
    this.ts.getTweets(count).subscribe(Tweets => {
      this.Tweets = Tweets;
      this.notscrolly = true;
      this.spinner.hide(); //hides the spinner when the time line is loaded
    });
  }

  ngOnInit(): void {
    this.getTweetsTimeLine();
  }
}
