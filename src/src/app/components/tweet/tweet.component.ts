import { Component, OnInit, Input } from "@angular/core";
import { ITweet } from "src/app/interfaces/tweetInterface";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: "app-tweet",
  templateUrl: "./tweet.component.html",
  styleUrls: ["./tweet.component.css"]
})
export class TweetComponent implements OnInit {
  @Input() Tweets: ITweet[];
  faHeart = faHeart;
  faRetweet = faRetweet;
  constructor() {}

  ngOnInit(): void {}
}
