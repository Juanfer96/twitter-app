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
<<<<<<< HEAD
  searching :boolean;

  notscrolly :boolean = true;
  allTweetsLoaded :boolean = false;
  initialTimeLineTweets :number = 50; //the initial tweets that are going to we displayed
  index :number = 1; //the index used to keep displaying tweets in the timeline
=======
  searching :boolean =false;

  notscrolly :boolean = true;
  allTweetsLoaded :boolean = false;
  initialTimeLineTweets :number = 10; //the initial tweets that are going to we displayed
  index :number = 10; //the index used to keep displaying tweets in the timeline
>>>>>>> 02c86123aaff702f9c1dad109e193fd616e2199f
  cont :number; //used to count the tweets on the timeline

  constructor(
     public ts: TweetServiceService,
     private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
  }

  showSearchResults() :void{
<<<<<<< HEAD
    console.log(this.searchText);
=======
>>>>>>> 02c86123aaff702f9c1dad109e193fd616e2199f
    //To not start an empty search with 3 blanks
    if(this.searchText=== ' '){
      this.searchText = '';
    }
    //Only start searching with 3 characters
    if (this.searchText.length >= 3) {
<<<<<<< HEAD
      this.getTweets();
=======
      this.getTweets(this.initialTimeLineTweets);
>>>>>>> 02c86123aaff702f9c1dad109e193fd616e2199f
      this.searching =true;
    } else {
      this.searching = false;
    }
  }
  

<<<<<<< HEAD
  getTweets():void {
    this.ts.getSearchTweets(this.searchText)
=======
  getTweets(count :number):void {
    this.ts.getSearchTweets(this.searchText,count)
>>>>>>> 02c86123aaff702f9c1dad109e193fd616e2199f
    .subscribe( data => {
      this.tweets = data.statuses;
    })
  }

  onScroll() {
    this.spinner.show(); //shows the spinner while the tweets are loading
<<<<<<< HEAD
    if (this.cont >= 200) {
=======
    if (this.cont >= 100) {
>>>>>>> 02c86123aaff702f9c1dad109e193fd616e2199f
      //when all the maximum number of tweets are loaded,a message is displayed in the html of the component
      this.allTweetsLoaded = true;
    }

    if (this.notscrolly) {
      this.notscrolly = false;
<<<<<<< HEAD
      this.index++;
      this.cont = this.initialTimeLineTweets * this.index;
=======
      this.cont = this.initialTimeLineTweets + this.index;
      this.index = this.index+10;
>>>>>>> 02c86123aaff702f9c1dad109e193fd616e2199f
      this.addNewTeetsTimeLine(this.cont);
    }
  }

  addNewTeetsTimeLine(count: number) {
<<<<<<< HEAD
    this.ts.getTweets(count).subscribe(tweets => {
      this.tweets = tweets;
      this.notscrolly = true;
      this.spinner.hide(); //hides the spinner when the time line is loaded
    });
=======
    this.getTweets(count);   
    this.notscrolly = true;
    this.spinner.hide(); //hides the spinner when the time line is loaded
   
  }

  setSelectedTrend(trendName: string){
    trendName = trendName.slice(1);
    this.searchText= trendName;
    this.showSearchResults();
  }
  setQuicklySearch(search: string){
    this.searchText= search;
    this.showSearchResults();
>>>>>>> 02c86123aaff702f9c1dad109e193fd616e2199f
  }
}



