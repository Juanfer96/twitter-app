import { Component, OnInit, Input } from "@angular/core";
import { ITweet } from "src/app/interfaces/tweetInterface";
@Component({
  selector: "app-tweet",
  templateUrl: "./tweet.component.html",
  styleUrls: ["./tweet.component.css"]
})
export class TweetComponent implements OnInit {
  @Input() Tweets: ITweet[];
  constructor() {}

  ngOnInit(): void {}
}
