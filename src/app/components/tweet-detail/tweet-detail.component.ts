import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ITweet } from "./../../interfaces/tweetInterface";
import { TweetServiceService } from "src/app/services/tweet-service.service";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Location } from "@angular/common";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-tweet-detail",
  templateUrl: "./tweet-detail.component.html",
  styleUrls: ["./tweet-detail.component.css"]
})
export class TweetDetailComponent implements OnInit {
  tweetId: string;
  tweet: ITweet;
  faArrowLeft = faArrowLeft;
  faHeart = faHeart;
  faRetweet = faRetweet;
  faComment = faComment;
  faCircle = faCircle;
  faCheck = faCheck;
  fasHeart = fasHeart;

  constructor(
    public ts: TweetServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  getId() {
    return this.route.snapshot.paramMap.get("id_str");
  }

  ngOnInit(): void {
    this.tweetId = this.getId();
    this.ts.getIdTweet(this.tweetId).subscribe(data => {
      this.tweet = data;
    });
  }

  goBack(): void {
    this.location.back();
  }

  clickReTweet() {
    if (this.tweet.retweeted) {
      this.tweet.retweeted = false;
      this.tweet.retweet_count -= 1;
    } else {
      this.tweet.retweet_count += 1;
      this.tweet.retweeted = true;
    }
  }

  clickfav() {
    if (this.tweet.favorited) {
      this.tweet.favorited = false;
      this.tweet.favorite_count -= 1;
    } else {
      this.tweet.favorite_count += 1;
      this.tweet.favorited = true;
    }
  }
}
