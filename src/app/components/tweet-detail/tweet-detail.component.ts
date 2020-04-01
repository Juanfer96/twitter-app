import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ITweet } from "./../../interfaces/tweetInterface";
import { TweetServiceService } from "src/app/services/tweet-service.service";


@Component({
  selector: "app-tweet-detail",
  templateUrl: "./tweet-detail.component.html",
  styleUrls: ["./tweet-detail.component.css"]
})
export class TweetDetailComponent implements OnInit {
  constructor(
    public ts: TweetServiceService,
    private route: ActivatedRoute
  ) {}

  public tweetId: string;
  tweet : ITweet;

  getId() {
    return this.route.snapshot.paramMap.get("id_str");
  }

  ngOnInit(): void {
    this.tweetId = this.getId();

    this.ts.getIdTweet(this.tweetId)
    .subscribe(data => {
      this.tweet = data;
    });
  }
}
