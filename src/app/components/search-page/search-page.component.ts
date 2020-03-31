import { Component, OnInit } from '@angular/core';
import { TweetServiceService } from "src/app/services/tweet-service.service";
import { ITweet } from 'src/app/interfaces/tweetInterface';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from "ngx-spinner";

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

  notscrolly :boolean = true;
  allTweetsLoaded :boolean = false;
  initialTimeLineTweets :number = 50; //the initial tweets that are going to we displayed
  index :number = 1; //the index used to keep displaying tweets in the timeline
  cont :number; //used to count the tweets on the timeline

  constructor(
     public ts: TweetServiceService,
     private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
  }

  showSearchResults() :void{
    console.log(this.searchText);
    //To not start an empty search with 3 blanks
    if(this.searchText=== ' '){
      this.searchText = '';
    }
    //Only start searching with 3 characters
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

  onScroll() {
    this.spinner.show(); //shows the spinner while the tweets are loading
    if (this.cont >= 200) {
      //when all the maximum number of tweets are loaded,a message is displayed in the html of the component
      this.allTweetsLoaded = true;
    }

    if (this.notscrolly) {
      this.notscrolly = false;
      this.index++;
      this.cont = this.initialTimeLineTweets * this.index;
      this.addNewTeetsTimeLine(this.cont);
    }
  }

  addNewTeetsTimeLine(count: number) {
    this.ts.getTweets(count).subscribe(tweets => {
      this.tweets = tweets;
      this.notscrolly = true;
      this.spinner.hide(); //hides the spinner when the time line is loaded
    });
  }
}



