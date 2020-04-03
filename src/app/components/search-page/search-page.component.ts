import { Component, OnInit } from "@angular/core";
import { TweetServiceService } from "src/app/services/tweet-service.service";
import { ITweet } from "src/app/interfaces/tweetInterface";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.css"]
})
export class SearchPageComponent implements OnInit {
  searchText: string;
  tweets: ITweet[];
  faSearch = faSearch;
  searching: boolean = false;

  notscrolly: boolean = true;
  allTweetsLoaded: boolean = false;
  initialTimeLineTweets: number = 10; //the initial tweets that are going to we displayed
  index: number = 10; //the index used to keep displaying tweets in the timeline
  cont: number; //used to count the tweets on the timeline

  constructor(
    public ts: TweetServiceService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  showSearchResults(): void {
    //To not start an empty search with 3 blanks
    if (this.searchText === "") {
      this.searchText = "";
      this.spinner.hide();
    }
    //Only start searching with 3 characters
    if (this.searchText.length >= 3) {
      this.getTweets(this.initialTimeLineTweets);
      this.searching = true;
      this.spinner.hide();
    } else {
      this.searching = false;
      this.spinner.show();
    }
  }

  getTweets(count: number): void {
    this.ts.getSearchTweets(this.searchText, count).subscribe(data => {
      this.tweets = data.statuses;
    });
  }

  onScroll() {
  
    if (this.notscrolly) {
      this.spinner.show(); //shows the spinner while the tweets are loading
      this.notscrolly = false;
      this.cont = this.initialTimeLineTweets + this.index;
      this.index = this.index + 10;
      this.addNewTeetsTimeLine(this.cont);
    }
  }

  addNewTeetsTimeLine(count: number) {
    this.getTweets(count);
    this.notscrolly = true;
    setTimeout(() => {
      this.spinner.hide();
    }, 2000); //hides the spinner when the time line is loaded, the setTimeout is used because the search was too fast,soo with that we can simulate more search time
  }

  setSelectedTrend(trendName: string) {
    if (trendName[0] == "#") {
      trendName = trendName.slice(1);
    }
    this.searchText = trendName;
    this.showSearchResults();
  }
  setQuicklySearch(search: string) {
    this.searchText = search;
    this.showSearchResults();
  }
}
