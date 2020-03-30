import { Component, OnInit } from '@angular/core';
import { TweetServiceService } from "src/app/services/tweet-service.service";
import { ITweet } from 'src/app/interfaces/tweetInterface';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  searchText : string;
  tweets :ITweet[]
  faSearch = faSearch;
  searching :boolean;

  constructor(
     public ts: TweetServiceService
  ) { }

  ngOnInit(): void {
  }

  showSearchResults() :void{
    console.log(this.searchText);
    if (this.searchText.length >= 3) {
      this.getTweets();
      this.searching =true;
    } else {
      this.searching = false;
    }
  }
  

  getTweets():void {
    this.ts.getSearchTweets(this.searchText)
    .subscribe( data => {
      this.tweets = data.statuses;
    })
  }

}
