import { Component, OnInit, Input } from "@angular/core";
import { ITweet } from "src/app/interfaces/tweetInterface";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-tweet",
  templateUrl: "./tweet.component.html",
  styleUrls: ["./tweet.component.css"]
})
export class TweetComponent implements OnInit {
  @Input() Tweets: ITweet[];
  faHeart = faHeart;
  faRetweet = faRetweet;
  fasHeart = fasHeart;
  faCheck = faCheck;
  tweet: any;

  clickfav(tweet: { favorited: boolean; favorite_count: number }) {
    if (tweet.favorited) {
      tweet.favorited = false;
      tweet.favorite_count -= 1;
    } else {
      tweet.favorite_count += 1;
      tweet.favorited = true;
    }
  }

  clickReTweet(tweet: { retweeted: boolean; retweet_count: number }) {
    if (tweet.retweeted) {
      tweet.retweeted = false;
      tweet.retweet_count -= 1;
    } else {
      tweet.retweet_count += 1;
      tweet.retweeted = true;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}