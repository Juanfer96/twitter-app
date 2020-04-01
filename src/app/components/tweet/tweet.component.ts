import { Component, OnInit, Input } from "@angular/core";
import { ITweet } from "src/app/interfaces/tweetInterface";
<<<<<<< HEAD

=======
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
>>>>>>> 02c86123aaff702f9c1dad109e193fd616e2199f
@Component({
  selector: "app-tweet",
  templateUrl: "./tweet.component.html",
  styleUrls: ["./tweet.component.css"]
})
export class TweetComponent implements OnInit {
  @Input() Tweets: ITweet[];
<<<<<<< HEAD
=======
  faHeart = faHeart;
  faRetweet = faRetweet;
>>>>>>> 02c86123aaff702f9c1dad109e193fd616e2199f
  constructor() {}

  ngOnInit(): void {}
}
