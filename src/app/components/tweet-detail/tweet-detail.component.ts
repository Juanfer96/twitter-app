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

      
  constructor(
    private http: HttpClient, public ts: TweetServiceService, private route: ActivatedRoute) { }

  public tweetId: string;
    Tweet: ITweet;

  /*getTweetById(): void {
    this.ts.getTweet(this.tweetId).subscribe(Tweet => {
      this.tweet = Tweet;
      console.log(JSON.stringify(this.tweet));
      });
  }*/
  getId(): void{
    let id = this.route.snapshot.paramMap.get("id")
    this.tweetId = id;
    console.log(id);
    console.log(id.length);
    
    };


    getprueba() {
      return {id: 7189941846000,
        created_at: "Fri Sep 04 05:24:33 +0000 2009",
      
        user: {
          name: "Boing Boing",
          screen_name: "BoingBoing",
          profile_image_url: "http://pbs.twimg.com/profile_images/616924998226153472/0EfZYjr2_normal.png",
        },
      
        text: "RT @MisterNo_: Yo viendo como el mundo se esta yendo a la mierda https://t.co/R6XteGytVA",
        entities:{
          media:{
        media_url: "http://pbs.twimg.com/media/DglG_r-UYAER3X4.jpg"
        },},
        retweet_count: 300,
        favorite_count: 200,
        favorited: true,
        retweeted: true};
    }


  ngOnInit(): void {
    
    this.getId();
    this.ts.getIdTweet(this.tweetId)
    .subscribe( data => {
      this.Tweet = data.statuses[0];

      console.log(this.Tweet);
      console.log(data);

      

      })
    /*
    this.tweet=this.getprueba();*/
  }
} 
      

