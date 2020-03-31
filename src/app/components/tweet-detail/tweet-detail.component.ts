import { Component, OnInit } from '@angular/core';
import { HomePageComponent } from './../home-page/home-page.component';
import { ActivatedRoute } from '@angular/router';
import { ITweet } from './../../interfaces/tweetInterface';
import { TweetServiceService } from "src/app/services/tweet-service.service";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";


@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.css']
})
export class TweetDetailComponent implements OnInit {

  tt: ITweet;

    
  constructor(private http: HttpClient, public ts: TweetServiceService, private route: ActivatedRoute) { }

  public tweetId: number;
   tweet: ITweet;

  getTweetById(): void {
    this.ts.getTweet(this.tweetId).subscribe(Tweet => {
      this.tweet = Tweet;
      console.log(JSON.stringify(this.tweet));
      });
  }
  getId(): void{
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.tweetId = id;
    };


  ngOnInit(): void {
      this.getId();
      this.getTweetById();
      console.log(this.tweet);
      console.log(this.tweetId);
         
    }

  } 
      

